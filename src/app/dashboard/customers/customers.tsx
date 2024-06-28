import SectionHeader from "@/components/dashboard/overview/section-header"
import React from "react"
import OrderTable from "@/components/dashboard/order/order-table"
import CustomerTable from "@/components/dashboard/customers/customer-table"
import { CustomerData } from "@/data/customer-data"
const Customers = () => {
  return (
    <div>
      <SectionHeader title="Customers" />
      <CustomerTable data={CustomerData} />
    </div>
  )
}

export default Customers
