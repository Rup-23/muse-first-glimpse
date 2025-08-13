import { Button } from "@/components/ui/button";
import ancientArt from "@/assets/ancient-art.jpg";
import modernArt from "@/assets/modern-art.jpg";
import egyptianArt from "@/assets/egyptian-art.jpg";

const exhibitions = [
  {
    id: 1,
    title: "Ancient Civilizations",
    description: "Journey through time with artifacts from Greek, Roman, and Byzantine empires. Discover the artistic mastery that shaped our world.",
    image: ancientArt,
    period: "3000 BCE - 500 CE",
    pieces: "245 pieces"
  },
  {
    id: 2,
    title: "Modern Masterpieces",
    description: "Experience the revolutionary movements that defined the 20th century, from Impressionism to Abstract Expressionism.",
    image: modernArt,
    period: "1850 - 1980",
    pieces: "180 pieces"
  },
  {
    id: 3,
    title: "Egyptian Treasures",
    description: "Uncover the mysteries of ancient Egypt through golden artifacts, hieroglyphic texts, and royal treasures.",
    image: egyptianArt,
    period: "3100 BCE - 30 CE",
    pieces: "320 pieces"
  }
];

const FeaturedExhibitions = () => {
  return (
    <section id="exhibitions" className="museum-section bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Featured Exhibitions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in carefully curated collections that span millennia of human creativity and cultural expression.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exhibitions.map((exhibition, index) => (
            <div 
              key={exhibition.id} 
              className="museum-card group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={exhibition.image} 
                  alt={exhibition.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-museum-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-between items-center text-sm">
                    <span>{exhibition.period}</span>
                    <span>{exhibition.pieces}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-semibold mb-3 group-hover:text-accent transition-colors">
                  {exhibition.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exhibition.description}
                </p>
                <Button variant="ghost" className="group-hover:text-accent transition-colors">
                  Explore Exhibition →
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="museum" size="lg">
            View All Exhibitions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExhibitions;