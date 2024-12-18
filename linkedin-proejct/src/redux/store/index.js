import { configureStore, combineReducers } from '@reduxjs/toolkit'
import mainReducer from '../reducers/index'

const bigReducer = combineReducers({
  profile: mainReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export default store
