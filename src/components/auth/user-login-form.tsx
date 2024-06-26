import { BarrelDefaultButton } from "@/styles/ButtonStyles"
import { PrimaryInput, PrimaryLabel } from "@/styles/InputStyle"
import Link from "next/link"
import React from "react"
import { twc } from "react-twc"

const UserLoginForm = () => {
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
                  <Link href="/forgot-password">
                    {" "}
                    <h1 className="text-sm text-primary-700 hover:text-primary-950 font-semibold duration-500 transition-all cursor-pointer">
                      Forgot your password?
                    </h1>
                  </Link>
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
            </div>

            <div className="w-full">
              <AuthButton type="submit">Continue</AuthButton>
            </div>
            <div className="w-full flex items-center justify-center my-4 gap-2">
              {"Don't"} have an account?{" "}
              <Link
                href="/signup"
                className="text-sm text-primary-700 hover:text-primary-950 font-semibold duration-500 transition-all cursor-pointer"
              >
                Sign up.
              </Link>
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
export default UserLoginForm
