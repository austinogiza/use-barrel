"use client"
import React, { FC, useEffect, useState } from "react"
import OrderInfo from "../order/order-info"
import CustomerInfo from "./customer-info"
import SitePagination from "@/components/utils/pagination"
import SummaryDivider from "@/components/utils/summary-divider"
import { useEmptyState } from "@/lib/use-empty-state"
import CustomerEmptyState from "../order/customer-empty-state"
interface TableComponentProps {
  data?: any
}
const CustomerTable: FC<TableComponentProps> = (props) => {
  const { data } = props
  const [activeNumber, setActiveNumber] = useState<number | null>(null)
  const [page, setPage] = useState<number>(1)
  const [maxPage, setMaxPage] = useState<number>(1)
  const { emptyState } = useEmptyState()
  const toggleActionMenu = (value: number) => {
    if (value === activeNumber) {
      setActiveNumber(null)
    } else {
      setActiveNumber(value)
    }
  }

  const maxItems = 8
  useEffect(() => {
    let extraPages = 1
    if (data) {
      if (data?.length % maxItems === 0) {
        extraPages = 0
      }
      setMaxPage(Math.floor(data?.length / maxItems) + extraPages)
    }
  }, [maxItems, data])
  return (
    <div className="overflow-hidden w-full h-full">
      <table className="flex flex-col w-full items-start justify-between ">
        <thead className="w-full">
          <tr className="flex flex-row w-full items-start justify-between border-b pb-2 mb-3">
            {" "}
            <th className="max-w-[20px]  flex items-center justify-center w-full px-6 py-3 text-left text-sm font-bold text-black capitalize   ">
              #
            </th>
            <th className="max-w-[240px] w-full flex items-start px-6 py-3 text-left text-sm font-bold text-black capitalize  ">
              Customer
            </th>{" "}
            <th className="max-w-[100px] w-full flex items-start px-6 py-3 text-left text-sm font-bold text-black capitalize ">
              Amount
            </th>
            <th className="max-w-[140px] w-full flex items-start px-6 py-3 text-left text-sm font-bold text-black capitalize ">
              Date
            </th>
            <th className="max-w-[140px] w-full flex items-start px-6 py-3 text-left text-sm font-bold text-black capitalize ">
              Status
            </th>
            <th className="px-6 py-3 text-left text-sm font-bold text-black capitalize ">
              Action
            </th>
          </tr>
        </thead>
        {emptyState ? (
          <>
            {" "}
            <CustomerEmptyState />
          </>
        ) : (
          <>
            {" "}
            <tbody className="w-full">
              {data
                ?.slice(maxItems * (page - 1), page * maxItems)
                ?.map((data: any, index: number) => (
                  <CustomerInfo
                    key={index}
                    total_price={data.amount}
                    order_id={data.transactionId}
                    customer_name={data.name}
                    order_date={data.paidDate}
                    toggleActionMenu={toggleActionMenu}
                    status={data.duration}
                    number={index}
                    activeNumber={activeNumber}
                    customer_email={data.email}
                    customer_photo={data.photo}
                  />
                ))}
            </tbody>
            <SitePagination maxPage={maxPage} setPage={setPage} page={page} />
          </>
        )}
      </table>
    </div>
  )
}

export default CustomerTable
