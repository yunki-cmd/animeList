import {useLazyQuery} from "@apollo/client";
import { useEffect, useContext } from "react";
import { Outlet, useParams, useSearchParams } from "react-router-dom";


import { ResultFilter } from "../context/SearchContext";
import { SEARCH_ANIME } from "../GraphQL/index";


function Result() {
  const { id } = useParams() || " ";
  const { dispatch, state } = useContext(ResultFilter);
  const [searchParams, ] = useSearchParams();

  function formatVaribale(page:number = 1) {
    return id === undefined ? {
      page: page,
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
        page: page,
        perPage: 10,
        search: id
    };
  }

  const [getResult, { loading }] = useLazyQuery(SEARCH_ANIME, { variables: formatVaribale(state.page ?? 1) });
  
  useEffect(() => {
    if (id !== state.id) {      
      getResult().then(resp => {
        const response = resp.data.Page.media;
        console.log('llama?')
          dispatch({ type: "updateDate", payload: { data: response, id, page : 1  } });
        });
    }
  }, [id]);

  useEffect(() => {
      getResult().then(resp => {
        const response = resp.data.Page.media;
        dispatch({ type: "updateDate", payload: { data: response, id, page: 1 } });
      });
  }, []);

  const updateSearchPagination = (page: number) => {
    getResult({ variables: formatVaribale(page) })
      .then(resp => {
        const response = resp.data.Page.media;
        dispatch({ type: "updateDate", payload: { data: response, id, page} });
    })
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  
  return (
    <>
      <div>result {searchParams.get("gener")}</div>
      {state.data ? <Outlet context={{ data: state.data, action: updateSearchPagination, page:state.page }} /> : "No hay datos" }
    </>
  );
}

export default Result;