import React, { useCallback, useReducer } from "react"
import { genero, anos, format, status } from "../../GraphQL/genero";
import { useNavigate } from "react-router-dom";

interface fomrFilters  {
  geners: string[],
  year: string[],
  format: string[],
  status: string[]
}

interface payload {
  name: string
  data: string,
}

type actios = {
  type: 'ADD',
  payload: payload
} | {
  type: 'DELETE',
  payload: payload
} 


function FormFilter() {

  const history = useNavigate();

  const reducer = (state: fomrFilters, action: actios): fomrFilters => {
    type ObjectKey = keyof typeof state
    let name = action.payload.name as ObjectKey
    switch (action.type) {
      case 'ADD':
        if (!state[name].includes(action.payload.data.trim())) {
          return {
            ...state,
            [name]: [...state[name], action.payload.data.trim()]
          }
        }
      case 'DELETE':
        return {
          ...state,
          [name]: state[name].filter(element => element !== action.payload.data.trim())
        }
      default:
        return {
          ...state
        }
    }
  }

  const [form, dispatch] = useReducer(reducer,{
    geners: [],
    year: [],
    format: [],
    status: []
  } as fomrFilters )


  const addGener = (e: React.MouseEvent<HTMLAnchorElement>) => {
    let data = e.currentTarget.textContent!
    type ObjectKey = keyof typeof form
    let name = e.currentTarget.title as ObjectKey
    console.log(name)
    if (e.currentTarget.classList.contains('bg-purple-600')) {
      e.currentTarget.classList.remove("bg-purple-600")
      dispatch({ type: 'DELETE', payload: { name, data } })
    } else if (form[name].length <= 2){
      e.currentTarget.classList.add("bg-purple-600")
      dispatch({ type: 'ADD', payload: { name, data } })
    }
  }

  const renderValores = useCallback((valores:string[]) => {
    return valores.join(' ')
  }, [form])
  

  const handlerFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let filter = "/search?"
    filter = form.geners.length > 0 ? filter.concat("gener=").concat(form.geners.join(",")) : "";
    history(filter)
  }

  return (
    <>
      <form onSubmit={handlerFilter}>
        <div className="dropdown">
          <label tabIndex={0} className="btn m-1">{`Generos:  ${form.geners.length > 0 ? renderValores(form.geners) : 'Todos'}`}</label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 overflow-y-scroll h-72">
            {genero.map(genero => {
              return (
                <li key={genero}>
                  <a title="geners" onClick={addGener}>{genero}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="dropdown">
          <label tabIndex={0} className="btn m-1">{`Years:  ${form.year.length > 0 ? renderValores(form.year) : 'Todos'}`}</label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 overflow-y-scroll h-72">
            {anos.map(anos => {
              return (
                <li key={anos}>
                  <a title="year" onClick={addGener}>{anos}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="dropdown">
          <label tabIndex={0} className="btn m-1">{`Format:  ${form.format.length > 0 ? renderValores(form.format) : 'Todos'}`}</label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 overflow-y-scroll h-72">
            {format.map(format => {
              return (
                <li key={format}>
                  <a title="format" onClick={addGener}>{format}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="dropdown">
          <label tabIndex={0} className="btn m-1">{`Status:  ${form.status.length > 0 ? renderValores(form.status) : 'Todos'}`}</label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 overflow-y-scroll h-72">
            {status.map(status => {
              return (
                <li key={status}>
                  <a title="status" onClick={addGener}>{status}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Filter</button>
      </form>
      <div>{JSON.stringify(form)}</div>
    </>
  )
}

export default FormFilter