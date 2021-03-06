import Cards from "./Cards";
import Pagination from "./pagination";
// eslint-disable-next-line react/prop-types
import { useOutletContext} from "react-router-dom"
export function ListCards() {

  const { data, page, action } = useOutletContext<any>()

  if (data.length === 0) { 
    return (
      <div>
        no hay datos
        <Pagination className="mb-8" page={page} action={action} />
      </div>
    )
  }

  return (
    <>    
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-5 m-2 p-5">
        {data.length > 0 ? data.map((element:any) => (
          <Cards
          id={element.id}  
          key={element.id}
          titles ={element.title} 
          descriptions={element.description} 
          cover_image={element.coverImage.large}
          video={element.trailer}
          banner={element.bannerImage}
          start_date={element.startDate}
          end_date={element.endDate}
          geners={element.genres}
          type={element.type}
          />)): ''}
        </div>
        <Pagination className="mb-8" page={page} action={action} />
    </>
  );
};

export default ListCards;