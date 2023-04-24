import {combineReducers}from'redux'
import showReducer from './showReducer'

const reducers=combineReducers({
    show:showReducer
})

export default reducers