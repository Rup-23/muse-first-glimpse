import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="museum-section bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
              Digital Innovation
            </div>
            
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Art Without Boundaries
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Artisan Digital Museum breaks down the walls between you and the world's greatest artistic treasures. 
              Our cutting-edge platform brings centuries of human creativity directly to your screen with unprecedented 
              detail and immersive experiences.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From ancient artifacts to contemporary masterpieces, we've partnered with leading institutions 
              worldwide to create the most comprehensive digital art experience ever assembled.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="museum" size="lg">
                Learn Our Story
              </Button>
              <Button variant="outline" size="lg">
                Partner Museums
              </Button>
            </div>
          </div>
          
          <div className="animate-slide-up space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-[var(--shadow-museum)]">
                <div className="text-3xl font-playfair font-bold text-accent mb-2">4K</div>
                <div className="text-sm text-muted-foreground">Ultra HD Detail</div>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-[var(--shadow-museum)]">
                <div className="text-3xl font-playfair font-bold text-accent mb-2">VR</div>
                <div className="text-sm text-muted-foreground">Virtual Reality</div>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-[var(--shadow-museum)]">
                <div className="text-3xl font-playfair font-bold text-accent mb-2">AI</div>
                <div className="text-sm text-muted-foreground">Powered Guides</div>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-[var(--shadow-museum)]">
                <div className="text-3xl font-playfair font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Always Open</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-accent/10 to-museum-gold/10 p-8 rounded-lg border border-accent/20">
              <h3 className="text-xl font-playfair font-semibold mb-3">
                Experience Art Like Never Before
              </h3>
              <p className="text-muted-foreground">
                Our proprietary scanning technology captures artworks at microscopic detail, 
                revealing brushstrokes, textures, and details invisible to the naked eye.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;