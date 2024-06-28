import Image from "next/image"
import React from "react"

const BarrelLogo = () => {
  return (
    <div>
      <Image
        src="/images/barrel-logo.svg"
        width={120}
        height={56}
        objectFit="contain"
        className="max-w-[140px] w-full min-h-[56px]"
        alt=""
      />
    </div>
  )
}

export default BarrelLogo
