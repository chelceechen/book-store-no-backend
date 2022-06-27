import { combineReducers } from "redux";
import bookStoreReducer from "./bookStore";

const allReducers = combineReducers({
  bookStore: bookStoreReducer,
});

export default allReducers;
