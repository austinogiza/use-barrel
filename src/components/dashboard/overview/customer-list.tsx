import React from "react"
import CustomerRow from "./customer-row"
import { CustomerData } from "@/data/customer-data"
import SummaryDivider from "@/components/utils/summary-divider"
import Link from "next/link"

const CustomerList = () => {
  return (
    <div className="max-w-[350px] w-full mx-auto bg-white  shadow shadow-neutral-50 border border-neutral-50 flex flex-col rounded-3xl">
      <div className="w-full items-center justify-between flex flex-row px-4 pt-6 py-4 ">
        <div className="mt-2">
          {" "}
          <h1 className="text-lg font-bold mb-1 leading-none tracking-tight">
            Customers
          </h1>
          <p className="text-xs text-neutral-400">
            {" "}
            You made 87 sales this month.
          </p>
        </div>
        <Link href="/dashboard/customers">
          {" "}
          <div className="text-xs font-medium px-3 py-1.5 rounded-xl cursor-pointer duration-500 transition-all hover:border-primary-800  bg-white border border-neutral-200">
            View all
          </div>
        </Link>
      </div>
      <SummaryDivider />
      <div className="flex flex-col my-1 w-full px-2 py-4 ">
        {CustomerData.slice(0, 6)?.map((data, index: number) => (
          <CustomerRow
            key={index}
            photo={data.photo}
            full_name={data.name}
            email={data.email}
          />
        ))}
      </div>
    </div>
  )
}

export default CustomerList
