import {useLazyQuery} from "@apollo/client";
import { useState, useEffect, useContext } from "react";
import { Outlet, useParams, useSearchParams } from "react-router-dom";


import { ResultFilter } from "../context/SearchContext";
import { SEARCH_ANIME } from "../GraphQL/index";


function Result() {
  const { id,page } = useParams() || " ";
  const { dispatch } = useContext(ResultFilter);
  const [searchParams, ] = useSearchParams();

  function formatVaribale(page:string = "1") {
    return id === undefined ? {
      page: 1,
      perPage: 25,
      // @ts-ignore: Object is possibly 'null'.
      genreIn: typeof searchParams.get("gener") != null ? searchParams.get("gener").split(",") : null,
      statusIn: searchParams.get("status") ?? [
        "FINISHED",
        "RELEASING",
        "NOT_YET_RELEASED",
        "CANCELLED",
        "HIATUS"
      ],
      formatIn: searchParams.get("format") ?? [
        "TV",
        "TV_SHORT",
        "MOVIE",
        "SPECIAL",
        "OVA",
        "ONA",
        "MUSIC",
        "MANGA",
        "NOVEL",
        "ONE_SHOT"
      ],
      startDateGreater: searchParams.get("dateStar") ?? "2022",
      endDateLesser: searchParams.get("dateEnd") ?? "2022",
    } : {
        page: page ?? 1,
        perPage: 10,
        search: id
    };
  }

  const [getResult, { loading }] = useLazyQuery(SEARCH_ANIME, { variables: formatVaribale(page) });

  const [datos, setdatos] = useState([]);
  
  useEffect(() => {
    getResult().then(resp => {
        const response = resp.data.Page.media;
        dispatch({ type: "updateDate", payload: { data: response, id } });
        setdatos(response);
      });
    
  }, [dispatch, getResult, id,page]);

  if (loading) {
    return <div>Loading...</div>;
  }

  
  return (
    <>
      <div>result {searchParams.get("gener")}</div>
      {datos ? <Outlet context={{ data:datos}} /> : "No hay datos" }
    </>
  );
}

export default Result;