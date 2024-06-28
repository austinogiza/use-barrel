import { cn } from "@/lib/utils"
import Link from "next/link"
import React, { FC, ReactNode } from "react"
interface NavRowProps {
  title?: string
  link?: string
  icon?: ReactNode
  active?: boolean
}
const NavRow: FC<NavRowProps> = (props) => {
  const { title, link, icon, active } = props
  return (
    <Link href={`${link}`} className="my-2 w-full">
      <div
        className={cn(
          "flex flex-row items-center w-full border border-transparent gap-2 pr-5 pl-3 py-2.5 rounded-xl transition-all duration-300 ease-in-out hover:bg-primary-10 hover:border hover:border-primary-700 text-iconColor",
          active && "bg-white shadow-sm shadow-navShadow"
        )}
      >
        <div className="max-w-[18px] min-h-[18px] w-full text-iconColor">
          {" "}
          {icon}
        </div>
        <h1 className="text-sm font-medium text-iconColor">{title}</h1>
      </div>
    </Link>
  )
}

export default NavRow
