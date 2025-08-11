import './globals.css'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: 'Mousa Cars — Luxury Car Rentals in Arabia & Türkiye',
  description: 'World-class luxury car rentals for discerning clients across Arabia and Türkiye. Curated fleet, premium service, effortless booking.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <TooltipProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  )
}