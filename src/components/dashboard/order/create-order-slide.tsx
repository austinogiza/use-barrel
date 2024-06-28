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
import React, { useRef, useState } from "react"
import { twc } from "react-twc"
import OrderOption from "./order-option"
import { useActions } from "@/lib/use-actions"
import { toast } from "sonner"

const CreateOrderSlide = () => {
  const [selectedOption, setSelectedOption] = useState<string>("one-time")
  const { closeCreateModal } = useActions()
  const onChange = (value?: any) => {
    setSelectedOption(value)
  }
  const containerRef = useRef<any>(null)

  const closeModal = (e: any) => {
    if (e.target === containerRef?.current) {
      closeCreateModal()
    }
  }
  const closeWithToast = () => {
    toast.success("Order created successfully")
    closeCreateModal()
  }
  return (
    <CreateOrderContainer ref={containerRef} onClick={closeModal}>
      <div className="bg-white h-full w-full max-w-[440px] px-6 py-4 relative">
        <CloseButtonIcon onClick={closeCreateModal} />
        <div className="mb-10">
          {" "}
          <h1 className="mb-1 font-bold text-2xl text-black">
            Create order invoice
          </h1>
          <p className="text-sm text-neutral-400 mt-0">
            Create an invoice for your clients{" "}
          </p>
        </div>
        <div className="w-full">
          <form className="w-full gap-2">
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
            <div className="">
              <div>
                <AuthInputLabel>
                  <AuthInputTitleLabel>Invoice type</AuthInputTitleLabel>
                </AuthInputLabel>
              </div>
              <div className="flex flex-row items-center justify-between w-full my-3">
                <OrderOption
                  title="One-time"
                  value="one-time"
                  onChange={onChange}
                  selectedOption={selectedOption}
                />
                <OrderOption
                  title="Monthly"
                  value="monthly"
                  onChange={onChange}
                  selectedOption={selectedOption}
                />
                <OrderOption
                  title="Annually"
                  value="annually"
                  selectedOption={selectedOption}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="flex w-full flex-row items-center justify-center gap-2 mt-4">
              <div className="w-full max-w-[120px]" onClick={closeCreateModal}>
                <AuthOutlineButton title="Cancel" />
              </div>
              <div className="w-full max-w-[65%]" onClick={closeWithToast}>
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
fixed h-full w-full top-0 left-0 flex items-center justify-end bg-modalBg z-[200]
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
export default CreateOrderSlide
