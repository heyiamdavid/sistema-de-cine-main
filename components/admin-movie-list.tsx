"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Plus, Eye } from "lucide-react"

const movies = [
  {
    id: 1,
    title: "Le Fabuleux Destin d'Amélie Poulain",
    language: "Francés",
    duration: "122 min",
    showtimes: 2,
    reservations: 45,
    status: "active",
  },
  {
    id: 2,
    title: "Parasite",
    language: "Coreano",
    duration: "132 min",
    showtimes: 2,
    reservations: 52,
    status: "active",
  },
  {
    id: 3,
    title: "Das Leben der Anderen",
    language: "Alemán",
    duration: "137 min",
    showtimes: 2,
    reservations: 38,
    status: "active",
  },
]

export function AdminMovieList() {
  return (
    <Card className="border-border/50 bg-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-2xl text-foreground">Películas en Cartelera</CardTitle>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Plus className="h-4 w-4 mr-2" />
          Agregar Película
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-background hover:border-accent/50 transition-colors"
            >
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold text-foreground">{movie.title}</h3>
                  <Badge className="bg-accent/10 text-accent border-accent/20">{movie.language}</Badge>
                  <Badge variant="outline" className="border-border text-muted-foreground">
                    {movie.status === "active" ? "Activa" : "Inactiva"}
                  </Badge>
                </div>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <span>Duración: {movie.duration}</span>
                  <span>Funciones: {movie.showtimes}</span>
                  <span>Reservas: {movie.reservations}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-accent">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
