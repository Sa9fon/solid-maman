import { Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DashboardHeader() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-40">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#D4A574] to-[#C98860] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-foreground">Bonjour Anne 👋</h1>
            <p className="text-sm text-muted-foreground">Bienvenue dans ton espace personnel</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5 text-foreground" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5 text-foreground" />
          </Button>
        </div>
      </div>
    </header>
  )
}
