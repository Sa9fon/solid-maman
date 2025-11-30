import DashboardHeader from "@/components/dashboard/dashboard-header"
import Sidebar from "@/components/dashboard/sidebar"
import DashboardFooter from "@/components/dashboard/dashboard-footer"
import { User, Mail, Phone, MapPin } from "lucide-react"

export default function MonComptePage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <DashboardHeader />
        <div className="flex-1 overflow-auto">
          <div className="p-8 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-2">Mon compte</h1>
            <p className="text-muted-foreground mb-8">Gérez vos informations personnelles</p>

            <div className="grid gap-6">
              {/* Profile Section */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Profil personnel
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground">Prénom</label>
                      <input
                        type="text"
                        placeholder="Votre prénom"
                        className="w-full mt-2 px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">Nom</label>
                      <input
                        type="text"
                        placeholder="Votre nom"
                        className="w-full mt-2 px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      className="w-full mt-2 px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      placeholder="+33 6 00 00 00 00"
                      className="w-full mt-2 px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Adresse
                    </label>
                    <input
                      type="text"
                      placeholder="Votre adresse"
                      className="w-full mt-2 px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Security Section */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                <h2 className="text-lg font-semibold text-foreground mb-4">Sécurité</h2>
                <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Changer le mot de passe
                </button>
              </div>
            </div>
          </div>
        </div>
        <DashboardFooter />
      </main>
    </div>
  )
}
