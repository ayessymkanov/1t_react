import { ADD_TO_FOLDER1, ADD_TO_FOLDER2, ADD_TO_FOLDER3 } from '../action/types'

const initialState = {
    folder1: {
        id: 1,
        name: 'Folder 1',
        items: [
            {title: 'Hello world', owner: 'Arman', id: 1}
        ]
    },
    folder2: {
        id: 2,
        name: 'Folder 2',
        items: [
            {title: 'Fuck the king', owner: 'Hound', id: 1},
            {title: 'I will be your champion', owner: 'Oberyn', id: 2}
        ]
    },
    folder3: {
        id: 3,
        name: 'Folder 3',
        items: [
            {title: 'Winter is coming', owner: 'Bastard', id: 1}
        ]
    }
}

export function docsReducer(state = initialState, action) {
    const { type, payload } = action

    switch(type) {
        case ADD_TO_FOLDER1: {
            return {
                ...state,
                folder1: {...state.folder1, items: [...folder1.items, payload]}
            }
        }
        case ADD_TO_FOLDER2: {
            return {
                ...state,
                folder2: {...state.folder2, items: [...folder2.items, payload]}
            }
        }
        case ADD_TO_FOLDER3: {
            return {
                ...state,
                folder3: {...state.folder3, items: [...folder3.items, payload]}
            }
        }
    }

    return state
}
