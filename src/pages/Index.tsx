import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedExhibitions from "@/components/FeaturedExhibitions";
import CulturalRegions from "@/components/CulturalRegions";
import UnheardVoices from "@/components/UnheardVoices";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedExhibitions />
      <CulturalRegions />
      <UnheardVoices />
      <About />
      <Footer />
    </main>
  );
};

export default Index;