

const userReducer=(state = 0,action)=>{
    switch(action.type){
        case 'SETUSER':
        return state + 1

        case 'SUB':
return state - 1


        default:
            return state;
    }
}

export default userReducer 