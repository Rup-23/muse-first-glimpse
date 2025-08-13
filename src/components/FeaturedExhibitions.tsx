import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ancientArt from "@/assets/ancient-art.jpg";
import modernArt from "@/assets/modern-art.jpg";
import egyptianArt from "@/assets/egyptian-art.jpg";

const exhibitions = [
  {
    id: 1,
    slug: "indus-valley",
    title: "Indus Valley Chronicles",
    description: "Unveil the mysteries of the world's oldest urban civilization. Explore seals, pottery, and urban planning that predated other civilizations by millennia.",
    image: ancientArt,
    period: "3300 - 1300 BCE",
    pieces: "500+ artifacts",
    category: "Ancient Heritage"
  },
  {
    id: 2,
    slug: "lost-kingdoms",
    title: "Lost Kingdoms of India",
    description: "Discover forgotten dynasties, hidden capitals, and untold stories of rulers whose legacies shaped regional cultures across the subcontinent.",
    image: modernArt,
    period: "300 - 1500 CE",
    pieces: "350+ stories",
    category: "Royal Heritage"
  },
  {
    id: 3,
    slug: "folk-wisdom",
    title: "Folk Wisdom & Traditions",
    description: "Experience the living heritage of India's diverse communities - their crafts, festivals, oral traditions, and timeless wisdom passed through generations.",
    image: egyptianArt,
    period: "Timeless",
    pieces: "200+ traditions",
    category: "Living Culture"
  },
  {
    id: 4,
    slug: "women-warriors",
    title: "Women Warriors & Sages",
    description: "Celebrate the untold stories of India's remarkable women - from fearless queens and warriors to pioneering scholars and spiritual leaders.",
    image: ancientArt,
    period: "Ancient - Modern",
    pieces: "150+ biographies",
    category: "Hidden Histories"
  }
];

const FeaturedExhibitions = () => {
  return (
    <section id="exhibitions" className="museum-section bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Journey Through India's Soul
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the untold narratives, forgotten heroes, and hidden treasures that reveal the true essence of India's incredible cultural heritage.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
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
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span>{exhibition.period}</span>
                    <span>{exhibition.pieces}</span>
                  </div>
                  <div className="text-xs bg-museum-gold/20 px-2 py-1 rounded-full backdrop-blur-sm">
                    {exhibition.category}
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
                <Link to={`/exhibition/${exhibition.slug}`}>
                  <Button variant="ghost" className="group-hover:text-accent transition-colors">
                    Discover Stories →
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="museum" size="lg">
            Explore All Collections
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExhibitions;