/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "/",
      destination: "/login", // External URL
      permanent: false, // Optional: Set to true for permanent redirect
    },
  ],
}

export default nextConfig
