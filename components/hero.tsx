"use client"

import Link from "next/link"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">Solid'maman</h1>
          <p className="text-2xl font-semibold text-primary">
            Accompagner, sécuriser et connecter les mères monoparentales
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Un soutien fiable, humain et accessible au quotidien. Nous sommes là pour écouter, aider et vous accompagner
            dans chaque étape de votre parcours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/services/soutien-emotionnel">
              <button className="btn-primary w-full sm:w-auto">Découvrir nos services</button>
            </Link>
            <button className="btn-secondary w-full sm:w-auto">Rejoindre la communauté</button>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-96 md:h-full rounded-3xl overflow-hidden shadow-2xl">
          <img src="/single-mother-with-children-warm-embrace.jpg" alt="Mère avec enfants" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-3xl"></div>
        </div>
      </div>
    </section>
  )
}
