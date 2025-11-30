"use client";

// 🔥 Empêche strictement tout SSR, SSG et prerender
export const ssr = false;
export const dynamic = "force-dynamic";
export const revalidate = 0;

// Import dynamique du composant qui utilise Leaflet (sinon crash SSR)
import dynamic from "next/dynamic";

const ActivitiesEvents = dynamic(
  () => import("@/components/dashboard/activities-events"),
  {
    ssr: false, // ⚠️ Obligatoire pour éviter "window is not defined"
    loading: () => <p>Chargement…</p>,
  }
);

// Layout dashboard
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
            {/* Composant chargé uniquement côté client */}
            <ActivitiesEvents />
          </div>
        </div>

        <DashboardFooter />
      </main>
    </div>
  );
}
