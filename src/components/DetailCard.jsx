import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { convertFecha } from "../utiles/utiles";
import Play from "./play";

function DetailCards() {
  
  const { id } = useParams();
  const [animeDetail, setAnimalDetail] = useState([]);

  useEffect(() => {
    const cacheDatos = JSON.parse(sessionStorage.getItem("resultados"));

    setAnimalDetail(cacheDatos.find(item => item.anilist_id == id));

  }, [id]);

  if (animeDetail.length === 0) {
    return (<div><h1>Loading...</h1></div>);
  }

    return (
      <div>

          <div className="max-w-lg h-auto my-5 break-inside-avoid bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col">
            <span className="m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{animeDetail.titles.en}</span>
            <div className="p-5">
              <div className="float-left">
                <img className="rounded-lg m-2 object-contain" src={animeDetail.cover_image} alt={animeDetail.titles.en} />
              </div>
              <p className="m-3 font-normal text-gray-700 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: animeDetail.descriptions.en }} />
            </div>
            <div>
              {/*         <div className="flex flex-col m-2">
          <ul>
            {geners.map(genero => <li className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={genero}>{genero}</li>)}
          </ul>
        </div> */}
            </div>
            {animeDetail.trailer_url !== undefined ? <Play video={animeDetail.trailer_url} title={animeDetail.titles.en} banner={animeDetail.banner_image} /> : null}
          </div> 
      </div>
    );
  
}


export default DetailCards;