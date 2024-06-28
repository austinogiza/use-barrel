const constants =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:8001"
    : "https://api.janes-fashion.com"
export const imagePrefixURL = `${constants}`
export const endpoint = `${constants}/api`
export const authEndpoint = `${constants}/auth`
//auth start
export const passwordResetURL = `${authEndpoint}/password/reset/`
export const loginURL = `${authEndpoint}/login/`
export const userSignUpURL = `${authEndpoint}/registration/`
export const changeUserDashboardPasswordURL = `${authEndpoint}/password/change/`
export const googleLoginURL = `${authEndpoint}/google/`
