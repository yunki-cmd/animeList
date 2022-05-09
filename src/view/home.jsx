/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import { ListCards } from "../components/listCards";
import { genero } from "../GraphQL/genero";
import { ANIME_TRENDINGS_EMISSION } from "../GraphQL/index";

function Home() {

  const [modalGenero, setModalGenero] = useState(false);
  const [filterGenero, setFilterGenero] = useState([]);
  const { loading, error, data } = useQuery(ANIME_TRENDINGS_EMISSION);
  
  useEffect(() => {
    if (data) {
      sessionStorage.setItem("tredings", JSON.stringify(data.Page.media));
    }
  }, [data]);

  const handlerClickGenero = (e) => {
    
    if (e.target === e.currentTarget) {
      setModalGenero(!modalGenero);
    }

  };

  if (loading) {
    return <h1>Loading...</h1>;
  }



  return (
    <>
      <section className="mx-auto w-1/2">
        <form action="" className="flex flex-wrap justify-between">
          <div onClick={handlerClickGenero} className="bg-white text-gray-800 py-2 px-4 border rounded cursor-pointer">
            <span onClick={handlerClickGenero} className="mx-2 text-zinc-400">Genero:</span>
            <span onClick={handlerClickGenero}>Todos</span>
            <select name="" id="" multiple className="d-none hidden">
              {genero.map(element => <option value={element}>{element}</option>)}
            </select>
            {modalGenero &&
              <ul className="absolute z-20 bg-white h-auto w-1/2">
                {genero.map(element => <li className="m-4 inline-block" key={element}>
                  <label htmlFor={element}>
                    <input type="checkbox" name={element} id={element} />
                    {element}
                  </label>
                </li>)}
              </ul>
            }
          </div>
          <div className="bg-white text-gray-800 py-2 px-4 border rounded cursor-pointer">
            <span className="mx-2 text-zinc-400">Año:</span>
            <span>Todos</span>
          </div>
          <div className="bg-white text-gray-800 py-2 px-4 border rounded cursor-pointer">
            <span className="mx-2 text-zinc-400">Tipo:</span>
            <span>Todos</span>
          </div>
          <div className="bg-white text-gray-800 py-2 px-4 border rounded cursor-pointer">
            <span className="mx-2 text-zinc-400">Estado:</span>
            <span>Todos</span>
          </div>
          <div className="bg-white text-gray-800 py-2 px-4 border rounded cursor-pointer">
            <button type="button">Filtrar</button>
          </div>
        </form>
      </section>
      <ListCards data={data.Page.media}/>
    </>
  );
}

export default Home;