import React,{useState, useEffect} from 'react';
import './chat.css';
import { Avatar, } from '@material-ui/core';
import AttachFile from '@material-ui/icons/AttachFile';
import {IconButton} from '@material-ui/core';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useParams, BrowserRouter as Router, Route,Switch,Link, Prompt} from 'react-router-dom';
import db from './firebase';
import Footer from './footer.js';
import Secondfooter from './secondfooter.js';
import { AdbSharp } from '@material-ui/icons';





function Chat() {


    const [input,setInput] = useState('');
    const [inputs,setInputs]=useState('');
    const [Count,setCount] = useState(0);
    const [change,setChange] = useState(0);
    const [room,setRoom]=useState('');
const{roomId}=useParams();

useEffect(()=>{
if(roomId){
    /*db.collection('rooms').doc(roomId).onSnapshot(snapshot=>(
     setRoom(snapshot.data().name)

     
    ))*/

    setRoom('hey')
}
},[roomId])



    useEffect(()=>{

document.getElementsByClassName('input')
document.getElementsByClassName('inputfigs')
   const mn=inputs
  
   
const ab=input.length
const ba=0-ab


setCount(ab)
setChange(ba+(mn*1))
    })
        
const Dbstore=(e)=>{
 const datta=prompt('Amount')
 if(datta){
db.collection('deposits').add({name:datta,
   
})
}}

    const sendMessages = (e) => { e.preventDefault();
    setInput('');
};



const sendMessage = (e) => { e.preventDefault();
    setInputs('');

    
    
};





    
   
    
    
     /*

    useEffect(()=>{
    
const m=document.getElementsByClassName('input')
const y=document.getElementsByClassName('inputfigs')
   const n=y.value
  
   
const ab=m.length
const ba=100
setChange(ba)
    })*/
      
    const Openh=()=>{ 
        document.querySelector('.labl').classList.add('open') 
        
    }
        

 const Openn=()=>{ 
    document.querySelector('.chatFoote').classList.add('open') 
    document.querySelector('.buttn').classList.add('open')
    document.querySelector('.bform').classList.add('open')
          
}


const Closeh=()=>{
    
    document.querySelector('.chatFoote').classList.remove('open')
    document.querySelector('.buttn').classList.remove('open')
    document.querySelector('.labl').classList.remove('open')
    document.querySelector('.bform').classList.remove('open')
    document.querySelector('.sidebarrs').classList.remove('open');  
}


const openMenu=()=>{
    document.querySelector('.sidebarrs').classList.add('open');
  
  }


  const closeMenu=()=>{
    document.querySelector('.sidebarrs').classList.remove('open');
  }
    





    return ( 

        <div className='chat'>
            <div className='chat_header'>
            <Avatar src= {'https://avatars.dicebear.com/api/human/$123.svg'}/>
    
    
                <div className='chat_headerInfo'>
                <h3>{room}</h3>
                
        
                
                <p className='pe' >Last seen at..</p>
                
                
</div>
                <div className='headerInfo'>
                    <button>{change}</button>
                <IconButton>
          <SearchOutlined/>
          </IconButton>
          <IconButton>
          <AttachFile/>
          </IconButton>

        <IconButton>

          <MoreVertIcon />
          
          
          </IconButton>

<aside className='sidebarrs' >
      <h3>Shoping Categories</h3>
      <button className='sidebarr_close' onClick={closeMenu}  >x</button>
      <ul className='list'>
        <li onClick={Dbstore} className='lis'> Settings</li>
        <li>Request</li>
        <li onClick={Openh}>Switch</li>
 
     </ul>

     <form onClick={sendMessage}  className='bform'>
<input
className='inputfigs' type='number' value={inputs}onChange={(e)=>setInputs(e.target.value)}
/>
<button   className='sub'>Submit</button>
     </form> 
       <label className='labl'> Switch: <button  onClick={Openn} className='buttn' >
              On </button>
              
              
              <button onClick={Closeh}  className='buttn' >
              Off</button>
              </label>


              
    </aside>
          <button onClick={openMenu} className='butons'>
        &#9776;
      </button>
      
          
                </div>
            </div>

            <div className="chatBody">
   
        
                <p className="pchat
                pchat_receiver"><pan className='chatname'>Janet</pan>
                hey Guys
                <pan className='timestamp'>6:30AM
                    </pan>
    
                         </p>
                
            </div>
            
        
            <div className='chatFooter'>
                
                

            <div className='chatFoote'>  
           <IconButton>
            <InsertEmoticonIcon/> </IconButton>
            <form  className='form1'>
                <input value={input}onChange={(e)=>setInput(e.target.value)} className='input' type='text' placeholder='type message' />
                <button onClick={sendMessages} type='submit' className='button1'>send message</button>
            </form>
            
            <button>{Count}</button>
            
            <IconButton>
            <MicIcon/>
             </IconButton>
             <IconButton>
             
             <button className='iko' >&#9776;</button>
             </IconButton>     
                </div>   


    <Secondfooter/>

</div>
   </div>    
     ) }


export default Chat;
