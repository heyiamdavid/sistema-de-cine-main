"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Download, CheckCircle, XCircle } from "lucide-react"

const reservations = [
  {
    id: "RES-001",
    name: "María González",
    email: "maria.gonzalez@universidad.edu",
    movie: "Amélie",
    date: "Vie 8 Nov",
    time: "19:30",
    seats: ["D5", "D6"],
    status: "confirmed",
  },
  {
    id: "RES-002",
    name: "Carlos Ramírez",
    email: "carlos.ramirez@universidad.edu",
    movie: "Parasite",
    date: "Sáb 9 Nov",
    time: "20:45",
    seats: ["F8"],
    status: "confirmed",
  },
  {
    id: "RES-003",
    name: "Ana Martínez",
    email: "ana.martinez@universidad.edu",
    movie: "Cinema Paradiso",
    date: "Lun 11 Nov",
    time: "19:00",
    seats: ["B3", "B4"],
    status: "attended",
  },
]

export function AdminReservations() {
  return (
    <Card className="border-border/50 bg-card">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl text-foreground">Gestión de Reservas</CardTitle>
          <Button variant="outline" className="border-accent/50 text-accent hover:bg-accent/10 bg-transparent">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por nombre, email o ID..."
            className="pl-10 bg-background border-border focus:border-accent"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reservations.map((reservation) => (
            <div key={reservation.id} className="p-4 rounded-lg border border-border/50 bg-background space-y-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground">{reservation.name}</h3>
                    <Badge
                      className={
                        reservation.status === "confirmed"
                          ? "bg-accent/10 text-accent border-accent/20"
                          : "bg-primary/10 text-primary border-primary/20"
                      }
                    >
                      {reservation.status === "confirmed" ? "Confirmada" : "Asistió"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{reservation.email}</p>
                </div>
                <span className="text-sm font-mono text-muted-foreground">{reservation.id}</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Película</p>
                  <p className="font-medium text-foreground">{reservation.movie}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Fecha</p>
                  <p className="font-medium text-foreground">{reservation.date}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Hora</p>
                  <p className="font-medium text-foreground">{reservation.time}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Asientos</p>
                  <p className="font-medium text-foreground">{reservation.seats.join(", ")}</p>
                </div>
              </div>

              {reservation.status === "confirmed" && (
                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-accent/50 text-accent hover:bg-accent/10 bg-transparent"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Marcar Asistencia
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-destructive/50 text-destructive hover:bg-destructive/10 bg-transparent"
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Cancelar
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
