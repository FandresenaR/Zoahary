'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="accueil" className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-primary-dark/20"></div>
      </div>
      
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left z-10"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-4 sm:mb-6">
              La Puissance du <span className="text-accent">Baobab</span> pour Votre Bien-être
            </h1>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0">
              Découvrez le <span className="relative inline-block sparkle-text font-semibold">
                Made in Madagascar
                <span className="stars-container"></span>
              </span> 100% naturels et biologiques à base de baobab, l\'arbre de vie aux multiples bienfaits nutritionnels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="#produits" className="btn btn-primary">
                Nos produits
              </Link>
              <Link href="#bienfaits" className="btn font-medium border-2 border-accent text-accent shadow-md hover:bg-accent hover:text-white transition-all">
                Découvrir les bienfaits
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-64 sm:h-80 md:h-[500px] rounded-lg overflow-hidden"
          >
            <Image 
              src="https://images.unsplash.com/photo-1704684715217-f4b3ca3161f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Baobab majestueux au coucher du soleil"
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
      
      <div className="absolute -z-10 top-0 right-0 w-1/3 h-1/3 bg-secondary-light opacity-10 rounded-full blur-3xl" />
      <div className="absolute -z-10 bottom-0 left-0 w-1/3 h-1/3 bg-primary-light opacity-10 rounded-full blur-3xl" />
    </section>
  )
}

export default Hero
