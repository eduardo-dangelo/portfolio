
const AUTH = 'AUTH'
const LOADING = 'LOADING'
const SET_USER = 'SET_USER'
const SUBMITTING = 'SUBMITTING'
const LOG_OUT_USER = 'LOG_OUT_USER'

const initialValues = {
  user: null,
  isAuth: true,
  loading: false,
  authType: 'signIn',
}

export function reducer(state = initialValues, action) {
  switch (action.type) {
    case LOG_OUT_USER:
      return {
        ...state,
        user: null,
        isAuth: false,
      }
    case LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case SUBMITTING:
      return {
        ...state,
        loading: action.payload
      }
    case AUTH:
      return {
        ...state,
        isAuth: action.payload
      }
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuth: true
      }
    default:
      return state
  }
}

const logOut = () => ({ type: LOG_OUT_USER })
const loading = (payload) => ({ type: LOADING, payload })
const auth = (payload) => ({ type: AUTH, payload })
const setUser = (payload) => ({ type: SET_USER, payload })

export const actions = {
  auth,
  logOut,
  setUser,
  loading,
}