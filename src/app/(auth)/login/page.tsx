import React from "react"
import Login from "./login"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Login",
  description:
    "Your one stop The fastest way to design and deploy procurement automation.",
}
const page = () => {
  return (
    <>
      <Login />
    </>
  )
}

export default page
