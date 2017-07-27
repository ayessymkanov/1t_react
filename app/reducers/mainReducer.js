import { LOGIN, LOGOUT } from '../action/types'

const initialState = {
    loggedIn: false
}

export function mainReducer(state = initialState, action) {
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
