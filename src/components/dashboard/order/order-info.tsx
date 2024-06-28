import SummaryDivider from "@/components/utils/summary-divider"
import { MoreHoriz } from "iconoir-react"
import React, { FC } from "react"
import { twc } from "react-twc"
import OrderStatus from "./order-status"
import { formatDate } from "@/lib/utils"
import SiteImage from "@/components/utils/site-image"
import MoreInfo from "./more-info"
interface OrderInfoProps {
  order_id?: string
  customer_name?: string
  customer_email?: string
  customer_photo?: string
  order_date?: string
  status?: string
  total_price?: number
  number?: number
  activeNumber?: number | null
  toggleActionMenu?: (value?: any) => void
}
const OrderInfo: FC<OrderInfoProps> = (props) => {
  const {
    order_id,
    customer_name,
    order_date,
    total_price,
    status,
    customer_photo,
    customer_email,
    number,
    toggleActionMenu,
    activeNumber,
  } = props
  return (
    <>
      {" "}
      <div className=" w-full flex flex-row items-start justify-between my-1 py-1 cursor-pointer text-left">
        <tr className=" w-full flex flex-row items-start justify-between  text-left hover:bg-snowWhite">
          <td className="max-w-[20px]  flex items-center justify-center px-6 py-3 text-left text-sm font-bold text-black capitalize ">
            #
          </td>
          <td className=" max-w-[140px] w-full flex items-start px-6 py-3  text-left text-sm font-bold text-black capitalize  ">
            {order_id}
          </td>
          <td className="max-w-[240px] px-6 py-3 w-full  text-left text-sm font-bold text-black capitalize ">
            <div className="flex flex-row items-center justify-start gap-2">
              <div className="w-full max-w-[26px] min-h-[26px] object-cover rounded-full flex items-center justify-center">
                <SiteImage
                  src={customer_photo}
                  className="w-full max-w-[26px] min-h-[26px] object-cover rounded-full "
                />
              </div>
              <div>
                <h1 className="text-base font-bold text-neutral-950">
                  {customer_name}
                </h1>

                <p className="text-xs font-medium text-neutral-400">
                  {" "}
                  {customer_email}
                </p>
              </div>
            </div>
          </td>
          <td className=" max-w-[100px] w-full flex items-start px-6 py-3 text-left text-sm font-bold text-black capitalize ">
            &#36;{total_price}
          </td>
          <td className="max-w-[140px] w-full flex items-start px-6 py-3 text-left text-sm font-bold text-black capitalize ">
            {formatDate(order_date)}
          </td>
          <td className="max-w-[140px] w-full flex items-start px-6 py-3 text-left text-sm font-bold text-black capitalize ">
            <OrderStatus status={status} />
          </td>
          <td className=" flex items-start px-6 py-3   text-left text-sm font-bold text-black capitalize  relative">
            <MoreInfo active={number === activeNumber} number={number} />
            <div
              className="relative"
              onClick={() => toggleActionMenu?.(number)}
            >
              <OrderMoreIcon />
            </div>
          </td>
        </tr>
      </div>
      <div className=" last-of-type:hidden w-full">
        {" "}
        <SummaryDivider />
      </div>
    </>
  )
}

const OrderMoreIcon = twc(MoreHoriz)`
  w-6 h-6 text-black cursor-pointer

`

export default OrderInfo
