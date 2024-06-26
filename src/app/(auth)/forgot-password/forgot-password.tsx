import UserForgotForm from "@/components/auth/user-forgot-form"
import UserLoginForm from "@/components/auth/user-login-form"
import React from "react"

const ForgotPassword = () => {
  return (
    <div className="w-full h-full bg-white flex items-center justify-center min-h-screen">
      {" "}
      <div className="w-full">
        <div className="mx-auto flex w-full flex-col justify-center max-w-[400px] ">
          <div className="flex flex-col space-y-2 text-center mb-5">
            <h1 className="text-2xl font-semibold tracking-tight">
              Reset your Barrel password
            </h1>
            <p className="text-sm text-neutral-500">
              Forgot your password? No worries, it happens to everyone!
            </p>
          </div>
          <UserForgotForm />
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
