/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

import { ListCards } from "../components/listCards";
import MenuFiltro from "../components/navMenu/MenuFiltro";
import { ANIME_TRENDINGS_EMISSION } from "../GraphQL/index";

function Home() {



  const { loading, error, data } = useQuery(ANIME_TRENDINGS_EMISSION);
  
  useEffect(() => {
    if (data) {
      sessionStorage.setItem("tredings", JSON.stringify(data.Page.media));
    }
  }, [data]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <MenuFiltro />
      <ListCards data={data.Page.media}/>
    </>
  );
}

export default Home;