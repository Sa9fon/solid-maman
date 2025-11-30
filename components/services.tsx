"use client"

import Link from "next/link"
import { Heart, FileText, Users } from "lucide-react"

const services = [
  {
    id: "soutien-emotionnel",
    icon: Heart,
    title: "Soutien émotionnel",
    description: "Écoute bienveillante, groupes de parole, accès à des bénévoles formés pour vous accompagner",
    color: "text-primary",
    href: "/services/soutien-emotionnel",
  },
  {
    id: "aide-administrative",
    icon: FileText,
    title: "Aide administrative",
    description: "Assistance pour CAF, RSA, logement, démarches administratives simplifiées",
    color: "text-accent",
    href: "/services/aide-administrative",
  },
  {
    id: "garde-enfant",
    icon: Users,
    title: "Garde d'enfant",
    description: "Solutions validées et fiables de garde d'enfant adaptées à vos besoins",
    color: "text-secondary",
    href: "/services/garde-enfant",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nos services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trois piliers pour accompagner les mères monoparentales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link key={service.id} href={service.href}>
                <div className="group bg-card border border-border rounded-3xl p-8 hover:shadow-xl transition-all cursor-pointer h-full hover:scale-105 hover:border-primary">
                  <div className={`mb-6 inline-flex p-4 rounded-2xl bg-secondary/10`}>
                    <Icon className={`${service.color} w-8 h-8`} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <div className="mt-6 inline-flex items-center text-primary font-semibold group-hover:translate-x-2 transition">
                    En savoir plus →
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
