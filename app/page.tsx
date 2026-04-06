import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PartnersCarousel } from "@/components/partners-carousel"
import { Services } from "@/components/services"
import { Team } from "@/components/team"
import { AboutUs } from "@/components/about-us"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PartnersCarousel />
      <Services />
      {/* <Team /> */}
      <AboutUs />
      <Contact />
      <Footer />
    </main>
  )
}
