import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ReservationForm } from "@/components/reservation-form"
import { SeatSelection } from "@/components/seat-selection"

interface Props {
  params: {
    id: string
  }
}

export default function ReservePage({ params }: Props) {
  const { id } = params

  console.log("🟢 ID de película:", id)

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Reservar Asiento
            </h1>
            <p className="text-muted-foreground">
              Selecciona tus asientos y completa tu reserva para la película #{id}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SeatSelection movieId={id} />
            </div>
            <div className="lg:col-span-1">
              <ReservationForm movieId={id} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
