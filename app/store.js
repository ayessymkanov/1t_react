import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { mainReducer } from './reducers/mainReducer'
import { searchReducer } from './reducers/searchReducer'
import { docsReducer } from './reducers/docsReducer'
import { filter } from './reducers/filterReducer'
import logger from 'redux-logger'
import throttle from 'lodash/throttle'
import { toJSON, fromJSON } from 'transit-immutable-js'

const middleware = applyMiddleware(thunk, logger)

const saveTransitState = (state) => {
    try {
        const transitState = toJSON(state)
        localStorage.setItem('transitState', transitState)
    } catch(err) {
        console.log('error while trying to save transit state', err)
    }
}

const loadTransitState= () => {
    try {
        const savedState = fromJSON(localStorage.getItem('transitState'))
        if(savedState === null) {
            return undefined
        } else {
            return savedState
        }
    } catch(err) {
        return undefined
    }
}

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

const persistedTransitState = loadTransitState()
const persistedState = loadState()
console.log('converted persisted state', persistedState)
console.log('--------transit state----------', persistedTransitState)

export const store = createStore(combineReducers({
    mainReducer,
    searchReducer,
    docsReducer,
    filter
}), persistedState, middleware)

store.subscribe(throttle(() => {
    console.log('new changes to state', store.getState())
    saveState({
        docsReducer: store.getState().docsReducer
    })
    saveTransitState(store.getState())
}, 1000))
