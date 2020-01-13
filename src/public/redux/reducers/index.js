import {combineReducers} from 'redux'
// import engineers from './engineers'
// import companies from './companies'
import Auth from './auth'
import getEngineersReducer from './engineersList'
import Project from './project'

const rootReducer = combineReducers({
  Auth,
  getEngineersReducer,
  Project
  // getEngineersReducer
})

export default rootReducer