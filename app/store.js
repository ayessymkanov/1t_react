import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { searchReducer } from './reducers/searchReducer'

const middleware = applyMiddleware(thunk)

const store = createStore(searchReducer, middleware)
