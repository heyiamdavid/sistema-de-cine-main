import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutSection />
      <Footer />
    </div>
  )
}
