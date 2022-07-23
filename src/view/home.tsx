import { useQuery, useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import {Outlet } from 'react-router-dom'
import MenuFiltro from "../components/navMenu/MenuFiltro";
import { ANIME_TRENDINGS_EMISSION } from "../GraphQL/index";
import {useContext} from 'react'
import {trendingContextAnime} from '../context/index'

function Home() {

  const { dispatch, tredings } = useContext(trendingContextAnime)
  const { loading, error, data } = useQuery(ANIME_TRENDINGS_EMISSION, {
    variables: {
      page: tredings.page
    }
  });
  
  const [updateTrendings,] = useLazyQuery(ANIME_TRENDINGS_EMISSION)

  function updateTrending(pageProps: number) {
    updateTrendings({ variables: { page: pageProps } })
      .then(resp => {
        dispatch({ type: 'updateData', payload: { data: resp.data.Page.media, page: pageProps } })
      }).catch(err => {
      console.log(err)
    });
  }
  
  useEffect(() => {
    if (data) {
      dispatch({ type: 'updateData', payload: { data: data.Page.media, page: tredings.page } })
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
          <Outlet context={{ data: tredings.data, page: tredings.page, action: updateTrending }} />
        </section>
      </article>
    </>
  );
}

export default Home;