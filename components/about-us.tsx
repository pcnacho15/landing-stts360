import { Target, Eye, Award, Users } from "lucide-react";

const stats = [
  { value: "15+", label: "Años de experiencia" },
  { value: "200+", label: "Empresas atendidas" },
  { value: "20K+", label: "Trabajadores protegidos" },
  // { value: "98%", label: "Satisfacción del cliente" },
];

const values = [
  {
    icon: Target,
    title: "Misión",
    description:
      "Contribuir al bienestar integral de las organizaciones y sus colaboradores, ofreciendo soluciones especializadas en Seguridad y Salud en el Trabajo y asesorías empresariales que prevengan riesgos, impulsen la productividad y promuevan entornos laborales seguros y saludables, respaldados por más de una década de experiencia profesional en el sector.",
  },
  {
    icon: Eye,
    title: "Visión",
    description:
      "Ser reconocidos a nivel nacional como empresa líder en la prestación de servicios SST y asesorías empresariales, distinguiéndonos por la excelencia, innovación y profesionalismo de nuestro equipo, generando impacto positivo en la cultura preventiva y el desarrollo sostenible de nuestros clientes y sus comunidades.",
  },
];

export function AboutUs() {
  return (
    <section
      id="nosotros"
      className="py-20 md:py-28 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Quiénes Somos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-foreground text-balance">
              Comprometidos con la protección de su capital humano
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              En <span className="font-bold text-[#0B4791]abo">SST360</span>{" "}
              elaboramos el SG-SST con base a los estándares mínimos
              establecidos por la resolución 0312 de 2019.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Trabajamos de la mano con nuestros clientes para desarrollar
              soluciones personalizadas que se adapten a sus necesidades
              específicas, garantizando el cumplimiento normativo y la mejora
              continua de sus condiciones laborales.
            </p>

            <div className="grid grid-cols-1 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card shadow-lg shadow-accent/50 md:shadow-none md:bg-background rounded-2xl md:rounded-none p-2 md:p-0 flex gap-4"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/about-us.jpeg"
                alt="Equipo de SafeWork Pro"
                className="w-full h-auto"
              />
            </div>

            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] bg-card p-6 rounded-xl shadow-xl border border-border">
              <div className="grid grid-cols-3 gap-4 text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <p className="text-2xl md:text-3xl font-bold text-accent">
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground text-xs md:text-sm mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-2 gap-8">
          <div className="bg-[#0B4791] p-8 md:p-10 rounded-2xl">
            <Award className="h-12 w-12 text-accent mb-6" />
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Certificaciones y Acreditaciones
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Contamos con las certificaciones ISO 45001, ISO 9001 y estamos
              acreditados ante los principales organismos reguladores del país,
              garantizando la calidad y confiabilidad de nuestros servicios.
            </p>
          </div>
          <div className="bg-muted p-8 md:p-10 rounded-2xl">
            <Users className="h-12 w-12 text-accent mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Responsabilidad Social
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Promovemos activamente la cultura de prevención a través de
              programas educativos en comunidades y empresas, contribuyendo al
              desarrollo de una sociedad más segura y consciente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
