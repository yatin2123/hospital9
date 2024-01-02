import { createStore, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import { counterReducer } from './reducer/counter.reducer'



export const store = createStore(counterReducer, applyMiddleware(thunk))