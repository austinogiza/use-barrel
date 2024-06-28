import React from "react"
import StateToggle from "./state-toggle"
import SummaryDivider from "../utils/summary-divider"

const StateMode = () => {
  return (
    <>
      <div className="flex items-center justify-end  mb-6 gap-2">
        <StateToggle />{" "}
      </div>{" "}
      <div className="w-full my-6">
        <SummaryDivider />
      </div>
    </>
  )
}

export default StateMode
