'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiHeart, FiSun, FiShield, FiRefreshCw } from 'react-icons/fi'
import Image from 'next/image'

const benefits = [
  {
    title: 'Riche en Vitamines',
    description: 'Le fruit du baobab contient 6 fois plus de vitamine C que l&apos;orange et est riche en vitamines A, B1, B2 et B6.',
    icon: FiSun,
  },
  {
    title: 'Antioxydant Naturel',
    description: 'Combat les radicaux libres et ralentit le vieillissement cellulaire grâce à sa forte teneur en antioxydants.',
    icon: FiShield,
  },
  {
    title: 'Stimule l&apos;Immunité',
    description: 'Favorise une meilleure réponse immunitaire et aide à combattre naturellement les infections.',
    icon: FiHeart,
  },
  {
    title: 'Énergie Durable',
    description: 'Source naturelle d&apos;énergie qui améliore l&apos;endurance et combat efficacement la fatigue.',
    icon: FiRefreshCw,
  },
]

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  }

  return (
    <section id="bienfaits" className="section relative">
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-secondary-light/10"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 heading-decoration">Les Bienfaits du Baobab</h2>
          <p className="text-gray-100">
            Cet arbre millénaire, surnommé "l'arbre pharmacien", offre de nombreux bienfaits pour votre santé et votre bien-être.
          </p>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="card p-6"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-primary-dark mb-5">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-primary-dark">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
