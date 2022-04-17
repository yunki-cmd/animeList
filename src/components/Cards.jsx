/* eslint-disable camelcase */
/* eslint-disable react/prop-types */


function Cards({titles,descriptions,cover_image}){
  return (
    <div className="max-w-lg my-5 break-inside-avoid bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
      <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{titles.en}</h1>
      <p className="m-3 font-normal text-gray-700 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: descriptions.en }} />
      <div className="p-5">
        <img className="rounded-t-lg" src={cover_image} alt={titles.en} />
      </div>
    </div>
  );
}

export default Cards;