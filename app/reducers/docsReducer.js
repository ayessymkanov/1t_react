import { ADD_TO_FOLDER1, ADD_TO_FOLDER2, ADD_TO_FOLDER3, DELETE_FROM_FOLDER1, DELETE_FROM_FOLDER2, DELETE_FROM_FOLDER3 } from '../action/types'

const defaultState = {
    folder1: {
        id: 1,
        name: 'Избранное',
        items: []
    },
    folder2: {
        id: 2,
        name: 'Посмотреть позже',
        items: []
    },
    folder3: {
        id: 3,
        name: 'Топ тендеры',
        items: []
    }
}


export function docsReducer(state = defaultState, action) {
    const { type, payload } = action

    switch(type) {
        case ADD_TO_FOLDER1: {
            return {
                ...state,
                folder1: {
                    ...state.folder1,
                    items: [...state.folder1.items, payload]
                }
            }
        }
        case ADD_TO_FOLDER2: {
            return {
                ...state,
                folder2: {
                    ...state.folder2,
                    items: [...state.folder2.items, payload]
                }
            }
        }
        case ADD_TO_FOLDER3: {
            return {
                ...state,
                folder3: {
                    ...state.folder3,
                    items: [...state.folder3.items, payload]
                }
            }
        }
        case DELETE_FROM_FOLDER1: {
            return {
                ...state,
                folder1: {
                    ...state.folder1,
                    items: state.folder1.items.filter(item => item.id !== payload)
                }
            }
        }
        case DELETE_FROM_FOLDER2: {
            return {
                ...state,
                folder2: {
                    ...state.folder2,
                    items: state.folder2.items.filter(item => item.id !== payload)
                }
            }
        }
        case DELETE_FROM_FOLDER3: {
            return {
                ...state,
                folder3: {
                    ...state.folder3,
                    items: state.folder3.items.filter(item => item.id !== payload)
                }
            }
        }
    }
    return state
}
