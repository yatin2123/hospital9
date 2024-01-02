import { combineReducers } from "redux";
import { counterReducer } from "./reducer/counter.reducer";


export const rooteReducer = combineReducers({
    counter: counterReducer
})