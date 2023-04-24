import { createStore } from "redux";
import showReducer from "./redux/popUp/reducers/showPopUp";

const store = createStore(showReducer);

export default store;
