import { startFetching, finishFetching, errorFetching, changeSearchInput } from './creators'
import axios from 'axios'
import {store} from '../store'

console.log('in search ajax call', store.getState().filter)

export function startSearch() {
    return (dispatch) => {
        dispatch(startFetching())
        console.log(store.getState().filter.toJS())
        axios.get('http://localhost:9000/backend/api/procurement/search', store.getState().filter.toJS()) // change to proper URL
            .then(response => {
                console.log('response-----------', response)
                dispatch(finishFetching(response.data.content))
                console.log('*****SUCCESS! Got your data*****', store.getState().filter)
            })
            .catch(error => dispatch(errorFetching(error)))
    }
}
