"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const partners = [
  { name: "INVESTMENTS", logo: "a-1" },
  { name: "INSTALACIONES JDR SAS", logo: "a-2" },
  { name: "MC", logo: "a-3" },
  { name: "OTC", logo: "a-4" },
  { name: "SÍMBOLO GROUP", logo: "a-5" },
  { name: "HALUVIM SAS", logo: "a-6" },
  { name: "ALMACÉN GRANIZAL", logo: "a-7" },
  { name: "EL PUNTO DE LAS VARIEDADES", logo: "a-8" },
  { name: "SIN DEUDA", logo: "a-20" },
  { name: "LONDON FRUIT SAS", logo: "a-21" },
  { name: "PINTURAS IPAR", logo: "a-22" },
];

export function PartnersCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-muted/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-muted-foreground text-sm font-medium mb-8 uppercase tracking-wider">
          Empresas que confían en nosotros
        </p>

        <div
          ref={scrollRef}
          className="flex gap-12 overflow-hidden"
          style={{ scrollBehavior: "auto" }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="shrink-0 flex items-center justify-center w-32 h-16 bg-card rounded-lg "
            >
              <div className="flex items-center gap-2">
                {/* <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"> */}
                  {/* <span className="text-primary font-bold text-sm">{partner.logo}</span> */}
                  <Image
                    src={`/${partner.logo}.jpeg`}
                    width={70}
                    height={70}
                    alt={partner.name}
                  />
                {/* </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
