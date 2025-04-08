/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Remplacer images.domains (déprécié) par images.remotePatterns (recommandé)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.fonds-pierre-castel.org',
      },
    ],
  },
  
  // Configuration pour le déploiement
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
