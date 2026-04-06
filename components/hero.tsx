import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

const whatsappNumber = "573146816353"

const benefits = [
  "Reducción de accidentes laborales",
  "Cumplimiento normativo garantizado",
  "Asesoría personalizada 24/7",
]

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="absolute inset-0 bg-[#202F58]/95 z-0" />

      <div className="absolute inset-0 z-0">
        <img
          src="/professional-woman-wearing-safety-helmet-and-vest-.jpg"
          alt="Profesional de seguridad y salud en el trabajo"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground">
            <span className="inline-block px-4 py-2 bg-linear-to-r from-[#69B4BB] to-[#5c9aa0] text-accent-foreground text-sm font-semibold rounded-full mb-6 animate-zoom-in delay-150">
              Líderes en SST
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance animate-zoom-in">
              Protegemos lo más valioso de su empresa:
              <span className="text-[#8dcdd3]"> su gente</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-xl animate-zoom-in">
              Soluciones integrales en seguridad y salud ocupacional para
              garantizar ambientes de trabajo seguros y productivos.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 animate-zoom-in"
                >
                  <CheckCircle className="h-5 w-5 text-[#69B4BB] shrink-0" />
                  <span className="text-primary-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 animate-bouncing">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hola,%20me%20interesa%20obtener%20información%20sobre%20sus%20servicios%20de%20SST`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-linear-to-r from-[#69B4BB] to-[#5c9aa0] hhover:from-[#0B4791]/90 hover:to-[#69B4BB]/90 text-accent-foreground cursor-pointer h-11 px-8"
              >
                Comenzar ahora
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </a>
              {/* <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent cursor-pointer"
              >
                Conocer más
              </Button> */}
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-zoom-in">
              <img
                src="/professional-woman-engineer-wearing-white-safety-h.jpg"
                alt="Profesional de seguridad con casco"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl animate-zoom-in delay-150">
              <p className="text-4xl font-bold text-[#69B4BB]">15+</p>
              <p className="text-muted-foreground text-sm">
                Años de experiencia
              </p>
            </div>
            <div className="absolute -top-6 -right-6 bg-card p-6 rounded-xl shadow-xl animate-zoom-in delay-250">
              <p className="text-4xl font-bold text-[#69B4BB]">200+</p>
              <p className="text-muted-foreground text-sm">
                Empresas protegidas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
