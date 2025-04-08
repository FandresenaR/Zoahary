import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Conditions Générales de Vente | Zoahary Baobab',
  description: 'Consultez nos conditions générales de vente pour les produits Zoahary Baobab.',
}

const TermsAndConditions = () => {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-primary-dark">Conditions Générales de Vente</h1>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
            <p className="mb-4 text-gray-600">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold mb-4 text-primary-dark">1. Présentation</h2>
              <p className="mb-4 text-gray-700">
                Les présentes Conditions Générales de Vente (CGV) définissent les droits et obligations des parties 
                dans le cadre de la vente de produits par Zoahary Baobab au client. Toute commande implique 
                l\'acceptation pleine et entière de ces CGV.
              </p>
              <p className="text-gray-700">
                Zoahary Baobab est une entreprise située à Antaravay Salimo, Toliara, Madagascar, 
                spécialisée dans la production et la vente de produits naturels à base de baobab.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold mb-4 text-primary-dark">2. Produits</h2>
              <p className="mb-4 text-gray-700">
                Les produits proposés à la vente sont ceux figurant sur notre site, dans la limite des stocks disponibles. 
                Les caractéristiques essentielles des produits sont décrites et présentées avec la plus grande exactitude possible.
              </p>
              <p className="text-gray-700">
                Les photographies et illustrations sont les plus fidèles possibles mais ne peuvent pas assurer une 
                similitude parfaite avec le produit, notamment en ce qui concerne les couleurs.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold mb-4 text-primary-dark">3. Prix</h2>
              <p className="mb-4 text-gray-700">
                Les prix sont indiqués en euros, toutes taxes comprises (TTC), hors frais de livraison. 
                Zoahary Baobab se réserve le droit de modifier ses prix à tout moment, mais les produits 
                seront facturés sur la base des tarifs en vigueur au moment de la validation de la commande.
              </p>
              <p className="text-gray-700">
                Les frais de livraison sont à la charge du client et sont indiqués avant la validation de la commande.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold mb-4 text-primary-dark">4. Commande</h2>
              <p className="mb-4 text-gray-700">
                Pour passer commande, le client doit suivre le processus en ligne ou contacter directement notre service client. 
                La commande n\'est définitive qu\'après confirmation de notre part et réception du paiement intégral.
              </p>
              <p className="text-gray-700">
                Zoahary Baobab se réserve le droit de refuser ou d\'annuler toute commande d\'un client avec 
                lequel il existerait un litige antérieur, ou en cas d\'erreur manifeste sur le prix ou la description du produit.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold mb-4 text-primary-dark">5. Paiement</h2>
              <p className="mb-4 text-gray-700">
                Le paiement s\'effectue par les moyens suivants :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Carte bancaire (via une plateforme sécurisée)</li>
                <li>Virement bancaire</li>
                <li>PayPal</li>
              </ul>
              <p className="text-gray-700">
                La commande ne sera traitée qu\'après confirmation du paiement.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold mb-4 text-primary-dark">6. Livraison</h2>
              <p className="mb-4 text-gray-700">
                Les délais de livraison sont donnés à titre indicatif et ne constituent pas un engagement ferme. 
                Un retard de livraison ne peut donner lieu à aucune pénalité ou annulation de commande.
              </p>
              <p className="mb-4 text-gray-700">
                Les produits sont livrés à l\'adresse indiquée par le client lors de la commande. Il appartient 
                au client de vérifier l\'exactitude de ces informations.
              </p>
              <p className="text-gray-700">
                En cas de dommages constatés lors de la livraison, le client doit les signaler dans les 48 heures suivant la réception.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold mb-4 text-primary-dark">7. Droit de rétractation</h2>
              <p className="mb-4 text-gray-700">
                Conformément à la législation en vigueur, le client dispose d\'un délai de 14 jours à compter de la réception 
                des produits pour exercer son droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités.
              </p>
              <p className="mb-4 text-gray-700">
                Pour exercer ce droit, le client doit nous informer par écrit (email ou courrier) et retourner les produits 
                dans leur état d\'origine et complets (emballage, accessoires, etc.).
              </p>
              <p className="text-gray-700">
                Les frais de retour sont à la charge du client. Le remboursement sera effectué dans un délai de 14 jours 
                suivant la réception des produits retournés, par le même moyen de paiement que celui utilisé pour la commande.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold mb-4 text-primary-dark">8. Garanties</h2>
              <p className="mb-4 text-gray-700">
                Tous nos produits bénéficient de la garantie légale de conformité et de la garantie légale contre les vices cachés. 
                En cas de non-conformité d\'un produit, il pourra être retourné et remboursé ou échangé.
              </p>
              <p className="text-gray-700">
                Pour mettre en œuvre ces garanties, le client doit contacter notre service client.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold mb-4 text-primary-dark">9. Responsabilité</h2>
              <p className="mb-4 text-gray-700">
                Les produits proposés sont conformes à la législation malgache et européenne en vigueur. 
                La responsabilité de Zoahary Baobab ne pourra être engagée en cas d\'utilisation des produits 
                non conforme à leur destination.
              </p>
              <p className="text-gray-700">
                Zoahary Baobab ne pourra être tenu responsable des dommages indirects résultant de l\'utilisation des produits.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold mb-4 text-primary-dark">10. Propriété intellectuelle</h2>
              <p className="text-gray-700">
                Tous les éléments du site (textes, images, logos, etc.) sont la propriété exclusive de Zoahary Baobab. 
                Toute reproduction, exploitation ou utilisation, même partielle, est strictement interdite sans autorisation préalable.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold mb-4 text-primary-dark">11. Données personnelles</h2>
              <p className="text-gray-700">
                Les informations collectées lors de la commande sont nécessaires à la gestion de la transaction et 
                font l\'objet d\'un traitement informatique. Pour plus d\'informations sur l\'utilisation de vos données, 
                veuillez consulter notre <Link href="/confidentialite" className="text-primary hover:underline">Politique de Confidentialité</Link>.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-serif font-semibold mb-4 text-primary-dark">12. Litiges et droit applicable</h2>
              <p className="text-gray-700">
                Les présentes CGV sont soumises au droit malgache. En cas de litige, une solution amiable sera recherchée 
                avant toute action judiciaire. À défaut, les tribunaux de Toliara (Madagascar) seront seuls compétents.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-serif font-semibold mb-4 text-primary-dark">13. Contact</h2>
              <p className="text-gray-700">
                Pour toute question relative à ces CGV ou à nos produits, notre service client est à votre disposition :
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

export default TermsAndConditions
