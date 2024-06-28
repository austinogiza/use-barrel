import PrimaryButton from "@/components/system/buttons/PrimaryButton"
import { useActions } from "@/lib/use-actions"

import { Add } from "iconsax-react"
import React from "react"
import { twc } from "react-twc"

const OrderEmptyState = () => {
  const { openCreateModal } = useActions()
  return (
    <div className=" flex flex-col items-center justify-center gap-2">
      <div className=" flex flex-col items-center justify-center ">
        {" "}
        <h1>Create your first order</h1>
        <p>
          Adding order to your store is easy peasy. Create order in minutes and
          start making sales.
        </p>
      </div>
      <div
        className="w-full max-w-[250px] mx-auto my-4"
        onClick={openCreateModal}
      >
        <PrimaryButton
          title=" Create order"
          icon={<Add className="text-white" size={16} />}
        />
      </div>
    </div>
  )
}

export default OrderEmptyState
