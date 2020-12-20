import Axios from "axios";
import * as Types from "./types";

export const add = (book, history) => (dispatch) => {
    Axios.post("api/books", book)
        .then((res) => {
            dispatch({
                type: Types.SET_BOOK,
                payload: {
                    book: res.data,
                    error: {},
                },
            });
            //console.log(res);
            history.push("/dashboard");
        })
        .catch((error) => {
            dispatch({
                type: Types.BOOKS_ERROR,
                payload: {
                    error: error.response.data,
                },
            });
        });
};
