import { createStore, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import { counterReducer } from './reducer/counter.reducer'
import { rooteReducer } from '.'
// import { rooteReducer } from './index'
import createSagaMiddleware from 'redux-saga'
import authSaga from './saga/auth.saga'
import rootSaga from './saga'


const saga = createSagaMiddleware()

const sagaMiddlewares = [saga, thunk]

export const store = createStore(rooteReducer, applyMiddleware(...sagaMiddlewares))

saga.run(rootSaga)  