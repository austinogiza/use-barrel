import OutlineButton from "@/components/system/buttons/OutlineButton"
import PrimaryButton from "@/components/system/buttons/PrimaryButton"
import CloseButtonIcon from "@/components/utils/close-button-icon"
import SummaryDivider from "@/components/utils/summary-divider"
import { useActions } from "@/lib/use-actions"

import {
  MainFormLabelText,
  PrimaryInput,
  PrimaryLabel,
  PrimaryTextArea,
} from "@/styles/InputStyle"
import React, { useEffect, useRef, useState } from "react"
import { twc } from "react-twc"
import OrderDetailsRow from "./order-details-row"
import { OrderTransactions } from "@/data/order-table-data"
import { useAppSelector } from "@/store/hooks"

const OrderDetails = () => {
  const { closeDetailModeModal } = useActions()
  const [orderDetails, setOrderDetails] = useState<any>(undefined)

  const containerRef = useRef<any>(null)

  const closeModal = (e: any) => {
    if (e.target === containerRef?.current) {
      closeDetailModeModal()
    }
  }
  const number = useAppSelector((state) => state.order.activeModal)

  useEffect(() => {
    if (number === null || number === undefined) return

    const order = OrderTransactions.find((data, index) => index === number)
    setOrderDetails(order)
  }, [number])

  return (
    <CreateOrderContainer ref={containerRef} onClick={closeModal}>
      <div className="bg-white h-full w-full max-w-[440px] px-6 py-4 relative">
        <CloseButtonIcon onClick={closeDetailModeModal} />
        <div className="mb-10 pt-6">
          {" "}
          <h1 className="mb-1 font-bold text-2xl text-black">
            Transaction details
          </h1>
        </div>
        <SummaryDivider />

        <div className="gap-2 flex flex-col w-full my-3">
          {" "}
          <OrderDetailsRow
            title="Customer"
            type="customer"
            value={orderDetails?.customer}
            customer_name={orderDetails?.customer}
            customer_email={orderDetails?.customer_email}
            customer_photo={orderDetails?.customer_photo}
          />
          <OrderDetailsRow title="Amount" value={orderDetails?.amount} />
          <OrderDetailsRow
            title="Status"
            value={orderDetails?.status}
            type="status"
          />
          <OrderDetailsRow
            title="Transaction Id"
            value={orderDetails?.transactionId}
          />
          <OrderDetailsRow
            title="Date"
            value={orderDetails?.date}
            type="date"
          />
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
export default OrderDetails
