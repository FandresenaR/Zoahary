'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'

// Ajouter un paramètre de version ou timestamp pour éviter les problèmes de cache
const imageVersion = '?v=1';

const products = [
  {
    id: 1,
    name: 'Huile de Baobab Bio',
    description: 'Huile pressée à froid, riche en vitamines et acides gras essentiels. Idéale pour la peau et les cheveux.',
    price: '24,90 €',
    image: '/images/baobab/baobab-oil.jpeg',
  },
  {
    id: 2,
    name: 'Poudre de Baobab Pure',
    description: 'Supplément nutritionnel riche en fibres, calcium et vitamine C. Parfait pour smoothies et pâtisseries.',
    price: '19,90 €',
    image: `https://images.unsplash.com/photo-1612170153139-6f881ff067e0?q=80&w=1170&auto=format&fit=crop${imageVersion}`,
  },
  {
    id: 3,
    name: 'Gélules de Baobab',
    description: 'Complément alimentaire concentré pour renforcer l&apos;immunité et améliorer la digestion.',
    price: '29,90 €',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1170&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Savon Exfoliant au Baobab',
    description: 'Savon artisanal à l&apos;huile et aux graines de baobab pour une peau douce et purifiée.',
    price: '12,90 €',
    image: 'https://images.unsplash.com/photo-1547793548-7a0e7dfdb24f?q=80&w=1170&auto=format&fit=crop',
  },
]

const Products = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  }

  return (
    <section id="produits" className="section bg-gray-50">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-primary-dark heading-decoration">Nos Produits à Base de Baobab</h2>
          <p className="text-gray-600">
            Découvrez notre gamme de produits naturels et biologiques pour votre santé, votre beauté et votre bien-être quotidien.
          </p>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {products.map((product) => (
            <motion.div 
              key={product.id} 
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-48 sm:h-56 md:h-64 w-full">
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-serif font-semibold mb-2">{product.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg sm:text-xl font-bold text-primary">{product.price}</span>
                  <Link href="#contact" className="btn btn-secondary text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2">
                    Commander
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Link href="#contact" className="btn btn-primary">
            Contactez-nous pour commander
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Products
