import { Button } from "@/components/ui/button";

const voices = [
  {
    id: 1,
    category: "Forgotten Warriors",
    title: "The Brave Hearts History Forgot",
    description: "Stories of courage from unsung heroes who shaped India's destiny",
    examples: ["Rani Chennamma", "Birsa Munda", "Thalakkal Chanthu"],
    icon: "⚔️"
  },
  {
    id: 2,
    category: "Women Pioneers",
    title: "She Who Dared Before Her Time",
    description: "Remarkable women who broke barriers centuries before feminism",
    examples: ["Gargi Vachaknavi", "Razia Sultana", "Ahilyabai Holkar"],
    icon: "👑"
  },
  {
    id: 3,
    category: "Master Craftspeople",
    title: "Hands That Created Wonders",
    description: "Artisan families who perfected crafts over generations",
    examples: ["Weavers of Kanjeevaram", "Bronze Masters of Swamimalai", "Stone Carvers of Khajuraho"],
    icon: "🎨"
  },
  {
    id: 4,
    category: "Spiritual Rebels",
    title: "Those Who Questioned Everything",
    description: "Reformers and philosophers who challenged orthodox thinking",
    examples: ["Akka Mahadevi", "Tukaram", "Raidas"],
    icon: "🕉️"
  },
  {
    id: 5,
    category: "Tribal Wisdom",
    title: "Keepers of Ancient Knowledge",
    description: "Indigenous communities preserving age-old wisdom",
    examples: ["Dongria Kondh", "Sentinelese", "Toda People"],
    icon: "🌿"
  },
  {
    id: 6,
    category: "Revolutionary Poets",
    title: "Words That Ignited Freedom",
    description: "Poets whose verses became anthems of resistance",
    examples: ["Subramania Bharati", "Faiz Ahmad Faiz", "Sahir Ludhianvi"],
    icon: "✍️"
  }
];

const UnheardVoices = () => {
  return (
    <section id="voices" className="museum-section bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Unheard Voices of India
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every great civilization has its hidden heroes. Meet the extraordinary individuals whose contributions shaped India but whose stories remain largely untold.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {voices.map((voice, index) => (
            <div 
              key={voice.id} 
              className="museum-card group cursor-pointer animate-slide-up hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="p-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {voice.icon}
                </div>
                
                <div className="text-sm text-accent font-semibold mb-2 uppercase tracking-wider">
                  {voice.category}
                </div>
                
                <h3 className="text-xl font-playfair font-semibold mb-3 group-hover:text-accent transition-colors">
                  {voice.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {voice.description}
                </p>
                
                <div className="space-y-1 mb-6">
                  <div className="text-xs text-muted-foreground mb-2">Featured Stories:</div>
                  {voice.examples.map((example, idx) => (
                    <div key={idx} className="text-xs flex items-center">
                      <div className="w-1 h-1 bg-museum-gold rounded-full mr-2" />
                      <span className="truncate">{example}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="ghost" size="sm" className="group-hover:text-accent transition-colors text-xs">
                  Discover Their Stories →
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="museum" size="lg">
            Explore All Voices
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UnheardVoices;