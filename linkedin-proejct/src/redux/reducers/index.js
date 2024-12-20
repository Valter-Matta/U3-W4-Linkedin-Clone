import { GET_EXPERIENCE, GET_PROFILE } from '../actions'

const initialState = {
  users: {},
  experiences: [],
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        users: action.payload,
      }
    case GET_EXPERIENCE:
      return {
        ...state,
        experiences: action.payload,
      }
    case 'SET_PHOTO':
      return {
        ...state,
        users: {
          ...state.users,
          image: action.payload,
        },
      }

    default:
      return state
  }
}
export default mainReducer
