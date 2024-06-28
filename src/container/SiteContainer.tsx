"use client"
import React, { useEffect } from "react"
import "@/styles/globals.css"
import { usePathname } from "next/navigation"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import CreateOrderSlide from "@/components/dashboard/order/create-order-slide"
import { useAppSelector } from "@/store/hooks"
import EditOrderSlide from "@/components/dashboard/order/edit-order-slide"
import OrderDetails from "@/components/dashboard/order/order-details"

interface ContainerProps {
  children: React.ReactNode
}
const SiteContainer: React.FC<ContainerProps> = (props) => {
  const { children } = props
  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(authCheckState())
  // }, [dispatch])
  const pathname = usePathname()
  const isAllowed = pathname ? !pathname.startsWith("dashboard") : false
  const createModal = useAppSelector((state) => state.order.createModal)
  const editModal = useAppSelector((state) => state.order.editModal)
  const orderDetailsModal = useAppSelector(
    (state) => state.order.orderDetailsModal
  )

  return (
    <>
      {createModal ? (
        <>
          {" "}
          <CreateOrderSlide />
        </>
      ) : null}

      {editModal ? (
        <>
          {" "}
          <EditOrderSlide />
        </>
      ) : null}
      {orderDetailsModal ? (
        <>
          {" "}
          <OrderDetails />
        </>
      ) : null}
      {/* <NextUIProvider> */}
      <ReactQueryDevtools initialIsOpen={false} />

      {/* <SiteNavbar /> */}

      <div className="mb-20 min-h-[650px]">{children}</div>

      {/* </NextUIProvider> */}
    </>
  )
}

export default SiteContainer
