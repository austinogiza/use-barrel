import React, { FC } from "react"
import OrderInfo from "./order-info"
interface TableComponentProps {
  data?: any
}
const TableComponent: FC<TableComponentProps> = (props) => {
  const { data } = props
  const [activeNumber, setActiveNumber] = React.useState<number | null>(null)
  const toggleActionMenu = (value: number) => {
    if (value === activeNumber) {
      setActiveNumber(null)
    } else {
      setActiveNumber(value)
    }
  }
  return (
    <div className="overflow-hidden w-full">
      <table className="flex flex-col w-full items-start justify-between ">
        <thead className="w-full">
          <tr className="flex flex-row w-full items-start justify-between border-b pb-2 mb-3">
            {" "}
            <th className="max-w-[20px]  flex items-center justify-center w-full px-6 py-3 text-left text-sm font-bold text-black capitalize   ">
              #
            </th>
            <th className="max-w-[140px] w-full flex items-start px-6 py-3 text-left text-sm font-bold text-black capitalize ">
              Transaction Id
            </th>
            <th className="max-w-[240px] w-full flex items-start px-6 py-3 text-left text-sm font-bold text-black capitalize  ">
              Customer
            </th>
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
        <tbody className="w-full">
          {data?.map((data: any, index: number) => (
            <OrderInfo
              key={index}
              total_price={data.amount}
              order_id={data.transactionId}
              customer_name={data.customer}
              order_date={data.date}
              toggleActionMenu={toggleActionMenu}
              status={data.status}
              number={index}
              activeNumber={activeNumber}
              customer_email={data.customer_email}
              customer_photo={data.customer_photo}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableComponent
