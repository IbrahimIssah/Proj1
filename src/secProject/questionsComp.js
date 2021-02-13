import { Link } from 'react-router-dom'
import React,{useContext} from 'react'
import  './questionsComp.css'
import {UserContex} from './UserContext'
import { LogInContext } from '../Contex/loginContext';
import { SignInRdContext } from '../Contex/signInReducerContext';


function QuestionsComp() {
    
    const {logins} = useContext(LogInContext,)
    const {values,dispatch}=useContext(SignInRdContext)
   //const[users,setUsers]= useContext(UserContex)

   const Rdu=()=>{
       const num=5
    dispatch({
        type:'LOGIN_USER',num
    })
}

const Rdus=()=>{
    dispatch({
        type:'SUB'
    })
}
const Rdud=()=>{
    dispatch({
        type:'CANCEL'
    })
}

const Rdut=()=>{
    dispatch({
        type:'LGN'
    })
}
    return (
        <div className='qss'>

            <p>{logins}</p>
            <p>{values}</p>
         <p> how is the weather today at Botwe?</p>
         <label> 
         <button  onClick={''} className='ppst'>IS Sunny</button></label ><br/>
         <button onClick={''} className='ppst'> Is Cloudy</button> <br/>
         <button onClick={''} className='ppst'>Is Raining</button>

         <p className='ppsd'> how is the trsfic today at Botwe?</p>
         <label> 
         <button className='ppst'> Is OK</button></label ><br/>
         <button className='ppst'>Is Normal</button> <br/>
         <button className='ppst'>Is Bad</button>
         
         
         
         <button onClick={Rdu}>Add</button>
         <button onClick={Rdus}>Subtract</button>
          <button onClick={Rdud}>Cancel</button> 
         <button onClick={Rdut}>+</button>

        </div>
    
    )
}

export default QuestionsComp

