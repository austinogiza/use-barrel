import OutlineButton from "@/components/system/buttons/OutlineButton"
import PrimaryButton from "@/components/system/buttons/PrimaryButton"
import CloseButtonIcon from "@/components/utils/close-button-icon"

import {
  MainFormLabelText,
  PrimaryInput,
  PrimaryLabel,
  PrimaryTextArea,
} from "@/styles/InputStyle"
import React from "react"
import { twc } from "react-twc"

const OrderDetails = () => {
  return (
    <CreateOrderContainer>
      <div className="bg-white h-full w-full max-w-[440px] px-6 py-4 relative">
        <CloseButtonIcon />
        <div className="mb-10">
          {" "}
          <h1 className="mb-1 font-bold text-2xl text-black">
            Transaction details
          </h1>
        </div>
      </div>
    </CreateOrderContainer>
  )
}

const CreateOrderContainer = twc.div`
fixed h-full w-full top-0 left-0 flex items-center justify-end bg-modalBg
`
// const CreateOrderContainer = twc.div``
const OrderSubtitle = twc.h4` mt-2
text-xs font-medium text-neutral-500
`

const AuthButton = twc(PrimaryButton)`
w-full
`
const AuthOutlineButton = twc(OutlineButton)`
w-full
`
const AuthInput = twc(PrimaryInput)``
const AuthTextareaInput = twc(PrimaryTextArea)``
const AuthInputRow = twc.div`
flex flex-col my-3
`
const AuthInputLabel = twc(PrimaryLabel)`

`
const AuthInputTitleLabel = twc(MainFormLabelText)``
export default OrderDetails
