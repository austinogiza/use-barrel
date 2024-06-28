"use client"
import React from "react"
import NavRow from "./nav-row"
import { SideNavData } from "@/data/side-nav-data"
import { usePathname } from "next/navigation"

const MobileSideNav = () => {
  const pathname = usePathname()
  return (
    <div className="fixed lg:hidden flex bottom-0 left-0  h-16 px-2 py-2  items-center justify-center w-full bg-smokeWhite z-[200]">
      <div className="px-2 flex flex-row items-start justify-center w-full gap-2 max-w-[80%] mx-auto">
        {SideNavData?.map((data, index: number) => (
          <NavRow
            key={index}
            title={data.title}
            link={data.link}
            icon={data.icon}
            active={pathname === data.link}
          />
        ))}
      </div>
    </div>
  )
}

export default MobileSideNav
