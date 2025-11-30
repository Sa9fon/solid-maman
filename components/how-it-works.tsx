"use client"

import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Je m'inscris",
    description: "Créez votre compte en quelques minutes",
  },
  {
    number: "2",
    title: "Je choisis mes besoins",
    description: "Sélectionnez les services qui vous correspondent",
  },
  {
    number: "3",
    title: "Je suis accompagnée",
    description: "Recevez un soutien personnalisé et fiable",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Comment ça marche</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trois étapes simples pour commencer votre parcours
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 text-white">
                <div className="text-6xl font-bold mb-4 opacity-20">{step.number}</div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/90 leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
