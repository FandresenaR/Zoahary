'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { FiX } from 'react-icons/fi'

const images = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1627580206975-ede73a2ca147?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Allée des baobabs au coucher du soleil',
    caption: 'L\'emblématique allée des baobabs à Madagascar',
  },
  {
    id: 2,
    src: '/images/baobab/graine-baobab.png',
    alt: 'Fruit de baobab ouvert',
    caption: 'Le fruit du baobab et sa pulpe riche en nutriments',
  },
  {
    id: 3,
    src: '/images/baobab/baobab-oil.jpeg',
    alt: 'Huile de baobab et cosmétiques',
    caption: 'Nos produits cosmétiques à l\'huile de baobab',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1590426911380-bd4a61d4d3ea?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Baobab solitaire dans la savane',
    caption: 'Le majestueux baobab, gardien de la savane africaine',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1585335740623-f7a1f0c446eb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Baobab au coucher du soleil',
    caption: 'Les baobabs au coucher du soleil, un spectacle inoubliable',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1704684150861-8f7a89335e64?q=80&w=1461&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Paysage avec baobabs',
    caption: 'Un paysage africain typique avec des baobabs',
  },
]

const BaobabGallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    },
  }

  return (
    <section className="section">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 heading-decoration">Galerie de Baobabs</h2>
          <p className="text-gray-100">
            Découvrez la beauté majestueuse des baobabs et de nos produits à travers cette galerie d'images.
          </p>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {images.map((image, index) => (
            <motion.div 
              key={image.id} 
              variants={itemVariants}
              className="relative cursor-pointer group overflow-hidden rounded-lg h-48 sm:h-56 md:h-64"
              onClick={() => setSelectedImage(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedImage(index);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Voir l'image ${image.alt}`}
            >
              <Image 
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4">
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
            aria-label="Fermer l'image"
          >
            <FiX size={30} />
          </button>
          
          <div className="relative w-full max-w-4xl h-[50vh] sm:h-[70vh] md:h-[80vh]">
            <Image 
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
            <div className="absolute bottom-0 w-full bg-black/50 p-2 sm:p-4">
              <p className="text-white text-xs sm:text-sm md:text-base text-center">{images[selectedImage].caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default BaobabGallery
