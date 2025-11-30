"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sophie",
    role: "Mère de deux enfants",
    text: "Solid'maman a transformé ma vie. Enfin quelqu'un qui m'écoute vraiment et me comprend.",
    rating: 5,
  },
  {
    name: "Isabelle",
    role: "Parent isolée depuis 3 ans",
    text: "L'aide administrative que j'ai reçue m'a permis de gagner du temps précieux pour ma famille.",
    rating: 5,
  },
  {
    name: "Martine",
    role: "Mère en transition",
    text: "Les solutions de garde proposées sont fiables et j'ai enfin trouvé une communauté bienveillante.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Témoignages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Les histoires de mères qui ont trouvé du soutien
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
