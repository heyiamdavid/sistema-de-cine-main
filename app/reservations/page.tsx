import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MyReservations } from "@/components/my-reservations"

export default function ReservationsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <MyReservations />
      <Footer />
    </div>
  )
}
