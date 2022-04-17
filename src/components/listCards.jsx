import {useState, useEffect} from "react";

import Cards from "./Cards";

export function ListCards({ data = [] }) {

  const [dato, setdatos] = useState([]);

  useEffect(() => {

    setdatos(data);

  },[data]);

  return (
    <div className="sm:columns-1 md:columns-2 lg:columns-3  xl:columns-4 m-2">
      {dato.length > 0 ? dato.map(element => (
        <Cards 
        key={element.anilist_id} 
        titles ={element.titles} 
        descriptions = {element.descriptions} 
        cover_image={element.cover_image}
        />)): ''}
      </div>
  );
};

export default ListCards;