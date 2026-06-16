import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhyHRLabs from "@/components/WhyHRLabs";
import Testimonials from "@/components/Testimonials";
import NGOPartner from "@/components/NGOPartner";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProofBar />
      <Services />
      <Stats />
      <WhyHRLabs />
      <Testimonials />
      <NGOPartner />
      <FinalCTA />
      <Footer />
    </main>
  );
}
