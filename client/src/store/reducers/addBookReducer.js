import * as Types from "../actions/types";

const init = {
    isAuthenticated: false,
    book: [],
    error: {},
};

const addBookReducer = (state = init, action) => {
    switch (action.type) {
        case Types.LOAD_BOOKS: {
            return {
                ...state,
                book: [...state.book, action.payload.book],
                isAuthenticated: Object.keys(action.payload.user).length !== 0,
                error: {},
            };
        }
        case Types.BOOKS_ERROR: {
            return {
                ...state,
                error: action.payload.error,
            };
        }
        default:
            return state;
    }
};

export default addBookReducer;
