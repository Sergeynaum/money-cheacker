import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import AddCategoryToState from './AddCategoryToState'

export  const AppReducer = combineReducers({
    router: routerReducer,
    categories: AddCategoryToState,
  })
  