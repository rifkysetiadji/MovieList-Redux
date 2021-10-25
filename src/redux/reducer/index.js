import {combineReducers} from 'redux'
import movie from './movie'
import general from './general'
export default combineReducers({
    movie,
    general
})