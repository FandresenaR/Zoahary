/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.fonds-pierre-castel.org',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Aucune configuration experimental.serverActions nécessaire
  // Les Server Actions sont maintenant disponibles par défaut
}

module.exports = nextConfig
