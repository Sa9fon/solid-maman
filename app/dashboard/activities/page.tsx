"use client"

// ⛔ Interdire complètement le SSR, le prerender et le static rendering :
export const ssr = false;
export const dynamic = "force-dynamic";
export const revalidate = 0;

// ⛔ Import dynamique du composant qui contient la map :
import dynamic from "next/dynamic";

const ActivitiesEvents = dynamic(
  () => import("@/components/dashboard/activities-events"),
  {
    ssr: false,       // <-- très important
    loading: () => <p>Chargement…</p>,
  }
);

import DashboardHeader from "@/components/dashboard/dashboard-header";
import Sidebar from "@/components/dashboard/sidebar";
import DashboardFooter from "@/components/dashboard/dashboard-footer";

export default function ActivitiesPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <DashboardHeader />
        <div className="flex-1 overflow-auto">
          <div className="p-8 max-w-7xl mx-auto">
            <ActivitiesEvents />
          </div>
        </div>
        <DashboardFooter />
      </main>
    </div>
  );
}
