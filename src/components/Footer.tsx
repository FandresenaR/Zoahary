import Link from 'next/link'
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="mb-6 sm:mb-0">
            <h3 className="text-lg sm:text-xl font-serif font-bold mb-4">Zoahary Baobab</h3>
            <p className="text-gray-400 mb-4">
              Des produits naturels et biologiques à base de baobab, pour votre santé et votre bien-être quotidien.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100064144684910&locale=mt_MT" 
                 className="text-gray-400 hover:text-white transition-colors duration-300"
                 target="_blank" 
                 rel="noopener noreferrer"
              >
                <FiFacebook size={20} />
              </a>
              <a href="#" 
                 className="text-gray-400 hover:text-white transition-colors duration-300"
                 target="_blank" 
                 rel="noopener noreferrer"
              >
                <FiTwitter size={20} />
              </a>
              <a href="#" 
                 className="text-gray-400 hover:text-white transition-colors duration-300"
                 target="_blank" 
                 rel="noopener noreferrer"
              >
                <FiInstagram size={20} />
              </a>
              <a href="#" 
                 className="text-gray-400 hover:text-white transition-colors duration-300"
                 target="_blank" 
                 rel="noopener noreferrer"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="mb-6 sm:mb-0">
            <h3 className="text-base sm:text-lg font-serif font-semibold mb-3 sm:mb-4">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#accueil" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#produits" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Produits
                </Link>
              </li>
              <li>
                <Link href="#bienfaits" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Bienfaits
                </Link>
              </li>
              <li>
                <Link href="#a-propos" className="text-gray-400 hover:text-white transition-colors duration-300">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="mb-6 sm:mb-0">
            <h3 className="text-base sm:text-lg font-serif font-semibold mb-3 sm:mb-4">Nos Produits</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Huile de Baobab
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Poudre de Fruit
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Compléments Alimentaires
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Cosmétiques Naturels
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Coffrets Cadeaux
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-serif font-semibold mb-3 sm:mb-4">Contact</h3>
            <address className="text-gray-400 not-italic">
              <p className="mb-2">Antaravay Salimo</p>
              <p className="mb-2">Toliara, Madagascar</p>
              <p className="mb-2">+261329734491</p>
              <p>zoahary.baobab01@gmail.com</p>
            </address>
          </div>
        </div>
        
        <hr className="border-gray-800 my-6 sm:my-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 sm:mb-0 text-center sm:text-left">
            &copy; {currentYear} Zoahary Baobab. Tous droits réservés.
          </p>
          <div className="mt-2 sm:mt-0">
            <ul className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-6">
              <li>
                <Link href="/confidentialite" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/conditions-generales" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Conditions générales
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
