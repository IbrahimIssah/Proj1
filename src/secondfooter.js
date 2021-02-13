import React,{useState} from 'react'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import {IconButton} from '@material-ui/core';
import './secondfooter.css';





function Secondfooter() {

    const [input,setInput] = useState("");


    
        

    const sendMessages = (e) => { e.preventDefault();
    
    setInput('');
    };



    return (
        <div className='secondfooter'>
  <IconButton>
            <InsertEmoticonIcon/> </IconButton>
            <form className='form1'>
                <input value={input} onChange={(e)=>setInput(e.target.value)} className='inputt' type='text' placeholder='type message' />
                <button onClick={sendMessages} type='submit' className='button1'>send message</button>
            </form>
            <IconButton>
            <MicIcon/>
            </IconButton>
            <IconButton>
            <button className='ico'>&#9776;</button>
             </IconButton>
             
             </div>

    
    )
}

export default Secondfooter;

