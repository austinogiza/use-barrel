import React from "react"

import { Metadata } from "next"
import Signup from "./signup"
export const metadata: Metadata = {
  title: "Signup",
  description:
    "Your one stop The fastest way to design and deploy procurement automation.",
}
const page = () => {
  return (
    <>
      <Signup />
    </>
  )
}

export default page
