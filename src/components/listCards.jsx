import Cards from "./Cards";

// eslint-disable-next-line react/prop-types
export function ListCards({ data = [] }) {
  
  return (
    <div className="columns-auto sm:columns-1 md:columns-3 lg:columns-4  xl:columns-5 gap-3 m-2 ">
      {data.length > 0 ? data.map(element => (
        <Cards
        id={element.id}  
        key={element.id}
        titles ={element.title} 
        descriptions={element.description} 
        cover_image={element.coverImage.large}
        vieo={element.trailer}
        banner={element.bannerImage}
        start_date={element.startDate}
        end_date={element.endDate}
        geners={element.genres}
        type={element.type}
        />)): ''}
      </div>
  );
};

export default ListCards;