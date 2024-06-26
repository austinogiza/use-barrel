import { BarrelDefaultButton } from "@/styles/ButtonStyles"
import { PrimaryInput, PrimaryLabel } from "@/styles/InputStyle"
import Link from "next/link"
import React from "react"
import { twc } from "react-twc"

const UserResetPasswordForm = () => {
  return (
    <>
      {" "}
      <div className="w-full px-4">
        <form
          //   onSubmit={onSubmit}
          className="w-full"
        >
          <div className="w-full">
            <div className="w-full">
              <AuthInputRow>
                <div className="w-full mb-1 flex flex-row items-center justify-between">
                  <AuthInputLabel htmlFor="password">
                    New Password
                  </AuthInputLabel>
                </div>

                <AuthInput
                  id="email"
                  placeholder="****"
                  type="password"
                  autoCapitalize="none"
                  autoComplete="password"
                  autoCorrect="off"
                  // disabled={isLoading}
                />
              </AuthInputRow>
              <AuthInputRow>
                <div className="w-full mb-1 flex flex-row items-center justify-between">
                  <AuthInputLabel htmlFor="password2">
                    Confirm Password
                  </AuthInputLabel>
                </div>

                <AuthInput
                  id="email"
                  placeholder="****"
                  type="password"
                  autoCapitalize="none"
                  autoComplete="password2"
                  autoCorrect="off"
                  // disabled={isLoading}
                />
              </AuthInputRow>
            </div>

            <div className="w-full">
              <AuthButton type="submit">Reset password</AuthButton>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
const AuthButton = twc(BarrelDefaultButton)``
const AuthInput = twc(PrimaryInput)``
const AuthInputRow = twc.div`
flex flex-col my-3
`
const AuthInputLabel = twc(PrimaryLabel)`

`
const AuthInputTitleLabel = twc(BarrelDefaultButton)``
export default UserResetPasswordForm
