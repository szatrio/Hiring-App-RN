import {createStore, applyMiddleware} from 'redux'
import AsyncStorage from '@react-native-community/async-storage'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import {persistStore, persistReducer} from 'redux-persist'

import rootReducer from '../reducers'

const logger = createLogger({})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  applyMiddleware(logger, thunk),
)

let persistor = persistStore(store)

export {store, persistor}