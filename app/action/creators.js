import { FETCH_PROCITEMS, RETRIEVED_PROCITEMS, FETCH_ERROR,
         FILTER_SEARCH_RESULTS, CHANGE_SEARCH_INPUT } from './types'

export const startFetching = () => {
    return {
        type: FETCH_PROCITEMS
    }
}

export const finishFetching = (payload) => {
    return {
        type: RETRIEVED_PROCITEMS,
        payload
    }
}

export const errorFetching = (payload) => {
    return {
        type: FETCH_ERROR,
        payload
    }
}

export const filterData = () => {
    return {
        type: FILTER_SEARCH_RESULTS
    }
}

export const changeSearchInput = (payload) => {
    return {
        type: CHANGE_SEARCH_INPUT,
        payload
    }
}
