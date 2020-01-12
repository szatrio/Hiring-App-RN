import {combineReducers} from 'redux'
// import engineers from './engineers'
// import companies from './companies'
import Auth from './auth'
import getEngineersReducer from './engineersList'

const rootReducer = combineReducers({
  Auth,
  getEngineersReducer
  // getEngineersReducer
})

export default rootReducer