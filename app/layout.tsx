import type React from "react"
import { Header } from "@/components/header"
import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Koios',
  description: 'Koios - AI for Quality of Life assessment and adjustment',
  icons: {
    icon: [
      {
        url: '/koios.png',
        href: '/koios_fav.png',
      }
    ],
    apple: [
      {
        url: '/koios_fav.png',
        type: 'image/png',
      }
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}