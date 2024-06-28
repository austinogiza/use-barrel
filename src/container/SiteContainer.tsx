"use client"
import React, { useEffect } from "react"
import "@/styles/globals.css"
import { usePathname } from "next/navigation"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import CreateOrderSlide from "@/components/dashboard/order/create-order-slide"

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

  return (
    <>
      {/* <CreateOrderSlide /> */}
      {/* <NextUIProvider> */}
      <ReactQueryDevtools initialIsOpen={false} />

      {/* <SiteNavbar /> */}

      <div className="mb-20 min-h-[650px]">{children}</div>

      {/* </NextUIProvider> */}
    </>
  )
}

export default SiteContainer
