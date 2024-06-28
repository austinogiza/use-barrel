"use client"
import OrderTable from "@/components/dashboard/order/order-table"
import BarrelOverview from "@/components/dashboard/overview/barrel-overview"
import CustomerList from "@/components/dashboard/overview/customer-list"
import DashboardHeader from "@/components/dashboard/overview/dashboard-header"
import GetStarted from "@/components/dashboard/overview/get-started"
import GetVerified from "@/components/dashboard/overview/get-verified"
import SetupGuide from "@/components/dashboard/overview/setup-guide"
import PageLoading from "@/components/utils/page-loading"
import SummaryDivider from "@/components/utils/summary-divider"
import { OrderTransactions } from "@/data/order-table-data"
import { OverviewData } from "@/data/overview-data"
import Link from "next/link"
import React, { useEffect, useState } from "react"

const Dashboard = () => {
  const [showGuide, setShowGuide] = useState<boolean>(true)
  const [showVerified, setShowVerified] = useState<boolean>(true)
  const [showStarted, setShowStarted] = useState<boolean>(true)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShowGuide(localStorage.getItem("showGuide") === "false" ? false : true)
      setShowVerified(
        localStorage.getItem("showVerified") === "false" ? false : true
      )
      setShowStarted(
        localStorage.getItem("showStarted") === "false" ? false : true
      )
    }
  }, [])

  const closeGuide = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("showGuide", "false")
      setShowGuide(false)
    }
  }

  const closeVerified = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("showVerified", "false")
      setShowVerified(false)
    }
  }

  const closeGetStarted = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("showStarted", "false")
      setShowStarted(false)
    }
  }

  return (
    <div className="w-full flex flex-col items-start  justify-start">
      {!OrderTransactions ? (
        <>
          {" "}
          <PageLoading />
        </>
      ) : (
        <>
          {" "}
          <DashboardHeader />
          {showGuide ? (
            <>
              <SetupGuide onClick={closeGuide} />
            </>
          ) : null}
          {showVerified ? (
            <>
              <GetVerified onClick={closeVerified} />
            </>
          ) : null}
          {showStarted ? (
            <>
              <GetStarted onClick={closeGetStarted} />
            </>
          ) : null}
          {!!OverviewData ? (
            <>
              {" "}
              <div className="my-6 w-full">
                <SummaryDivider />
              </div>
              <div className="grid lg:grid-cols-2 place-items-center xl:grid-cols-4 grid-cols-1 w-full items-center justify-center gap-3">
                {OverviewData?.map((data, index: number) => (
                  <BarrelOverview
                    key={index}
                    title={data.title}
                    price={data.price}
                  />
                ))}
              </div>{" "}
              <div className="my-6 w-full">
                <SummaryDivider />
              </div>
            </>
          ) : (
            <></>
          )}{" "}
          <div className="mt-10 w-full items-start justify-between flex lg:flex-col xl:flex-row flex-col gap-10">
            {" "}
            <div className="w-full">
              <div className="w-full items-center justify-between flex flex-row px-4 pt-6 py-4 mb-4">
                <div className="mt-2">
                  {" "}
                  <h1 className="text-lg font-bold mb-1 leading-none tracking-tight">
                    Transactions
                  </h1>
                </div>
                <Link href="/dashboard/orders">
                  {" "}
                  <div className="text-xs font-medium px-3 py-1.5 rounded-xl cursor-pointer duration-500 transition-all hover:border-primary-800  bg-white border border-neutral-200">
                    View all
                  </div>
                </Link>
              </div>
              <OrderTable data={OrderTransactions.slice(0, 6)} />
            </div>
            <CustomerList />
          </div>
        </>
      )}
    </div>
  )
}

export default Dashboard
