import { CHANGE_SEARCH_TERM, CHANGE_GSW_TYPE, CHANGE_GSW_CATEGORY, CHANGE_SEARCH_AREA, CHANGE_PROCUREMENT_SOURCE,
        CHANGE_PROCUREMENT_REGION, CHANGE_PROCUREMENT_METHOD, CHANGE_ANNOUNCEMENT_STATUS,
        CHANGE_UNIT_PRICE_FROM, CHANGE_UNIT_PRICE_THRU } from '../action/types'
import { Record } from 'immutable'

const Filter = Record({
    searchArea: '',
    searchTerm: '',
    gswType: '',
    gswCategory: '',
    procurementSource: 'GZ',
    procurementRegion: '',
    procurementMethod: '',
    announcementStatus: '',
    unitPriceFrom: '',
    unitPriceThru: ''
})

const FilterState = new Filter()

const defaultState = {
    searchArea: '',
    searchTerm: '',
    gswType: '',
    gswCategory: '',
    procurementSource: 'GZ',
    procurementRegion: '',
    procurementMethod: '',
    announcementStatus: '',
    unitPriceFrom: '',
    unitPriceThru: ''
}

// export function filter(state = FilterState, action) {
//     const { type, payload } = action
//     switch(type) {
//         case CHANGE_SEARCH_TERM: {
//             return FilterState.set('searchTerm', payload)
//         }
//         case CHANGE_SEARCH_AREA: {
//             return FilterState.set('searchArea', payload)
//         }
//         case CHANGE_GSW_TYPE: {
//             return FilterState.set('gswType', payload)
//         }
//         case CHANGE_GSW_CATEGORY: {
//             return FilterState.set('gswCategory', payload)
//         }
//         case CHANGE_PROCUREMENT_SOURCE: {
//             return FilterState.set('procurementSource', payload)
//         }
//         case CHANGE_PROCUREMENT_REGION: {
//             return FilterState.set('procurementRegion', payload)
//         }
//         case CHANGE_PROCUREMENT_METHOD: {
//             return FilterState.set('procurementMethod', payload)
//         }
//         case CHANGE_ANNOUNCEMENT_STATUS: {
//             return FilterState.set('announcementStatus', payload)
//         }
//         case CHANGE_UNIT_PRICE_FROM: {
//             return FilterState.set('unitPriceFrom', payload)
//         }
//         case CHANGE_UNIT_PRICE_THRU: {
//             return FilterState.set('unitPriceThru', payload)
//         }
//     }
//     return state
// }

export function filter(state = defaultState, action) {
    const { type, payload } = action
    switch(type) {
        case CHANGE_SEARCH_TERM: {
            return {
                ...state,
                searchTerm: payload
            }
        }
        case CHANGE_SEARCH_AREA: {
            return {
                ...state,
                searchArea: payload
            }
        }
        case CHANGE_GSW_TYPE: {
            return {
                ...state,
                gswType: payload
            }
        }
        case CHANGE_GSW_CATEGORY: {
            return {
                ...state,
                gswCategory: payload
            }
        }
        case CHANGE_PROCUREMENT_SOURCE: {
            return {
                ...state,
                procurementSource: payload
            }
        }
        case CHANGE_PROCUREMENT_REGION: {
            return {
                ...state,
                procurementRegion: payload
            }
        }
        case CHANGE_PROCUREMENT_METHOD: {
            return {
                ...state,
                procurementMethod: payload
            }
        }
        case CHANGE_ANNOUNCEMENT_STATUS: {
            return {
                ...state,
                announcementStatus: payload
            }
        }
        case CHANGE_UNIT_PRICE_FROM: {
            return {
                ...state,
                unitPriceFrom: payload
            }
        }
        case CHANGE_UNIT_PRICE_THRU: {
            return {
                ...state,
                unitPriceThru: payload
            }
        }
    }

    return state
}
