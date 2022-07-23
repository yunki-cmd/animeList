import * as React from 'react';
import {useReducer } from 'react'


type GenericObject = Record<any, any>;

interface ReactChildren {
  children: React.ReactNode
}

interface trendingDispath {
  type: 'updateData',
  payload: GenericObject
}

export const trendingContextAnime = React.createContext({} as GenericObject);


export function trendingContext({ children }: ReactChildren) {

  const reducer = (state: GenericObject, action: trendingDispath): GenericObject => {
    switch (action.type) {
      case 'updateData':
        return {
          data: action.payload.data,
          page: action.payload.page
        }
        break
      default:
        return state
    }
  }
  
  const [tredings, dispatch] = useReducer(reducer, {
    data: [],
    page: 1
  })

  return (
    <trendingContextAnime.Provider value={{ tredings, dispatch}}>
      {children}
    </trendingContextAnime.Provider>
  )

} 