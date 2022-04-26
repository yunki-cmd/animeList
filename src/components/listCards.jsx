import {useState, useEffect} from "react";

import { convertFecha } from "../utiles/utiles";
import Cards from "./Cards";


export function ListCards({ data = [] }) {

  const [dato, setdatos] = useState([]);


  useEffect(() => {
    const dataSorted = data.sort((a, b) => new Date(convertFecha(a.start_date)) - new Date(convertFecha(b.start_date)));
    setdatos(dataSorted);
  }, [data]);


  return (
    <div className="sm:columns-1 md:columns-2 lg:columns-3  xl:columns-4 m-2 ">
      {dato.length > 0 ? dato.map(element => (
        <Cards 
        key={element.anilist_id}
        anilist_id={element.anilist_id}  
        titles ={element.titles} 
        descriptions = {element.descriptions} 
        cover_image={element.cover_image}
        video={element.trailer_url}
        banner={element.banner_image}
        start_date={element.start_date}
        end_date={element.end_date}
        geners={element.genres}
        />)): ''}
      </div>
  );
};

export default ListCards;