const initialKeyState = {
  key: '',
}

const keyReducer = (state = initialKeyState, action) => {
  switch (action.type) {
    case 'SET_KEY':
      return {
        ...state,
        key: action.payload,
      }
    default:
      return state
  }
}

export default keyReducer
