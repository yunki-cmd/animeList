
import * as React from "react";
import { useReducer } from "react";

const ResultFilter = React.createContext({} as GenericObject);

type GenericObject = Record<any, any>;

interface reatChildre {
  children: React.ReactNode
}

interface actionsState { 
  type: 'updateDate',
  payload: GenericObject
}


export function SetResultFilter({ children } : reatChildre) {

  const reducer = (state: GenericObject, action: actionsState): GenericObject => {
    if (action.type === "updateDate") {
      return {
        data: action.payload.data,
        id:action.payload.id
      };
    }
    return state
  };

  const [state, dispatch] = useReducer(reducer,{
      data: []
  });

  return <ResultFilter.Provider value={{ state, dispatch }}>
    {children}
  </ResultFilter.Provider>;
}

export { ResultFilter };