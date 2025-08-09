/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  eslint: {
    // Déploie même s'il y a des erreurs ESLint (nous corrigerons ensuite)
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
}

module.exports = nextConfig 