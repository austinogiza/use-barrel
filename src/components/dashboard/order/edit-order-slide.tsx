import OutlineButton from "@/components/system/buttons/OutlineButton"
import PrimaryButton from "@/components/system/buttons/PrimaryButton"
import CloseButtonIcon from "@/components/utils/close-button-icon"
import { BarrelDefaultButton } from "@/styles/ButtonStyles"
import {
  MainFormLabelText,
  PrimaryInput,
  PrimaryLabel,
  PrimaryTextArea,
} from "@/styles/InputStyle"
import React from "react"
import { twc } from "react-twc"

const EditOrderSlide = () => {
  return (
    <CreateOrderContainer>
      <div className="bg-white h-full w-full max-w-[440px] px-6 py-4 relative">
        <CloseButtonIcon />
        <div className="mb-10">
          {" "}
          <h1 className="mb-1 font-bold text-2xl text-black">
            Edit order invoice
          </h1>
        </div>
        <div className="w-full">
          <form className="w-full">
            <AuthInputRow>
              <AuthInputLabel>
                <AuthInputTitleLabel>Title</AuthInputTitleLabel>
              </AuthInputLabel>
              <AuthInput type="text" placeholder="" />
              <OrderSubtitle>
                This will appear on your {"customer's"} invoice
              </OrderSubtitle>
            </AuthInputRow>
            <AuthInputRow>
              <AuthInputLabel>
                <AuthInputTitleLabel>Amount</AuthInputTitleLabel>
              </AuthInputLabel>
              <AuthInput type="text" />
            </AuthInputRow>
            <AuthInputRow>
              <AuthInputLabel>
                <AuthInputTitleLabel>Recipient</AuthInputTitleLabel>
              </AuthInputLabel>
              <AuthInput type="text" placeholder="Customer email" />
            </AuthInputRow>
            <AuthInputRow>
              <AuthInputLabel>
                <AuthInputTitleLabel>Payout invoice info</AuthInputTitleLabel>
              </AuthInputLabel>
              <AuthInput
                type="text"
                placeholder="Enter your business name, address, Tax ID number, etc."
              />
            </AuthInputRow>
            <AuthInputRow>
              <AuthInputLabel>
                <AuthInputTitleLabel>Description</AuthInputTitleLabel>
              </AuthInputLabel>
              <AuthTextareaInput placeholder="Enter your business name, address, Tax ID number, etc." />
            </AuthInputRow>
            <div className="flex w-full flex-row items-center justify-center gap-2">
              <div className="w-full max-w-[120px]">
                <AuthOutlineButton title="Cancel" />
              </div>
              <div className="w-full max-w-[65%]">
                <AuthButton title="Create" />{" "}
              </div>
            </div>
          </form>
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
export default EditOrderSlide
