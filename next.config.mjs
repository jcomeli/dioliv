/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "dioliv.com" }],
        destination: "https://www.dioliv.com/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
