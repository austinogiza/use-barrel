import {
  BarrelDefaultButton,
  BarrelSecondaryButton,
} from "@/styles/ButtonStyles"
import Link from "next/link"

import React, { FC } from "react"
import { twc } from "react-twc"
interface SecondaryButtonProps {
  link?: string
  isLink?: boolean
  title?: string

  icon?: React.ReactNode
  clickEvent?: () => void
}
const PrimaryButton: FC<SecondaryButtonProps> = (props) => {
  const { link, icon, isLink, clickEvent, title } = props
  return (
    <div className="w-full">
      {!!isLink ? (
        <>
          {" "}
          <Link href={`${link}`}>
            <GetStatedButton>
              {" "}
              {icon ? (
                <>
                  {" "}
                  <div>{icon}</div>
                </>
              ) : null}
              {title}
            </GetStatedButton>
          </Link>
        </>
      ) : (
        <>
          <GetStatedButton onClick={clickEvent}>
            {" "}
            {icon ? (
              <>
                {" "}
                <div>{icon}</div>
              </>
            ) : null}
            {title}
          </GetStatedButton>
        </>
      )}
    </div>
  )
}

const GetStatedButton = twc(BarrelDefaultButton)`
w-full
`

export default PrimaryButton
