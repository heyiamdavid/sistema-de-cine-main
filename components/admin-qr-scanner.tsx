"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { QrCode, Camera, CheckCircle } from "lucide-react"

export function AdminQRScanner() {
  return (
    <Card className="border-border/50 bg-card">
      <CardHeader>
        <CardTitle className="text-2xl text-foreground">Validación de Asistencia con QR</CardTitle>
        <p className="text-sm text-muted-foreground">
          Escanea el código QR de las reservas para confirmar la asistencia
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center justify-center py-12 space-y-6">
          <div className="bg-accent/10 p-8 rounded-2xl border-2 border-dashed border-accent/30">
            <QrCode className="h-32 w-32 text-accent" />
          </div>
          <div className="text-center space-y-2">
            <p className="text-lg font-medium text-foreground">Listo para escanear</p>
            <p className="text-sm text-muted-foreground max-w-md">
              Coloca el código QR del estudiante frente a la cámara para validar su entrada
            </p>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8">
            <Camera className="h-5 w-5 mr-2" />
            Activar Cámara
          </Button>
        </div>

        <div className="border-t border-border/50 pt-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Últimas Validaciones</h3>
          <div className="space-y-3">
            {[
              {
                name: "María González",
                movie: "Amélie",
                time: "Hace 2 min",
              },
              {
                name: "Carlos Ramírez",
                movie: "Parasite",
                time: "Hace 5 min",
              },
              {
                name: "Ana Martínez",
                movie: "Cinema Paradiso",
                time: "Hace 8 min",
              },
            ].map((entry, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border/50">
                <div className="bg-accent/10 p-2 rounded-full">
                  <CheckCircle className="h-4 w-4 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{entry.name}</p>
                  <p className="text-sm text-muted-foreground">{entry.movie}</p>
                </div>
                <span className="text-xs text-muted-foreground">{entry.time}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
