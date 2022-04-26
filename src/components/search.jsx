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

  const handlerbuscar = (e) => {
    e.preventDefault();
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
       <form onSubmit={handlerbuscar}>
         <div className="flex justify-center m-2">
           <div className="mb-3 xl:w-96">
             <div className="input-group relative flex items-stretch w-full mb-4">
               <input onChange={handlerSearch} type="text" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3" />
               <button className="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="submit" id="button-addon3">Buscar</button>
             </div>
           </div>
         </div>
       </form>
       <div>
       {datos.length > 0 ? <ListCards data={datos}/> : "No hay datos"}
       </div>
    </div>
   );
   
   

}

export default Search;