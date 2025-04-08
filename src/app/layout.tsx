import { Montserrat, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

// Configurer les polices (ou remplacer par les polices d'origine)
const primaryFont = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-primary',
})

const secondaryFont = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-secondary',
})

export const metadata = {
  title: 'Zoahary Baobab | Produits naturels à base de Baobab',
  description: 'Découvrez notre gamme de produits naturels et biologiques à base de baobab. Huiles, poudres et compléments alimentaires pour votre bien-être.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${primaryFont.variable} ${secondaryFont.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
