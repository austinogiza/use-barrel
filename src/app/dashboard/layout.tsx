import MobileSideNav from "@/components/dashboard/mobile-nav"
import SideNav from "@/components/dashboard/side-nav"
import StateMode from "@/components/dashboard/state-mode"
import SummaryDivider from "@/components/utils/summary-divider"
import React, { FC } from "react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout: FC<DashboardLayoutProps> = (props) => {
  const { children } = props
  return (
    <div className="flex flex-row items-center justify-between h-screen overflow-hidden">
      <SideNav />
      <MobileSideNav />

      <div className="flex flex-col w-full h-full overflow-y-auto px-10 py-20">
        <StateMode />

        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
