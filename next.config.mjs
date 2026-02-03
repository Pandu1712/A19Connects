/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  rewrites: async () => {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: '/:path*',
        },
      ],
    }
  },
  experimental: {
    staticGenerationRetryCount: 3,
  },
}

export default nextConfig
