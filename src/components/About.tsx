'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { motion } from 'framer-motion'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="a-propos" className="section relative">
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-primary-dark/20"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] md:aspect-[16/9] w-full rounded-lg overflow-hidden"
          >
            <Image 
              src="https://images.unsplash.com/photo-1564198729838-cb82ee0c733c?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Plantation de baobab à Madagascar"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="card p-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 heading-decoration">Notre Histoire</h2>
            <p className="text-gray-600 mb-4">
              Zoahary Baobab est née d'une passion pour les trésors naturels de Madagascar, où le baobab, arbre emblématique, est vénéré depuis des millénaires pour ses propriétés exceptionnelles.
            </p>
            <p className="text-gray-600 mb-4">
              Notre mission est de partager ces bienfaits avec le monde tout en soutenant les communautés locales et en préservant cet écosystème unique. Nous travaillons directement avec des coopératives malgaches pour garantir une production éthique et durable.
            </p>
            <p className="text-gray-600 mb-8">
              Chaque produit Zoahary Baobab est fabriqué avec le plus grand soin, à partir d'ingrédients biologiques récoltés à la main, sans pesticides ni additifs chimiques.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-primary/10 backdrop-blur-sm rounded-lg">
                <span className="block text-3xl font-bold text-accent mb-2">100%</span>
                <span className="text-gray-100">Naturel et Bio</span>
              </div>
              <div className="text-center p-4 bg-primary/10 backdrop-blur-sm rounded-lg">
                <span className="block text-3xl font-bold text-accent mb-2">12+</span>
                <span className="text-gray-100">Produits exclusifs</span>
              </div>
              <div className="text-center p-4 bg-primary/10 backdrop-blur-sm rounded-lg">
                <span className="block text-3xl font-bold text-accent mb-2">5000+</span>
                <span className="text-gray-100">Clients satisfaits</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
