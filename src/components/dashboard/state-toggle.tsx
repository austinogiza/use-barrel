"use client"
import { useEmptyState } from "@/lib/use-empty-state"
import React from "react"

const StateToggle = () => {
  const { emptyState, closeEmptyStateMode, openEmptyStateMode } =
    useEmptyState()
  return (
    <>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">
          <h3 className="font-bold text-sm">Show Empty state</h3>
        </span>
        <div
          className={`relative inline-flex items-center h-6 rounded-full w-11 cursor-pointer transition-colors duration-200 ${
            emptyState ? "bg-primary-800" : "bg-primary-200"
          }`}
          onClick={emptyState ? closeEmptyStateMode : openEmptyStateMode}
        >
          <span
            className={`inline-block w-4 h-4 transform  rounded-full transition-transform duration-200 ${
              emptyState
                ? "translate-x-6 bg-white"
                : "translate-x-1  bg-neutral-600"
            }`}
          ></span>
        </div>
      </div>
    </>
  )
}

export default StateToggle
