"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, Clock, Users } from "lucide-react"
import dynamic from "next/dynamic"

// 🔥 IMPORTANT : Charger Leaflet UNIQUEMENT côté client
const L = typeof window !== "undefined" ? require("leaflet") : null

// 🔥 Charger les composants React Leaflet SANS SSR
const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import("react-leaflet").then((m) => m.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import("react-leaflet").then((m) => m.Popup),
  { ssr: false }
)

// 🔥 L’icône Leaflet doit aussi être créée côté client
const activityIcon =
  L &&
  L.icon({
    iconUrl: "/pin.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -28],
  })

const parisNeighborhoods = [
  { name: "Marais", lat: 48.8604, lng: 2.3585 },
  { name: "Montmartre", lat: 48.8867, lng: 2.3431 },
  { name: "Latin Quarter", lat: 48.8461, lng: 2.3497 },
  { name: "Le Plessis-Robinson", lat: 48.7733, lng: 2.2675 },
  { name: "Belleville", lat: 48.8708, lng: 2.3825 },
]

const activitiesData = [
  {
    id: 1,
    title: "Yoga matin",
    description: "Séance de yoga relaxant pour débutantes et avancées",
    time: "08:00 - 09:30",
    participants: 12,
    category: "bien-etre",
  },
  {
    id: 2,
    title: "Atelier créatif",
    description: "Dessin et peinture pour les enfants de 4 à 8 ans",
    time: "14:00 - 15:30",
    participants: 8,
    category: "enfants",
  },
  {
    id: 3,
    title: "Aide administratif",
    description: "Assistance pour les démarches CAF et allocations",
    time: "15:00 - 17:00",
    participants: 5,
    category: "administratif",
  },
  {
    id: 4,
    title: "Conversation English",
    description: "Pratiquer l'anglais de manière ludique",
    time: "19:00 - 20:00",
    participants: 10,
    category: "langue",
  },
  {
    id: 5,
    title: "Pilates soir",
    description: "Renforcement musculaire adapté aux mères",
    time: "18:00 - 19:00",
    participants: 15,
    category: "bien-etre",
  },
]

export default function ActivitiesMap({ activeCategory }: { activeCategory: string }) {
  const [selectedActivity, setSelectedActivity] = useState<null | (typeof activitiesData)[number]>(null)
  const [joined, setJoined] = useState<number[]>([])

  const filteredActivities =
    activeCategory === "tous"
      ? activitiesData
      : activitiesData.filter((a) => a.category === activeCategory)

  const activitiesWithCoords = filteredActivities.map((activity, idx) => {
    const n = parisNeighborhoods[idx % parisNeighborhoods.length]
    return { ...activity, lat: n.lat, lng: n.lng, neighborhoodName: n.name }
  })

  const mapCenter: [number, number] = [48.8566, 2.3522]

  const handleJoin = (id: number) => {
    setJoined((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-foreground">Activités près de chez toi</h3>
        <p className="text-sm text-muted-foreground">Explore la carte pour voir les activités disponibles</p>
      </div>

      <Card className="border-0 overflow-hidden">
        <div className="relative h-96 rounded-xl">
          <MapContainer
            center={mapCenter}
            zoom={12}
            scrollWheelZoom={true}
            style={{ width: "100%", height: "100%" }}
            className="rounded-xl"
          >
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {activitiesWithCoords.map((activity) => (
              <Marker
                key={activity.id}
                position={[activity.lat, activity.lng]}
                icon={activityIcon || undefined}
                eventHandlers={{ click: () => setSelectedActivity(activity) }}
              >
                <Popup>
                  <div className="space-y-1">
                    <p className="font-semibold text-sm">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.description}</p>
                    <p className="text-xs mt-1">{activity.time}</p>

                    <Button size="sm" className="mt-2 w-full" onClick={() => handleJoin(activity.id)}>
                      {joined.includes(activity.id) ? "✓ Inscrite" : "S'inscrire"}
                    </Button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </Card>

      {selectedActivity && (
        <Card className="border-0 bg-white p-6 relative">
          <button
            onClick={() => setSelectedActivity(null)}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>

          <h4 className="text-xl font-semibold mb-2">{selectedActivity.title}</h4>
          <p className="text-muted-foreground mb-4">{selectedActivity.description}</p>

          <div className="space-y-3 py-4 border-y border-[#F0E0D8] mb-4">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-[#C98860]" />
              {selectedActivity.time}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users className="w-4 h-4 text-[#C98860]" />
              {selectedActivity.participants} personnes
            </div>
          </div>

          <Button onClick={() => handleJoin(selectedActivity.id)} className="w-full">
            {joined.includes(selectedActivity.id) ? "✓ Inscrite" : "S'inscrire"}
          </Button>
        </Card>
      )}
    </div>
  )
}
