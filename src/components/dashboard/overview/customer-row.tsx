import SiteImage from "@/components/utils/site-image"
import SummaryDivider from "@/components/utils/summary-divider"
import React, { FC } from "react"
interface CustomerRowProps {
  full_name?: string
  email?: string
  photo?: string
  amount?: number
  duration?: string
}
const CustomerRow: FC<CustomerRowProps> = (props) => {
  const { full_name, email, photo, amount, duration } = props
  return (
    <>
      {" "}
      <div className="flex flex-row items-center justify-between w-full my-2  border border-transparent ease-in-out hover:bg-primary-10 hover:border cursor-pointer px-1.5 py-1.5 rounded-xl hover:bg-primary-50 hover:border-primary-700 ">
        <div className="flex flex-row items-center justify-start gap-2">
          <div className="max-w-[32px] min-h-[32px] w-full text-iconColor flex items-center justify-center">
            <SiteImage
              src={photo}
              className="max-w-[32px] min-h-[32px] w-full rounded-full object-cover "
            />
          </div>
          <div>
            <h1 className="text-base font-extrabold text-neutral-950">
              {full_name}
            </h1>
            <p className="text-xs font-normal text-neutral-600">{email}</p>{" "}
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-sm font-bold text-black">${amount}</h1>
          <p className="text-xs font-medium text-neutral-500">{duration}</p>
        </div>
      </div>
      <div className=" last-of-type:hidden w-full">
        {" "}
        <SummaryDivider />
      </div>
    </>
  )
}

export default CustomerRow
