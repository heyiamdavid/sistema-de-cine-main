"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, Film, Mail, User } from "lucide-react"

export function ReservationForm() {
  return (
    <Card className="border-border/50 bg-card sticky top-24">
      <CardHeader>
        <CardTitle className="text-2xl text-foreground">Detalles de la Película</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Film className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground">Le Fabuleux Destin d'Amélie Poulain</p>
              <p className="text-sm text-muted-foreground">Francés • 122 min • PG-13</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-accent flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground">Viernes 8 de Nov</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-accent flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground">19:30</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 space-y-4">
          <h3 className="font-semibold text-foreground">Información del Estudiante</h3>

          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              Nombre Completo
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="name"
                placeholder="Juan Pérez"
                className="pl-10 bg-background border-border focus:border-accent"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              Correo Institucional
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="estudiante@universidad.edu"
                className="pl-10 bg-background border-border focus:border-accent"
              />
            </div>
            <p className="text-xs text-muted-foreground">Debe ser un correo institucional válido</p>
          </div>
        </div>

        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11 text-base font-semibold">
          Confirmar Reserva
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Recibirás un código QR en tu correo para validar tu entrada
        </p>
      </CardContent>
    </Card>
  )
}
