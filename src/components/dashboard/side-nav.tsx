"use client"
import React from "react"
import NavRow from "./nav-row"
import { SideNavData } from "@/data/side-nav-data"
import { usePathname } from "next/navigation"
import BarrelLogo from "./barrel-logo"
import SideNavRow from "./side-nav-row"

const SideNav = () => {
  const pathname = usePathname()
  return (
    <div className="lg:flex hidden flex-col items-center justify-between py-6 w-[220px] bg-dashboardSideNavBg h-full gap-2">
      <div className="flex flex-col items-center justify-start w-full h-full gap-2 py-4">
        <div className="flex w-full flex-col items-center justify-center">
          <BarrelLogo />
          <SideNavRow />
        </div>
        <div className="h-[1px] bg-neutral-100 w-full" />
        <div className="mt-10 px-2 flex flex-col items-start justify-center my-4 w-full">
          <h1 className="mb-2 text-xs text-neutral-600">Main</h1>
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
    </div>
  )
}

export default SideNav
