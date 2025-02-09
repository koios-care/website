import { Inter } from "next/font/google"
import type React from "react"
import { Header } from "@/components/header"
import './globals.css'

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}