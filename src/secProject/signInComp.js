import React,{useState,useContext,useEffect} from 'react'

import './signInComp.css'
import {UserContex} from './UserContext'
import { auth,provider } from './firebase';
import {firebaseApp } from 'firebase';
import firebase from 'firebase'
import db from './firebase'
import {useSelector,useDispatch} from 'react-redux';
import userReducer from './userReducer';
import {increment,decrement,logg} from './actions'
import { useStateValue } from './StateProvider';
import { actionTypes } from '../reducer';
import { LogInContext } from '../Contex/loginContext';

function SignInComp() {
    const [name,setName]= useState('');
    const [{user},dispatch]=useStateValue();
    
   // const counter = useSelector(state=>state.counter)  
   // const login = useSelector(state=>state.login) 
    //const dispatch = useDispatch();
const {lgnn}=useContext(LogInContext)
const[currentUser,setCurrentUser]=useState([]);
const[userName,setUserName]=useState('');

//const[users,setUsers]= useContext(UserContex)
//const provider= new firebase.auth.GoogleAuthProvider()

/*useEffect(() => {
    
    auth.onAuthStateChanged((user)=>{
        setCurrentUser(setUserName)
        if(!user){
        
       dispatch({
        type:actionTypes.SETUSER,
        //user:userName,
        })} 

    })
}, [])*/


const loginn=()=>{
    

    auth
    .signInWithPopup(provider)
    .then((result)=>{
        dispatch({
type:actionTypes.SET_USER,
user:result.user,
    })
 setUserName(result)
    }

    
    )
    

    .catch((error)=>alert(error.message));
const names=currentUser.displayName
const id=currentUser.email


    if(names){
  const adto =  db.collection('users').add({name:names,Id:id,Country:'Ghana',community:'East Legon'})
 } };


const signUp=()=>{
   const email= prompt('email')
   const password = prompt('Password')
   
   setName(email)
   alert(name)
  
   
   if(email&&password){
    db.collection('book').add({name:'Jo',Id:1234,Country:'Ghana',community:'American House',
    email:email,password:password}) 
    setName(email)
    alert(name)
   }
    
}


const signin=async()=>{
    const email= prompt('email')
    const password = prompt('Password')
    if(email&&password){
        auth.createUserWithEmailAndPassword(email,password).then(cred=>{
            db.collection('community').doc(cred.user.uid).set(
                {name:'Botwe',
                //email:email
                weather:'Cloudy'


                }
            )
        })
    }
    
   
    
    if(email&&password){

   await db.collection('users').where('email','==','abawuni543gmai.com').
        onSnapshot((onSnapshot) =>
        (
            dispatch({
                type:actionTypes.SET_USER,
                user:userName,
                    })
               
    
        

      
 

 

           ))
     }}


     useEffect(() => {
         if(userName){
        db.collection('bios').doc(userName.user.uid).set(
            {name:'Botwe',
            //email:email
            weather:'Cloud'


            })}

        //dispatch({
          //  type:actionTypes.SET_USER,
           // user:userName
              //  })
            
     
              //  const cityRef = db.collection('community').doc(id);

                // Set the 'capital' field of the city
               // const res = await cityRef.update({cloudy: false,followers:150,weather:'Cloudy',Likes:19+'k'}); 
          
  
         
     }, [userName])




    return (/*
        <div className='signInn'>
         
    </div> {
           currentUser &&
             <div>
             <img src ={currentUser.photoURL} width='100' height='100' alt='avatar'/>
              <p>{currentUser.displayName}</p>
              <p>{currentUser.email}</p>
              <p>counter:{counter}</p>
              <p>{login.length}</p>
            
              <button onClick={()=>dispatch(increment())}>+</button>
              <button onClick={()=>dispatch(decrement())}>-</button>
             </div>
         
    */
         <div className='signInn'>



         
        
         
         
        
          <button  onClick={loginn} className='signIn'>SingIn With Google</button> 

          
          <p className='eml' onClick={signUp}>signUp</p>
          <p onClick={signin} className='emls'>Login</p>

          <p onClick={lgnn}>SIGNIN</p>

          
        </div>
    )
}

export default SignInComp



