"use client"

export const dynamic = "force-dynamic"
export const revalidate = 0
export const fetchCache = "force-no-store"
export const runtime = "edge"

import DashboardHeader from "@/components/dashboard/dashboard-header"
import Sidebar from "@/components/dashboard/sidebar"
import DashboardFooter from "@/components/dashboard/dashboard-footer"
import ActivitiesMap from "@/components/dashboard/ActivitiesMap"

export default function ActivitiesPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <DashboardHeader />
        <div className="flex-1 overflow-auto">
          <div className="p-8 max-w-7xl mx-auto">
            <ActivitiesMap />
          </div>
        </div>
        <DashboardFooter />
      </main>
    </div>
  )
}
