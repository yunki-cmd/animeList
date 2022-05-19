import {useLazyQuery} from "@apollo/client";
import { useState, useEffect, useContext } from "react";
import { useParams, useSearchParams } from "react-router-dom";


import { ResultFilter} from "../context/SearchContext";
import { SEARCH_ANIME } from "../GraphQL/index";
import { ListCards } from "./listCards";


function Result() {
  const { id } = useParams() || " ";

  const { dispatch } = useContext(ResultFilter);
  const { data, id: ID } = useContext(ResultFilter).state;
  const [searchParams, ] = useSearchParams();

  function formatVaribale() {
    return id === undefined ? {
      page: 1,
      perPage: 25,
      genreIn: searchParams.get("gener") !== null ? searchParams.get("gener").split(",") : null,
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
        page: 1,
        perPage: 25,
        search: id
    };
  }

  const [getResult, { loading }] = useLazyQuery(SEARCH_ANIME, { variables: formatVaribale() });

  const [datos, setdatos] = useState([]);
  
  useEffect(() => {
    getResult().then(resp => {
      console.log(resp);
        const response = resp.data.Page.media;
        dispatch({ type: "updateDate", payload: { data: response, id } });
        setdatos(response);
      });
    
  }, [dispatch, getResult, id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
      <div>result {searchParams.get("gener")}</div>
      {datos ? <ListCards data={datos} /> : "No hay datos" }
    </>
  );
}

export default Result;