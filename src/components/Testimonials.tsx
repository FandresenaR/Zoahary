'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { FiStar } from 'react-icons/fi'

const testimonials = [
  {
    id: 1,
    name: 'Marine Dupont',
    role: 'Nutritionniste',
    content: 'J\'utilise la poudre de baobab Zoahary dans mes recommandations nutritionnelles. Un superaliment exceptionnel que mes clients adorent pour ses bienfaits digestifs et immunitaires.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Thomas Moreau',
    role: 'Sportif',
    content: 'Les gélules de baobab m\'accompagnent depuis un an maintenant. J\'observe une nette amélioration de ma récupération et de mon énergie pendant mes entraînements intensifs.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Émilie Lambert',
    role: 'Esthéticienne',
    content: 'L\'huile de baobab Zoahary est un trésor pour la peau. J\'en utilise dans tous mes soins visage et corps. Mes clientes sont ravies des résultats sur leur peau sèche et mature.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1022&auto=format&fit=crop',
  },
]

const Testimonials = () => {
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
    <section id="temoignages" className="section">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 heading-decoration">Ce que disent nos clients</h2>
          <p className="text-gray-100">
            Des milliers de personnes ont déjà intégré nos produits au baobab dans leur quotidien. Voici quelques témoignages.
          </p>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id} 
              variants={itemVariants}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    className={`${i < testimonial.rating ? 'text-accent fill-accent' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-600 italic flex-grow">{testimonial.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
