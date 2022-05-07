/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Cards({ titles, cover_image ="",id = 1,type =""}) {


  function title(titleParams) {
    if (titleParams.english) {
      return <span className="m-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{titleParams.english}</span>;
    } if (titleParams.romaji) {
      return <span className="m-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{titleParams.romaji
}</span>;
    }
    return <span className="m-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{titleParams.native
}</span>;
  }

  return (
    <Link to={{ pathname: `/anime/${id}` }}>
      <div className={type === 'ANIME' ? "max-w-lg h-auto my-5 break-inside-avoid bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col transform transition duration-500 hover:scale-110 gap-4" : 'max-w-lg h-auto my-5 break-inside-avoid bg-yellow-100 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col transform transition duration-500 hover:scale-110'}>
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