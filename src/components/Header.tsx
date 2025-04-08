'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiMenu, FiX, FiAward, FiFacebook } from 'react-icons/fi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAwardVisible, setIsAwardVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Accueil', 'Produits', 'Bienfaits', 'Réalisations', 'Témoignages', 'Contact'];

  return (
    <>
      {/* Bannière de Prix Pierre Castel - ajustée pour être plus compacte sur tablette */}
      {isAwardVisible && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-800 to-amber-600 text-white py-1 sm:py-2">
          <div className="container px-3 sm:px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center max-w-[75%]">
                <FiAward className="text-amber-200 w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium mr-1 truncate">
                  Lauréat Prix Pierre Castel 2024
                </span>
                <span className="hidden md:inline text-xs text-amber-100/80 truncate">
                  - Reconnaissance pour Madagascar
                </span>
              </div>
              
              <div className="flex items-center flex-shrink-0">
                <a 
                  href="https://www.facebook.com/share/v/1AQXatD1rd/" 
                  className="text-xs bg-white/10 hover:bg-white/20 text-white px-1 sm:px-2 py-1 rounded flex items-center mr-1 sm:mr-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiFacebook size={12} />
                  <span className="hidden sm:inline ml-1">Voir</span>
                </a>
                
                <button 
                  onClick={() => setIsAwardVisible(false)}
                  className="text-amber-100 hover:text-white p-1"
                  aria-label="Fermer"
                >
                  <FiX size={14} className="sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Header principal - plus compact et meilleure adaptation aux tablettes */}
      <header 
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-3 sm:py-4'
        }`}
        style={{ top: isAwardVisible ? '32px' : '0' }}
      >
        <div className="container px-3 sm:px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-xl sm:text-2xl font-serif font-bold text-accent">Zoahary Baobab</span>
          </Link>
          
          {/* Navigation - maintenant cachée sur tablette également */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navItems.map((item, i) => (
              <Link 
                key={i} 
                href={`#${item.toLowerCase().replace(' ', '-').replace('à', 'a').replace('é', 'e')}`}
                className="text-sm xl:text-base text-gray-500 hover:text-primary transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
            <Link href="#contact" className="btn btn-primary text-sm py-1.5 px-3 sm:py-2 sm:px-4">
              Commander
            </Link>
          </nav>
          
          {/* Menu hamburger - maintenant visible sur tablette aussi */}
          <button 
            className={`lg:hidden ${isScrolled ? 'text-gray-900' : 'text-white'} transition-colors duration-300`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
        
        {/* Menu mobile - maintenant pour tablette également */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md py-3">
            <div className="container px-3 sm:px-4 flex flex-col space-y-3">
              {navItems.map((item, i) => (
                <Link 
                  key={i} 
                  href={`#${item.toLowerCase().replace(' ', '-').replace('à', 'a').replace('é', 'e')}`}
                  className="text-gray-700 hover:text-primary transition-colors duration-300 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Link 
                href="#contact" 
                className="btn btn-primary w-full text-center py-2 mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Commander
              </Link>
            </div>
          </div>
        )}
      </header>
      
      {/* Espace réservé ajusté */}
      <div style={{ height: isAwardVisible ? '90px' : '64px' }} className="sm:h-[100px] lg:h-[120px]" />
    </>
  )
}

export default Header
