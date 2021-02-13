import React,{useEffect, useState} from 'react'
import AttachFile from '@material-ui/icons/AttachFile';
import {IconButton} from '@material-ui/core';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import './footer.css';
import { ViewHeadlineTwoTone } from '@material-ui/icons';


function Footer() {

    const [input,setInput] = useState("");

    const [Count,setCount] = useState(0);
    useEffect(()=>{
document.getElementsByClassName('input')
const ab=input.length
setCount(ab)
    })
        

    const sendMessages = (e) => { e.preventDefault();
    setInput('');
};
    const Shows=()=>{
        document.getElementsByClassName('input')
        const vh=input.length
        alert(100-vh)
    }

    return (
<div className='chatFoote'>    <IconButton>
            <InsertEmoticonIcon/> </IconButton>
            <form className='form1'>
                <input value={input}onChange={(e)=>setInput(e.target.value)} className='input' type='text' placeholder='type message' />
                <button onClick={sendMessages} type='submit' className='button1'>send message</button>
            </form>
            <p onClick={Shows}>hi</p>
            <button>{Count}</button>
            
            <IconButton>
            <MicIcon/>
             </IconButton>
             <IconButton>
             
             <button className='iko' >&#9776;</button>
             </IconButton>
             
             </div>

    )
    
}

export default Footer
