"use client";
export const ssr = false;

import DashboardHeader from "@/components/dashboard/dashboard-header"
import Sidebar from "@/components/dashboard/sidebar"
import DailyOverview from "@/components/dashboard/daily-overview"
import DashboardFooter from "@/components/dashboard/dashboard-footer"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <DashboardHeader />
        <div className="flex-1 overflow-auto">
          <div className="p-8 max-w-7xl mx-auto">
            <DailyOverview />
          </div>
        </div>
        <DashboardFooter />
      </main>
    </div>
  )
}
