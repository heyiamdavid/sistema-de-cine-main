"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/src/supabaseClient"
import { MovieCard } from "@/components/movie-card"

interface Movie {
  id_pelicula: number
  titulo: string
  idioma: string
  genero: string
  duracion_min: number
  clasificacion: string
  descripcion: string
  imagen_url: string
}

export function MovieGrid() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchMovies() {
      const { data, error } = await supabase
        .from("peliculas")
        .select("*")
        .eq("activo", true)

      if (error) {
        console.error("Error al cargar películas:", error)
      } else {
        setMovies(data || [])
      }
      console.log("📡 Resultado Supabase:", data, error)
      setLoading(false)
    }

    fetchMovies()
  }, [])

  if (loading) return <p className="text-center py-10">Cargando cartelera...</p>

  return (
    <section className="container mx-auto px-4 lg:px-8 py-16">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Cartelera Actual</h2>
          <p className="text-muted-foreground">Explora nuestra selección de películas</p>
        </div>

        {movies.length === 0 ? (
          <p className="text-muted-foreground">No hay películas disponibles en este momento.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id_pelicula}
                movie={{
                  id: movie.id_pelicula,
                  title: movie.titulo,
                  language: movie.idioma,
                  genre: movie.genero,
                  duration: `${movie.duracion_min} min`,
                  rating: movie.clasificacion,
                  showtimes: ["17:00", "19:00"], // luego lo conectaremos con la tabla 'funciones'
                  date: "Semana actual",
                  image: movie.imagen_url || "/placeholder.svg",
                  director: movie.descripcion || "Sin director registrado",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
