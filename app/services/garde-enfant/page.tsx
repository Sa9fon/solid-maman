"use client"

import { Users, Shield, Clock, Star, MapPin, Smile } from "lucide-react"

export default function GardeEnfant() {
  return (
    <section className="pt-32 pb-20">
      {/* Hero */}
      <div className="bg-gradient-to-b from-secondary/10 to-transparent px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex p-4 rounded-2xl bg-secondary/10 mb-6">
            <Users className="w-12 h-12 text-secondary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Solutions de garde d'enfant</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Des solutions fiables et validées pour la garde de vos enfants
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Gardiens validés",
              description: "Tous nos gardiens sont vérifiés et formés pour la sécurité de vos enfants.",
            },
            {
              icon: Clock,
              title: "Disponibilités flexibles",
              description: "Trouvez des solutions adaptées à votre emploi du temps.",
            },
            {
              icon: Star,
              title: "Avis vérifiés",
              description: "Lisez les témoignages d'autres parents pour faire le bon choix.",
            },
            {
              icon: MapPin,
              title: "Près de chez vous",
              description: "Cherchez des gardiens dans votre quartier ou proximité.",
            },
            {
              icon: Smile,
              title: "Soutien constant",
              description: "Nous sommes là pour vous aider tout au long de votre recherche.",
            },
            {
              icon: Users,
              title: "Communauté de confiance",
              description: "Rejoignez un réseau de mères et de gardiens de confiance.",
            },
          ].map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition">
                <div className="inline-flex p-3 rounded-xl bg-secondary/10 mb-4">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-secondary/10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Trouvez la solution parfaite</h2>
          <button className="btn-primary">Explorer les options</button>
        </div>
      </div>
    </section>
  )
}
