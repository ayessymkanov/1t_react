import { FETCH_PROCITEMS, RETRIEVED_PROCITEMS,
         FETCH_ERROR, FILTER_SEARCH_RESULTS } from '../action/types'

import { Record, List } from 'immutable'

const State = Record({
    searchResults: List(),
    loading: false,
    loaded: false,
    error: null,
    idGreaterThanFive: false
})

const SearchState = new State()

export function searchReducer(state = SearchState, action) {

    const { type, payload } = action
    switch(type) {
        case FETCH_PROCITEMS: {
            return SearchState.set('loading', true).set('idGreaterThanFive', false)
        }
        case RETRIEVED_PROCITEMS: {
            return SearchState.set('loading', false).set('loaded', true).set('searchResults', List(payload))
        }
        case FETCH_ERROR: {
            return SearchState.set('loading', false).set('loaded', false).set('error', payload)
        }
        case FILTER_SEARCH_RESULTS: {
            return SearchState.set('idGreaterThanFive', !SearchState.get('idGreaterThanFive'))
        }
    }
    return state
}

// const initialState = {
//     searchResults: [],
//     loading: false,
//     loaded: false,
//     error: null,
//     idGreaterThanFive: false,
//     inputString: '',
//     searchObj: {
//         searchArea: '',
//         searchTerm: '',
//         gswType: '',
//         gwsCategory: '',
//         procurementSource: '',
//         procurementRegion: '',
//         procurementMethod: '',
//         announcementStatus: '',
//         unitPriceFrom: '',
//         unitPriceThru: ''
//     }
// }

// export function searchReducer(state = initialState, action) {
//     const { type, payload } = action
//     switch(type) {
//         case FETCH_PROCITEMS: {
//             return {
//                 ...state,
//                 loading: true,
//                 idGreaterThanFive: false
//             }
//         }
//         case RETRIEVED_PROCITEMS: {
//             return {
//                 ...state,
//                 loading: false,
//                 loaded: true,
//                 searchResults: payload
//             }
//         }
//         case FETCH_ERROR: {
//             return {
//                 ...state,
//                 loading: false,
//                 loaded: false,
//                 error: payload
//             }
//         }
//         case FILTER_SEARCH_RESULTS: {
//             return {
//                 ...state,
//                 idGreaterThanFive: !state.idGreaterThanFive
//             }
//         }
//         case CHANGE_SEARCH_INPUT: {
//             return {
//                 ...state,
//                 inputString: payload
//             }
//         }
//     }
//
//     return state
// }
