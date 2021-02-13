import React,{useState,useEffect} from 'react';
import './sidebar.css'
import ChatIcon from '@material-ui/icons/Chat';
import {Avatar,IconButton} from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import SidebarChat from './sidebarChat';
import db from './firebase';
import Addto from './addto';



function Sidebar() { 

  const openMenu=()=>{
    document.querySelector('.sidebarr').classList.add('open');
  
  }

  const closeMenu=()=>{
    document.querySelector('.sidebarr').classList.remove('open');
  }
  const[rooms , setRooms] = useState([]);

  useEffect(() => {
   const unsubscribe= db.collection('rooms').onSnapshot((onSnapshot) =>
     (
   setRooms(onSnapshot.docs.map(doc => (
      {
        id: doc.id,
        data: doc.data(),
      }
      
   )))))
   return()=>{unsubscribe();}
  },[])
  return(

  <div className='sidebar'>

    <div className='sidebar_header'>


    <aside className='sidebarr' >
      <h3>Shoping Categories</h3>
      <button className='sidebar_close' onClick={closeMenu} >x</button>
      <ul>
        <li>Settings</li>
        <li>Profile</li>
        <li>Logout</li>
      </ul>

    </aside>
      <button onClick={openMenu} className='buton'>
        &#9776;
      </button>
      <Avatar /> 
      <div className='sidebar_header_fchild'>
        <IconButton>
          <DonutLargeIcon/>
          </IconButton>
          <IconButton>
          <ChatIcon/>
          </IconButton>
        <IconButton>
          <MoreVertIcon />
          </IconButton>
      

      </div>
      
    </div>

    <div className='sidebar_search'>
      <SearchOutlined/>
      <div className= 'sidebar_searchContainer'>
      <input placeholder='search' type='text'/></div>
    </div>
    <div className='sidebar_chat'>
      <Addto/>
      
<SidebarChat/>
{rooms.map(room =>(
  <SidebarChat key={room.id} id ={room.id} name={room.data.name} />

))}
    </div>
    </div>

  )
  
  };
export default Sidebar;
