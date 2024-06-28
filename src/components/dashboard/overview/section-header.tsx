import { BarrelDefaultButton } from "@/styles/ButtonStyles"
import { Add } from "iconsax-react"
import React, { FC } from "react"
import { twc } from "react-twc"
interface SectionHeaderProps {
  title?: string
}
const SectionHeader: FC<SectionHeaderProps> = (props) => {
  const { title } = props
  return (
    <>
      <div className="flex flex-row items-center mb-10 justify-between w-full">
        <div>
          {" "}
          <h1 className="text-2xl font-semibold text-black">{title}</h1>
        </div>
      </div>
    </>
  )
}
const CreateOrderButton = twc(BarrelDefaultButton)`
`
const CreateIcon = twc(Add)`

w-5 h-5 text-white`

export default SectionHeader
