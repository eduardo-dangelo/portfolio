
const LOADING = 'LOADING'
const SUBMITTING = 'SUBMITTING'
const LOG_OUT_USER = 'LOG_OUT_USER'
const UPDATE_USER_INFO = 'UPDATE_USER_INFO'
const AUTHENTICATE_USER = 'AUTHENTICATE_USER'
const SET_AUTHENTICATION_TYPE = 'SET_AUTHENTICATION_TYPE'

const initialValues = {
  user: null,
  isAuth: false,
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
    default:
      return state
  }
}

const logOut = () => ({ type: LOG_OUT_USER })
const loading = (payload) => ({ type: LOADING, payload })
const setAuthType = (authType) => ({ type: LOG_OUT_USER })

export const actions = {
  logOut,
  loading,
}