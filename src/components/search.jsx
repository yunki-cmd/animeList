import { useState, useEffect } from "react";

import { getSearchResult } from "../services/getResultSearch";
import { ListCards } from "./listCards";

function Search() {
  
  const [busqueda, setBusqueda] = useState("");
  const [buscar, setBuscar] = useState(false);
  const [datos, setdatos] = useState([]);

  useEffect(() => {
    console.log(JSON.parse(sessionStorage.getItem("resultados")));
    if (sessionStorage.getItem("resultados") !== null) {
      setdatos(JSON.parse((sessionStorage.getItem("resultados"))));
    }
  },[]);
  

  const handlerSearch = (e) => {
    setBusqueda(e.target.value);
  };

  const handlerbuscar = () => {
    getSearchResult({ query: busqueda})
      .then(resp => resp.json())
      .then(resp => {
        if (resp.status_code !== 404) {
          sessionStorage.setItem("resultados", JSON.stringify(resp.data.documents));
          setdatos(resp.data.documents);
        }
      });
  };

   return (
     <div>
       <label htmlFor="search">Buscador Animes
       <input onChange={handlerSearch} id="search" type="text" />
       </label>
       <button type="button" onClick={handlerbuscar}>Buscar</button>
       {datos.length > 0 ? <ListCards data={datos}/> : "No hay datos"}
    </div>
   );
   
   

}

export default Search;