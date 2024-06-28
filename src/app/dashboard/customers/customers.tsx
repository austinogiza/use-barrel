import SectionHeader from "@/components/dashboard/overview/section-header"
import React from "react"
import OrderTable from "@/components/dashboard/order/order-table"
import CustomerTable from "@/components/dashboard/customers/customer-table"
import { CustomerData } from "@/data/customer-data"
import PageLoading from "@/components/utils/page-loading"
const Customers = () => {
  return (
    <div>
      {" "}
      {!CustomerData ? (
        <>
          {" "}
          <PageLoading />
        </>
      ) : (
        <>
          {" "}
          <SectionHeader title="Customers" />
          <CustomerTable data={CustomerData} />
        </>
      )}
    </div>
  )
}

export default Customers
