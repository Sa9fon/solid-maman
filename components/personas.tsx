"use client"

const personas = [
  {
    name: "Anne",
    role: "Mère de deux enfants",
    need: "Besoin d'une oreille attentive et de conseils pratiques",
    avatar: "👩",
  },
  {
    name: "Aylin",
    role: "En transition professionnelle",
    need: "Aide administrative et soutien pour démarches",
    avatar: "👩",
  },
  {
    name: "Marie",
    role: "Parent isolée",
    need: "Solutions fiables de garde et communauté",
    avatar: "👩",
  },
]

export default function Personas() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nous vous connaissons</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nos services sont conçus à partir de vrais besoins de vraies mères
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((persona) => (
            <div
              key={persona.name}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition"
            >
              <div className="text-6xl mb-4">{persona.avatar}</div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{persona.name}</h3>
              <p className="text-primary font-semibold mb-4">{persona.role}</p>
              <p className="text-muted-foreground leading-relaxed">{persona.need}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
