import { combineReducers } from 'redux'
import categories from './categories'

const rootReducer = () => combineReducers({
  categoriesList: categories,
})

export default rootReducer