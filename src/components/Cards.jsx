/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Cards({ titles, descriptions, cover_image, id,type}) {


  function shortDescription(descr) {
    if (descr) return `${descr.substring(0, descr.length - descr.length / 2)}...`;
    return '';
  }
  function title(titleParams) {
    if (titleParams.english) {
      return <span className="m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{titleParams.english}</span>;
    } if (titleParams.romaji) {
      return <span className="m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{titleParams.romaji
}</span>;
    }
    return <span className="m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{titleParams.native
}</span>;
  }

  return (
    <div className={type === 'ANIME' ? "max-w-lg h-auto my-5 break-inside-avoid bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col" :'max-w-lg h-auto my-5 break-inside-avoid bg-yellow-100 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col'}>{title(titles)}
      <div className="p-5">
        <div className="float-left">
          <img className="rounded-lg m-2 object-contain" src={cover_image} alt={titles.english} />
        </div>
        <p className="m-3 font-normal text-gray-700 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: shortDescription(descriptions) }} />
        <Link to={{
          pathname: `/details/${id}`
        }}><button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ir a  detalle</button></Link>
      </div>
    </div>
  );
}

export default Cards;