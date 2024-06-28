import { useActions } from "@/lib/use-actions"
import { cn } from "@/lib/utils"
import React, { FC } from "react"
interface MoreInfoProps {
  active?: boolean
  number?: number
}
const MoreInfo: FC<MoreInfoProps> = (props) => {
  const { active, number } = props
  const { openEditModal, openDetailModeModal } = useActions()
  return (
    <div
      className={cn(
        "absolute  shadow-sm border z-[100] border-neutral-50 flex-col items-start justify-start top-10 right-2 bg-white rounded-xl gap-2 w-[120px] min-h-[100px] px-2 py-2.5",
        active ? "flex" : "hidden"
      )}
    >
      <div className=" px-3 py-1.5 hover:bg-smokeWhite w-full rounded-lg">
        {" "}
        <h1
          className="text-sm cursor-pointer font-medium text-black "
          onClick={() => openEditModal(number)}
        >
          Edit
        </h1>
      </div>{" "}
      <div className=" px-3 py-1.5 hover:bg-smokeWhite w-full rounded-lg">
        {" "}
        <h1
          className="text-sm cursor-pointer font-medium text-black "
          onClick={() => openDetailModeModal(number)}
        >
          View
        </h1>
      </div>
      <div className=" px-3 py-1.5 hover:bg-smokeWhite w-full rounded-lg">
        {" "}
        <h1 className="text-sm cursor-pointer font-medium text-destructive-600  ">
          Delete
        </h1>
      </div>
    </div>
  )
}

export default MoreInfo
