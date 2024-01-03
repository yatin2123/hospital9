import { combineReducers } from "redux";
import { counterReducer } from "./reducer/counter.reducer";
import { medisinReducer } from "./reducer/medisin.reducer";


export const rooteReducer = combineReducers({
    counter: counterReducer,
    medisin: medisinReducer
})