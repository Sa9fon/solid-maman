"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Check, Trash2, Plus } from "lucide-react"

const templates = {
  routineMatin: [
    "Réveiller les enfants",
    "Préparer le petit déjeuner",
    "S'habiller",
    "Brosser les dents",
    "Préparer les sacs d'école",
    "Déposer à l'école",
  ],
  routineSoir: [
    "Devoirs",
    "Préparer le dîner",
    "Douche / bain",
    "Pyjama",
    "Histoire du soir",
    "Coucher les enfants",
  ],
  devoirs: [
    "Vérifier le cahier de correspondance",
    "Faire les devoirs écrits",
    "Lire 15 minutes",
    "Préparer le cartable",
  ],
  maison: [
    "Faire une machine",
    "Étendre/Sécher le linge",
    "Ranger le salon",
    "Faire la vaisselle",
    "Sortir la poubelle",
  ],
  administratif: [
    "Vérifier les emails",
    "Téléverser documents CAF",
    "Téléverser documents assurance",
    "Prendre rendez-vous administratif",
  ]
}

export default function TodoList() {
  const [tasks, setTasks] = useState<string[]>([])
  const [input, setInput] = useState("")

  const addTask = () => {
    if (!input.trim()) return
    setTasks([...tasks, input])
    setInput("")
  }

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  const loadTemplate = (name: keyof typeof templates) => {
    setTasks([...tasks, ...templates[name]])
  }

  return (
    <div className="space-y-8">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">To-Do List</h1>
        <p className="text-muted-foreground">
          Organise ta journée en un clic avec nos templates familiaux.
        </p>
      </div>

      {/* Templates */}
      <Card className="p-4 bg-white border-0 shadow-sm space-y-4">
        <h3 className="font-semibold text-lg text-foreground">Templates rapides</h3>

        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            className="border-[#E5D5C5] bg-[#FBF7F2]"
            onClick={() => loadTemplate("routineMatin")}
          >
            Routine du matin
          </Button>

          <Button
            variant="outline"
            className="border-[#E5D5C5] bg-[#FBF7F2]"
            onClick={() => loadTemplate("routineSoir")}
          >
            Routine du soir
          </Button>

          <Button
            variant="outline"
            className="border-[#E5D5C5] bg-[#FBF7F2]"
            onClick={() => loadTemplate("devoirs")}
          >
            Devoirs enfants
          </Button>

          <Button
            variant="outline"
            className="border-[#E5D5C5] bg-[#FBF7F2]"
            onClick={() => loadTemplate("maison")}
          >
            Tâches maison
          </Button>

          <Button
            variant="outline"
            className="border-[#E5D5C5] bg-[#FBF7F2]"
            onClick={() => loadTemplate("administratif")}
          >
            Administratif
          </Button>
        </div>
      </Card>

      {/* Add task */}
      <Card className="p-4 bg-white border-0 shadow-sm space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Ajouter une tâche manuelle…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={addTask} className="bg-[#C98860] hover:bg-[#B87750] text-white">
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        {/* Tasks list */}
        <div className="space-y-3">
          {tasks.length === 0 && (
            <p className="text-muted-foreground text-sm">
              Aucune tâche pour le moment. Ajoute la tienne ou charge un template !
            </p>
          )}

          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 bg-[#FBF7F2] rounded-lg border border-[#E5D5C5]"
            >
              <div className="flex items-center gap-2 text-sm text-foreground font-medium">
                <Check className="w-4 h-4 text-[#C98860]" />
                {task}
              </div>
              <button onClick={() => removeTask(index)}>
                <Trash2 className="w-4 h-4 text-red-400 hover:text-red-600" />
              </button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
