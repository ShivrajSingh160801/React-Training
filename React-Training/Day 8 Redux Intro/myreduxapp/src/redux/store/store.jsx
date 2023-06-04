import {createStore,applyMiddleware } from "redux"
import { Reducer } from "../reducer/reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
const middleware = []
const store =  createStore(Reducer,composeWithDevTools(applyMiddleware(thunk)) );


export default store