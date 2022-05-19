
import React, { useReducer } from "react";

const ResultFilter = React.createContext();

export function SetResultFilter({ children }) {

  const reducer = (state, action) => {
    if (action.type === "updateDate") {
      return {
        data: action.payload.data,
        id:action.payload.id
      };
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    data: []
  }
  );

  return <ResultFilter.Provider value={{ state, dispatch }}>
    {children}
  </ResultFilter.Provider>;
}

export { ResultFilter };