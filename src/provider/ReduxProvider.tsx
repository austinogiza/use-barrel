"use client"
import { useBarrelStore } from "@/store/store"
import React from "react"
import { Provider } from "react-redux"

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <Provider store={useBarrelStore}>{children}</Provider>
}
