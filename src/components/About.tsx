import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="museum-section bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
              Heritage Preservation
            </div>
            
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Preserving India's Soul Stories
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Every temple stone, every folk song, every grandmother's tale holds the essence of India. 
              We're on a mission to collect, preserve, and share the untold stories that make India truly incredible - 
              stories that history books missed but hearts remember.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From forgotten kingdoms to living traditions, from unsung heroes to mystical legends, 
              we create an immersive digital sanctuary where India's true heritage lives forever.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="museum" size="lg">
                Our Mission
              </Button>
              <Button variant="outline" size="lg">
                Community Stories
              </Button>
            </div>
          </div>
          
          <div className="animate-slide-up space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-[var(--shadow-museum)]">
                <div className="text-3xl font-playfair font-bold text-accent mb-2">5000+</div>
                <div className="text-sm text-muted-foreground">Years of History</div>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-[var(--shadow-museum)]">
                <div className="text-3xl font-playfair font-bold text-accent mb-2">750+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-[var(--shadow-museum)]">
                <div className="text-3xl font-playfair font-bold text-accent mb-2">28</div>
                <div className="text-sm text-muted-foreground">States Explored</div>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-[var(--shadow-museum)]">
                <div className="text-3xl font-playfair font-bold text-accent mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Stories to Tell</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-accent/10 to-museum-gold/10 p-8 rounded-lg border border-accent/20">
              <h3 className="text-xl font-playfair font-semibold mb-3">
                Every Story Matters
              </h3>
              <p className="text-muted-foreground">
                Through community contributions, scholarly research, and cutting-edge technology, 
                we ensure that no Indian story remains untold, no tradition forgotten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;