import { configureStore, combineReducers } from '@reduxjs/toolkit'
import mainReducer from '../reducers/index'
import keyReducer from '../reducers/keyReducer'

const bigReducer = combineReducers({
  profile: mainReducer,
  profileKey: keyReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export default store
