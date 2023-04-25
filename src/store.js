import { createStore } from "redux";
// import showReducer from "./redux/popUp/reducers/showPopUp";
// import listReducer from "./redux/todoList/reducers/listReducer";
import reducers from "./redux/reducers";

const store = createStore(reducers);

export default store;
