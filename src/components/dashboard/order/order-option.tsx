import { MainFormLabelText, PrimaryLabel } from "@/styles/InputStyle"
import React, { FC } from "react"
import { twc } from "react-twc"
interface OrderOptionProps {
  title?: string
  value?: string
  description?: string
  selectedOption?: string
  onChange?: (value?: string) => void
}
const OrderOption: FC<OrderOptionProps> = (props) => {
  const { title, description, value, selectedOption, onChange } = props
  const active = selectedOption === value
  return (
    <>
      {" "}
      <div
        onClick={() => onChange?.(value)}
        className={`flex flex-row px-4 py-2 rounded-xl shadow shadow-slate-100 border-[0.5px] items-center justify-start gap-2 ${
          active ? "border-primary-500 " : "border-neutral-100 "
        }`}
      >
        <input
          type="radio"
          value={value}
          name="invoice-type"
          id={value}
          checked={active}
          onChange={() => onChange?.(value)}
        />
        <AuthInputLabel htmlFor={value}>
          <AuthInputTitleLabel>{title}</AuthInputTitleLabel>
        </AuthInputLabel>
      </div>
    </>
  )
}
const AuthInputLabel = twc(PrimaryLabel)`

`
const AuthInputTitleLabel = twc(MainFormLabelText)``

const OrderSubtitle = twc.p`
mt-2
text-xs font-medium text-neutral-500
`

export default OrderOption
