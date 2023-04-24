import { combineReducers } from "redux";
import showReducer from "./popUp/reducers/showPopUp";

const reducers = combineReducers({
  show: showReducer,
});

export default reducers;
