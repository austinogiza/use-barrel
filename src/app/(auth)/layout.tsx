import PrimaryAuthButton from "@/components/system/auth/PrimaryAuthButton"
import React, { FC } from "react"
interface AuthLayoutProps {
  children: React.ReactNode
}
const AuthLayout: FC<AuthLayoutProps> = (props) => {
  const { children } = props
  return (
    <div className="relative w-full">
      {children}
      <PrimaryAuthButton />
    </div>
  )
}

export default AuthLayout
