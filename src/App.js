import React,{useState,useContext} from 'react';
import {BrowserRouter as Router,Route,Switch,Link,} from 'react-router-dom';
/*import './App.css'
import Sidebar from './sidebar.js';
import Chat from './chat.js';
import Addto from './addto.js';
import db from './firebase';
/*import Login from './login.js';
import {useStateValue} from './StateProvider.';*/
import FlameComp from './secProject/flameComp.js'
import HeaderComp from './secProject/headerComp.js';
import ProfileComp from './secProject/profileComp.js';
import QuestionsComp from './secProject/questionsComp.js';
import SignInComp from './secProject/signInComp.js';
import {UserProvider} from './secProject/UserContext';
import {UserContex} from './secProject/UserContext'
import {useSelector,useDispatch} from 'react-redux';
import { LocalGasStation } from '@material-ui/icons';
import { StateProvider,StateContext, useStateValue} from './secProject/StateProvider.js';
import LogInContextProvider, { LogInContext } from './Contex/loginContext';
import SignInRdContextProvider from './Contex/signInReducerContext'

function App() {
 // const login = useSelector(state=>state.login) 
 // const dispatch = useDispatch();
 // initialState =user;
const [{user},dispatch] = useStateValue();
//const {logins,dispatch}= useContext(LogInContext)
//const name=logins.displayName
  //const[{users},setUsers]= useContext(UserContex)
 // const [user,setUser]=useState('')
  return(
    
    /*
  <div className='app'>

   

    <div className='appBody'>

      <Router>
      
      
    <Sidebar/>

<Switch>
  
   <Route path="/rooms/:roomId">
      <Chat/>
      </Route>

    <Route path="/">
      <Chat/>
    </Route>
      </Switch>
       </Router> 
        
    </div> 
)
    </div> */
   // <UserProvider>
   <LogInContextProvider>
   <SignInRdContextProvider>
  <div>
   { ! user ? (
      <SignInComp/>

    ):(
<Router>
<div>
  
  <Switch>
  <Route path='/' exact >
    <FlameComp/>
    </Route>
  
  <Route path='/profileComp' exact>
    
    <ProfileComp/>
    
    </Route>
    <Switch>
      <Route path ='/Q&A'>
        <HeaderComp/>
      <QuestionsComp />

      </Route>
    </Switch>

</Switch>
</div>
</Router>)}
</div>
</SignInRdContextProvider>
</LogInContextProvider>
//</UserProvider>

  )
    }
export default App;