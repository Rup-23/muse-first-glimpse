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
          Discover Art &
          <span className="block bg-gradient-to-r from-museum-gold to-accent bg-clip-text text-transparent">
            Cultural Treasures
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 font-inter max-w-2xl mx-auto leading-relaxed">
          Experience world-class exhibitions and immerse yourself in centuries of human creativity from the comfort of your home.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="min-w-[200px]">
            Start Virtual Tour
          </Button>
          <Button variant="outline" size="lg" className="min-w-[200px] border-white/30 text-white hover:bg-white/10">
            Explore Collections
          </Button>
        </div>
        
        <div className="mt-12 flex items-center justify-center space-x-8 text-white/70">
          <div className="text-center">
            <div className="text-2xl font-playfair font-semibold text-museum-gold">10,000+</div>
            <div className="text-sm">Artworks</div>
          </div>
          <div className="w-px h-12 bg-white/30"></div>
          <div className="text-center">
            <div className="text-2xl font-playfair font-semibold text-museum-gold">150+</div>
            <div className="text-sm">Exhibitions</div>
          </div>
          <div className="w-px h-12 bg-white/30"></div>
          <div className="text-center">
            <div className="text-2xl font-playfair font-semibold text-museum-gold">50+</div>
            <div className="text-sm">Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;