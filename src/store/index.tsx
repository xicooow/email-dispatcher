import { createContext, FunctionComponent, useContext, useReducer } from "react";

import reducer from "./reducer";
import initialState from "./state";
import { TAction, TState, TStoreContext } from "../types";

const StoreContext = createContext<TStoreContext>({
  state: initialState,
  dispatch: () => { return; }
});

const Store: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer<(state: TState, action: TAction) => TState>(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext<TStoreContext>(StoreContext);
export default Store;
