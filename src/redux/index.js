import { combineReducers } from "redux";
import { counterReducer } from "./reducer/counter.reducer";
import { medisinReducer } from "./reducer/medisin.reducer";
import medisinSlice from "./slice/medisin.slice";


export const rooteReducer = combineReducers({
    counter: counterReducer,
    medisin: medisinSlice
})