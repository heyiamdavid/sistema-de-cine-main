import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MovieGrid } from "@/components/movie-grid"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MovieGrid />
      <Footer />
    </div>
  )
}
