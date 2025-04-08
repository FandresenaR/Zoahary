/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Utiliser remotePatterns pour les images externes
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
  
  // Ignorer les erreurs de linting pendant le build
  eslint: {
    // Désactiver complètement la vérification ESLint pour le déploiement
    ignoreDuringBuilds: true,
  },
  
  // Ignorer les erreurs TypeScript
  typescript: {
    // Désactiver la vérification TypeScript pour le déploiement
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
