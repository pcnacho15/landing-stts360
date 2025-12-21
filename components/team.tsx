"use client";
import { useRef, useEffect } from "react";
import { Linkedin, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const team = [
  {
    name: "Dra. María González",
    role: "Directora General",
    specialty: "Especialista en Medicina del Trabajo",
    image: "/professional-latina-woman-doctor-smiling-headshot-.jpg",
  },
  {
    name: "Ing. Carlos Ramírez",
    role: "Director Técnico",
    specialty: "Ingeniero en Seguridad Industrial",
    image: "/professional-latino-man-engineer-smiling-headshot-.jpg",
  },
  {
    name: "Lic. Ana Martínez",
    role: "Coordinadora de Capacitaciones",
    specialty: "Psicóloga Organizacional",
    image: "/professional-latina-woman-psychologist-smiling-hea.jpg",
  },
  {
    name: "Ing. Roberto Silva",
    role: "Auditor Senior",
    specialty: "Especialista en Sistemas de Gestión",
    image: "/professional-latino-man-auditor-smiling-headshot-p.jpg",
  },
]

export function Team() {

  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section
      id="equipo"
      className="py-20 md:py-28 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#69B4BB] font-semibold text-sm uppercase tracking-wider">
            Nuestro Equipo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-foreground text-balance">
            Profesionales comprometidos con su seguridad
          </h2>
          <p className="text-muted-foreground text-lg">
            Contamos con un equipo multidisciplinario de expertos certificados y
            con amplia experiencia en el sector.
          </p>
        </div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> */}
        <Carousel
          // plugins={[plugin.current]}
          opts={{
            align: "start",
          }}
          className="w-full"
          // onMouseEnter={plugin.current.stop}
          // onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {team.map((member, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card className="group overflow-hidden border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl bg-card">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <div className="flex gap-3">
                        <a
                          href="#"
                          className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                        >
                          <Linkedin className="h-5 w-5 text-primary-foreground" />
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                        >
                          <Mail className="h-5 w-5 text-primary-foreground" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-lg text-card-foreground">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium text-sm mt-1">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm mt-2">
                      {member.specialty}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
        {/* </div> */}
      </div>
    </section>
  );
}
