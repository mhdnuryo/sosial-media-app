import {createStore} from 'redux';
import {persistReducer} from 'redux-persist';
import {combineReducers} from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import user from './reducers/user'


const config = { key : 'root', storage }

const reducers = combineReducers({user})

export default createStore(
  persistReducer(
    config,
    reducers
  )
)

