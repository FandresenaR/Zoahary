'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiExternalLink } from 'react-icons/fi'

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="realisations" className="section bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-primary-dark heading-decoration">
            Nos Réalisations
          </h2>
          <p className="text-gray-600">
            Reconnaissance de notre engagement pour la qualité et le développement durable à Madagascar.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Remplacer l'image problématique par un arrière-plan dégradé et une icône */}
            <div className="relative h-60 md:h-auto bg-gradient-to-br from-amber-700 to-amber-500 flex items-center justify-center">
              <div className="text-white text-center px-6">
                <FiAward className="w-20 h-20 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold">Prix Pierre Castel</h3>
                <p className="text-amber-100">Lauréat 2024</p>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <FiAward className="text-amber-500 w-6 h-6 mr-2" />
                <h3 className="text-2xl font-serif font-bold text-gray-900">Prix Pierre Castel 2024</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Nous sommes fiers d'être lauréat du Prix Pierre Castel 2024, une distinction qui récompense 
                notre engagement pour le développement durable, la préservation de l'environnement et 
                l'entrepreneuriat local à Madagascar.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Ce prix reconnaît :</h4>
                <ul className="text-gray-600 space-y-1 list-disc list-inside">
                  <li>Notre impact positif sur les communautés locales</li>
                  <li>Notre approche écologique de production</li>
                  <li>Notre contribution au développement économique de Madagascar</li>
                </ul>
              </div>
              <a 
                href="https://www.facebook.com/share/v/1AQXatD1rd/" 
                className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                En savoir plus <FiExternalLink className="ml-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
