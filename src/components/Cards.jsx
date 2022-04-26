/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import { convertFecha } from "../utiles/utiles";

function Cards({ titles, descriptions, cover_image, banner = "", start_date, end_date = null, anilist_id}) {


  function enmision(fecha) {
    const f = convertFecha(new Date(fecha));
    const fO = '1970-01-01';
    if (f === fO) {
      return 'En Emision';
    }
    return f;
  }
  function shortDescription(descr) {
    return `${descr.substring(0, 200)  }...`;
  }

  return (
    <div className="max-w-lg h-auto my-5 break-inside-avoid bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col">
      <span className="m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{titles.en}</span>
      <div className="p-5">
        <div className="float-left">
          <img className="rounded-lg m-2 object-contain" src={cover_image} alt={titles.en} />
        </div>
        <p className="m-3 font-normal text-gray-700 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: shortDescription(descriptions.en) }} />
        <Link to={{
          pathname: `/details/${anilist_id}`
        }}><button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ir a  detalle</button></Link>
      </div>
      <div>
        <div className="flex m-2 gap-5">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Fecha Inicio: {convertFecha(start_date)}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Fecha Fin: {enmision(end_date)} </span>
        </div>
{/*         <div className="flex flex-col m-2">
          <ul>
            {geners.map(genero => <li className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={genero}>{genero}</li>)}
          </ul>
        </div> */}
      </div>
     {/*  {video !== "" ? <Play video={video} title={titles.en} banner={banner} /> : null} */}
    </div>
  );
}

export default Cards;