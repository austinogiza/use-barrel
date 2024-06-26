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
  url: "https://usebarrel.netlify.app",
  social: "@janefashion",
  ogImage: "https://usebarrel.netlify.app/og.png",
  links: {
    twitter: "https://usebarrel.netlify.app/og.png",
  },
}
