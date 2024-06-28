import SectionHeader from "@/components/dashboard/overview/section-header"
import { OrderTransactions } from "@/data/order-table-data"
import React from "react"
import OrderTable from "@/components/dashboard/order/order-table"
import PageLoading from "@/components/utils/page-loading"
const Orders = () => {
  return (
    <div>
      {" "}
      {!OrderTransactions ? (
        <>
          {" "}
          <PageLoading />
        </>
      ) : (
        <>
          {" "}
          <SectionHeader title="Transactions" />
          <OrderTable data={OrderTransactions} />
        </>
      )}
    </div>
  )
}

export default Orders
