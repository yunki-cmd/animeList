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
        return <span className="text-sm tracking-tight text-[#748899] leading-5 font-sans bg-white my-2">{titleParams.english}</span>;
      } if (titleParams.romaji) {
        return <span className="text-sm tracking-tight text-[#748899] leading-5 font-sans bg-white my-2">{titleParams.romaji
        }</span>;
      }
      return <span className="text-sm tracking-tight text-[#748899] leading-5 font-sans bg-white my-2">{titleParams.native
      }</span>;
    }
  }

  function mouseEnter(e: React.MouseEvent<HTMLDivElement>) {
    
  }

  return (
    <div onMouseEnter={mouseEnter} className={type === 'ANIME' ? "w-56 break-inside-avoid bg-white rounded-lg" : 'w-56 break-inside-avoid bg-yellow-100 rounded-lg'}>
      <Link to={{ pathname: `/anime/${id}` }}>        
        <div className="h-4/5">
            <img className="rounded-lg object-cover w-full h-full" src={cover_image} alt={titles.english} />
        </div>
      </Link>
      <Link to={{ pathname: `/anime/${id}` }}>
        <div className="flex justify-center">
          {title(titles)}
        </div>
      </Link>
    </div>
  );
}

export default Cards;