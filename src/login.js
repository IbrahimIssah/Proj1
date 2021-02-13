import { auth,provider } from './firebase';
import React from 'react'
import './login.css';
import { actionTypes } from './reducer';
import {useStateValue} from './StateProvider.';




function Login() {
const [{},dispatch]=useStateValue();
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result)=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
        })
        .catch((error)=>alert(error.message));
    };
    return (
        <div className='dv'>
            <div className='dvv'>
         <h1>Login</h1>
         </div> 
         <button onClick={signIn}>Sign In With Google
             </button>  
        </div>
    )
}

export default Login
