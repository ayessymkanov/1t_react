import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { searchReducer } from './reducers/searchReducer'
import logger from 'redux-logger'

const middleware = applyMiddleware(thunk, logger)

export const store = createStore(searchReducer, middleware)
