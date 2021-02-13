import { PinDropSharp } from '@material-ui/icons';
import React,{createContext, useReducer} from 'react';
import { SignInReducer } from '../Reducers/signInReducer';

export const SignInRdContext=createContext();


const SignInRdContextProvider=(props)=>{
const [values,dispatch]=useReducer(SignInReducer,(10))

return(
<SignInRdContext.Provider value={{values,dispatch}}>
    {props.children}
</SignInRdContext.Provider>
)


}

export default SignInRdContextProvider