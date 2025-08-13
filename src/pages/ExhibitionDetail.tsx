import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, MapPin, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ancientArt from "@/assets/ancient-art.jpg";
import modernArt from "@/assets/modern-art.jpg";
import egyptianArt from "@/assets/egyptian-art.jpg";

const exhibitions = {
  "indus-valley": {
    id: 1,
    title: "Indus Valley Chronicles",
    description: "Unveil the mysteries of the world's oldest urban civilization",
    image: ancientArt,
    period: "3300 - 1300 BCE",
    pieces: "500+ artifacts",
    category: "Ancient Heritage",
    fullDescription: "The Indus Valley Civilization, one of the world's earliest urban civilizations, flourished in the northwestern regions of South Asia from about 3300 to 1300 BCE. This remarkable civilization was characterized by its advanced urban planning, sophisticated drainage systems, and standardized weights and measures.",
    highlights: [
      "Advanced urban planning with grid-pattern streets",
      "Sophisticated water management and drainage systems",
      "Standardized brick sizes and weights across cities",
      "Mysterious undeciphered script found on seals",
      "Evidence of extensive trade networks reaching Mesopotamia"
    ],
    artifacts: [
      {
        name: "Dancing Girl Bronze",
        description: "4,000-year-old bronze sculpture showing artistic mastery",
        significance: "Demonstrates advanced metallurgy and artistic expression"
      },
      {
        name: "Priest-King Sculpture",
        description: "Limestone sculpture with intricate trefoil pattern robe",
        significance: "Provides insight into social hierarchy and clothing"
      },
      {
        name: "Harappan Seals",
        description: "Stone seals with animal motifs and undeciphered script",
        significance: "Evidence of trade, religion, and writing system"
      }
    ],
    locations: ["Harappa", "Mohenjo-daro", "Dholavira", "Lothal", "Kalibangan"]
  },
  "lost-kingdoms": {
    id: 2,
    title: "Lost Kingdoms of India",
    description: "Discover forgotten dynasties and hidden capitals",
    image: modernArt,
    period: "300 - 1500 CE",
    pieces: "350+ stories",
    category: "Royal Heritage",
    fullDescription: "India's history is filled with remarkable kingdoms that ruled vast territories, built magnificent monuments, and created lasting cultural legacies. Many of these kingdoms remain largely unknown to the general public despite their significant contributions to Indian civilization.",
    highlights: [
      "Kalinga Empire and the transformation of Ashoka",
      "Pallava dynasty's architectural innovations in Mamallapuram",
      "Rashtrakuta empire's patronage of art and literature",
      "Hoysala kingdom's intricate temple architecture",
      "Kakatiya dynasty's water management systems in Telangana"
    ],
    artifacts: [
      {
        name: "Kalinga War Inscription",
        description: "Ashoka's edicts describing the brutal Kalinga war",
        significance: "Documents the emperor's transformation to Buddhism"
      },
      {
        name: "Pallava Shore Temple",
        description: "Rock-cut architecture overlooking the Bay of Bengal",
        significance: "Pioneered Dravidian temple architecture style"
      },
      {
        name: "Hoysala Star-shaped Temples",
        description: "Intricate star-shaped temple designs with detailed sculptures",
        significance: "Represents peak of South Indian temple architecture"
      }
    ],
    locations: ["Mamallapuram", "Hampi", "Ellora", "Belur", "Warangal"]
  },
  "folk-wisdom": {
    id: 3,
    title: "Folk Wisdom & Traditions",
    description: "Experience living heritage of diverse communities",
    image: egyptianArt,
    period: "Timeless",
    pieces: "200+ traditions",
    category: "Living Culture",
    fullDescription: "India's folk traditions represent the soul of its civilization - passed down through generations, these practices embody ancient wisdom, ecological knowledge, and community values that remain relevant today.",
    highlights: [
      "Warli art's connection to nature and agricultural cycles",
      "Baul traditions of Bengal celebrating divine love",
      "Rajasthani puppet shows preserving historical narratives",
      "Tamil folk songs documenting social history",
      "Tribal medicinal knowledge and sustainable practices"
    ],
    artifacts: [
      {
        name: "Warli Paintings",
        description: "Tribal art using geometric patterns to depict daily life",
        significance: "Shows harmony between humans and nature"
      },
      {
        name: "Baul Musical Instruments",
        description: "Traditional instruments used by wandering minstrels",
        significance: "Represents spiritual quest through music"
      },
      {
        name: "Kathputli Puppets",
        description: "Traditional Rajasthani string puppets",
        significance: "Preserves oral history and moral stories"
      }
    ],
    locations: ["Maharashtra Villages", "Bengal", "Rajasthan", "Tamil Nadu", "Northeast India"]
  },
  "women-warriors": {
    id: 4,
    title: "Women Warriors & Sages",
    description: "Celebrate untold stories of remarkable women",
    image: ancientArt,
    period: "Ancient - Modern",
    pieces: "150+ biographies",
    category: "Hidden Histories",
    fullDescription: "Throughout Indian history, women have played pivotal roles as warriors, scholars, rulers, and spiritual leaders. Their stories of courage, wisdom, and leadership challenge conventional narratives and inspire future generations.",
    highlights: [
      "Rani Lakshmibai's heroic resistance against British rule",
      "Gargi Vachaknavi's philosophical debates in ancient times",
      "Razia Sultana's progressive rule in 13th century Delhi",
      "Ahilyabai Holkar's enlightened governance of Malwa",
      "Rani Chennamma's early freedom struggle in Karnataka"
    ],
    artifacts: [
      {
        name: "Rani Lakshmibai's Sword",
        description: "Ceremonial sword of the warrior queen of Jhansi",
        significance: "Symbol of resistance against colonial rule"
      },
      {
        name: "Gargi's Philosophical Texts",
        description: "Ancient manuscripts documenting philosophical debates",
        significance: "Evidence of women's scholarly contributions"
      },
      {
        name: "Ahilyabai's Administrative Records",
        description: "Documents showing progressive governance policies",
        significance: "Demonstrates enlightened female leadership"
      }
    ],
    locations: ["Jhansi", "Ancient Mithila", "Delhi", "Maheshwar", "Kittur"]
  }
};

const ExhibitionDetail = () => {
  const { id } = useParams();
  const exhibition = exhibitions[id as keyof typeof exhibitions];

  if (!exhibition) {
    return <div>Exhibition not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img 
            src={exhibition.image} 
            alt={exhibition.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-museum-blue/90 via-museum-blue/50 to-transparent" />
          
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-12">
              <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Museum
              </Link>
              
              <div className="text-white max-w-4xl">
                <div className="inline-block bg-museum-gold/20 px-3 py-1 rounded-full text-sm mb-4 backdrop-blur-sm">
                  {exhibition.category}
                </div>
                <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
                  {exhibition.title}
                </h1>
                <p className="text-xl mb-6 max-w-2xl">
                  {exhibition.description}
                </p>
                
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {exhibition.period}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {exhibition.pieces}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Multiple Locations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="museum-section">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Main Description */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-playfair font-bold mb-6">About This Exhibition</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {exhibition.fullDescription}
                </p>

                {/* Key Highlights */}
                <h3 className="text-2xl font-playfair font-semibold mb-4">Key Highlights</h3>
                <div className="space-y-3 mb-8">
                  {exhibition.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-museum-gold rounded-full mt-2 mr-4 flex-shrink-0" />
                      <p className="text-muted-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>

                {/* Featured Artifacts */}
                <h3 className="text-2xl font-playfair font-semibold mb-6">Featured Artifacts</h3>
                <div className="space-y-6">
                  {exhibition.artifacts.map((artifact, index) => (
                    <div key={index} className="museum-card p-6">
                      <h4 className="text-xl font-semibold mb-2">{artifact.name}</h4>
                      <p className="text-muted-foreground mb-3">{artifact.description}</p>
                      <div className="text-sm text-accent font-medium">
                        Significance: {artifact.significance}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="museum-card p-6 sticky top-24">
                  <h3 className="text-xl font-semibold mb-4">Exhibition Locations</h3>
                  <div className="space-y-2 mb-6">
                    {exhibition.locations.map((location, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <MapPin className="w-3 h-3 mr-2 text-museum-gold" />
                        {location}
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="museum" className="w-full mb-4">
                    Start Virtual Tour
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    Download Exhibition Guide
                  </Button>
                  
                  <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold mb-2">Visitor Information</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>Duration: 45-60 minutes</div>
                      <div>Audio Guide: Available</div>
                      <div>Interactive Elements: Yes</div>
                      <div>Accessibility: Full</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ExhibitionDetail;