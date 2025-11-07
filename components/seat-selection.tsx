"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor } from "lucide-react"
import { cn } from "@/lib/utils"

const rows = ["A", "B", "C", "D", "E", "F", "G", "H"]
const seatsPerRow = 10

const generateSeats = () => {
  const seats = []
  for (const row of rows) {
    for (let num = 1; num <= seatsPerRow; num++) {
      const seatId = `${row}${num}`
      const isOccupied = Math.random() > 0.7
      seats.push({
        id: seatId,
        row,
        number: num,
        status: isOccupied ? "occupied" : "available",
      })
    }
  }
  return seats
}

export function SeatSelection() {
  const [seats] = useState(generateSeats())
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])

  const handleSeatClick = (seatId: string, status: string) => {
    if (status === "occupied") return

    setSelectedSeats((prev) => (prev.includes(seatId) ? prev.filter((id) => id !== seatId) : [...prev, seatId]))
  }

  return (
    <Card className="border-border/50 bg-card">
      <CardHeader>
        <CardTitle className="text-2xl text-foreground">Selección de Asientos</CardTitle>
        <div className="flex items-center gap-6 pt-4 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-muted border border-border" />
            <span className="text-sm text-muted-foreground">Disponible</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-accent" />
            <span className="text-sm text-muted-foreground">Seleccionado</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary/40" />
            <span className="text-sm text-muted-foreground">Ocupado</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-lg">
            <div className="bg-accent/10 border-2 border-accent/30 rounded-t-3xl py-2 flex items-center justify-center gap-2">
              <Monitor className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent uppercase tracking-wider">Pantalla</span>
            </div>
          </div>

          <div className="space-y-2 w-full max-w-lg">
            {rows.map((row) => (
              <div key={row} className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="w-8 h-8 flex items-center justify-center font-bold text-accent border-accent/30"
                >
                  {row}
                </Badge>
                <div className="flex gap-1 flex-1 justify-center">
                  {seats
                    .filter((seat) => seat.row === row)
                    .map((seat) => (
                      <button
                        key={seat.id}
                        onClick={() => handleSeatClick(seat.id, seat.status)}
                        disabled={seat.status === "occupied"}
                        className={cn(
                          "w-8 h-8 rounded text-xs font-medium transition-all",
                          seat.status === "occupied" && "bg-primary/40 cursor-not-allowed",
                          seat.status === "available" &&
                            !selectedSeats.includes(seat.id) &&
                            "bg-muted border border-border hover:bg-accent/20 hover:border-accent/50",
                          selectedSeats.includes(seat.id) && "bg-accent text-accent-foreground scale-95",
                        )}
                      >
                        {seat.number}
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedSeats.length > 0 && (
          <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
            <p className="text-sm font-medium text-foreground mb-2">Asientos seleccionados:</p>
            <div className="flex flex-wrap gap-2">
              {selectedSeats.map((seatId) => (
                <Badge key={seatId} className="bg-accent text-accent-foreground">
                  {seatId}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
