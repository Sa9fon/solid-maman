import DashboardHeader from "@/components/dashboard/dashboard-header"
import Sidebar from "@/components/dashboard/sidebar"
import DashboardFooter from "@/components/dashboard/dashboard-footer"

export default function MessagesPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <DashboardHeader />
        <div className="flex-1 overflow-auto">
          <div className="p-8 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-2">Messages</h1>
            <p className="text-muted-foreground mb-8">Communiquez avec la communauté Solid'maman</p>

            <div className="grid gap-6">
              {/* Conversations */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                <h2 className="text-lg font-semibold text-foreground mb-4">Conversations récentes</h2>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="p-4 rounded-lg hover:bg-muted transition-colors cursor-pointer border border-border/50"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-foreground">Conversation {i}</h3>
                        <span className="text-xs text-muted-foreground">Il y a 2h</span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-1">Message preview...</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* New Message */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                <h2 className="text-lg font-semibold text-foreground mb-4">Nouveau message</h2>
                <p className="text-sm text-muted-foreground">Fonctionnalité à venir</p>
              </div>
            </div>
          </div>
        </div>
        <DashboardFooter />
      </main>
    </div>
  )
}
