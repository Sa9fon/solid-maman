import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Personas from "@/components/personas"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Personas />
      <HowItWorks />
      <Testimonials />
      <div className="flex items-center justify-center py-8">
        <Link
          href="/dashboard"
          className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all"
        >
          View Dashboard
        </Link>
      </div>
      <Footer />
    </main>
  )
}
