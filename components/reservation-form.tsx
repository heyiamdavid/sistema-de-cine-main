"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, Film, Mail, User } from "lucide-react"
import { supabase } from "@/src/supabaseClient"

// ✅ Prop para recibir el ID de la película desde /reserve/[id]
interface ReservationFormProps {
  movieId?: string
}

export function ReservationForm({ movieId }: ReservationFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  // ✅ Función para guardar reserva
  const handleReserve = async () => {
    if (!name || !email) {
      alert("Por favor completa todos los campos.")
      return
    }

    if (!email.endsWith("@uleam.edu.ec")) {
      alert("Debes usar tu correo institucional (@uleam.edu.ec)")
      return
    }

    setLoading(true)
    setSuccess(false)

    try {
      const { data, error } = await supabase.from("reservas").insert([
        {
          nombre: name,
          correo: email,
          id_pelicula: movieId,
          fecha_reserva: new Date().toISOString(),
          estado: "pendiente",
        },
      ])

      if (error) throw error

      console.log("✅ Reserva guardada:", data)
      setSuccess(true)
      setName("")
      setEmail("")
      alert("🎟️ Reserva confirmada. Recibirás tu QR en el correo.")
    } catch (error) {
      console.error("❌ Error al guardar reserva:", error)
      alert("Hubo un problema al guardar tu reserva.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="border-border/50 bg-card sticky top-24">
      <CardHeader>
        <CardTitle className="text-2xl text-foreground">Detalles de la Película</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* 🔹 Datos de la película (puedes conectar con Supabase luego) */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Film className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground">Película seleccionada</p>
              <p className="text-sm text-muted-foreground">
                ID de película: <span className="font-semibold">{movieId}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-accent flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground">Fecha de función</p>
              <p className="text-sm text-muted-foreground">Por confirmar</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-accent flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground">Horario</p>
              <p className="text-sm text-muted-foreground">Por confirmar</p>
            </div>
          </div>
        </div>

        {/* 🔹 Datos del estudiante */}
        <div className="border-t border-border/50 pt-6 space-y-4">
          <h3 className="font-semibold text-foreground">Información del Estudiante</h3>

          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Nombre Completo</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="name"
                placeholder="Juan Pérez"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10 bg-background border-border focus:border-accent"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Correo Institucional</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="estudiante@uleam.edu.ec"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-background border-border focus:border-accent"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Debe ser un correo institucional válido
            </p>
          </div>
        </div>

        {/* 🔹 Botón de acción */}
        <Button
          onClick={handleReserve}
          disabled={loading}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11 text-base font-semibold"
        >
          {loading ? "Guardando..." : "Confirmar Reserva"}
        </Button>

        {/* 🔹 Mensaje final */}
        {success && (
          <p className="text-sm text-green-500 text-center font-medium">
            ✅ Reserva confirmada con éxito.
          </p>
        )}

        <p className="text-xs text-muted-foreground text-center">
          Recibirás un código QR en tu correo para validar tu entrada
        </p>
      </CardContent>
    </Card>
  )
}
