"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Users, Search } from "lucide-react"

const communities = [
  {
    title: "Mères séparées – Groupe d'entraide",
    members: 247,
    image: "from-[#D4A574] to-[#C98860]",
  },
  {
    title: "Maman & Bébé – premiers mois",
    members: 512,
    image: "from-[#E8B4A0] to-[#D4A574]",
  },
  {
    title: "Femmes immigrées – entraide administrative",
    members: 189,
    image: "from-[#F5E6D3] to-[#E8D5BE]",
  },
  {
    title: "Aide aux devoirs – Groupe entraide",
    members: 365,
    image: "from-[#F5E6D3] to-[#E8D5BE]",
  },
]

export default function Communities() {
  const [search, setSearch] = useState("")

  // Filtrage des communautés basé sur le texte recherché
  const filteredCommunities = communities.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-foreground">Communautés</h2>

      {/* 🔎 Barre de recherche */}
      <div className="flex items-center gap-2 max-w-md">
        <Search className="w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Rechercher une communauté…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#FBF7F2] border-[#E5D5C5] focus-visible:ring-[#C98860]"
        />
      </div>

      {/* 🧩 Liste des communautés */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredCommunities.length === 0 ? (
          <p className="text-sm text-muted-foreground col-span-3">
            Aucune communauté ne correspond à ta recherche.
          </p>
        ) : (
          filteredCommunities.map((community, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow border-0 bg-white">
              <div className={`h-32 bg-gradient-to-br ${community.image}`}></div>
              <div className="p-6 space-y-4">
                <h3 className="font-semibold text-lg text-foreground line-clamp-2">
                  {community.title}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{community.members} membres</span>
                </div>
                <Button className="w-full bg-[#C98860] hover:bg-[#B87750] text-white rounded-lg font-medium">
                  Rejoindre
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
