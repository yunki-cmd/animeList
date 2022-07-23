
import { ReactNode, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface propsPagination {
  className?: string,
  page: number,
  action: () => void,
}

const Pagination = ({ className, page = 1, action }: propsPagination) => {
  const { page: paramsPage } = useParams()
  if (paramsPage != null) {
    page = parseInt(paramsPage!)
  }

  const [paginaActived, setPaginaActived] = useState<number>(page ?? 1)
  
  useEffect(() => {
    setPaginaActived(page ?? 1)
  }, [page])
  
  // TODO: modificar funcion para la pagination
  const RenderPages = (indices: number, action: () => void, actived?: number): ReactNode => {
    const Paginas: ReactNode[] = []
    if (indices < 4) {
      indices = 5
      for (let i = 1; i <= indices; i++) {
        if (actived == i) {
          Paginas.push(<Pages key={i} indice={i} actived action={action} />)
        }
        else Paginas.push(<Pages key={i} indice={i} action={action} />)
      }
    } else {
      indices++
      for (let i = indices-3; i <= indices+1; i++) {
        if (actived == i) {
          Paginas.push(<Pages key={i} indice={i} actived action={action} />)
        }
        else Paginas.push(<Pages key={i} indice={i} action={action} />)
      }
    }
    return Paginas
  }

  return (
    <div className={`container mx-auto px-4 ${className}`}>
      <nav className="flex flex-row flex-nowrap justify-between md:justify-center items-center" aria-label="Pagination">
        <a className="flex w-10 h-10 mr-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300" href="#" title="Previous Page">
          <span className="sr-only">Previous Page</span>
          <svg className="block w-4 h-4 fill-current" viewBox="0 0 256 512" aria-hidden="true" role="presentation">
            <path d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path>
          </svg>
        </a>
        {RenderPages(page, action, paginaActived)}
        <a className="flex w-10 h-10 ml-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300" href="#" title="Next Page">
          <span className="sr-only">Next Page</span>
          <svg className="block w-4 h-4 fill-current" viewBox="0 0 256 512" aria-hidden="true" role="presentation">
            <path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
          </svg>
        </a>
      </nav>
    </div>
  )
}

interface propsPages {
  indice: number,
  actived?: boolean,
  action: (page: number) => void
}

function Pages({ indice, actived, action }: propsPages) {
  return (
    <>
      <span className={`hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border ${actived ? 'border-black bg-black text-white' : 'border-gray-200 bg-white'}  hover:border-gray-300 cursor-pointer`}
        onClick={() => action(indice)} title={`Page ${indice}`}>{indice}</span>
    </>
  )

}

export default Pagination

