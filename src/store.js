import { createStore } from "redux";
import showReducer from "./redux/popUp/reducers/showPopUp";
import listReducer from "./redux/todoList/reducers/listReducer";

const store = createStore(showReducer, listReducer);

export default store;
