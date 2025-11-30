"use client"

import { FileText, CheckCircle, DollarSign, Home, ClipboardList, Award } from "lucide-react"

export default function AideAdministrative() {
  return (
    <section className="pt-32 pb-20">
      {/* Hero */}
      <div className="bg-gradient-to-b from-accent/10 to-transparent px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex p-4 rounded-2xl bg-accent/10 mb-6">
            <FileText className="w-12 h-12 text-accent" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Aide administrative</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Simplifiez vos démarches administratives avec notre soutien expert
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: DollarSign,
              title: "Aide CAF",
              description: "Assistance complète pour vos dossiers CAF et allocations.",
            },
            {
              icon: CheckCircle,
              title: "RSA et allocations",
              description: "Aide pour obtenir le Revenu de Solidarité Active et autres allocations.",
            },
            {
              icon: Home,
              title: "Aide au logement",
              description: "Soutien pour trouver et sécuriser un logement adapté à votre situation.",
            },
            {
              icon: ClipboardList,
              title: "Démarches simplifiées",
              description: "Accompagnement pas à pas dans vos démarches administratives.",
            },
            {
              icon: FileText,
              title: "Conseils fiscaux",
              description: "Orientation sur les aspects fiscaux de votre situation.",
            },
            {
              icon: Award,
              title: "Reconnaissance de droits",
              description: "Aide à identifier et demander les aides auxquelles vous avez droit.",
            },
          ].map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition">
                <div className="inline-flex p-3 rounded-xl bg-accent/10 mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-accent/10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Simplifiez vos démarches</h2>
          <button className="btn-primary">Débuter l'assistance</button>
        </div>
      </div>
    </section>
  )
}
