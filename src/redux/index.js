import { combineReducers } from "redux";
import { counterReducer } from "./reducer/counter.reducer";
import { medisinReducer } from "./reducer/medisin.reducer";
import medisinSlice from "./slice/medisin.slice";
import { authReducer } from "./reducer/auth.reducer";


export const rooteReducer = combineReducers({
    counter: counterReducer,
    medisin: medisinSlice,
    auth: authReducer,
})