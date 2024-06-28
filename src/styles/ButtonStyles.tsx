import { twc } from "react-twc"
export const BarrelLargeDefaultButton = twc.button`  text-white mt-4
inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary-700 text-primary-foreground shadow hover:bg-primary-950  py-2 px-4 h-11 max-w-[550px] w-full my-2
`
export const BarrelDefaultButton = twc.button`  text-white
inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary-700 text-primary-foreground shadow hover:bg-primary-950  py-2 px-4  max-w-[550px] w-full my-2
`
export const BarrelDestructiveButton = twc.button`
inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 py-2 px-4 max-w-[550px] w-full
`
export const BarrelOutlineButton = twc.button`
 bg-transparent text-black border border-black rounded-xl
justify-center whitespace-nowrap flex flex-row items-center text-sm gap-1 font-medium  focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-primary-300 hover:text-primary-950 duration-300 transition-all py-2 px-4 max-w-[550px] w-full
`
export const BarrelSecondaryButton = twc.button` bg-black text-white rounded-xl
justify-center whitespace-nowrap flex flex-row items-center text-sm gap-1 font-medium  focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-primary-950 duration-300 transition-all py-2 px-4 max-w-[550px] w-full
`
export const BarrelGhostButton = twc.button`bg-snowWhite border border-neutral-100 shadow-xs flex flex-row items-center justify-center gap-2 text-black rounded-xl max-w-fit duration-300 transition-all py-2 px-4 w-full hover:border-primary-500
 whitespace-nowrap  text-sm font-medium  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground
`
export const BarrelLinkButton = twc.button`
inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline py-2 px-4 max-w-[550px] w-full
`
