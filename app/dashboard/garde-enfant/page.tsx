import DashboardHeader from "@/components/dashboard/dashboard-header"
import Sidebar from "@/components/dashboard/sidebar"
import DashboardFooter from "@/components/dashboard/dashboard-footer"
import { Zap } from "lucide-react"

export default function GardeEnfantPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <DashboardHeader />
        <div className="flex-1 overflow-auto">
          <div className="p-8 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-2">Garde d'enfant</h1>
            <p className="text-muted-foreground mb-8">Trouvez et gérez les services de garde d'enfant</p>

            <div className="grid gap-6">
              {/* Featured Services */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                <h2 className="text-lg font-semibold text-foreground mb-4">Services disponibles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                    <h3 className="font-medium text-foreground mb-2">Garde régulière</h3>
                    <p className="text-sm text-muted-foreground">Services de garde hebdomadaires</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20">
                    <h3 className="font-medium text-foreground mb-2">Garde d'urgence</h3>
                    <p className="text-sm text-muted-foreground">Disponibilité immédiate</p>
                  </div>
                </div>
              </div>

              {/* Coming Soon */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-border flex items-center justify-center min-h-64">
                <div className="text-center">
                  <Zap className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">Fonctionnalités à venir</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DashboardFooter />
      </main>
    </div>
  )
}
