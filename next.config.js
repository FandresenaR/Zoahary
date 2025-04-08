/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Utiliser remotePatterns au lieu de domains pour les images externes
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
  
  // Ignorer les erreurs ESLint pendant le build
  eslint: {
    // Ne pas faire échouer le build si des erreurs de linting sont trouvées
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
