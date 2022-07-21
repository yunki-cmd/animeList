/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import {Outlet,useParams } from 'react-router-dom'
import MenuFiltro from "../components/navMenu/MenuFiltro";
import { ANIME_TRENDINGS_EMISSION } from "../GraphQL/index";

function Home() {


  const {page} = useParams()
  const { loading, error, data } = useQuery(ANIME_TRENDINGS_EMISSION, {
    variables: {
      page: page == undefined ? 1 : page
  }});
  
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
      <article>
        <section>
          <Outlet context={{ data: data.Page.media, page}} />
        </section>
      </article>
    </>
  );
}

export default Home;