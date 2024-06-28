import SecondaryButton from "@/components/system/buttons/SecondaryButton"
import CloseButtonIcon from "@/components/utils/close-button-icon"

import { Add } from "iconsax-react"
import React, { FC } from "react"
import { twc } from "react-twc"
interface SetupGuideProps {
  onClick?: () => void
}
const SetupGuide: FC<SetupGuideProps> = (props) => {
  const { onClick } = props
  return (
    <div className="relative bg-dashboardSideNavBg px-6 py-6 w-full min-h-[220px] rounded-2xl my-3 h-full flex flex-col items-start justify-between gap-4">
      <CloseButtonIcon onClick={onClick} />
      <div>
        <CreateOrderButton>
          <CreateOrderIcon />
        </CreateOrderButton>
      </div>
      <div>
        {" "}
        <h1 className=" text-2xl font-semibold text-black text-left">
          Add your first product
        </h1>
        <p className=" text-sm font-normal text-neutral-400 text-left">
          Write a description, add photos, and set pricing for the products you
          plan to sell.
        </p>
      </div>
      <div className="my-2">
        <SecondaryButton
          isLink={false}
          icon={<Add size={20} className="text-white" />}
          title="Create order"
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
export default SetupGuide
