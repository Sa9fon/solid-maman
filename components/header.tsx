"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur border-b border-border z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Solid'maman
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <a href="#services" className="text-foreground hover:text-primary transition">
            Services
          </a>
          <a href="#how-it-works" className="text-foreground hover:text-primary transition">
            Comment ça marche
          </a>
          <a href="#testimonials" className="text-foreground hover:text-primary transition">
            Témoignages
          </a>
        </div>

        <div className="hidden md:flex gap-4">
          <button className="btn-secondary">Se connecter</button>
          <button className="btn-primary">S'inscrire</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <a href="#services" className="text-foreground hover:text-primary transition">
                Services
              </a>
              <a href="#how-it-works" className="text-foreground hover:text-primary transition">
                Comment ça marche
              </a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition">
                Témoignages
              </a>
              <button className="btn-secondary w-full">Se connecter</button>
              <button className="btn-primary w-full">S'inscrire</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
