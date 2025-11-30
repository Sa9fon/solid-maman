import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Phone, Users, Sparkles } from "lucide-react"

export default function DailyOverview() {
  const quickActions = [
    { icon: Phone, label: "Parler à un psychologue", color: "from-[#E8B4A0] to-[#D4A574]" },
    { icon: Users, label: "Rejoindre une communauté", color: "from-[#D4A574] to-[#C98860]" },
    { icon: Sparkles, label: "Trouver une activité", color: "from-[#F5E6D3] to-[#E8D5BE]" },
  ]

  return (
    <Card className="p-8 bg-gradient-to-br from-[#FEF8F3] to-white border-[#F0E0D8]">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-2">Mon parcours du jour</h2>
          <p className="text-muted-foreground">Tu es à 45% de tes objectifs aujourd'hui</p>
        </div>
        <div className="space-y-3">
          <Progress value={45} className="h-3 bg-[#F0E0D8]" />
          <p className="text-xs text-muted-foreground">45% complété</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          {quickActions.map((action, idx) => {
            const Icon = action.icon
            return (
              <Button
                key={idx}
                className={`h-auto py-6 px-6 rounded-2xl bg-gradient-to-br ${action.color} text-foreground hover:shadow-lg transition-all hover:scale-105 flex flex-col items-center justify-center gap-3 font-medium`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-center text-sm">{action.label}</span>
              </Button>
            )
          })}
        </div>
      </div>
    </Card>
  )
}
