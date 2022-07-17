/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

interface props {
  titles?: GenericObject,
  cover_image?: string,
  id?: number | 1,
  type: string,
  descriptions?: string,
  video?: string,
  banner?: string,
  start_date?: string,
  end_date?: string,
  geners?: string,
}

type GenericObject = Record<string, any>;


function Cards({ titles = {native : 'no title avaible'}, cover_image ="",id = 1,type =""} : props) {


  function title(titleParams: GenericObject) {
    if (titleParams != null) {    
      if (titleParams.english) {
        return <span className="m-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{titleParams.english}</span>;
      } if (titleParams.romaji) {
        return <span className="m-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{titleParams.romaji
        }</span>;
      }
      return <span className="m-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{titleParams.native
      }</span>;
    }
  }

  return (
    <Link to={{ pathname: `/anime/${id}` }}>
      <div className={type === 'ANIME' ? "max-w-lg h-auto my-5 break-inside-avoid bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col transform transition duration-500 hover:scale-110 hover:relative gap-4" : 'max-w-lg h-auto my-5 break-inside-avoid bg-yellow-100 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col transform transition duration-500 hover:scale-110 hover:relative'}>
        {title(titles)}
        <div className="p-2">
          <div className="">
            <img className="rounded-lg object-contain m-auto" src={cover_image} alt={titles.english} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Cards;