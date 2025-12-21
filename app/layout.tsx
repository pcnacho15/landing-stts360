import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SST360 | Seguridad y Salud en el Trabajo",
  description:
    "Expertos en seguridad y salud ocupacional. Protegemos a su empresa y sus colaboradores con soluciones integrales de SST.",
  // generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logo.png",
        // type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
