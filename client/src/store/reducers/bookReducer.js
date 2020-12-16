import * as Types from '../actions/types'

const bookReducer = (state=[],action) => {
    switch(action.type) {
        case Types.LOAD_BOOKS: {
            return action.payload.books
        }
        default: return state
    }
}

export default bookReducer 