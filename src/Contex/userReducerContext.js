import { PinDropSharp } from '@material-ui/icons';
import React ,{createContext}from 'react';
import { useReducer } from 'react';
import{usersReducer} from './Reducer/usersReducer';

export const uContext=createContext()


const uContextProvider=()=>{
const[users,dispatch] =useReducer(usersReducer,[])


return(
    <div>
        <uContext.Provider value={dispatch}>
        {PinDropSharp.children}
         </uContext.Provider>
    </div>
)

}