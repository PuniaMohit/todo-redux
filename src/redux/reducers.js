import { combineReducers } from "redux";
import showReducer from "./popUp/reducers/showPopUp";
import listReducer from "./todoList/reducers/listReducer";
import errorReducer from "./error/reducers/errorReducer";

const reducers = combineReducers({
  show: showReducer,
  list: listReducer,
  inputError: errorReducer,
});

export default reducers;
