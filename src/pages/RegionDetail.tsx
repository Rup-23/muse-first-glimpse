import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar, Users, Camera } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ancientArt from "@/assets/ancient-art.jpg";
import modernArt from "@/assets/modern-art.jpg";
import egyptianArt from "@/assets/egyptian-art.jpg";

const regions = {
  "himalayan-heritage": {
    id: 1,
    name: "Himalayan Heritage",
    description: "Sacred monasteries, ancient trade routes, and mountain cultures of the world's highest peaks",
    image: ancientArt,
    fullDescription: "The Himalayan region of India represents one of the world's most unique cultural landscapes, where Buddhism, Hinduism, and ancient Bon traditions converge. This region has been shaped by centuries of trade along the Silk Route, creating a fascinating blend of Tibetan, Central Asian, and Indian influences.",
    geography: "Spanning across Ladakh, Himachal Pradesh, and parts of Uttarakhand, this region features some of the world's highest inhabited areas.",
    climate: "High-altitude desert and alpine conditions, with extreme seasonal variations",
    population: "Approximately 2.8 million people across various districts",
    languages: ["Ladakhi", "Tibetan", "Hindi", "Bhoti", "Kinnauri"],
    festivals: [
      {
        name: "Hemis Festival",
        description: "Celebrates the birth anniversary of Guru Padmasambhava",
        time: "June-July",
        significance: "Largest monastery festival in Ladakh"
      },
      {
        name: "Losar",
        description: "Tibetan New Year celebration",
        time: "February-March",
        significance: "Marks the beginning of the agricultural year"
      },
      {
        name: "Dosmoche",
        description: "Festival to ward off evil spirits",
        time: "February",
        significance: "Protection ceremony for the coming year"
      }
    ],
    traditions: [
      {
        name: "Monastic Education",
        description: "Ancient Buddhist learning system preserving texts and philosophy",
        importance: "Maintains unbroken lineage of Buddhist scholarship"
      },
      {
        name: "Thangka Painting",
        description: "Sacred scroll paintings depicting Buddhist deities and teachings",
        importance: "Visual meditation aid and artistic expression"
      },
      {
        name: "Traditional Medicine",
        description: "Sowa-Rigpa system of healing using herbs and minerals",
        importance: "Holistic healthcare adapted to high-altitude conditions"
      }
    ],
    heritage_sites: ["Hemis Monastery", "Thiksey Monastery", "Alchi Monastery", "Shey Palace", "Stok Palace"],
    cuisine: ["Thukpa", "Momos", "Chang", "Skyu", "Chhurpi"],
    crafts: ["Pashmina weaving", "Silver jewelry", "Wood carving", "Carpet weaving"]
  },
  "gangetic-plains": {
    id: 2,
    name: "Gangetic Plains",
    description: "Cradle of civilization where spirituality, learning, and culture flourished",
    image: modernArt,
    fullDescription: "The Gangetic Plains have been the heartland of Indian civilization for over 3,000 years. This fertile region has witnessed the birth of major religions, the rise and fall of empires, and the development of classical arts and sciences that continue to influence the world today.",
    geography: "Stretching from Punjab to Bengal, encompassing the fertile alluvial plains of the Ganges river system",
    climate: "Tropical and subtropical climate with monsoon rains supporting intensive agriculture",
    population: "Over 400 million people, making it one of the world's most densely populated regions",
    languages: ["Hindi", "Bengali", "Punjabi", "Urdu", "Bhojpuri", "Maithili"],
    festivals: [
      {
        name: "Kumbh Mela",
        description: "World's largest religious gathering",
        time: "Every 12 years",
        significance: "Sacred confluence of rivers for spiritual purification"
      },
      {
        name: "Dev Deepavali",
        description: "Festival of lights on the ghats of Varanasi",
        time: "November",
        significance: "Gods descend to earth to celebrate"
      },
      {
        name: "Sonepur Mela",
        description: "Asia's largest cattle fair",
        time: "November",
        significance: "Ancient trading tradition continues"
      }
    ],
    traditions: [
      {
        name: "Classical Music",
        description: "Hindustani classical music tradition with ragas and talas",
        importance: "Spiritual and artistic expression through sound"
      },
      {
        name: "Sanskrit Scholarship",
        description: "Centers of Vedic learning and philosophical discourse",
        importance: "Preservation of ancient knowledge systems"
      },
      {
        name: "Textile Arts",
        description: "Banarasi silk, Chanderi, and Chikankari embroidery",
        importance: "Economic and cultural identity of communities"
      }
    ],
    heritage_sites: ["Varanasi Ghats", "Nalanda University", "Bodh Gaya", "Sarnath", "Fatehpur Sikri"],
    cuisine: ["Dal-Baati-Churma", "Litti-Chokha", "Kachori", "Peda", "Rasgulla"],
    crafts: ["Silk weaving", "Brass work", "Stone carving", "Miniature painting"]
  },
  "western-deserts": {
    id: 3,
    name: "Western Deserts",
    description: "Royal grandeur, warrior traditions, and resilient communities of the Thar",
    image: egyptianArt,
    fullDescription: "The Western Desert region, dominated by the Thar Desert, is a land of incredible contrasts - from opulent palaces to stark desert landscapes, from warrior ballads to gentle folk songs. This region exemplifies human adaptation to harsh environments while maintaining rich cultural traditions.",
    geography: "Primarily covering Rajasthan and parts of Gujarat, characterized by the Thar Desert and Aravalli mountain range",
    climate: "Arid and semi-arid climate with extreme temperatures and minimal rainfall",
    population: "Approximately 68 million people with nomadic and settled communities",
    languages: ["Rajasthani", "Gujarati", "Hindi", "Marwari", "Mewari"],
    festivals: [
      {
        name: "Desert Festival",
        description: "Celebration of desert culture in Jaisalmer",
        time: "February",
        significance: "Showcases folk music, dance, and camel races"
      },
      {
        name: "Pushkar Fair",
        description: "Holy pilgrimage and camel trading fair",
        time: "November",
        significance: "Spiritual and commercial gathering"
      },
      {
        name: "Teej",
        description: "Monsoon festival celebrating marital bliss",
        time: "August",
        significance: "Women's festival with traditional songs and dances"
      }
    ],
    traditions: [
      {
        name: "Ballad Tradition",
        description: "Epic tales of heroes and romance sung by bards",
        importance: "Oral history and moral instruction"
      },
      {
        name: "Miniature Painting",
        description: "Intricate paintings depicting court life and mythology",
        importance: "Visual storytelling and artistic expression"
      },
      {
        name: "Water Conservation",
        description: "Traditional methods like baoris and johads",
        importance: "Survival technique in arid landscapes"
      }
    ],
    heritage_sites: ["Jaisalmer Fort", "Mehrangarh Fort", "City Palace Udaipur", "Hawa Mahal", "Dilwara Temples"],
    cuisine: ["Dal-Baati-Churma", "Gatte ki Sabzi", "Ker Sangri", "Ghevar", "Rabri"],
    crafts: ["Blue pottery", "Block printing", "Jewelry making", "Puppet making"]
  }
};

const RegionDetail = () => {
  const { id } = useParams();
  const region = regions[id as keyof typeof regions];

  if (!region) {
    return <div>Region not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img 
            src={region.image} 
            alt={region.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-museum-blue/90 via-museum-blue/50 to-transparent" />
          
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-12">
              <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Regions
              </Link>
              
              <div className="text-white max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
                  {region.name}
                </h1>
                <p className="text-xl mb-6 max-w-2xl">
                  {region.description}
                </p>
                
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {region.geography.split(',')[0]}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {region.population}
                  </div>
                  <div className="flex items-center">
                    <Camera className="w-4 h-4 mr-2" />
                    Virtual Tour Available
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
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                
                {/* About */}
                <div>
                  <h2 className="text-3xl font-playfair font-bold mb-6">About This Region</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {region.fullDescription}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="museum-card p-6">
                      <h3 className="font-semibold mb-3">Geography</h3>
                      <p className="text-sm text-muted-foreground">{region.geography}</p>
                    </div>
                    <div className="museum-card p-6">
                      <h3 className="font-semibold mb-3">Climate</h3>
                      <p className="text-sm text-muted-foreground">{region.climate}</p>
                    </div>
                  </div>
                </div>

                {/* Festivals */}
                <div>
                  <h3 className="text-2xl font-playfair font-semibold mb-6">Major Festivals</h3>
                  <div className="space-y-6">
                    {region.festivals.map((festival, index) => (
                      <div key={index} className="museum-card p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-xl font-semibold">{festival.name}</h4>
                          <div className="flex items-center text-sm text-accent">
                            <Calendar className="w-4 h-4 mr-1" />
                            {festival.time}
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-2">{festival.description}</p>
                        <div className="text-sm font-medium text-museum-gold">
                          {festival.significance}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Traditions */}
                <div>
                  <h3 className="text-2xl font-playfair font-semibold mb-6">Cultural Traditions</h3>
                  <div className="space-y-6">
                    {region.traditions.map((tradition, index) => (
                      <div key={index} className="museum-card p-6">
                        <h4 className="text-xl font-semibold mb-2">{tradition.name}</h4>
                        <p className="text-muted-foreground mb-3">{tradition.description}</p>
                        <div className="text-sm text-accent font-medium">
                          Cultural Importance: {tradition.importance}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="space-y-6">
                  
                  {/* Quick Facts */}
                  <div className="museum-card p-6 sticky top-24">
                    <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Languages Spoken</h4>
                        <div className="flex flex-wrap gap-1">
                          {region.languages.map((lang, index) => (
                            <span key={index} className="text-xs bg-muted px-2 py-1 rounded">
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Heritage Sites</h4>
                        <div className="space-y-1">
                          {region.heritage_sites.slice(0, 5).map((site, index) => (
                            <div key={index} className="text-sm flex items-center">
                              <div className="w-1 h-1 bg-museum-gold rounded-full mr-2" />
                              {site}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Traditional Cuisine</h4>
                        <div className="flex flex-wrap gap-1">
                          {region.cuisine.map((dish, index) => (
                            <span key={index} className="text-xs bg-museum-gold/10 px-2 py-1 rounded">
                              {dish}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Traditional Crafts</h4>
                        <div className="space-y-1">
                          {region.crafts.map((craft, index) => (
                            <div key={index} className="text-sm flex items-center">
                              <div className="w-1 h-1 bg-accent rounded-full mr-2" />
                              {craft}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 space-y-3">
                      <Button variant="museum" className="w-full">
                        Start Virtual Tour
                      </Button>
                      <Button variant="outline" className="w-full">
                        Download Guide
                      </Button>
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

export default RegionDetail;