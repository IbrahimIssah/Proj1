import React,{useState,useEffect} from 'react'
import  './sidebarChat.css';
import { Avatar } from '@material-ui/core';
import db from './firebase';
import {BrowserRouter as Router, Link} from 'react-router-dom';


function SidebarChat({ id,name,}) {
    const [seed, setSeed ] = useState("");

    useEffect (() => {
        setSeed(Math.floor(Math.random() / 2));
    },[] );
    
    

    
    
 return   (
         
    <Link to = {id}>
                <div className='sidebarChat'>
            
            <Avatar src= {'https://avatars.dicebear.com/api/human/${seed}.svg'}/>
        <div className='chat_info'>
            
            <h2>{name}</h2>
            
            <p className='p'>Last Message...</p> 
            </div>
            
        </div>
</Link>
    
    
    ) 
        }

    

export default SidebarChat;
