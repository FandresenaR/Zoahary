'use client'

import { useState } from 'react'
import { FiAward, FiFacebook, FiX } from 'react-icons/fi'

const AwardBanner = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-2">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FiAward className="text-amber-200 w-5 h-5 mr-2" />
            <span className="text-sm md:text-base font-medium mr-2">
              Lauréat Prix Pierre Castel 2024
            </span>
            <span className="hidden md:inline text-xs text-amber-100/80">
              - Reconnaissance de notre engagement pour le développement durable à Madagascar
            </span>
          </div>
          
          <div className="flex items-center">
            <a 
              href="https://www.facebook.com/share/v/1AQXatD1rd/" 
              className="text-xs bg-white/10 hover:bg-white/20 text-white px-2 py-1 rounded flex items-center mr-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFacebook className="mr-1" size={12} />
              <span>Voir</span>
            </a>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="text-amber-100 hover:text-white p-1"
              aria-label="Fermer"
            >
              <FiX size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AwardBanner
