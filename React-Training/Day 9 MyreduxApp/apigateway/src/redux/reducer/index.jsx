import { Reducer } from './userReducer';
import { combineReducers } from 'redux';
const rootReducer=combineReducers({
    apiUserData:Reducer,
})

export default rootReducer;