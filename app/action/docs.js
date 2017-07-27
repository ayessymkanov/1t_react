import { ADD_TO_FOLDER1, ADD_TO_FOLDER2, ADD_TO_FOLDER3 } from './types'

export function addToFolder1(payload) {
    return {
        type: ADD_TO_FOLDER1,
        payload
    }
}

export function addToFolder2(payload) {
    return {
        type: ADD_TO_FOLDER2,
        payload
    }
}

export function addToFolder3(payload) {
    return {
        type: ADD_TO_FOLDER3,
        payload
    }
}
