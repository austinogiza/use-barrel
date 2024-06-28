import { NavArrowDown } from "iconoir-react"
import { Edit } from "iconsax-react"
import React from "react"
import { twc } from "react-twc"

const SideNavRow = () => {
  return (
    <div className="px-2 w-full flex flex-row my-3 items-center justify-center gap-2">
      <div className="bg-transparent cursor-pointer hover:bg-primary-50 border border-transparent hover:border-primary-800 px-3 py-1.5 rounded-xl duration-300 flex w-full flex-row items-center justify-center gap-1">
        <span className="max-w-[24px] min-h-[24px] w-full flex items-center justify-center rounded-full bg-primary-200 text-primary-900">
          <p className="text-[12px]"> A</p>
        </span>
        <h1 className="text-[12px]">austinogiza@g..</h1>
        <DropdownArrow width={20} className="h-6 w-6 text-neutral-950" />{" "}
      </div>{" "}
      <CreateOrders className="shadow-sm bg-white min-h-[26px]  flex items-center justify-center max-w-fit px-2 py-2 w-full rounded-xl cursor-pointer hover:bg-primary-50 border border-transparent hover:border-primary-800 duration-300">
        <CreateOrdersIcon />
      </CreateOrders>
    </div>
  )
}

const DropdownArrow = twc(NavArrowDown)`
w-4 h-4
`
const CreateOrders = twc.div`

`
const CreateOrdersIcon = twc(Edit)`
w-4 h-4
`
export default SideNavRow
