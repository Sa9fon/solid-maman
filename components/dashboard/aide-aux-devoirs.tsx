"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, Home } from "lucide-react"
import { useState } from "react"

export default function AideAuxDevoirs() {
  const [selectedLevel, setSelectedLevel] = useState("primaire")
  const [selectedSubject, setSelectedSubject] = useState("mathematiques")

  const schoolLevels = [
    { id: "primaire", label: "Primaire" },
    { id: "college", label: "Collège" },
    { id: "lycee", label: "Lycée" },
  ]

  const subjects = {
    primaire: ["Mathématiques", "Français", "Sciences", "Histoire-Géo"],
    college: ["Mathématiques", "Français", "Anglais", "Sciences", "Histoire-Géo", "SVT"],
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-semibold text-foreground mb-2">Aide aux devoirs pour vos enfants</h2>
        <p className="text-muted-foreground text-lg">
          Un soutien adapté du primaire au collège pour aider vos enfants à réussir à l'école
        </p>
      </div>

      {/* Selection controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#FBF7F2] p-6 rounded-xl">
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">Niveau scolaire de l'enfant</label>
          <div className="flex gap-3">
            {schoolLevels.map((level) => (
              <button
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedLevel === level.id
                    ? "bg-[#C98860] text-white"
                    : "bg-white text-foreground border border-[#E8DDD2] hover:bg-[#F5EFE9]"
                }`}
              >
                {level.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-3">Matière</label>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-[#E8DDD2] bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-[#C98860]"
          >
            {subjects[selectedLevel as keyof typeof subjects]?.map((subject) => (
              <option key={subject} value={subject.toLowerCase()}>
                {subject}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Three support blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Tutorat individuel */}
        <Card className="p-6 border-0 bg-white hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#FBF7F2] mb-4">
            <BookOpen className="w-6 h-6 text-[#C98860]" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Tutorat individuel en ligne</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Des tuteurs expérimentés pour un accompagnement personnalisé et adapté au rythme de votre enfant.
          </p>
          <div className="bg-[#FBF7F2] p-4 rounded-lg mb-4">
            <p className="text-xs font-medium text-muted-foreground mb-2">Profils disponibles:</p>
            <ul className="text-sm text-foreground space-y-1">
              <li>• Professeurs certifiés</li>
              <li>• Étudiants en Master</li>
              <li>• Experts sectoriels</li>
            </ul>
          </div>
          <Button className="w-full bg-[#C98860] hover:bg-[#B87750] text-white rounded-lg font-medium">
            Réserver un créneau
          </Button>
        </Card>

        {/* Ateliers collectifs */}
        <Card className="p-6 border-0 bg-white hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#FBF7F2] mb-4">
            <Users className="w-6 h-6 text-[#C98860]" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Ateliers collectifs</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Séances en petits groupes pour un apprentissage collaborative et des échanges avec d'autres enfants.
          </p>
          <div className="bg-[#FBF7F2] p-4 rounded-lg mb-4">
            <p className="text-xs font-medium text-muted-foreground mb-2">Prochaines séances:</p>
            <ul className="text-sm text-foreground space-y-1">
              <li>• Lundi 2 déc - 16h30</li>
              <li>• Mercredi 4 déc - 16h30</li>
              <li>• Samedi 7 déc - 10h00</li>
            </ul>
          </div>
          <Button className="w-full bg-[#C98860] hover:bg-[#B87750] text-white rounded-lg font-medium">
            Voir le planning
          </Button>
        </Card>

        {/* Aide à domicile */}
        <Card className="p-6 border-0 bg-white hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#FBF7F2] mb-4">
            <Home className="w-6 h-6 text-[#C98860]" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Aide à domicile</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Accompagnement personnalisé à domicile via nos associations partenaires de confiance.
          </p>
          <div className="bg-[#FBF7F2] p-4 rounded-lg mb-4">
            <p className="text-xs font-medium text-muted-foreground mb-2">Nos partenaires:</p>
            <ul className="text-sm text-foreground space-y-1">
              <li>• Coup de Pouce Académique</li>
              <li>• Solidarité Jeunesse</li>
              <li>• Sourire aux Devoirs</li>
            </ul>
          </div>
          <Button className="w-full bg-[#C98860] hover:bg-[#B87750] text-white rounded-lg font-medium">
            Demander un tuteur
          </Button>
        </Card>
      </div>
    </div>
  )
}
