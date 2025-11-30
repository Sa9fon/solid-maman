import type React from "react"
import type { Metadata } from "next"
import { Poppins, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import "leaflet/dist/leaflet.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
})

export const metadata: Metadata = {
  title: "Solid'maman - Soutien pour les mères monoparentales",
  description:
    "Un soutien fiable, humain et accessible. Accompagnement émotionnel, aide administrative et solutions de garde d'enfant.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
