"use client"

import { Heart, Users, Smile, Phone, MessageCircle, BookOpen } from "lucide-react"

export default function SoutienEmotionnel() {
  return (
    <section className="pt-32 pb-20">
      {/* Hero */}
      <div className="bg-gradient-to-b from-primary/10 to-transparent px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6">
            <Heart className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Soutien émotionnel</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Une oreille bienveillante, des conseils avisés et une communauté qui vous comprend
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "Groupes de parole",
              description:
                "Rejoignez des groupes d'échange où les mères partagent leurs expériences dans un cadre bienveillant.",
            },
            {
              icon: Phone,
              title: "Écoute téléphonique",
              description: "Parleur avec nos écoutants formés, disponibles pour vous à tout moment.",
            },
            {
              icon: MessageCircle,
              title: "Chat en ligne",
              description: "Accédez à un soutien immédiat via notre plateforme de messagerie sécurisée.",
            },
            {
              icon: BookOpen,
              title: "Ressources et conseils",
              description: "Consultez notre bibliothèque de contenus pratiques et inspirants.",
            },
            {
              icon: Smile,
              title: "Accompagnement personnalisé",
              description: "Un bénévole formé pour vous accompagner dans votre parcours unique.",
            },
            {
              icon: Heart,
              title: "Communauté bienveillante",
              description: "Connectez-vous avec d'autres mères et construisez des liens durables.",
            },
          ].map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                  <Icon className="w-6 h-6 text-primary" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Prêt à trouver du soutien ?</h2>
          <button className="btn-primary">Commencer maintenant</button>
        </div>
      </div>
    </section>
  )
}
