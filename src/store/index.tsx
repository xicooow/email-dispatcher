import { createContext, FunctionComponent, useContext, useReducer } from "react";

import reducer from "./reducer";
import initialState from "./state";
import { TStoreContext } from "../types";

const StoreContext = createContext<TStoreContext>({
  state: initialState,
  dispatch: () => { return; }
});

const Store: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const getState = () => useContext(StoreContext).state;
export const getDispatch = () => useContext(StoreContext).dispatch;
export default Store;
