import {persistReducer} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import user from './reducers/user'


const persistConfig = {key : 'root',storage}

const rootReducer = combineReducers({user})

export default configureStore({
  reducer : persistReducer(
    persistConfig,
    rootReducer
  )
})
