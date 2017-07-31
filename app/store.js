import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { mainReducer } from './reducers/mainReducer'
import { searchReducer } from './reducers/searchReducer'
import { docsReducer } from './reducers/docsReducer'
import { filter } from './reducers/filter'
import logger from 'redux-logger'

const middleware = applyMiddleware(thunk, logger)

export const store = createStore(combineReducers({
    mainReducer,
    searchReducer,
    docsReducer,
    filter
}), middleware)
