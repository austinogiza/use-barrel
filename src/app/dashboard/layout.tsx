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
    <>
      <div className="flex flex-row items-start justify-start gap-2 min-h-screen ">
        <div className="h-screen">
          {" "}
          <SideNav />
        </div>
        <div className="w-full pt-16 min-h-screen">
          <div className=" px-10">
            {" "}
            <StateMode />
          </div>
          <SummaryDivider />
          <div className="mt-7 px-10 min-h-screen"> {children}</div>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout
