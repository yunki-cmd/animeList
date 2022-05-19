/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";


export default function NavFilter({ filtros = [], filter = [],title="",visible= false,elements = "Todos",...props }) {

  const [filtro, ] = useState(filtros);
  const [filtrados, setFiltrados] = useState(filter);
  const { setFilter, handlerClickVisbible } = props;

  const handlerSelectGenero = (e) => {
    const { value } = e.target;
    if ( filtrados.includes(value)) {
      setFiltrados(filtrados.filter(elem => elem !== value));
      } else {
      setFiltrados([...filtrados, value.trim()]);
    }
  };

  useEffect(() => {
    setFilter(filtrados);
  }, [filtrados, setFilter]);

  return (
    <div onClick={handlerClickVisbible} className="bg-white text-gray-800 py-2 px-4 border rounded cursor-pointer">
      <span onClick={handlerClickVisbible} className="mx-2 text-zinc-400">{title}:</span>
      <span onClick={handlerClickVisbible} >{elements}</span>
      <ul className={visible ? "absolute z-20 bg-white h-auto w-1/2 left-1/4 mt-2 border rounded cursor-pointer" : "absolute z-20 bg-white h-auto w-1 /2 hidden left-1/4 mt-2"} >
      {filtro.map(elemen => <li className="m-4 inline-block" key={elemen}>
          <label htmlFor={elemen}>
          <input type="checkbox" onClick={handlerSelectGenero} name={elemen} value={elemen} id={elemen} />
            {elemen}
          </label>
        </li>)}
      </ul>
    </div>
  );
}

