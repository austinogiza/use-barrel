import SiteContainer from "@/container/SiteContainer"
import ReactQueryProvider from "@/provider/ReactQueryProvider"
import ReduxProvider from "@/provider/ReduxProvider"
import "@/styles/globals.css"
import StyledComponentProvider from "@/provider/StyledComponentProvider"
import { Toaster } from "sonner"
import { siteConfig } from "@/config/site"
export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: ["/favicon.ico"],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: [`${siteConfig.ogImage}`],
        width: 1232,
        height: 650,
        alt: "Jane's Fashion OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.name,
  },
  metadataBase: new URL(siteConfig.url),
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StyledComponentProvider>
      <ReactQueryProvider>
        <ReduxProvider>
          <html lang="en">
            <head>
              <meta property="og:title" content="Jane's Fashion" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
              />
              <meta
                property="og:description"
                content="Here to provide bespoke and ready-to-wear pieces that allow you to showcase your unique style."
              />
              <meta
                property="og:image"
                content="https://janes-fashion.com/og.png"
              />
              <meta property="og:url" content="https://janes-fashion.com" />
              <meta property="og:type" content="website" />
            </head>
            <body>
              <Toaster
                position="top-center"
                richColors
                expand={true}
                closeButton
                visibleToasts={1}
              />{" "}
              <SiteContainer>{children}</SiteContainer>
            </body>
          </html>
        </ReduxProvider>
      </ReactQueryProvider>
    </StyledComponentProvider>
  )
}
