"use client"

import {
  LayoutDashboard,
  Users,
  UserCheck,
  Calendar,
  FileText,
  Hand,
  MessageSquare,
  Settings,
  BookOpen,
  ChefHat,
  CheckSquare
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const menuItems = [
  { icon: LayoutDashboard, label: "Tableau de bord", href: "/dashboard" },
  { icon: Users, label: "Mes communautés", href: "/dashboard/communities" },
  { icon: UserCheck, label: "Psychologues", href: "/dashboard/psychologists" },
  { icon: Calendar, label: "Calendrier", href: "/dashboard/calendar" },
  { icon: CheckSquare, label: "To-Do List", href: "/dashboard/todo" },
  { icon: Calendar, label: "Activités", href: "/dashboard/activities" },
  { icon: BookOpen, label: "Aide aux devoirs", href: "/dashboard/aide-aux-devoirs" },
  { icon: ChefHat, label: "Idées de repas", href: "/dashboard/repas" },
  { icon: FileText, label: "Aide administrative", href: "/dashboard/admin-help" },
  { icon: Hand, label: "Garde d'enfant", href: "/dashboard/garde-enfant" },
  { icon: MessageSquare, label: "Messages", href: "/dashboard/messages" },
  { icon: Settings, label: "Mon compte", href: "/dashboard/mon-compte" },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-white border-r border-border p-6 sticky top-0 h-screen overflow-y-auto">
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Menu</h2>
      </div>
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors group ${
                isActive ? "bg-primary text-white" : "text-foreground hover:bg-muted"
              }`}
            >
              <Icon
                className={`w-5 h-5 ${
                  isActive ? "text-white" : "text-muted-foreground group-hover:text-primary"
                } transition-colors`}
              />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
