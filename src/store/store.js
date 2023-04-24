import { createStore } from 'redux';
import showReducer from '../reducers/showReducer';

const store = createStore(showReducer);

export default store;