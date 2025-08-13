import { Button } from "@/components/ui/button";
import heroImage from "@/assets/museum-hero.jpg";

const Hero = () => {
  return (
    <section className="museum-hero min-h-screen flex items-center justify-center relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-museum-blue/80 via-museum-blue/60 to-transparent" />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
          Untold Stories of
          <span className="block bg-gradient-to-r from-museum-gold to-accent bg-clip-text text-transparent">
            Incredible India
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 font-inter max-w-2xl mx-auto leading-relaxed">
          Discover the hidden narratives, ancient wisdom, and rich cultural tapestry that shaped the soul of India across millennia.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="min-w-[200px]">
            Begin Journey
          </Button>
          <Button variant="outline" size="lg" className="min-w-[200px] border-white/30 text-white hover:bg-white/10">
            Discover Heritage
          </Button>
        </div>
        
        <div className="mt-12 flex items-center justify-center space-x-8 text-white/70">
          <div className="text-center">
            <div className="text-2xl font-playfair font-semibold text-museum-gold">5000+</div>
            <div className="text-sm">Untold Stories</div>
          </div>
          <div className="w-px h-12 bg-white/30"></div>
          <div className="text-center">
            <div className="text-2xl font-playfair font-semibold text-museum-gold">28</div>
            <div className="text-sm">States Covered</div>
          </div>
          <div className="w-px h-12 bg-white/30"></div>
          <div className="text-center">
            <div className="text-2xl font-playfair font-semibold text-museum-gold">200+</div>
            <div className="text-sm">Local Traditions</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;