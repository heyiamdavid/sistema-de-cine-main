import { MovieCard } from "@/components/movie-card"

const movies = [
  {
    id: 1,
    title: "Le Fabuleux Destin d'Amélie Poulain",
    language: "Francés",
    genre: "Romance • Comedia",
    duration: "122 min",
    rating: "PG-13",
    showtimes: ["17:00", "19:30"],
    date: "Viernes 8 de Nov",
    image: "/amelie-poster.png",
    director: "Jean-Pierre Jeunet",
  },
  {
    id: 2,
    title: "Parasite",
    language: "Coreano",
    genre: "Thriller • Drama",
    duration: "132 min",
    rating: "R",
    showtimes: ["18:00", "20:45"],
    date: "Sábado 9 de Nov",
    image: "/parasite-movie-poster.png",
    director: "Bong Joon-ho",
  },
  {
    id: 3,
    title: "Das Leben der Anderen",
    language: "Alemán",
    genre: "Drama • Thriller",
    duration: "137 min",
    rating: "R",
    showtimes: ["17:30", "20:15"],
    date: "Domingo 10 de Nov",
    image: "/the-lives-of-others-movie-poster.jpg",
    director: "Florian Henckel von Donnersmarck",
  },
  {
    id: 4,
    title: "Cinema Paradiso",
    language: "Italiano",
    genre: "Drama • Romance",
    duration: "155 min",
    rating: "PG",
    showtimes: ["16:00", "19:00"],
    date: "Lunes 11 de Nov",
    image: "/cinema-paradiso-movie-poster.jpg",
    director: "Giuseppe Tornatore",
  },
  {
    id: 5,
    title: "Spirited Away",
    language: "Japonés",
    genre: "Animación • Fantasía",
    duration: "125 min",
    rating: "PG",
    showtimes: ["15:30", "18:00", "20:30"],
    date: "Miércoles 13 de Nov",
    image: "/spirited-away-movie-poster.jpg",
    director: "Hayao Miyazaki",
  },
  {
    id: 6,
    title: "Pan's Labyrinth",
    language: "Español",
    genre: "Fantasía • Drama",
    duration: "118 min",
    rating: "R",
    showtimes: ["17:00", "19:45"],
    date: "Jueves 14 de Nov",
    image: "/pans-labyrinth-movie-poster.jpg",
    director: "Guillermo del Toro",
  },
]

export function MovieGrid() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-16">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Cartelera Actual</h2>
          <p className="text-muted-foreground">Explora nuestra selección de películas internacionales</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  )
}
