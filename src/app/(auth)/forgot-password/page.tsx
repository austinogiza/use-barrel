import React from "react"

import { Metadata } from "next"
import ForgotPassword from "./forgot-password"
export const metadata: Metadata = {
  title: "Forgot Password",
  description:
    "Your one stop The fastest way to design and deploy procurement automation.",
}
const page = () => {
  return (
    <>
      <ForgotPassword />
    </>
  )
}

export default page
