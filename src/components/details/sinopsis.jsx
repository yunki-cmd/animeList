/* eslint-disable react/no-danger */
import {useQuery} from "@apollo/client";
import { useOutletContext} from "react-router-dom";


import { ANIME_RELATION_BY_ID } from "../../GraphQL/index";
import Cards from "../Cards";
import Play from "../play";


function Sinopsis() {

  const [animeDetail,] = useOutletContext();


  const { data, loading, error } = useQuery(ANIME_RELATION_BY_ID, {
    variables: {
      mediaId: animeDetail.id,
      type: "ANIME"
    }
  });

  console.log(data);

  const urlVideo = url =>{
      const urlYouTube = "https://www.youtube.com/watch?v=";
      return urlYouTube + url;
  };

  return (
    <article>
      <section className="grid grid-cols-3">
        <div>
          <div>
            Score
          </div>
          <div>
          <span>{animeDetail.averageScore}</span>
          </div>
        </div>
        <div>
          <ul>
            <li><span>Popularity: </span><span>{animeDetail.popularity}</span></li>
            <li><span>trending: </span><span>{animeDetail.trending}</span></li>
            <li><span>favorites: </span><span>{animeDetail.favourites}</span></li>
          </ul>
        </div>
        <div className="">
          {animeDetail.trailer && 
          <Play video={urlVideo(animeDetail.trailer.id)} banner={animeDetail.trailer.thumbnail} title={animeDetail.title.english}/>}
        <div>
          <span>Status:</span>
          <span>{animeDetail.status}</span>
        </div>
        </div>
        <div>
          añadir a tu historial
        </div>
      </section>
      <section>
        <p dangerouslySetInnerHTML={{
        __html: animeDetail.description
        }} />
      </section>
      <section>
        comentario o notas
      </section>
      <section className="grid grid-cols-3 gap-3 max-h-fit overflow-auto">
        {!loading ? data?.Media.relations.edges.map(element => <Cards key={element.node.id} id={element.node.id} titles={element.node.title} cover_image={element.node.coverImage.large} type={element.node.type} />) : 'nadaa'}
        {error && <span>404</span>}
      </section>
      <section>
        Recomendaciones
        
      </section>
    </article>
  );
}

export default Sinopsis;