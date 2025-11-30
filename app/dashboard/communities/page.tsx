import DashboardHeader from "@/components/dashboard/dashboard-header"
import Sidebar from "@/components/dashboard/sidebar"
import Communities from "@/components/dashboard/communities"
import DashboardFooter from "@/components/dashboard/dashboard-footer"

export default function CommunitiesPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <DashboardHeader />
        <div className="flex-1 overflow-auto">
          <div className="p-8 max-w-7xl mx-auto">
            <Communities />
          </div>
        </div>
        <DashboardFooter />
      </main>
    </div>
  )
}
