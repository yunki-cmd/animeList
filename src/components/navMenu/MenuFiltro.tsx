import * as React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

import { genero, anos, format, status } from "../../GraphQL/genero";
import NavFilter from "./navFilter";

function MenuFiltro() {

  const history = useNavigate();

  const [filterGenero, setFilterGenero] = useState<string[]>([]);
  const [filterAnos, setfilterAnos] = useState<string[]>([]);
  const [filterformat, setfilterformat] = useState<string[]>([]);
  const [filterStatus, setfilterStatus] = useState<string[]>([]);
  const [modalShow, setModalShow] = useState({
    genero: false,
    ano: false,
    type: false,
    state: false
  });

  const formaterElements = (element:Array<any>) => {
    if (element.length > 2) {
      return `${element.length} Elementos`;
    }
    if (element.length === 0) return "Todos";
    return element.join(",");
  };

  const handlerClickGenero = (e: React.MouseEvent<HTMLSpanElement, HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setModalShow(prevState => ({
        genero: !prevState.genero,
        ano: prevState.ano ? !prevState.ano : prevState.ano,
        type: prevState.type ? !prevState.type : prevState.type,
        state: prevState.state ? !prevState.state : prevState.state
      }));
    }
  };


  const handlerClickano = (e: React.MouseEvent<HTMLSpanElement, HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        setModalShow(prevState => ({
          genero: prevState.genero ? !prevState.genero : prevState.genero,
          ano: !prevState.ano,
          type: prevState.type ? !prevState.type : prevState.type,
          state: prevState.state ? !prevState.state : prevState.state
        }));
      }
  }; 
  const handlerClickType = (e: React.MouseEvent<HTMLSpanElement, HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setModalShow(prevState => ({
        genero: prevState.genero ? !prevState.genero : prevState.genero,
        ano: prevState.ano ? !prevState.ano : prevState.ano,
        type: !prevState.type,
        state: prevState.state ? !prevState.state : prevState.state
      }));
    }
  }; 
  const handlerClickStatus = (e:React.MouseEvent<HTMLSpanElement,HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setModalShow(prevState => ({
        genero: prevState.genero ? !prevState.genero : prevState.genero,
        ano: prevState.ano ? !prevState.ano : prevState.ano,
        type: prevState.type ? !prevState.type : prevState.type,
        state: !prevState.state
      }));
    }
  }; 

  const handlerfilter = () => {

    let filter = "/search?";
    filter = filterGenero.length > 0 ? filter.concat("gener=").concat(filterGenero.join(",")) : "";
    console.log(filter);
    history(filter);
    console.log(
      filterGenero,
      filterAnos,
      filterformat,
      filterStatus);
  };

  return (<section className="mx-auto w-1/2">
    <form action="" className="flex flex-wrap justify-between">
      <NavFilter
        filtros={genero}
        filter={filterGenero}
        setFilter={setFilterGenero}
        visible={modalShow.genero}
        handlerClickVisbible={handlerClickGenero}
        title="Genero"
        elements={formaterElements(filterGenero)} />
      <NavFilter
        filtros={anos}
        filter={filterAnos}
        setFilter={setfilterAnos}
        visible={modalShow.ano}
        title="Año"
        handlerClickVisbible={handlerClickano}
        elements={formaterElements(filterAnos)} />
      <NavFilter
        filtros={format}
        filter={filterformat}
        setFilter={setfilterformat}
        title="Tipo"
        visible={modalShow.type}
        handlerClickVisbible={handlerClickType}
        elements={formaterElements(filterformat)}/>
      <NavFilter
        filtros={status}
        filter={filterStatus}
        setFilter={setfilterStatus}
        title="Estado"
        visible={modalShow.state}
        handlerClickVisbible={handlerClickStatus}
        elements={formaterElements(filterStatus)}/>
      <div className="bg-white text-gray-800 py-2 px-4 border rounded cursor-pointer">
        <button onClick={handlerfilter} type="button">Filtrar</button>
      </div>
    </form>
  </section>);
};

export default MenuFiltro;