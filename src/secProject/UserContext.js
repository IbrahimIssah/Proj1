import React,{useState,createContext} from 'react'

export const UserContex=createContext();

export const UserProvider=(props)=>{

    const[users,setUsers]= useState('');
    

    return(
        <UserContex.Provider value={[users,setUsers]}>
            {props.children}
        </UserContex.Provider>

    )
}
