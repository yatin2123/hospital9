import { createStore, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import { counterReducer } from './reducer/counter.reducer'
import { rooteReducer } from '.'
// import { rooteReducer } from './index'
import createSagaMiddleware from 'redux-saga'
import authSaga from './saga/auth.saga'
import rootSaga from './saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rooteReducer)



const saga = createSagaMiddleware()

const sagaMiddlewares = [saga, thunk]

export const store = createStore(persistedReducer, applyMiddleware(...sagaMiddlewares))
export const persistor = persistStore(store)

saga.run(rootSaga)  