import type { Metadata } from "next";
import "aos/dist/aos.css";
import "./globals.css";
import { lexend } from "@/utils/fonts";
import { Header } from "@/components/Header";
import ScrollToTop from "@/utils/ScrollToTop";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vortex Webs",
  description:
    "Expertos en diseño web, ofrecemos soluciones personalizadas en desarrollo web, branding y posicionamiento digital para potenciar tu marca. Diseñamos páginas responsivas, modernas y optimizadas para SEO. Contáctanos y lleva tu negocio al siguiente nivel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <div className="bg"></div>
        <ScrollToTop>
          <Header />
          <main>{children}</main>
          <Footer />
        </ScrollToTop>
      </body>
    </html>
  );
}
