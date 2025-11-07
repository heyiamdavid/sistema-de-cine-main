"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AdminMovieList } from "@/components/admin-movie-list"
import { AdminReservations } from "@/components/admin-reservations"
import { AdminQRScanner } from "@/components/admin-qr-scanner"

export function AdminTabs() {
  return (
    <Tabs defaultValue="movies" className="space-y-6">
      <TabsList className="bg-card border border-border/50">
        <TabsTrigger
          value="movies"
          className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
        >
          Gestión de Películas
        </TabsTrigger>
        <TabsTrigger
          value="reservations"
          className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
        >
          Reservas
        </TabsTrigger>
        <TabsTrigger
          value="scanner"
          className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
        >
          Scanner QR
        </TabsTrigger>
      </TabsList>

      <TabsContent value="movies" className="space-y-4">
        <AdminMovieList />
      </TabsContent>

      <TabsContent value="reservations" className="space-y-4">
        <AdminReservations />
      </TabsContent>

      <TabsContent value="scanner" className="space-y-4">
        <AdminQRScanner />
      </TabsContent>
    </Tabs>
  )
}
