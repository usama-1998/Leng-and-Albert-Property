import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import SocialProof from "@/components/social-proof";
import StrategySection from "@/components/strategy-section";
import BrandStory from "@/components/brand-story";
import WhyUs from "@/components/why-us";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {/* <SocialProof /> */}
      <StrategySection />
      <BrandStory />
      <WhyUs />
      <ContactSection />
      <Footer />
    </main>
  );
}
