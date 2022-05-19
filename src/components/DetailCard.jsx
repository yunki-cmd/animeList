/* eslint-disable no-console */
import {useLazyQuery} from "@apollo/client";
import { useEffect, useState,useRef } from "react";
import { useParams, Outlet, Link  } from "react-router-dom";

import { ANIME_BY_ID} from "../GraphQL/index";
import {convertFecha } from "../utiles/utiles";


function DetailCards() {
  
  const { id } = useParams();
  const [animeDetail, setAnimalDetail] = useState(undefined);
  const [getAnimeByID,] = useLazyQuery(ANIME_BY_ID, { variables: { id } });
  const isActive = useRef();

  useEffect(() => {
      getAnimeByID()
        .then(resp => {
          sessionStorage.setItem("details", resp);
          setAnimalDetail(resp.data.Media);
        });
  }, [id, getAnimeByID]);

  const generatorID = () => Math.round(Math.random() * 1000);

  const setActive = (e) => {
    console.log(isActive.current);
    console.log(e.target);
  };

  if (animeDetail === undefined || animeDetail === null) {
    return (<div><h1>Loading...</h1></div>);
  }

  return (
    <article>
      <header>
        <h1 className="font-bold text-2xl m-2 font-mono bg-slate-400">
        {animeDetail.title.english}
        </h1>
      </header>
      <section className="grid grid-cols-4 gird-row-cols-4 gap-3">
        <div className="col">
          <div>
            <img src={animeDetail.coverImage.large} alt={animeDetail.title.english} />
          </div>
          <div className="flex flex-col">
            <span>Altenative title</span>
            {Object.entries(animeDetail.title).map((element) => {
              if (element[0] !== '__typename') return <div key={element + generatorID()}><span className="capitalize font-bold">{element[0]}</span>: <span>{element[1]}</span></div>;
              return null;
            })}
            {
              animeDetail.synonyms.length > 0 && <ul>
                <span className="font-bold">Others: </span>
              {
              animeDetail.synonyms.length > 0 && animeDetail.synonyms.map(element => <li key={generatorID() + element}>{element}</li>)}</ul>}
          </div>
          <section>
            <header>
            <h3>Information</h3>
            </header>
            <div className="flex flex-col">
              <div>
              <span>Type</span>: <span>{animeDetail.type}</span>
              </div>
              <div>
              <span>Episodes</span>: <span>{animeDetail.episodes}</span>
              </div>
              <div>
                <span>Status</span>: <span>{animeDetail.status}</span>
              </div>
              <div>
                <span>Aired</span>: <span>{convertFecha(animeDetail.startDate.year, animeDetail.startDate.month, animeDetail.startDate.day)}</span>
              </div>
              <div>
                <span>Season</span>: <span>{animeDetail.season}</span>
              </div>
              <div>
                <span>duration</span>: <span>{animeDetail.duration} min</span>
              </div>
              <div>
                <ul>
                  <span>Geners: </span>
                  {animeDetail.genres.map(element => <li key={element}>{generatorID() + element}</li>)}
                </ul>
              </div>
              <div>
                <ul>
                  <span>tags: </span>
                  {animeDetail.tags.map(element => <li key={generatorID() + element.name}>{element.name}</li>)}
                </ul>
              </div>
            </div>
          </section>
          <section>
            <span>Static</span>
            <div>
              <span>Score: </span>
              {animeDetail.meanScore}
            </div>
            <div>
              <span>popularity: </span>
              {animeDetail.popularity}
            </div>
            <div>
              <span>favourites: </span>
              {animeDetail.favourites}
            </div>
          </section>
          <section>
            <span>External Link</span>
            <div>
            <a href={ animeDetail.siteUrl}> aniList</a>
            </div>
          </section>
        </div>
        <article className="col-span-3">
          <header>
            <nav>
              <ul className="flex gap-3 justify-evenly" ref={isActive}>
                <Link onClick={setActive} to={decodeURIComponent(`details`)} >
                  <li>details</li>
                </Link>
                <Link onClick={setActive} to={decodeURIComponent(`characters`)} >
                  <li>chracter & stafs</li>
                </Link>
                <Link onClick={setActive} to={decodeURIComponent(`episodes`)} >
                  <li>Episodes</li>
                </Link>
                <Link onClick={setActive} to={decodeURIComponent(`statics`)} >
                  <li>stats</li>
                </Link>
                <Link onClick={setActive} to={decodeURIComponent(`soundtrack`)} >
                  <li>Opening & Endign</li>
                </Link>
              </ul>
            </nav>
          </header>
          <Outlet context={[animeDetail,setAnimalDetail]} />
        </article>
      </section>
  </article >
    );
  
}
export default DetailCards;