import { cn, formatDate } from "@/lib/utils"
import Link from "next/link"
import React, { FC, ReactNode } from "react"
import OrderStatus from "./order-status"
import SiteImage from "@/components/utils/site-image"
interface OrderRowProps {
  title?: string
  value?: string
  type?: "status" | "date" | "customer"
  customer_name?: string
  customer_email?: string
  customer_photo?: string
}
const OrderDetailsRow: FC<OrderRowProps> = (props) => {
  const { title, value, type, customer_photo, customer_name, customer_email } =
    props
  return (
    <div className="flex flex-row items-center w-full px-3 py-1.5 my-2 justify-between ">
      <h1 className="text-base font-bold text-iconColor">{title}</h1>

      <div className="flex flex-col">
        {" "}
        {type === "status" ? (
          <>
            <OrderStatus status={value} />
          </>
        ) : (
          <>
            {" "}
            {type === "date" ? (
              <> {formatDate(value)}</>
            ) : (
              <>
                {" "}
                {type === "customer" ? (
                  <>
                    {" "}
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
                  </>
                ) : (
                  <>{value}</>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default OrderDetailsRow
