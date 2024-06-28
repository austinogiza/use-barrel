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
const GetVerified: FC<SetupGuideProps> = (props) => {
  const { onClick } = props
  return (
    <div className=" bg-dashboardSideNavBg relative px-6 py-6 w-full min-h-[220px] rounded-2xl my-3 h-full flex flex-row items-center justify-between gap-4">
      <CloseButtonIcon onClick={onClick} />
      <div className="flex flex-col items-start justify-between w-full h-full gap-4">
        {" "}
        <div>
          {" "}
          <h1 className=" text-2xl font-semibold text-black text-left">
            {"Let's"} get verified your information
          </h1>
          <p className=" text-sm font-normal text-neutral-400 text-left">
            We require some additional details about you and your business to
            comply with regulations and begin processing your payments.
          </p>
        </div>
        <div className="my-4">
          <div className="flex w-full flex-row items-center justify-start gap-1">
            <div>
              <TickCircle
                size={24}
                variant="Bold"
                className="text-primary-800"
              />
            </div>
            <p className=" text-sm font-medium text-neutral-600 text-left">
              Click on {"'Verify Account'"} to submit your details and start the
              verification process.
            </p>
          </div>
        </div>
        <div className="my-2 mt-14 ">
          <SecondaryButton
            isLink={false}
            icon={<Shield size={20} className="text-white" />}
            title="Verify your account"
          />
        </div>
      </div>
      <div className="w-full max-w-[200px]">
        <SiteImage
          src="/images/verify-illustration.svg"
          className="w-full max-w-[200px] object-contain"
        />
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
export default GetVerified
