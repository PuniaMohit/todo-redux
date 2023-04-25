import { combineReducers } from "redux";
import showReducer from "./popUp/reducers/showPopUp";
import listReducer from "./todoList/reducers/listReducer";

const reducers = combineReducers({
  show: showReducer,
  list: listReducer,
});

export default reducers;
