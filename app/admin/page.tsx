import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AdminStats } from "@/components/admin-stats"
import { AdminTabs } from "@/components/admin-tabs"
import { Shield } from "lucide-react"

export default function AdminPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 lg:px-8 py-8">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="bg-accent/10 p-3 rounded-lg border border-accent/20">
              <Shield className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Panel de Administración</h1>
              <p className="text-muted-foreground">Gestiona películas, funciones y reservas del CineClub</p>
            </div>
          </div>

          <AdminStats />
          <AdminTabs />
        </div>
      </main>
      <Footer />
    </div>
  )
}
