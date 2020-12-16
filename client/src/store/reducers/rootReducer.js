import { combineReducers } from "redux";
import authReducer from "./authReducer";
import bookReducer from "./bookReducer";
import addBookReducer from "./addBookReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  books: bookReducer,
  bookss: addBookReducer,
});

export default rootReducer;
