export interface SiteConfig {
  title: string
  name: string
  description: string
  social: string
  url: string
  ogImage: string
  links: {
    twitter: string
  }
}

export const siteConfig: SiteConfig = {
  title: "Use Barrel",
  name: "Use Barrel",
  description: "The fastest way to design and deploy procurement automation",
  url: "https://use-barrel.vercel.app",
  social: "@janefashion",
  ogImage: "https://use-barrel.vercel.app/og.png",
  links: {
    twitter: "https://use-barrel.vercel.app/og.png",
  },
}
