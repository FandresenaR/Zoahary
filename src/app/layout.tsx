import type { Metadata } from 'next'
import './globals.css'
import React from 'react'

export const metadata: Metadata = {
  title: 'Zoahary Baobab - Produits naturels de Madagascar',
  description: "Découvrez nos produits naturels et biologiques à base de baobab, l'arbre de vie malgache aux multiples bienfaits.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="overflow-x-hidden min-h-screen">{children}</body>
    </html>
  )
}
