import { BarrelDefaultButton } from "@/styles/ButtonStyles"
import { Add } from "iconsax-react"
import React from "react"
import { twc } from "react-twc"

const DashboardHeader = () => {
  return (
    <>
      <div className="flex flex-row items-center mb-10 justify-between w-full">
        <div>
          {" "}
          <h1 className="text-2xl font-semibold text-black">Overview</h1>
          <p>
            Get ready to sell with the help of our {"team's"} friendly insights!
          </p>
        </div>

        <div>
          <CreateOrderButton>
            <CreateIcon />
            <p className="text-sm font-medium"> Create order</p>
          </CreateOrderButton>
        </div>
      </div>
    </>
  )
}
const CreateOrderButton = twc(BarrelDefaultButton)`
`
const CreateIcon = twc(Add)`

w-5 h-5 text-white`

export default DashboardHeader
