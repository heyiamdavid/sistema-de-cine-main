"use client"

import Image from "next/image"
import { Clock, Calendar, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface Movie {
  id: number
  title: string
  language: string
  genre: string
  duration: string
  rating: string
  showtimes: string[]
  date: string
  image: string
  director: string
}

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card className="group overflow-hidden border-border/50 bg-card hover:border-accent/50 transition-all duration-300">
      <div className="relative aspect-[2/3] overflow-hidden">
        <Image
          src={movie.image || "/placeholder.svg"}
          alt={movie.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <Badge className="bg-accent/90 text-accent-foreground border-0">
            <Languages className="h-3 w-3 mr-1" />
            {movie.language}
          </Badge>
          <Badge variant="secondary" className="bg-secondary/90">
            {movie.rating}
          </Badge>
        </div>
      </div>

      <CardContent className="p-5 space-y-4">
        <div className="space-y-2">
          <h3 className="font-bold text-lg text-foreground leading-tight text-pretty group-hover:text-accent transition-colors">
            {movie.title}
          </h3>
          <p className="text-sm text-muted-foreground">{movie.director}</p>
          <p className="text-sm text-muted-foreground">{movie.genre}</p>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-accent" />
            <span>{movie.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-accent" />
            <span>{movie.date}</span>
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Horarios disponibles</p>
          <div className="flex flex-wrap gap-2">
            {movie.showtimes.map((time) => (
              <Badge
                key={time}
                variant="outline"
                className="border-accent/30 text-accent hover:bg-accent/10 cursor-pointer"
              >
                {time}
              </Badge>
            ))}
          </div>
        </div>

        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href={`/reserve/${movie.id}`}>Reservar Asiento</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
