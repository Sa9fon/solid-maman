"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Event {
  id: string
  title: string
  date: string
  time: string
  type: "activity" | "appointment" | "reminder"
  description: string
}

const MOCK_EVENTS: Event[] = [
  {
    id: "1",
    title: "Atelier cuisine",
    date: "2024-12-05",
    time: "14:00",
    type: "activity",
    description: "Atelier de cuisine pour mères célibataires",
  },
  {
    id: "2",
    title: "Consultation psychologue",
    date: "2024-12-08",
    time: "10:00",
    type: "appointment",
    description: "Suivi personnel avec Dr. Martin",
  },
  {
    id: "3",
    title: "Réunion communauté",
    date: "2024-12-12",
    time: "19:00",
    type: "activity",
    description: "Rencontre mensuelle du groupe de soutien",
  },
  {
    id: "4",
    title: "Rappel: Documents administratifs",
    date: "2024-12-15",
    time: "09:00",
    type: "reminder",
    description: "À préparer pour la mairie",
  },
]

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 11))

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const daysInMonth = getDaysInMonth(currentMonth)
  const firstDay = getFirstDayOfMonth(currentMonth)
  const monthName = currentMonth.toLocaleDateString("fr-FR", { month: "long", year: "numeric" })

  const days = []
  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  const getEventsForDate = (day: number) => {
    const dateStr = `2024-${String(currentMonth.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    return MOCK_EVENTS.filter((event) => event.date === dateStr)
  }

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "activity":
        return "bg-amber-100 text-amber-800"
      case "appointment":
        return "bg-blue-100 text-blue-800"
      case "reminder":
        return "bg-rose-100 text-rose-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl border border-border p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-foreground">Calendrier</h1>
          <div className="flex items-center gap-4">
            <button onClick={previousMonth} className="p-2 hover:bg-muted rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-semibold text-foreground capitalize min-w-48 text-center">{monthName}</h2>
            <button onClick={nextMonth} className="p-2 hover:bg-muted rounded-lg transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-2 mb-6">
          {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((day) => (
            <div key={day} className="text-center font-semibold text-sm text-muted-foreground py-2">
              {day}
            </div>
          ))}

          {days.map((day, index) => (
            <div
              key={index}
              className={`min-h-24 p-2 rounded-lg border border-border ${
                day ? "bg-white hover:bg-muted transition-colors" : "bg-gray-50"
              }`}
            >
              {day && (
                <>
                  <div className="font-semibold text-sm text-foreground mb-2">{day}</div>
                  <div className="space-y-1">
                    {getEventsForDate(day).map((event) => (
                      <div key={event.id} className={`text-xs p-1 rounded truncate ${getEventTypeColor(event.type)}`}>
                        {event.title}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Events list */}
      <div className="bg-white rounded-xl border border-border p-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">Événements à venir</h2>
        <div className="space-y-4">
          {MOCK_EVENTS.map((event) => (
            <div
              key={event.id}
              className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-muted transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-foreground">{event.title}</h3>
                  <span className={`text-xs font-medium px-2 py-1 rounded ${getEventTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>📅 {new Date(event.date).toLocaleDateString("fr-FR")}</span>
                  <span>🕐 {event.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
