import { LOGIN, LOGOUT } from './types'

export function login() {
    //code for async request

    return { //for now
        type: LOGIN
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}
