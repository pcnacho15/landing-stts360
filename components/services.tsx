import {
  Shield,
  FileCheck,
  GraduationCap,
  TrafficCone,
  PencilLine,
  HeartPulse,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const whatsappNumber = "573146816353";
import { Button } from "./ui/button";

const services = [
  {
    icon: Shield,
    title: "Plan Administrativo de Seguridad y Salud en el Trabajo (SG-SST)",
    description:
      "Implementación y gestión de sistemas de seguridad y salud en el trabajo conforme a la normativa vigente.",
  },
  {
    icon: FileCheck,
    title: "Plan Actualización SG-SST",
    description:
      "Ofrecer apoyo integral en la gestión y actualización de la documnentación del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST).",
  },
  {
    icon: GraduationCap,
    title: "Acompañamiento en Capacitaciones SG-SST",
    description:
      "Programas de formación personalizados para todos los niveles de su empresa en temas del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST).",
  },
  {
    icon: TrafficCone,
    title: "Plan Estratégico de Seguridad Vial",
    description:
      "Analizar estrategias y acciones concretas para reducir accidentes viales y fomentar un entorno más seguro para todos.",
  },
  {
    icon: PencilLine,
    title: "Análisis de Riesgos",
    description:
      "Apoyar a nuestros clientes para diseñar un Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST) efectivo y conforme a la normativa vigente.",
  },
  {
    icon: HeartPulse,
    title: "Jornadas de Salud Laboral",
    description:
      "Promover Jornadas de Salud Laboral diseñadas para el bienestar y la prevención en el entorno de trabajo. A través de actividades prácticas, evaluaciones básicas de salud y charlas educativas.",
  },
];

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
        <div className="text-center mt-16">
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20SST`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-linear-to-r from-[#69B4BB] to-[#5c9aa0] hhover:from-[#0B4791]/90 hover:to-[#69B4BB]/90 text-accent-foreground cursor-pointer h-11 px-8"
          >
            Ver más servicios
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
