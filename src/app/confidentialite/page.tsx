import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Politique de Confidentialité | Zoahary Baobab',
  description: 'Notre politique de confidentialité détaille comment nous traitons vos données personnelles.',
}

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-primary-dark">Politique de Confidentialité</h1>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
            <p className="mb-4 text-gray-600">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold mb-4 text-primary-dark">1. Introduction</h2>
              <p className="mb-4 text-gray-700">
                Chez Zoahary Baobab, nous accordons une grande importance à la protection de vos données personnelles. 
                Cette politique de confidentialité vous explique comment nous collectons, utilisons, partageons 
                et protégeons vos informations lorsque vous visitez notre site web ou effectuez des achats.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold mb-4 text-primary-dark">2. Informations que nous collectons</h2>
              <p className="mb-4 text-gray-700">
                Nous collectons les informations que vous nous fournissez volontairement, notamment :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Informations de contact (nom, adresse email, numéro de téléphone)</li>
                <li>Informations de livraison (adresse postale)</li>
                <li>Informations de paiement (traitées de manière sécurisée par nos prestataires de paiement)</li>
                <li>Vos communications avec notre service client</li>
              </ul>
              <p className="mb-4 text-gray-700">
                Nous collectons également automatiquement certaines informations lorsque vous visitez notre site :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Données de navigation (pages visitées, durée de la visite)</li>
                <li>Informations sur votre appareil (type d\'appareil, système d\'exploitation)</li>
                <li>Adresse IP et données de localisation approximative</li>
                <li>Cookies et technologies similaires</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold mb-4 text-primary-dark">3. Utilisation de vos informations</h2>
              <p className="mb-4 text-gray-700">
                Nous utilisons vos informations pour :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Traiter et livrer vos commandes</li>
                <li>Communiquer avec vous concernant votre compte ou vos achats</li>
                <li>Vous informer sur nos produits, promotions ou événements (avec votre consentement)</li>
                <li>Améliorer notre site web et nos produits</li>
                <li>Prévenir les fraudes et assurer la sécurité</li>
                <li>Se conformer à nos obligations légales</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold mb-4 text-primary-dark">4. Partage de vos informations</h2>
              <p className="mb-4 text-gray-700">
                Nous ne vendons pas vos données personnelles. Nous partageons vos informations uniquement avec :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Nos prestataires de services (livraison, paiement, hébergement)</li>
                <li>Les autorités compétentes si la loi l\'exige</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold mb-4 text-primary-dark">5. Vos droits</h2>
              <p className="mb-4 text-gray-700">
                Selon les lois applicables, vous pouvez avoir le droit de :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Accéder à vos données personnelles</li>
                <li>Rectifier vos données inexactes</li>
                <li>Supprimer vos données</li>
                <li>Limiter ou vous opposer au traitement</li>
                <li>Obtenir une copie de vos données (portabilité)</li>
                <li>Retirer votre consentement</li>
              </ul>
              <p className="text-gray-700">
                Pour exercer ces droits, contactez-nous à l\'adresse email : zoahary.baobab01@gmail.com
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold mb-4 text-primary-dark">6. Sécurité des données</h2>
              <p className="mb-4 text-gray-700">
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour 
                protéger vos données personnelles contre tout accès non autorisé, perte ou altération.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold mb-4 text-primary-dark">7. Cookies</h2>
              <p className="mb-4 text-gray-700">
                Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer 
                votre navigateur pour refuser les cookies, mais cela pourrait affecter certaines fonctionnalités du site.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold mb-4 text-primary-dark">8. Modifications de cette politique</h2>
              <p className="mb-4 text-gray-700">
                Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons 
                de tout changement significatif par un avis sur notre site ou par email.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-serif font-semibold mb-4 text-primary-dark">9. Nous contacter</h2>
              <p className="text-gray-700">
                Si vous avez des questions concernant cette politique, veuillez nous contacter à :
              </p>
              <p className="mt-2 text-gray-700">
                Email : zoahary.baobab01@gmail.com<br />
                Adresse : Antaravay Salimo, Toliara, Madagascar<br />
                Téléphone : +261329734491
              </p>
            </section>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/" className="text-primary hover:text-primary-dark font-medium">
              ← Retour à l\'accueil
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default PrivacyPolicy
