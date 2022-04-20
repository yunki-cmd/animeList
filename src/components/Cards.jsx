/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import Play from "./play";

function Cards({ titles, descriptions, cover_image, video = "",banner = "",}) {


  return (
    <div className="max-w-lg h-auto my-5 break-inside-avoid bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col">
      <h2 className="m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{titles.en}</h2>
      <div className="p-5">
        <img className="rounded-lg m-2 float-left" src={cover_image} alt={titles.en} />
        <p className="m-3 font-normal text-gray-700 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: descriptions.en }} />
      </div>
      <div>
        {video !== "" ? <Play video={video}  title={titles.en} banner={banner}/> : null}
      </div>
    </div>
  );
}

export default Cards;