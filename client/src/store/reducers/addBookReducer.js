import * as Types from '../actions/types'

const init = {
    isAuthenticated: false,
    book: {},
    error: {}
}

const addBookReducer = (state=init, action) => {
    switch(action.type) {
        case Types.SET_USER: {
            return {
                book: action.payload.user,
                isAuthenticated: Object.keys(action.payload.user).length !== 0,
                error: {}
            }
        }
        case Types.USERS_ERROR: {
            return {
                ...state,
                error: action.payload.error
            }
        }
        default: return state
    }
}

export default addBookReducer