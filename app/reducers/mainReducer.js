import { LOGIN, LOGOUT } from '../action/types'

const defaultState = {
    loggedIn: false
}

export function mainReducer(state = defaultState, action) {
    const { type, payload } = action
    switch(type) {
        case LOGIN: {
            return {
                ...state,
                loggedIn: true
            }
        }
        case LOGOUT: {
            return {
                ...state,
                loggedIn: false
            }
        }
    }
    return state
}
