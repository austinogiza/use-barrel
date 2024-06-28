import axios from "axios"
import {
  AUTH_FAIL,
  AUTH_LOGOUT,
  AUTH_START,
  AUTH_SUCCESS,
} from "./actionsTypes"
import { loginURL, userSignUpURL } from "@/api/constants"
import { toast } from "sonner"

export const authStart = (loading: boolean) => {
  return {
    type: AUTH_START,
    loading: loading,
  }
}

export const authSuccess = (token: any) => {
  return {
    type: AUTH_SUCCESS,
    token: token,
  }
}

export const authFail = (error: any) => {
  return {
    type: AUTH_FAIL,
    error: error,
  }
}

export const authLogout = () => {
  localStorage.removeItem("janeFashionToken")
  localStorage.removeItem("_hjid")
  localStorage.removeItem("janeFashionTokenDate")

  localStorage.clear()
  return {
    type: AUTH_LOGOUT,
  }
}

export const checkAuthTimeOut = (expirationTime: any) => {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(authLogout())
    }, expirationTime + 7 * 24 * 60 * 60 * 1000)
  }
}

export const authLogin = (email?: any, password?: any, router?: any) => {
  return (dispatch?: any) => {
    dispatch(authStart(true))

    axios
      .post(loginURL, { email, password })
      .then((res) => {
        const token = res.data.key

        const expirationDate = new Date(
          new Date().getTime() + 7 * 24 * 60 * 60 * 1000
        )
        localStorage.setItem("janeFashionToken", token)
        localStorage.setItem(
          "janeFashionTokenDate",
          expirationDate.toISOString()
        )
        dispatch(authSuccess(token))
        dispatch(checkAuthTimeOut(3600 * 1000))
        dispatch(authStart(false))

        const oldRoute = localStorage.getItem("redirectAfterLogin")
        if (oldRoute !== null) {
          router.push(`/product/${oldRoute}`)
        } else {
          router.push("/dashboard/orders")
        }
      })
      .catch((err) => {
        if (
          err.response &&
          err.response.data &&
          err.response.data.non_field_errors
        ) {
          dispatch(authFail(err.response.data.non_field_errors[0]))
        } else {
          dispatch(authFail("An unknown error occurred"))
        }
        dispatch(authStart(false))
      })
  }
}
export const authSignup = (
  first_name: string,
  last_name: string,
  email: string,
  password1: string,
  password2: string,
  router?: any
) => {
  return (dispatch: any) => {
    dispatch(authStart(true))
    axios
      .post(userSignUpURL, {
        first_name,
        last_name,

        email,
        password1,
        password2,
      })
      .then((res) => {
        const token = res.data.key
        const expirationDate = new Date(
          new Date().getTime() + 7 * 24 * 60 * 60 * 1000
        )
        localStorage.setItem("janeFashionToken", token)
        localStorage.setItem(
          "janeFashionTokenDate",
          expirationDate.toISOString()
        )
        dispatch(authSuccess(token))
        dispatch(checkAuthTimeOut(3600))
        dispatch(authStart(false))
        toast.success("Account created successfully.", {
          description: "You will be redirected shortly!!",
        })
        const oldRoute = localStorage.getItem("redirectAfterLogin")
        if (oldRoute !== null) {
          router.push(`${oldRoute}`)
        } else {
          router.push("/dashboard/orders")
        }
      })
      .catch((err) => {
        dispatch(authStart(false))
        const authError =
          err.response.data?.email?.[0] ||
          err.response.data?.password1?.[0] ||
          err.response.data?.password2?.[0]
        dispatch(authFail(authError))
      })
  }
}
export const authCheckState = () => {
  return (dispatch: any) => {
    dispatch(authStart(true))
    const token = localStorage.getItem("janeFashionToken")
    const expirationDateString = localStorage.getItem("janeFashionTokenDate")

    if (!token) {
      dispatch(authLogout())
      dispatch(authStart(false))
      dispatch(authSuccess(null))
      return
    }

    if (!expirationDateString) {
      dispatch(authLogout())
      dispatch(authSuccess(null))
      dispatch(authStart(false))
      return
    }

    const expirationDate = new Date(expirationDateString)
    if (expirationDate <= new Date()) {
      dispatch(authLogout())
      dispatch(authStart(false))
      dispatch(authSuccess(null))
    } else {
      dispatch(authSuccess(token))
      dispatch(
        checkAuthTimeOut(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        )
      )
      dispatch(authStart(false))
    }
  }
}
