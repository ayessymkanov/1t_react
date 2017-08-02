import { ADD_TO_FOLDER1, ADD_TO_FOLDER2, ADD_TO_FOLDER3 } from '../action/types'
import { Record, List } from 'immutable'

const FolderModel = Record({
    id: null,
    name: '',
    items: List()
})

const DocsModel = Record({
    folder1: new FolderModel({
        id: 1,
        name: 'Папка 1'
    }),
    folder2: new FolderModel({
        id: 2,
        name: 'Папка 2'
    }),
    folder3: new FolderModel({
        id: 3,
        name: 'Папка 3'
    })
})

const initialState = new DocsModel()

export function docsReducer(state = initialState, action) {
    const { type, payload } = action

    switch(type) {
        case ADD_TO_FOLDER1:
            return state.updateIn(['folder1', 'items'], docs => docs.push(payload))
        case ADD_TO_FOLDER2:
            return state.updateIn(['folder2', 'items'], docs => docs.push(payload))
        case ADD_TO_FOLDER3:
            return state.updateIn(['folder3', 'items'], docs => docs.push(payload))
    }
    return state
}
