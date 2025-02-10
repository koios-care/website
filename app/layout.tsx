import type React from "react"
import { Header } from "@/components/header"
import './globals.css'

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