import React, { FC } from "react"
import { twc } from "react-twc"
interface SiteImageProps {
  src?: string
  alt?: string
  className?: string
  width?: number
  height?: number
}
const SiteImage: FC<SiteImageProps> = (props) => {
  const { src, alt, className, width, height } = props
  return (
    <>
      <SiteImageContainer
        width={width}
        height={height}
        src={src}
        alt={alt}
        className={className}
      />
    </>
  )
}
const SiteImageContainer = twc.img`
object-cover w-full
`
export default SiteImage
