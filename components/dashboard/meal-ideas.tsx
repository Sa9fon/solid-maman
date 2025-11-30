"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Check, Plus } from "lucide-react"

console.log("MealIdeas import =", MealIdeas)

const meals = [
  {
    id: 1,
    title: "Pâtes sauce tomate & légumes",
    description: "Plat rapide avec courgettes, carottes et sauce tomate.",
    duration: "20 min",
    tags: ["Rapide", "Équilibré"],
    kidsFriendly: true,
  },
  {
    id: 2,
    title: "One-pot riz poulet",
    description: "Tout cuit dans une seule casserole, parfait pour les soirs chargés.",
    duration: "30 min",
    tags: ["Un seul plat", "Confort"],
    kidsFriendly: true,
  },
  {
    id: 3,
    title: "Buddha bowl veggie",
    description: "Légumes rôtis, pois chiches, céréales complètes et sauce yaourt.",
    duration: "25 min",
    tags: ["Végétarien", "Équilibré"],
    kidsFriendly: false,
  },
  {
    id: 4,
    title: "Soupe maison & tartines",
    description: "Soupe de légumes simple avec tartines au fromage.",
    duration: "20 min",
    tags: ["Confort", "Budget friendly"],
    kidsFriendly: true,
  },
]

export default function MealIdeas() {
  const [menu, setMenu] = useState<number[]>([])

  const toggleMeal = (mealId: number) => {
    setMenu((current) =>
      current.includes(mealId)
        ? current.filter((id) => id !== mealId)
        : [...current, mealId]
    )
  }

  const selectedMeals = meals.filter((meal) => menu.includes(meal.id))

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Des idées de repas</h1>
        <p className="text-muted-foreground">
          Des idées simples et rapides à préparer, avec la possibilité de les ajouter à ton menu.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {meals.map((meal) => {
          const isInMenu = menu.includes(meal.id)

          return (
            <Card
              key={meal.id}
              className="p-4 md:p-5 bg-white border-0 shadow-sm space-y-3"
            >
              <div className="flex justify-between items-start gap-3">
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">{meal.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {meal.description}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-4 h-4 text-[#C98860]" />
                  <span>{meal.duration}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {meal.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-[#E5D5C5] text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
                {meal.kidsFriendly && (
                  <Badge className="bg-[#F5E6D3] text-[#7A4A2A] text-xs border-0">
                    Adapté aux enfants
                  </Badge>
                )}
              </div>

              <Button
                onClick={() => toggleMeal(meal.id)}
                className={`w-full rounded-lg font-medium transition-all ${
                  isInMenu
                    ? "bg-[#D4A574] hover:bg-[#C99860]"
                    : "bg-[#C98860] hover:bg-[#B87750]"
                } text-white flex items-center justify-center gap-2`}
              >
                {isInMenu ? (
                  <>
                    <Check className="w-4 h-4" />
                    Dans mon menu
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    Ajouter au menu
                  </>
                )}
              </Button>
            </Card>
          )
        })}
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">Mon menu</h3>
        {selectedMeals.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Tu n&apos;as pas encore ajouté de repas. Clique sur &quot;Ajouter au menu&quot; pour commencer.
          </p>
        ) : (
          <Card className="p-4 md:p-5 bg-[#FBF7F2] border-[#E5D5C5] space-y-2">
            {selectedMeals.map((meal) => (
              <div
                key={meal.id}
                className="flex justify-between items-center text-sm"
              >
                <span className="font-medium text-foreground">{meal.title}</span>
                <span className="text-muted-foreground text-xs">{meal.duration}</span>
              </div>
            ))}
          </Card>
        )}
      </div>
    </div>
  )
}
