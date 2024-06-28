import OutlineButton from "@/components/system/buttons/OutlineButton"
import SecondaryButton from "@/components/system/buttons/SecondaryButton"
import CloseButtonIcon from "@/components/utils/close-button-icon"
import SiteImage from "@/components/utils/site-image"
import { CheckCircle } from "iconoir-react"

import { Add, Shield, TickCircle } from "iconsax-react"
import React, { FC } from "react"
import { twc } from "react-twc"
interface SetupGuideProps {
  onClick?: () => void
}
const GetStarted: FC<SetupGuideProps> = (props) => {
  const { onClick } = props
  return (
    <div className=" bg-dashboardSideNavBg relative px-6 py-6 w-full min-h-[220px] rounded-2xl my-3 h-full flex flex-row items-center justify-between gap-4">
      <CloseButtonIcon onClick={onClick} />
      <div className="flex flex-col items-start justify-center h-full gap-4">
        <div>
          {" "}
          <h1 className=" text-2xl font-semibold text-black text-left">
            Getting Started
          </h1>
          <p className=" text-sm font-normal text-neutral-400 text-left">
            Develop products, subscriptions, and checkout integration, manage
            invoicing, oversee subscription lifecycle, and conduct thorough
            integration testing.
          </p>
        </div>
        <div className="my-2">
          <OutlineButton isLink={false} title="Explore Documentation" />
        </div>
      </div>
      <div>
        <SiteImage src="/images/started-illustration.svg" />
      </div>
    </div>
  )
}
const CreateOrderIcon = twc(Add)`
w-6 h-6 text-neutral-500
`
const CreateOrderButton = twc.div`
flex items-center justify-center
w-10 h-10 border-[0.5px] border-neutral-500 rounded-full bg-transparent
`
export default GetStarted
