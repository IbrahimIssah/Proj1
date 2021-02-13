import React,{createContext,useContext,useReducer} from "react";
//import userReducer from "./verifRe";


export const StateContext = createContext();

export const StateProvider=({reducer,initialState,children}) =>(
<StateContext.Provider value={useReducer(reducer,children,initialState)}>
    {children}
</StateContext.Provider>);

export const useStateValue = () => useContext(StateContext);


