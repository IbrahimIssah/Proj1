import React from 'react'
import {Link} from 'react-router-dom'

function HeaderComp() {
    return (
        <div>

            
               <div className='pe'>
            <Link to='/'>
                     <p className='pr'>HomePage</p>
                     </Link>
                     
                     <Link to='/' >
                       <p className='pr'>News Feed</p>
                       </Link>
                       <Link to='/Q&A'>
                       <p className='pr'>Q&A</p> 
                       </Link>
                       
                       
               </div>
        </div>
    )
}

export default HeaderComp
