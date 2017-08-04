import { ADD_TO_FOLDER1, ADD_TO_FOLDER2, ADD_TO_FOLDER3, DELETE_FROM_FOLDER1, DELETE_FROM_FOLDER2, DELETE_FROM_FOLDER3 } from './types'

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

export function deleteDoc(folderId, docId) {
    switch(folderId) {
        case 1: {
            return {
                type: DELETE_FROM_FOLDER1,
                payload: docId
            }
        }
        case 2: {
            return {
                type: DELETE_FROM_FOLDER2,
                payload: docId
            }
        }
        case 3: {
            return {
                type: DELETE_FROM_FOLDER3,
                payload: docId
            }
        }
    }
    return null
}
