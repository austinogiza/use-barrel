import Link from "next/link"
import React, { FC, ReactNode } from "react"
interface NavRowProps {
  title?: string
  link?: string
  icon?: ReactNode
}
const NavRow: FC<NavRowProps> = (props) => {
  const { title, link, icon } = props
  return (
    <div className="flex flex-row items-center w-full max-w-[120px]">
      <Link
        className="flex flex-row items-center w-full max-w-[120px]"
        href={`${link}`}
      >
        {" "}
        {icon}
        <h1>{title}</h1>
      </Link>
    </div>
  )
}

export default NavRow
