import SiteImage from "@/components/utils/site-image"
import React, { FC } from "react"
interface BarrelOverviewProps {
  title?: string
  price?: string
}
const BarrelOverview: FC<BarrelOverviewProps> = (props) => {
  const { title, price } = props
  return (
    <div className="max-w-[650px] relative min-h-[88px] bg-white shadow-sm border border-neutral-50 rounded-lg w-full flex flex-col items-start justify-center px-4">
      <h1 className="text-xs font-normal text-neutral-400 mb-1">{title}</h1>
      <p className="text-lg font-bold">{price}</p>
      <div className="absolute bottom-0 right-4">
        <SiteImage
          src="/images/barrel-chart.svg"
          className="object-cover max-w-[72px] w-full min-h-[56px]"
        />
      </div>
    </div>
  )
}

export default BarrelOverview
