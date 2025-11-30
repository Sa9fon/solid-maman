import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle } from "lucide-react"

const requests = [
  {
    title: "Demande de garde d'enfant",
    status: "En attente",
    date: "Demandée le 20 novembre",
    priority: "normal",
  },
  {
    title: "Aide documents CAF",
    status: "En cours",
    date: "Assigné à Sophie - Depuis 3 jours",
    priority: "high",
  },
  {
    title: "Recherche logement",
    status: "En attente",
    date: "Demandée le 15 novembre",
    priority: "high",
  },
]

export default function OngoingRequests() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-foreground">Mes demandes en cours</h2>
      <div className="space-y-3">
        {requests.map((request, idx) => (
          <Card
            key={idx}
            className="p-4 hover:shadow-md transition-shadow border-0 bg-white flex items-center justify-between"
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{request.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{request.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant={request.status === "En cours" ? "default" : "secondary"}>{request.status}</Badge>
              {request.priority === "high" && <AlertCircle className="w-5 h-5 text-orange-500" />}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
