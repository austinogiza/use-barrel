import PrimaryButton from "@/components/system/buttons/PrimaryButton"
import SiteImage from "@/components/utils/site-image"
import { useActions } from "@/lib/use-actions"

import { Add } from "iconsax-react"
import React from "react"

const CustomerEmptyState = () => {
  const { openCreateModal } = useActions()

  return (
    <div className=" w-full flex flex-col items-center justify-center gap-2 my-20">
      <div className=" w-full flex flex-col items-center justify-center px-10">
        <SiteImage
          src="/images/barrel-customer.svg"
          className="max-w-[120px] w-full min-h-[120px] flex items-center justify-center object-cover"
        />
        <h1 className="text-base font-bold text-neutral-600 text-center">
          No Customers Yet
        </h1>
        <p className=" text-xs font-medium text-neutral-400 text-center">
          It looks like you haven't added any customers. Add your first customer
          to get started!
        </p>
      </div>
      <div
        className="w-full max-w-[180px] mx-auto my-4"
        onClick={openCreateModal}
      >
        <PrimaryButton
          title=" Add Customer"
          icon={<Add className="text-white" size={16} />}
        />
      </div>
    </div>
  )
}

export default CustomerEmptyState
