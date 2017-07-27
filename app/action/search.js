import { startFetching, finishFetching, errorFetching, changeSearchInput } from './creators'
import axios from 'axios'

export function startSearch(inputString, whereToSearch) {
    return (dispatch) => {
        dispatch(changeSearchInput(inputString))
        console.log('whereToSearch', whereToSearch)
        dispatch(startFetching())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                dispatch(finishFetching(response.data))
            })
            .catch(error => dispatch(errorFetching(error)))
    }
}
