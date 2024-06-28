import { BarrelGhostButton, BarrelSecondaryButton } from "@/styles/ButtonStyles"
import { ExportSquare } from "iconsax-react"
import Link from "next/link"

import React, { FC } from "react"
import { twc } from "react-twc"

const PrimaryAuthButton = () => {
  return (
    <div className="absolute top-20 right-10">
      <Link href="/dashboard" prefetch={true}>
        <GetStatedButton>
          <ExportSquare size={18} className="text-neutral-800" />
          Head to dashboard
        </GetStatedButton>
      </Link>
    </div>
  )
}

const GetStatedButton = twc(BarrelGhostButton)`
w-full
`

export default PrimaryAuthButton
