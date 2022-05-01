import {useLazyQuery} from "@apollo/client";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { SEARCH_ANIME } from "../GraphQL/index";
import { ListCards } from "./listCards";

function Result() {
  const { id } = useParams() || " ";

  const [getResult,{loading}] = useLazyQuery(SEARCH_ANIME,{variables:{page:1,perPage:25,search:id}});

  const [datos, setdatos] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem("resultados") !== null) {
      setdatos(JSON.parse((sessionStorage.getItem("resultados"))));
    }
    getResult().then(resp => {
      setdatos(resp.data.Page.media);
      sessionStorage.setItem('resultados', JSON.stringify(resp.data.Page.media));
    });
  }, [ getResult, id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
    <div>result {id}</div>
      {datos ? <ListCards data={datos} /> : "No hay datos" }
    </>
  );
}

export default Result;