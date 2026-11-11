import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ContactSection from "@/components/shared/ContactSection";
import FloatingContact from "@/components/shared/FloatingContact";
import Hero from "@/components/Hero";
import CarsoulGllary from "@/components/CarsoulGllary";
import FiltrationBar from "@/components/FiltrationBar";
import Link from "next/dist/client/link";
import { ChevronLeft } from "lucide-react";
import Discover from "@/components/Discover";

export default function Home() {
  return (
    <>
      <Header />
      <FloatingContact />
      <Hero />
      <div className="m-4">
        <FiltrationBar />
        <CarsoulGllary />
        <div className="flex justify-center my-6">
          <Link
            href="/projects"
            className="text-[#2563EB]  font-semibold flex items-center gap-2 hover:underline"
          >
            عرض جميع المشروعات
            <ChevronLeft />
          </Link>
        </div>
      </div>
      <Discover/>
      <ContactSection />
      <Footer />
    </>
  );
}
