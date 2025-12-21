import Link from "next/link";
import { Shield, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  // servicios: [
  //   { label: "Sistema de Gestión SST", href: "#" },
  //   { label: "Auditorías", href: "#" },
  //   { label: "Capacitaciones", href: "#" },
  //   { label: "Medicina Laboral", href: "#" },
  // ],
  empresa: [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Equipo", href: "#equipo" },
    // { label: "Carreras", href: "#" },
  ],
  legal: [
    { label: "Términos y Condiciones", href: "#" },
    { label: "Política de Privacidad", href: "#" },
    { label: "Política de Cookies", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-[#0B4791]/90 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 mb-6"
            >
              {/* <Shield className="h-8 w-8 text-accent" /> */}
              <Image
                src="/logo.png"
                width={70}
                height={70}
                alt="Picture of the author"
              />
              <span className="font-bold text-xl">SST360</span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm leading-relaxed">
              Expertos en seguridad y salud ocupacional. Protegemos a su empresa
              y sus colaboradores con soluciones integrales de SST.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-[#0B4791] hover:text-accent-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          <div>
            <h3 className="font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} SST360. Todos los derechos reservados.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Comprometidos con la seguridad y salud de su equipo.
          </p>
        </div>
      </div>
    </footer>
  );
}
