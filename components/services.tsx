import { Shield, FileCheck, GraduationCap, Stethoscope, AlertTriangle, ClipboardList } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Shield,
    title: "Sistema de Gestión SST",
    description:
      "Implementación y mantenimiento del SG-SST según la normativa vigente para garantizar el cumplimiento legal.",
  },
  {
    icon: FileCheck,
    title: "Auditorías de Seguridad",
    description: "Evaluaciones exhaustivas para identificar riesgos y oportunidades de mejora en su organización.",
  },
  {
    icon: GraduationCap,
    title: "Capacitaciones",
    description: "Programas de formación personalizados para todos los niveles de su empresa en temas de SST.",
  },
  {
    icon: Stethoscope,
    title: "Medicina Laboral",
    description: "Exámenes médicos ocupacionales, programas de vigilancia epidemiológica y promoción de la salud.",
  },
  {
    icon: AlertTriangle,
    title: "Análisis de Riesgos",
    description: "Identificación, evaluación y control de peligros para prevenir accidentes y enfermedades laborales.",
  },
  {
    icon: ClipboardList,
    title: "Investigación de Incidentes",
    description: "Análisis de causas raíz y desarrollo de planes de acción para evitar recurrencias.",
  },
]

export function Services() {
  return (
    <section
      id="servicios"
      className="py-20 md:py-28 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#69B4BB] font-semibold text-sm uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-foreground text-balance">
            Soluciones integrales para la seguridad de su empresa
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos un portafolio completo de servicios diseñados para
            proteger a sus colaboradores y garantizar el cumplimiento normativo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-border hover:border-[#69B4BB]/50 transition-all duration-300 hover:shadow-lg bg-card py-7 cursor-default"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-[#69B4BB]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#69B4BB]/20 transition-colors">
                  <service.icon className="h-7 w-7 text-[#69B4BB]" />
                </div>
                <CardTitle className="text-xl text-card-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
