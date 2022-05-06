import { useOutletContext} from "react-router-dom";

import Play from "../play";

function Sinopsis() {

  const [ animeDetail, ] = useOutletContext();

  console.log(animeDetail);

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
    </article>
  );
}

export default Sinopsis;