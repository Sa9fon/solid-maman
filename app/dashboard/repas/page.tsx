"use client"

import DashboardHeader from "@/components/dashboard/dashboard-header"
import Sidebar from "@/components/dashboard/sidebar"
import DashboardFooter from "@/components/dashboard/dashboard-footer"
import MealIdeas from "@/components/dashboard/meal-ideas"



export default function RepasPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <DashboardHeader />
        <div className="flex-1 overflow-auto">
          <div className="p-8 max-w-7xl mx-auto">
            <MealIdeas />
          </div>
        </div>
        <DashboardFooter />
      </main>
    </div>
  )
}
