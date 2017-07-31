import { CHANGE_SEARCH_TERM, CHANGE_GSW_TYPE, CHANGE_GSW_CATEGORY, CHANGE_SEARCH_AREA, CHANGE_PROCUREMENT_SOURCE,
        CHANGE_PROCUREMENT_REGION, CHANGE_PROCUREMENT_METHOD, CHANGE_ANNOUNCEMENT_STATUS,
        CHANGE_UNIT_PRICE_FROM, CHANGE_UNIT_PRICE_THRU } from './types'

export const changeSearchTerm = payload => {
    return {
        type: CHANGE_SEARCH_TERM,
        payload
    }
}

export const changeSearchArea = payload => {
    return {
        type: CHANGE_SEARCH_AREA,
        payload
    }
}
export const changeGswType = payload => {
    return {
        type: CHANGE_GSW_TYPE,
        payload
    }
}
export const changeGswCategory = payload => {
    return {
        type: CHANGE_GSW_CATEGORY,
        payload
    }
}
export const changeProcurementSource = payload => {
    return {
        type: CHANGE_PROCUREMENT_SOURCE,
        payload
    }
}
export const changeProcurementRegion = payload => {
    return {
        type: CHANGE_PROCUREMENT_REGION,
        payload
    }
}
export const changeProcurementMethod = payload => {
    return {
        type: CHANGE_PROCUREMENT_METHOD,
        payload
    }
}
export const changeAnnouncementStatus = payload => {
    return {
        type: CHANGE_ANNOUNCEMENT_STATUS,
        payload
    }
}
export const changeUnitPriceFrom = payload => {
    return {
        type: CHANGE_UNIT_PRICE_FROM,
        payload
    }
}
export const changeUnitPriceThru = payload => {
    return {
        type: CHANGE_UNIT_PRICE_THRU,
        payload
    }
}
