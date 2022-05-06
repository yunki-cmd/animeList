import { useOutletContext} from "react-router-dom";

function Sinopsis() {

  const [ animeDetail, ] = useOutletContext();

  return (
    <section>
      <p dangerouslySetInnerHTML={{
        __html: animeDetail.description
      }} />
      </section>
  );
}

export default Sinopsis;