import { Avatar } from '@material-ui/core'
import React, { useState,useEffect,useContext } from 'react'
import './profileComp.css'
import DriveEtaSharp, { PhonelinkSetup } from '@material-ui/icons';
import {Link} from 'react-router-dom'
import db from './firebase'
import firebase from 'firebase'
import { useStateValue } from './StateProvider';
import { actionTypes } from '../reducer';
import { LogInContext } from '../Contex/loginContext';


function ProfileComp() {
    const [{user},dispatch] = useStateValue();
    const[files,setFiles] = useState(null)
    const types=['image/png','image/jpeg','image/jpg']
    const [error,setError]=useState(null)
    const {logins} = useContext(LogInContext)
    //const {setup} = useContext(LogInContext)
    const btt ={name:'Jau',age:17}
const [profile,setProfile]=useState('')
    const Prof=(e=>{
     const com = prompt('comunninty')
      const weat = prompt('weather')
      
      if(com&&weat){
    db.collection('cities').add({name:com,weather:weat,sunny:true,raining:false,
        cloudy:false,followers:500,Likes:50,list:[1,2,3,4]})
    }})

   const  updt= async()=> {

        const cityRef = db.collection('community').doc('3nm6f3q6voaYwl0Ss65B');

        // Set the 'capital' field of the city
        const res = await cityRef.update({cloudy: false,followers:550,weather:'Cloudy'}); 


        
    }

const Uploadd=(e)=>{
let selected=e.target.files[0]
if(selected&&types.includes(selected.type)){
    setFiles(selected)
    setError(null)
}
else{setFiles(null)
    setError('please selected a supported file (png or jpeg)')}
}
    
   
    return (
        
        
        <div className='prof'>
           <div className= 'profileHd'>
               <Link to='/'>
               <h4 class='home'>HomePage</h4>
               </Link>
<h4>Profile</h4>
<h4>Follow</h4>
            </div>
          
        
        <div className='profbody'>
            <div className='avatar'>
            <Avatar src={user?.photoURL}/>  
         <p className='avatar'>{user?.displayName}</p>
            <div className='divt'>
            <p onClick={updt} className='foll'>Edit Profile</p>
            <p className='foll'>following</p>
            <p onClick={Prof} className='foll'>Add New Community</p>
            <p>{profile}</p>
        

            </div>
            </div>
            <p>how are you bro</p>
            <img src ={user.photoURL} width='100' height='100' alt='avatar'/>
              <p>{user.displayName}</p>
              <p>{user.email}</p>
              

              

<form>
    <input type='file' onChange={Uploadd}/>
</form>
        {
            error && <p>{error}</p> 
            
        }  

    

        <p>{logins}</p>

 </div>  

          

        </div>
    )
}

export default ProfileComp
