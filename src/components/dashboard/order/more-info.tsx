import { cn } from "@/lib/utils"
import React, { FC } from "react"
interface MoreInfoProps {
  active?: boolean
}
const MoreInfo: FC<MoreInfoProps> = (props) => {
  const { active } = props
  return (
    <div
      className={cn(
        "absolute  shadow-sm border z-[100] border-neutral-50 flex-col items-start justify-start top-10 right-2 bg-white rounded-lg gap-4 w-[120px] min-h-[100px] px-4 py-3",
        active ? "flex" : "hidden"
      )}
    >
      <h1 className="text-sm cursor-pointer font-medium text-black">Edit</h1>
      <h1 className="text-sm cursor-pointer font-medium text-black">View</h1>
      <h1 className="text-sm cursor-pointer font-medium text-destructive-600">
        Delete
      </h1>
    </div>
  )
}

export default MoreInfo
