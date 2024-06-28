import {
  AUTH_FAIL,
  AUTH_LOGOUT,
  AUTH_START,
  AUTH_SUCCESS,
} from "../actions/actionsTypes"
import { updateObject } from "../utility"

export interface AuthState {
  error: any
  loading: boolean
  token: any
}

const initialState: AuthState = {
  error: null,
  loading: false,
  token: undefined,
}

const authStart = (state: any, action: any) => {
  return updateObject(state, {
    error: null,
    loading: action.loading,
  })
}

const authSuccess = (state: any, action: any) => {
  return updateObject(state, {
    token: action.token,
    error: null,
    loading: false,
  })
}

const authFail = (state: any, action: any) => {
  console.log("authFail reducer called with error:", action.error)
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const authLogout = (state: any, action: any) => {
  return updateObject(state, {
    token: null,
  })
}

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH_START:
      return authStart(state, action)
    case AUTH_SUCCESS:
      return authSuccess(state, action)
    case AUTH_FAIL:
      return authFail(state, action)
    case AUTH_LOGOUT:
      return authLogout(state, action)
    default:
      return state
  }
}

export default authReducer
