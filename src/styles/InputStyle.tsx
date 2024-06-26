import { twc } from "react-twc"

export const PrimaryInput = twc.input` flex h-11 w-full rounded-xl border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 max-w-[650px]`

export const PrimaryTextArea = twc.textarea`
flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 max-w-[650px]
`

export const PrimaryLabel = twc.label`
text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 my-2
`
