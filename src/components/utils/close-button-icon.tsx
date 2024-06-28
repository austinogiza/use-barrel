import { Xmark } from "iconoir-react"
import React, { FC } from "react"
import { twc } from "react-twc"
interface CloseButtonIconProps {
  onClick?: () => void
}
const CloseButtonIcon: FC<CloseButtonIconProps> = (props) => {
  const { onClick } = props
  return (
    <>
      <CloseActionWrapper onClick={onClick}>
        <CloseActionIcon width={16} height={16} />
      </CloseActionWrapper>
    </>
  )
}
const CloseActionIcon = twc(Xmark)`
w-6 h-6 text-black
`
const CloseActionWrapper = twc.div`
absolute top-2 right-2 w-full
max-w-[32px] min-h-[32px] flex items-center justify-center cursor-pointer bg-navShadow rounded-full
`
export default CloseButtonIcon
