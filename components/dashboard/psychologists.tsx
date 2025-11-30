import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

const psychologists = [
  {
    name: "Dr. Marie Dubois",
    specialty: "Psychologue clinicienne - Séparation & co-parentalité",
    available: true,
    initials: "MD",
  },
  {
    name: "Dr. Sophie Bernard",
    specialty: "Psychologue - Stress parental & burn-out",
    available: true,
    initials: "SB",
  },
  {
    name: "Dr. Isabelle Moreau",
    specialty: "Sexologue - Intimité & vie de couple",
    available: false,
    initials: "IM",
  },
]

export default function Psychologists() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-foreground">Psychologues & accompagnants</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {psychologists.map((psych, idx) => (
          <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D4A574] to-[#C98860] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-semibold text-sm">{psych.initials}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{psych.name}</h3>
                <p className="text-sm text-muted-foreground">{psych.specialty}</p>
              </div>
            </div>
            <div className="space-y-4">
              {psych.available && (
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Disponible aujourd'hui</Badge>
              )}
              <Button className="w-full bg-[#C98860] hover:bg-[#B87750] text-white rounded-lg font-medium gap-2">
                <Calendar className="w-4 h-4" />
                Prendre rendez-vous
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
