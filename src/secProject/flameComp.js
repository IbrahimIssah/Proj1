import { DriveEtaRounded, DriveEtaSharp } from '@material-ui/icons';
import React, { useState,useEffect,useContext } from 'react'
import db, { auth } from './firebase'
import  './flameComp.css';
import NewsfeedComp from './newsfeedComp';
import ProfileComp from './profileComp.js'
import  {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import QuestionsComp from './questionsComp';
import { useStateValue } from './StateProvider';
import { actionTypes } from '../reducer';
import { LogInContext } from '../Contex/loginContext';
import { SignInRdContext } from '../Contex/signInReducerContext';


function FlameComp() {
const[rooms,setRooms]=useState([]);
const[comments,setComments]=useState([]);
const [{user},dispatch] = useStateValue();
//const {logins,dispatch}=useContext(LogInContext)
//const[users,setUsers]= useContext(UserContex)

  
 // const idd = user.map(room=>
  //{room.data.name})

 //for(i=0; i < user.length; i++)
    //idd = user[i].name
 
  
//var citiesRef = db.collection("cities");

//var query = citiesRef.where("capital", "==", true);



useEffect(()=>{
if(user){
  db.collection('bios').doc('ggfrdg').set(
    {name:'Derick',
    email:'fdfgfd'


    }
) 
}
},[])


    useEffect(() => {

    
        
      //const name=user[0].data.name
   
        const unsubscribe=db.collection('community')
        .where(
          'name','==','Amazing Grace'
        //'Id', 'array-contains-any',
        //[user.uid]
    
        )
        
        .onSnapshot(onSnapshot =>
          (
        setRooms(onSnapshot.docs.map(doc => (
           {
             id: doc.id,
             data: doc.data(),
           }
           
        )))))
        return()=>{unsubscribe();
     }
       },[user])


      /* useEffect(() => {
         
        const unsubscribes=db.collection('community/comments/comment').onSnapshot((onSnapshot) =>
          (
        setComments(onSnapshot.docs.map(doc => (
           {
             id: doc.id,
             data: doc.data(),
           }
           
        )))))
        return()=>{unsubscribes();}
          },[])*/

useEffect(() => {
  

auth.onAuthStateChanged(user=>{
  
if(user){

    
    console.log('a new user has sign in')

   // dispatch({
     // type:actionTypes.SET_USER,
     // user:null
        //  })
     
}
  
  else{
    console.log('the user has logout')
  }
})

 
},[user])

const logout=()=>{
  auth.signOut()
  .then(()=>{
    dispatch({
      type:actionTypes.SETUSER,
      user:null
          })})
     
  }


    return (
        
        <div className='mainflame'>
           <div className='mainHeader'>
               
               <div className='pe'>
            <Link to='/'>
                     <p className='pr'>HomePage</p>
                     </Link>
                     
                     <Link to='/Q&A' >
                       <p className='pr'>Q&A</p>
                       </Link>
                       <Link to='/profileComp'>
                       <p className='pr'>Profile</p> 
                       </Link>
                       
                       <button onClick={logout}>
                         LogOut
                       </button>
               </div>
               
</div>
<Router>
          <div className='body'>
            
                
               
               

               {rooms.map(community=>(
                   <NewsfeedComp key={community.id} id={community.id} name={community.data.name} 
                   weather={community.data.weather} followers={community.data.followers}
                    Likes={community.data.Likes} />
               )

               )}
               
               
            
                
               
               
               </div> 

               </Router>
               
        </div>

    
    )
}


export default FlameComp