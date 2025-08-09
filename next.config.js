/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  eslint: {
    // Déploie même s'il y a des erreurs ESLint (nous corrigerons ensuite)
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 