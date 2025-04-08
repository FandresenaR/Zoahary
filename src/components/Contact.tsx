'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import ReCAPTCHA from "react-google-recaptcha"
import DOMPurify from 'dompurify'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // Champ honeypot invisible pour piéger les bots
  })
  
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitCount, setSubmitCount] = useState(0)
  const [lastSubmitTime, setLastSubmitTime] = useState(0)
  const [captchaVerified, setCaptchaVerified] = useState(false)
  
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const validateForm = () => {
    let valid = true
    const errors = {
      name: '',
      email: '',
      message: '',
    }
    
    // Validation du nom
    if (formData.name.trim().length < 2) {
      errors.name = 'Le nom doit contenir au moins 2 caractères'
      valid = false
    }
    
    // Validation email avec regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Veuillez entrer une adresse email valide'
      valid = false
    }
    
    // Validation du message
    if (formData.message.trim().length < 10) {
      errors.message = 'Le message doit contenir au moins 10 caractères'
      valid = false
    }
    
    setFormErrors(errors)
    return valid
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Effacer l'erreur du champ modifié
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const onCaptchaChange = (token: string | null) => {
    setCaptchaVerified(!!token)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Vérification anti-spam basique
    const now = Date.now()
    if (now - lastSubmitTime < 10000) { // 10 secondes entre les soumissions
      alert("Veuillez patienter avant de soumettre à nouveau le formulaire")
      return
    }
    
    // Vérification du champ honeypot
    if (formData.honeypot) {
      return // Silencieusement échouer pour ne pas alerter le bot
    }
    
    // Validation du formulaire
    if (!validateForm()) {
      return
    }
    
    // Vérification du CAPTCHA
    if (!captchaVerified) {
      alert("Veuillez valider le CAPTCHA")
      return
    }
    
    setIsSubmitting(true)
    setLastSubmitTime(now)
    setSubmitCount(prev => prev + 1)
    
    try {
      // Sanitiser les données avant l'envoi
      const sanitizedData = {
        name: DOMPurify.sanitize(formData.name),
        email: DOMPurify.sanitize(formData.email),
        message: DOMPurify.sanitize(formData.message),
        token: recaptchaRef.current?.getValue() || '' // Récupérer le token reCAPTCHA
      }
      
      // Envoi des données à notre API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedData)
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de l\'envoi du formulaire');
      }
      
      // Réinitialiser le captcha
      recaptchaRef.current?.reset()
      setCaptchaVerified(false)
      
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '', honeypot: '' })
      
      // Réinitialiser le message de confirmation après 5 secondes
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (error) {
      setIsSubmitting(false)
      alert(error instanceof Error ? error.message : "Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer.")
    }
  }

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-primary-dark heading-decoration">Contactez-nous</h2>
          <p className="text-gray-600">
            Des questions sur nos produits baobab? Notre équipe est à votre disposition pour vous conseiller.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="md:col-span-1 lg:col-span-2"
          >
            <h3 className="text-2xl font-serif font-semibold mb-6 text-gray-900">Nos coordonnées</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FiMapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-500">Adresse</h4>
                  <p className="text-gray-600">25 Rue de Madagascar, 75008 Paris, France</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FiPhone className="w-6 h-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-500">Téléphone</h4>
                  <p className="text-gray-600">+33 1 23 45 67 89</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FiMail className="w-6 h-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-500">Email</h4>
                  <p className="text-gray-600">contact@zoaharybaobab.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-2xl font-serif font-semibold mb-6 text-gray-900">Heures d'ouverture</h3>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-gray-600">Lundi - Vendredi:</td>
                    <td className="py-2 text-gray-600">9h00 - 18h00</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-gray-600">Samedi:</td>
                    <td className="py-2 text-gray-600">10h00 - 16h00</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-gray-600">Dimanche:</td>
                    <td className="py-2 text-gray-600">Fermé</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-1 lg:col-span-3"
          >
            <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-sm">
              <h3 className="text-2xl font-serif font-semibold mb-6 text-gray-900">Envoyez-nous un message</h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 text-green-700 p-4 rounded mb-6">
                  Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                {/* Champ honeypot invisible pour piéger les bots */}
                <div className="opacity-0 position-absolute h-0 overflow-hidden">
                  <label htmlFor="honeypot">Ne pas remplir ce champ</label>
                  <input
                    type="text"
                    id="honeypot"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="mb-4 sm:mb-6">
                    <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Nom</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                        formErrors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Votre nom"
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-red-500 text-sm">{formErrors.name}</p>
                    )}
                  </div>
                  
                  <div className="mb-4 sm:mb-6">
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                        formErrors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="votre@email.com"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-red-500 text-sm">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                      formErrors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Votre message..."
                  ></textarea>
                  {formErrors.message && (
                    <p className="mt-1 text-red-500 text-sm">{formErrors.message}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"} // Clé de test
                    onChange={onCaptchaChange}
                  />
                  <p className="mt-2 text-xs text-gray-500">
                    Ce site est protégé par reCAPTCHA pour garantir que vous n'êtes pas un robot.
                  </p>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || !captchaVerified}
                  className={`w-full btn ${isSubmitting || !captchaVerified ? 'btn-disabled' : 'btn-primary'} mb-4`}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
                
                <div className="text-center mt-2">
                  <p className="text-sm text-gray-600 mb-2">Ou contactez-nous directement par email :</p>
                  <a 
                    href="mailto:fandresenar6@gmail.com?subject=Commande%20Produits%20Zoahary%20Baobab" 
                    className="btn btn-outline border border-primary text-primary hover:bg-primary hover:text-white flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contacter par Email
                  </a>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
