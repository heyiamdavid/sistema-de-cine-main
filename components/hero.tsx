import { CalendarDays, Languages } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/50">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background" />

      <div className="container mx-auto px-4 lg:px-8 py-16 md:py-24 relative">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/20">
            <Languages className="h-4 w-4" />
            <span>Peliculas</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-balance text-foreground tracking-tight">
            Tu experiencia cinematográfica universitaria en un solo lugar.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Explora nuestra cartelera exclusiva del CineULEAM deL Instituto de Idiomas. Reserva tu lugar con tu correo
            institucional.
          </p>

          <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground pt-4">
            <CalendarDays className="h-4 w-4 text-accent" />
            <span>Funciones semanales • Entrada gratuita con reserva</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </section>
  )
}
