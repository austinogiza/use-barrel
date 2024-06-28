import { cn } from "@/lib/utils"
import React, { FC } from "react"
import { twc } from "react-twc"
interface OrderStatusProps {
  status?: string
}
const OrderStatus: FC<OrderStatusProps> = (props) => {
  const { status } = props
  const statusBgColor =
    status === "Completed"
      ? "bg-green-50 text-green-800 border-green-800 border-[0.5px]"
      : status === "Pending"
      ? "bg-yellow-50 text-yellow-800 border-yellow-800 border-[0.5px]"
      : "bg-red-50 text-red-800 border-red-800 border-[0.5px]"
  const statusTextColor =
    status === "Completed"
      ? "text-green-800"
      : status === "Pending"
      ? "text-yellow-800 "
      : "text-red-800"
  const statusDotBgColor =
    status === "Completed"
      ? "bg-green-800"
      : status === "Pending"
      ? "bg-yellow-800 "
      : "bg-red-800"
  return (
    <>
      <StatusText
        className={cn(
          "px-2 py-1 rounded-lg gap-1 max-w-fit w-full flex flex-row items-center justify-center",
          statusBgColor
        )}
      >
        <StatusDot
          className={cn(
            "w-2 h-2 rounded-full flex items-center justify-center",
            statusDotBgColor
          )}
        />
        <OrderStatusText className={cn("text-xs font-bold", statusTextColor)}>
          {status}
        </OrderStatusText>
      </StatusText>
    </>
  )
}
const StatusText = twc.div``
const StatusDot = twc.div``
const OrderStatusText = twc.div``

export default OrderStatus
