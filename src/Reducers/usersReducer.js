//import React,{createContext} from 'react';
//const initialState={
  //  user:null,
//}
export const usersReducer=(state=[],action)=>{
    switch(action.type){
        case 'LOGIN_USER':
            return state+1

            case 'CANCEL':
            return state==''
            
    
                            
            
                
                                    default:
                                        return state
                                   
                
                    

                    
                   

    }

}