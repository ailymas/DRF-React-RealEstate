import {combineReducers} from 'redux'
import {propertiesListReducer} from './propretyReducer'

export default combineReducers({
    propertiesList:propertiesListReducer
})


