import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MapPin, BookOpen, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ancientArt from "@/assets/ancient-art.jpg";
import modernArt from "@/assets/modern-art.jpg";
import egyptianArt from "@/assets/egyptian-art.jpg";

const voices = {
  "forgotten-warriors": {
    id: 1,
    category: "Forgotten Warriors",
    title: "The Brave Hearts History Forgot",
    description: "Stories of courage from unsung heroes who shaped India's destiny",
    icon: "⚔️",
    image: ancientArt,
    overview: "Throughout Indian history, countless warriors have fought bravely for their people, their principles, and their land. Many of these heroes remain unknown to the general public, their stories overshadowed by more famous figures. Yet their courage and sacrifice were no less significant.",
    featured_stories: [
      {
        name: "Rani Chennamma of Kittur",
        period: "1778-1829",
        region: "Karnataka",
        story: "One of the first Indian rulers to resist British colonial rule, predating the 1857 rebellion by decades. She led an armed rebellion against the British East India Company's Doctrine of Lapse.",
        achievement: "First woman ruler to take up arms against British rule",
        legacy: "Inspired later freedom fighters and is remembered as a pioneer of resistance"
      },
      {
        name: "Birsa Munda",
        period: "1875-1900",
        region: "Jharkhand",
        story: "A tribal leader who mobilized the Munda and Oraon communities against British colonial policies and exploitative practices of landlords. He declared himself as Bhagwan (God) and led a major uprising.",
        achievement: "Led the Munda Rebellion and established Munda Raj",
        legacy: "Jharkhand state was created on his birth anniversary, honoring his memory"
      },
      {
        name: "Thalakkal Chanthu",
        period: "1751-1808",
        region: "Kerala",
        story: "A Thiyya warrior from Malabar who fought against Tipu Sultan's forces. Known for his guerrilla warfare tactics and loyalty to his homeland, he became a legendary figure in Malabar folklore.",
        achievement: "Successful guerrilla warfare against much larger armies",
        legacy: "Folk songs and ballads still celebrate his bravery in Kerala"
      }
    ]
  },
  "women-pioneers": {
    id: 2,
    category: "Women Pioneers",
    title: "She Who Dared Before Her Time",
    description: "Remarkable women who broke barriers centuries before feminism",
    icon: "👑",
    image: modernArt,
    overview: "Long before the modern feminist movement, India had remarkable women who challenged social norms, led armies, ruled kingdoms, and contributed to philosophy and arts. Their stories show that female empowerment has deep roots in Indian culture.",
    featured_stories: [
      {
        name: "Gargi Vachaknavi",
        period: "8th-7th century BCE",
        region: "Ancient India",
        story: "A revered Vedic philosopher who participated in the famous brahmayajna (philosophical debate) at King Janaka's court. She challenged even the great sage Yajnavalkya with her penetrating questions about the nature of reality.",
        achievement: "One of the greatest female philosophers in ancient India",
        legacy: "Her philosophical inquiries are recorded in the Brihadaranyaka Upanishad"
      },
      {
        name: "Razia Sultana",
        period: "1205-1240 CE",
        region: "Delhi Sultanate",
        story: "The first and only female ruler of the Delhi Sultanate, she ruled for four years with wisdom and courage. She discarded the veil, wore male attire, and led her army into battle personally.",
        achievement: "First woman to rule Delhi Sultanate with full sovereign powers",
        legacy: "Remembered as a capable ruler who prioritized merit over gender or religion"
      },
      {
        name: "Ahilyabai Holkar",
        period: "1725-1795 CE",
        region: "Malwa, Central India",
        story: "Ruler of the Holkar dynasty who governed for 30 years with remarkable wisdom and compassion. She built temples, roads, and wells across India, and her administration was known for its justice and efficiency.",
        achievement: "Transformed Malwa into a prosperous and well-administered state",
        legacy: "Indore airport and many institutions are named after her"
      }
    ]
  },
  "master-craftspeople": {
    id: 3,
    category: "Master Craftspeople",
    title: "Hands That Created Wonders",
    description: "Artisan families who perfected crafts over generations",
    icon: "🎨",
    image: egyptianArt,
    overview: "India's incredible artistic heritage is built on the shoulders of countless master craftspeople who perfected their arts over generations. These artisans created works of breathtaking beauty while preserving ancient techniques and cultural traditions.",
    featured_stories: [
      {
        name: "Weavers of Kanjeevaram",
        period: "400 CE - Present",
        region: "Tamil Nadu",
        story: "The silk weavers of Kanchipuram have been creating some of the world's finest silk saris for over 1500 years. Their intricate designs, use of pure gold thread, and mathematical precision in patterns make each sari a masterpiece.",
        achievement: "Created textiles so fine they were coveted by royalty across India",
        legacy: "Kanjeevaram silk is now protected with geographical indication status"
      },
      {
        name: "Bronze Masters of Swamimalai",
        period: "1000 CE - Present",
        region: "Tamil Nadu",
        story: "The bronze casters of Swamimalai have preserved the ancient lost-wax technique (madhuchista vidhana) for over a thousand years. They create exquisite bronze sculptures of deities following precise iconographic rules.",
        achievement: "Maintained unbroken tradition of bronze casting for over a millennium",
        legacy: "Their bronzes are displayed in museums worldwide and continue temple traditions"
      },
      {
        name: "Stone Carvers of Khajuraho",
        period: "950-1050 CE",
        region: "Madhya Pradesh",
        story: "The master sculptors who created the Khajuraho temples achieved a level of artistic excellence that remains unmatched. Their carvings capture human emotions, divine stories, and everyday life with incredible detail and sensitivity.",
        achievement: "Created UNESCO World Heritage site with unparalleled sculptural beauty",
        legacy: "Influenced temple architecture across India and inspired artists for centuries"
      }
    ]
  }
};

const VoiceDetail = () => {
  const { id } = useParams();
  const voice = voices[id as keyof typeof voices];

  if (!voice) {
    return <div>Voice not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img 
            src={voice.image} 
            alt={voice.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-museum-blue/90 via-museum-blue/50 to-transparent" />
          
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-12">
              <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Voices
              </Link>
              
              <div className="text-white max-w-4xl">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{voice.icon}</span>
                  <div className="inline-block bg-museum-gold/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {voice.category}
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
                  {voice.title}
                </h1>
                <p className="text-xl mb-6 max-w-2xl">
                  {voice.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="museum-section">
          <div className="container mx-auto">
            
            {/* Overview */}
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-playfair font-bold mb-6 text-center">About These Voices</h2>
              <p className="text-muted-foreground text-lg leading-relaxed text-center">
                {voice.overview}
              </p>
            </div>

            {/* Featured Stories */}
            <div className="space-y-16">
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">Featured Stories</h2>
              
              {voice.featured_stories.map((story, index) => (
                <div key={index} className="grid lg:grid-cols-3 gap-8 items-start">
                  
                  {/* Story Image Placeholder */}
                  <div className="lg:col-span-1">
                    <div className="museum-card p-8 text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-museum-gold to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">{story.name.split(' ')[0][0]}</span>
                      </div>
                      <h3 className="text-xl font-playfair font-semibold mb-2">{story.name}</h3>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center justify-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {story.period}
                        </div>
                        <div className="flex items-center justify-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {story.region}
                        </div>
                      </div>
                      
                      <div className="mt-4 p-3 bg-museum-gold/10 rounded-lg">
                        <div className="flex items-center justify-center mb-1">
                          <Award className="w-4 h-4 mr-1 text-museum-gold" />
                          <span className="text-xs font-semibold">Key Achievement</span>
                        </div>
                        <p className="text-xs text-center">{story.achievement}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Story Content */}
                  <div className="lg:col-span-2">
                    <div className="museum-card p-8">
                      <div className="flex items-center mb-4">
                        <BookOpen className="w-5 h-5 mr-2 text-accent" />
                        <span className="text-sm font-semibold text-accent">Their Story</span>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {story.story}
                      </p>
                      
                      <div className="border-t pt-6">
                        <h4 className="font-semibold mb-2 text-museum-gold">Legacy & Impact</h4>
                        <p className="text-sm text-muted-foreground">
                          {story.legacy}
                        </p>
                      </div>
                      
                      <div className="mt-6">
                        <Button variant="ghost" size="sm" className="text-accent hover:text-accent">
                          Learn More About {story.name} →
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Call to Action */}
            <div className="text-center mt-16 p-8 bg-muted/30 rounded-lg">
              <h3 className="text-2xl font-playfair font-semibold mb-4">Discover More Untold Stories</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                These are just a few of the thousands of remarkable individuals whose stories deserve to be told. 
                Explore our complete collection to uncover more hidden gems of Indian history.
              </p>
              <div className="space-x-4">
                <Button variant="museum">
                  Explore All {voice.category}
                </Button>
                <Button variant="outline">
                  Share These Stories
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default VoiceDetail;