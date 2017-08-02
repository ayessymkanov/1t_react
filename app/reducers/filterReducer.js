import { CHANGE_SEARCH_TERM, CHANGE_GSW_TYPE, CHANGE_GSW_CATEGORY, CHANGE_SEARCH_AREA, CHANGE_PROCUREMENT_SOURCE,
        CHANGE_PROCUREMENT_REGION, CHANGE_PROCUREMENT_METHOD, CHANGE_ANNOUNCEMENT_STATUS,
        CHANGE_UNIT_PRICE_FROM, CHANGE_UNIT_PRICE_THRU } from '../action/types'
import { Record } from 'immutable'

const FilterModel = Record({
    searchArea: '',
    searchTerm: '',
    gswType: 'G',
    gswCategory: '',
    procurementSource: 'GZ',
    procurementRegion: '',
    procurementMethod: '',
    announcementStatus: '',
    unitPriceFrom: '',
    unitPriceThru: ''
})

const FilterState = new FilterModel()

export function filter(state = FilterState, action) {
    const { type, payload } = action
    switch(type) {
        case CHANGE_SEARCH_TERM:
            return state.set('searchTerm', payload)
        case CHANGE_SEARCH_AREA:
            return state.set('searchArea', payload)
        case CHANGE_GSW_TYPE:
            return state.set('gswType', payload)
        case CHANGE_GSW_CATEGORY:
            return state.set('gswCategory', payload)
        case CHANGE_PROCUREMENT_SOURCE:
            return state.set('procurementSource', payload)
        case CHANGE_PROCUREMENT_REGION:
            return state.set('procurementRegion', payload)
        case CHANGE_PROCUREMENT_METHOD:
            return state.set('procurementMethod', payload)
        case CHANGE_ANNOUNCEMENT_STATUS:
            return state.set('announcementStatus', payload)
        case CHANGE_UNIT_PRICE_FROM:
            return state.set('unitPriceFrom', payload)
        case CHANGE_UNIT_PRICE_THRU:
            return state.set('unitPriceThru', payload)
        default:
            return state
    }
}
