import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import QualityBanner from "@/components/QualityBanner";
import Services from "@/components/Services";
import WhatsAppCta from "@/components/WhatsAppCta";
import FadeUpAnimator from "@/components/UI/FadeUpAnimator";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <FadeUpAnimator />
      <Navbar />
      <Hero />
      <Benefits />
      <Services />
      <Products />
      <WhatsAppCta />
      <QualityBanner />
      <Contact />
      <Footer />
    </main>
  );
}