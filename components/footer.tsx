"use client"

import Link from "next/link"
import { Mail, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold text-secondary mb-4 inline-block">
              Solid'maman
            </Link>
            <p className="text-background/80 leading-relaxed">
              Un soutien fiable, humain et accessible pour les mères monoparentales.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-secondary">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/soutien-emotionnel"
                  className="text-background/80 hover:text-secondary transition"
                >
                  Soutien émotionnel
                </Link>
              </li>
              <li>
                <Link
                  href="/services/aide-administrative"
                  className="text-background/80 hover:text-secondary transition"
                >
                  Aide administrative
                </Link>
              </li>
              <li>
                <Link href="/services/garde-enfant" className="text-background/80 hover:text-secondary transition">
                  Garde d'enfant
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4 text-secondary">Ressources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition">
                  Confidentialité
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-secondary">Contact</h3>
            <div className="flex items-center gap-2 text-background/80 hover:text-secondary transition cursor-pointer">
              <Mail className="w-5 h-5" />
              <a href="mailto:contact@solidmaman.fr">contact@solidmaman.fr</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm">© 2025 Solid'maman. Tous droits réservés.</p>
            <p className="text-background/70 text-sm">
              Fait avec <Heart className="w-4 h-4 inline fill-secondary text-secondary" /> pour les mères monoparentales
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-background/20">
          <p className="text-background/60 text-xs">
            Confidentiel et sécurisé • Nos services respectent votre vie privée et la confidentialité de vos données
          </p>
        </div>
      </div>
    </footer>
  )
}
