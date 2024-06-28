import { BarrelLargeDefaultButton } from "@/styles/ButtonStyles"
import { PrimaryInput, PrimaryLabel } from "@/styles/InputStyle"
import Link from "next/link"
import React from "react"
import { twc } from "react-twc"

const UserSignupForm = () => {
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
                <AuthInputLabel htmlFor="email">Email</AuthInputLabel>
                <AuthInput
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  // disabled={isLoading}
                />
              </AuthInputRow>
              <AuthInputRow>
                <div className="w-full mb-1 flex flex-row items-center justify-between">
                  <AuthInputLabel htmlFor="password">Password</AuthInputLabel>
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
              <AuthButton type="submit">Sign In with Email</AuthButton>
            </div>
            <div className="w-full flex items-center justify-center my-4 gap-2">
              Already have an account?
              <Link
                href="/login"
                prefetch={true}
                className="text-sm text-primary-700 hover:text-primary-950 font-semibold duration-500 transition-all cursor-pointer"
              >
                Log in.
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
const AuthButton = twc(BarrelLargeDefaultButton)``
const AuthInput = twc(PrimaryInput)``
const AuthInputRow = twc.div`
flex flex-col my-3
`
const AuthInputLabel = twc(PrimaryLabel)`

`
const AuthInputTitleLabel = twc(BarrelLargeDefaultButton)``
export default UserSignupForm
