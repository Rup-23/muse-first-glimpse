import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const regions = [
  {
    id: 1,
    slug: "himalayan-heritage",
    name: "Himalayan Heritage",
    description: "Sacred monasteries, ancient trade routes, and mountain cultures of the world's highest peaks",
    highlights: ["Ladakh Monasteries", "Tibetan Buddhism", "Silk Route Stories"],
    color: "from-blue-600 to-blue-800"
  },
  {
    id: 2,
    slug: "gangetic-plains",
    name: "Gangetic Plains",
    description: "Cradle of civilization where spirituality, learning, and culture flourished for millennia",
    highlights: ["Varanasi Traditions", "Buddhist Heritage", "Mughal Legacy"],
    color: "from-amber-600 to-orange-700"
  },
  {
    id: 3,
    slug: "western-deserts",
    name: "Western Deserts",
    description: "Royal grandeur, warrior traditions, and resilient communities of the Thar",
    highlights: ["Rajputana Glory", "Folk Music", "Desert Crafts"],
    color: "from-red-600 to-pink-700"
  },
  {
    id: 4,
    slug: "deccan-plateau",
    name: "Deccan Plateau",
    description: "Medieval empires, rock-cut architecture, and diverse cultural synthesis",
    highlights: ["Ajanta Ellora", "Vijayanagara", "Sufi Traditions"],
    color: "from-purple-600 to-indigo-700"
  },
  {
    id: 5,
    slug: "southern-kingdoms",
    name: "Southern Kingdoms",
    description: "Temple architecture, classical arts, and maritime trade connections",
    highlights: ["Chola Bronzes", "Carnatic Music", "Spice Routes"],
    color: "from-green-600 to-emerald-700"
  },
  {
    id: 6,
    slug: "eastern-mystique",
    name: "Eastern Mystique",
    description: "Literary renaissance, spiritual movements, and artistic innovations",
    highlights: ["Bengali Renaissance", "Jagannath Culture", "Tea Gardens"],
    color: "from-teal-600 to-cyan-700"
  }
];

const CulturalRegions = () => {
  return (
    <section id="regions" className="museum-section bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Cultural Landscapes of India
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Journey through India's diverse geographical and cultural regions, each with its unique stories, traditions, and contributions to our shared heritage.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <div 
              key={region.id} 
              className="museum-card group cursor-pointer animate-slide-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${region.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
              
              <div className="relative z-10 p-6">
                <h3 className="text-2xl font-playfair font-semibold mb-3 group-hover:text-accent transition-colors">
                  {region.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {region.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {region.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <Link to={`/region/${region.slug}`}>
                  <Button variant="ghost" className="group-hover:text-accent transition-colors">
                    Explore Region →
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CulturalRegions;