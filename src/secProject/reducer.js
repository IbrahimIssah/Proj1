export const initialState = {
    user:null,};

export const actionTypes={
    SET_USER:"SET_USER",
  // SETUSER:"SETUSER"

};
  const reducer=(state,action)=>{
    console.log(action);
    switch(action.type){
        case actionTypes.SET_USER:
        return{
            ...state,user:action.user,
            
        };

        case actionTypes.SETUSER:
           return{
              ...state,user:null
            }
        default:
            return state;
    }
};

/*
export const userReducer=(state = 0,action)=>{
    switch(action.type){
        case actionTypes.SETUSER: 
        return state + 1

        


        default:
            return state;
    }
}*/




export default reducer;