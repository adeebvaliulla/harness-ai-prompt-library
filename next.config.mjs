/** @type {import('next').NextConfig} */

// Mount path configured in the Webflow Cloud dashboard.
// Set NEXT_PUBLIC_BASE_PATH to match (e.g. "/prompts").
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  basePath,
  assetPrefix: basePath,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
