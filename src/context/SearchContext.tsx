
import * as React from "react";
import { useReducer } from "react";

const ResultFilter = React.createContext({} as GenericObject);

type GenericObject = Record<any, any>;

interface reactChildre {
  children: React.ReactNode
}

interface actionsState { 
  type: 'updateDate',
  payload: GenericObject
}


export function SetResultFilter({ children } : reactChildre) {

  const reducer = (state: GenericObject, action: actionsState): GenericObject => {
    if (action.type === "updateDate") {
      return {
        data: action.payload.data,
        id: action.payload.id,
        page: action.payload.page
      };
    }
    return state
  };

  const [state, dispatch] = useReducer(reducer,{
    data: [],
    page: 1
  });

  return <ResultFilter.Provider value={{ state, dispatch }}>
    {children}
  </ResultFilter.Provider>;
}

export { ResultFilter };