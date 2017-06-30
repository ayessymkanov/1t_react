import { FETCH_PROCITEMS, RETRIEVED_PROCITEMS,
         FETCH_ERROR, FILTER_SEARCH_RESULTS,
         CHANGE_SEARCH_INPUT } from '../action/types'

const initialState = {
    searchResults: [],
    loading: false,
    loaded: false,
    error: null,
    idGreaterThanFive: false,
    inputString: ''
}

export function searchReducer(state = initialState, action) {
    const { type, payload } = action
    switch(type) {
        case FETCH_PROCITEMS: {
            return {
                ...state,
                loading: true,
                idGreaterThanFive: false
            }
        }
        case RETRIEVED_PROCITEMS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                searchResults: payload
            }
        }
        case FETCH_ERROR: {
            return {
                ...state,
                loading: false,
                loaded: false,
                error: payload
            }
        }
        case FILTER_SEARCH_RESULTS: {
            return {
                ...state,
                idGreaterThanFive: !state.idGreaterThanFive
            }
        }
        case CHANGE_SEARCH_INPUT: {
            return {
                ...state,
                inputString: payload
            }
        }
    }

    return state
}
