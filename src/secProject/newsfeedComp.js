import React, { useState,useEffect } from 'react'
import './newsfeedComp.css'
import  {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import db from './firebase'


function NewsfeedComp({name,weather,id,followers,Likes,comments}) {

    const[input,setInput]=useState([]);
    const[rooms,setRooms]=useState([]);

    const myfunc=(async()=>{
        const pmm = prompt('comment')
        if(pmm){
      const cityRefs = db.collection('community').doc(id).collection('comments');
      cityRefs.add({comment:pmm})}
              // Set the 'capital' field of the city
             // const res = await cityRefs.update({cloudy: false,followers:550,weather:'Cloudy',}); 
      
      
    })

    
    useEffect(() => {
      const unsubscribe=db.collection('community').doc(id).collection('comments').onSnapshot((onSnapshot) =>
        (
      setRooms(onSnapshot.docs.map(doc => (
         {
           id: doc.id,
           data: doc.data(),
         }
         
      )))))
      return()=>{unsubscribe();}
     },[])



    const sty=()=>{
      const bgh=  document.querySelector('.quer');
      if(bgh){
      bgh.innerHTML=('following')
    }}

    const  updte= async()=> {

      const cityRef = db.collection('community').doc(id);

      // Set the 'capital' field of the city
      const res = await cityRef.update({cloudy: false,followers:150,Likes:19+'k'}); 


      
      
  }
setInterval(updte,900000);



  
    return ( <div>

        
        <div className='newsp'>
            <span>Community:<h4>{name}</h4></span> 
          <p className='newp'>Weather:<h4>{weather}</h4></p>
          <h5>{followers}k.<span>followers</span></h5>
           
          <p className='newp'>Trafic:<h4>Normal</h4></p>
          <h5 onClick={sty} className='quer'>follow</h5>
          
          <p className='newp'>Services:<h4 onClick={updte}>{Likes}<span className='likes'>
            likes</span></h4></p>
            
          <p onClick={myfunc} className='comments'>comments</p>
          
            {rooms.map(room=>(
          <p className='cmt'>{room.data.comment}</p> ))}
          
        </div> 
        </div>
    )
}

export default NewsfeedComp
