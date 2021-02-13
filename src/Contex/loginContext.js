import React,{createContext,useReducer} from 'react'
import { usersReducer } from '../Reducers/usersReducer';
//import {db} from '../firebase'
//import { auth,provider } from './firebase';
//import {firebaseApp } from 'firebase';
//import firebase from 'firebase'

export const LogInContext=createContext();

const LogInContextProvider=(props)=> {
    const [logins,dispatch]=useReducer(usersReducer,(''))
    //const setUp=()=>{
       // setLogins('')
   // }

    /*const lognn=()=>{
    

        auth
        .signInWithPopup(provider)
        .then((result)=>{setLogin(result)
    
        
        })
        
    
        .catch((error)=>alert(error.message));
    //const names=login.displayName
    //const id=login.email
    
    
        //if(names){
      //const adto =  db.collection('users').add({name:names,Id:id,Country:'Ghana',community:'East Legon',number:1234567})
     //} };
    }
*/
    return (
        <div>
         <LogInContext.Provider value={{logins,dispatch}}>
        { props.children}
    </LogInContext.Provider>
        </div>
    )
}

export default LogInContextProvider
