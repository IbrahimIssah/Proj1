

export const increment=()=>{

   return {
    type:'SETUSER'
    };


};


export const decrement=()=>{

    return {
     type:'SUB'
     };
 
 
 };

 export const logg=(user)=>{

    return {
     type:'LOGIN',
     payload:user
     };
 
 
 };
