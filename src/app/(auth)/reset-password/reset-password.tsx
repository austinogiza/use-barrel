import UserResetPasswordForm from "@/components/auth/user-reset-form"
import React from "react"

const ResetPassword = () => {
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
              Enter your email below to log in to your account
            </p>
          </div>
          <UserResetPasswordForm />
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
