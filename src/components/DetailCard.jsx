import {useLazyQuery} from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import { ANIME_BY_ID} from "../GraphQL/index";
import Cards from "./Cards";
import Play from "./play";


function DetailCards() {
  
  const { id } = useParams();
  const [animeDetail, setAnimalDetail] = useState(undefined);
  const [getAnimeByID,] = useLazyQuery(ANIME_BY_ID, { variables: { id } });

  useEffect(() => {
    const cacheDatos = JSON.parse(sessionStorage.getItem("resultados"));
    setAnimalDetail(cacheDatos.find(item => item.id == id));
    if (animeDetail === undefined) {
      getAnimeByID()
        .then(resp => {
          console.log(resp.data.Media);
          sessionStorage.setItem("details", resp);
          setAnimalDetail(resp.data.Media);
        });
    }

  }, [id, getAnimeByID]);

  if (animeDetail === undefined) {
    return (<div><h1>Loading...</h1></div>);
  }

    return (
      <div className="grid grid-cols-3 gird-row-cols-3">
        <div className="col">
          <div>
            <img src={animeDetail.coverImage.medium} alt={animeDetail.title.english} />
          </div>
          <div className="flex flex-col">
            <span>Altenative title</span>
            {Object.entries(animeDetail.title).map(element => {
              if (element[0] !== '__typename') return <span className="capitalize">{element[0]} 	&rarr; {element[1]}</span>;
              return null;
            })}
          </div>
        </div>
        <div>
        body
        </div>
        <div>
        header
        </div>
      </div>
    );
  
}

{/* <Cards
  id={animeDetail.id}
  key={animeDetail.id}
  titles={animeDetail.title}
  descriptions={animeDetail.description}
  cover_image={animeDetail.coverImage.large}
  vieo={animeDetail.trailer}
  banner={animeDetail.bannerImage}
  start_date={animeDetail.startDate}
  end_date={animeDetail.endDate}
  geners={animeDetail.genres}
  type={animeDetail.type}
/>
{ animeDetail.trailer_url !== undefined ? <Play video={animeDetail.trailer_url} title={animeDetail.titles.en} banner={animeDetail.banner_image} /> : null } */}
export default DetailCards;