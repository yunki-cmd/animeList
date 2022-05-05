import { useQuery } from "@apollo/client";
import { useEffect } from "react";

import { ListCards } from "../components/listCards";
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
    <ListCards data={data.Page.media}/>
  );
}

export default Home;