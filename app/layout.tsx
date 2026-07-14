import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

export const metadata: Metadata = {
  title: "Phygital KSA — The National Face of Phygital in Saudi Arabia",
  description:
    "The national hub for phygital competition in Saudi Arabia — hosting the SEF Arena tournament with Al-Ittihad Al-Saudi, and the national deployment framework across schools, universities, and corporates.",
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27%3E%3Cdefs%3E%3ClinearGradient id=%27g%27 x1=%270%25%27 y1=%270%25%27 x2=%27100%25%27 y2=%27100%25%27%3E%3Cstop offset=%270%25%27 stop-color=%27%234E6BFF%27/%3E%3Cstop offset=%27100%25%27 stop-color=%27%239B4DFF%27/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpolygon points=%270,0 30,0 50,55 70,0 100,0 60,100 40,100%27 fill=%27url(%23g)%27/%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Cairo:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
          <ScrollReveal />
        </LanguageProvider>
      </body>
    </html>
  );
}