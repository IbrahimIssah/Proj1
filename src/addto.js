import React from 'react';
import db from './firebase';
import  './addto.css';


function Addto({id,name}) {
    const createChat=()=>{const roomName=prompt('Add New Chat')

    if(roomName)
    {
    db.collection('rooms').add({name:roomName,}
    
     ) }
    }
    return (
        <div>
            <div onClick={createChat} className='sidebarChat'>
                <h2 className='vd'>add New Chat</h2>
                
            </div>
             
            
        </div>
    )
}

export default Addto;
