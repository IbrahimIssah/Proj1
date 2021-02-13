

import userReducer from './userReducer'
import loginReducer from './IsloginRe'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter:userReducer,
    login:loginReducer
})


export default allReducers