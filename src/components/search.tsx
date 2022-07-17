import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface props {
  className?: string;
}

function Search({ className = '' }: props) {
  
  const history = useNavigate();
  const [busqueda, setBusqueda] = useState<string>("");


  const handlerSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusqueda(e.target.value);
  };

  const handlerbuscar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history(`/search/${ busqueda}`);
  };

   return (
     <div className={`${className}`}>
       <form onSubmit={handlerbuscar}>
         <div className="flex justify-center m-2">
           <div className="mb-3 xl:w-96">
             <div className="gap-2 input-group relative flex items-stretch w-full mb-4">
               <input onChange={handlerSearch} type="text" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3" />
               <button className="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="submit" id="button-addon3">Buscar</button>
             </div>
           </div>
         </div>
       </form>
    </div>
   );
   
   

}

export default Search;