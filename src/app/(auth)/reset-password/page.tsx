import React from "react"

import { Metadata } from "next"
import ResetPassword from "./reset-password"

export const metadata: Metadata = {
  title: "Reset Password",
  description:
    "Your one stop The fastest way to design and deploy procurement automation.",
}
const page = () => {
  return (
    <>
      <ResetPassword />
    </>
  )
}

export default page
