import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { mainReducer } from './reducers/mainReducer'
import { searchReducer } from './reducers/searchReducer'
import { docsReducer } from './reducers/docsReducer'
import { filter } from './reducers/filterReducer'
import logger from 'redux-logger'

const middleware = applyMiddleware(thunk, logger)

const saveState = (state) => {
    try {
        const stateToBeSaved = JSON.stringify(state)
        localStorage.setItem('state', stateToBeSaved)
    } catch(err) {
        console.log(err)
    }
}

const loadState = () => {
    try {
        const savedState = JSON.parse(localStorage.getItem('state'))
        if(savedState === null || savedState === undefined) {
            return undefined
        }
        console.log('savedState', savedState)
        return savedState
    } catch(err) {
        return undefined
    }
}

const persistedState = loadState()
console.log('converted persisted state', persistedState)

export const store = createStore(combineReducers({
    mainReducer,
    searchReducer,
    docsReducer,
    filter
}), persistedState, middleware)

store.subscribe(() => {
    console.log('new changes to state', store.getState())
    saveState({
        docsReducer: store.getState().docsReducer
    })
})
