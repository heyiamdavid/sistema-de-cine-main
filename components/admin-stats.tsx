import { Card, CardContent } from "@/components/ui/card"
import { Users, Film, Calendar, TrendingUp } from "lucide-react"

const stats = [
  {
    title: "Reservas Totales",
    value: "342",
    change: "+12.5%",
    icon: Users,
    trend: "up",
  },
  {
    title: "Películas Activas",
    value: "6",
    change: "Esta semana",
    icon: Film,
    trend: "neutral",
  },
  {
    title: "Funciones Programadas",
    value: "18",
    change: "Próximos 7 días",
    icon: Calendar,
    trend: "neutral",
  },
  {
    title: "Ocupación Promedio",
    value: "78%",
    change: "+5.2%",
    icon: TrendingUp,
    trend: "up",
  },
]

export function AdminStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="border-border/50 bg-card hover:border-accent/50 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className={`text-xs ${stat.trend === "up" ? "text-accent" : "text-muted-foreground"}`}>
                  {stat.change}
                </p>
              </div>
              <div className="bg-accent/10 p-3 rounded-lg">
                <stat.icon className="h-6 w-6 text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
