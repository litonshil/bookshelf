import * as Types from "../actions/types";

const init = {
    isAuthenticated: false,
    book: [],
    error: {},
};

const bookReducer = (state = init, action) => {
    console.log("reducer called", action);
    switch (action.type) {
        case Types.LOAD_BOOKS: {
            return {
                ...state,
                book: [...state.book],
                isAuthenticated: Object.keys(action.payload.user).length !== 0,
                error: {},
            };
        }
        case Types.SET_BOOK: {
            return {
                ...state,
                book: [...state.book, action.payload.book],
            };
        }
        default:
            return state;
    }
};

export default bookReducer;
