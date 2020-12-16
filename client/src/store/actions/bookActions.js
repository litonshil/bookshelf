import Axios from 'axios'
import * as Types from './types'


export const loadBooks = () =>dispatch => {
    Axios.get('/api/books/')
    .then(response => {
        dispatch({
            type:Types.LOAD_BOOKS,
            payload: {
                books: response.data
            }
        })
    })
    .catch(error => {
        console.log(error)
    })
}