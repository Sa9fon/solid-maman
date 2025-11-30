"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock } from "lucide-react"
import { useState } from "react"
import ActivitiesMap from "./activities-map"

const activitiesByCategory = {
  "bien-etre": [
    {
      title: "Atelier bien-être",
      date: "Jeudi 28 novembre",
      time: "10:00 - 11:30",
      location: "Paris 5e",
      description: "Séance de yoga et méditation pour mères",
    },
    {
      title: "Pilates en groupe",
      date: "Vendredi 29 novembre",
      time: "18:00 - 19:00",
      location: "En ligne",
      description: "Cours de pilates adapté aux mères",
    },
  ],
  enfants: [
    {
      title: "Sortie enfants",
      date: "Samedi 30 novembre",
      time: "14:00 - 16:00",
      location: "Parc de la Tête d'Or, Lyon",
      description: "Jeux, pique-nique et moments de détente",
    },
    {
      title: "Atelier créatif enfants",
      date: "Dimanche 1er décembre",
      time: "10:00 - 11:30",
      location: "Marseille 2e",
      description: "Peinture et arts créatifs pour enfants",
    },
  ],
  administratif: [
    {
      title: "Aide aux démarches",
      date: "Mercredi 3 décembre",
      time: "15:00 - 17:00",
      location: "Marseille 1er",
      description: "Aide pour documents administratifs CAF",
    },
  ],
  langue: [
    {
      title: "Cours de français",
      date: "Lundi 1er décembre",
      time: "18:00 - 19:30",
      location: "En ligne",
      description: "Atelier de français conversationnel",
    },
    {
      title: "Anglais conversationnel",
      date: "Mardi 2 décembre",
      time: "19:30 - 20:30",
      location: "En ligne",
      description: "Pratiquer l'anglais en groupe",
    },
  ],
}

const categories = [
  { id: "bien-etre", label: "Bien-être" },
  { id: "enfants", label: "Enfants" },
  { id: "administratif", label: "Administratif" },
  { id: "langue", label: "Langue" },
]

export default function ActivitiesEvents() {
  const [activeCategory, setActiveCategory] = useState("bien-etre")

  const filteredActivities = activitiesByCategory[activeCategory as keyof typeof activitiesByCategory] || []

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold text-foreground mb-6">Activités & événements</h2>

        {/* Tab filters */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-[#C98860] text-white"
                  : "bg-[#F5EFE9] text-foreground hover:bg-[#EAE0D5]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Activities grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredActivities.map((activity, idx) => (
          <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
            <div className="mb-4">
              <h3 className="font-semibold text-lg text-foreground mb-2">{activity.title}</h3>
              <p className="text-sm text-muted-foreground">{activity.description}</p>
            </div>
            <div className="space-y-3 py-4 border-y border-[#F0E0D8]">
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Clock className="w-4 h-4 text-[#C98860]" />
                <span>
                  {activity.date} - {activity.time}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <MapPin className="w-4 h-4 text-[#C98860]" />
                <span>{activity.location}</span>
              </div>
            </div>
            <Button className="w-full mt-4 bg-[#C98860] hover:bg-[#B87750] text-white rounded-lg font-medium">
              S'inscrire
            </Button>
          </Card>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-[#F0E0D8]">
        <ActivitiesMap activeCategory={activeCategory} />
      </div>
    </div>
  )
}
