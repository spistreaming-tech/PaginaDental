import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClinicaPura | Tu Sonrisa Perfecta",
  description:
    "Clínica dental premium en Madrid. Ortodoncia invisible, blanqueamiento profesional e implantes dentales. Primera consulta gratuita.",
  keywords: "clínica dental, ortodoncia invisible, blanqueamiento, implantes, Madrid",
  openGraph: {
    title: "ClinicaPura | Tu Sonrisa Perfecta",
    description: "Clínica dental premium en Madrid. Primera consulta gratuita.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
