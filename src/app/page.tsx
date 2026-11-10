import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ContactSection from "@/components/shared/ContactSection";
import FloatingContact from "@/components/shared/FloatingContact";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <FloatingContact />

      <Hero />

      <ContactSection />
      <Footer />
    </>
  );
}
