import { createStore, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import { counterReducer } from './reducer/counter.reducer'
import { rooteReducer } from '.'
// import { rooteReducer } from './index'



export const store = createStore(rooteReducer, applyMiddleware(thunk))