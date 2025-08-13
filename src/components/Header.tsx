import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-museum-gold to-accent rounded-full"></div>
            <span className="text-xl font-playfair font-semibold">Bharat Stories</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#exhibitions" className="text-foreground hover:text-accent transition-colors">
              Collections
            </a>
            <a href="#regions" className="text-foreground hover:text-accent transition-colors">
              Regions
            </a>
            <a href="#voices" className="text-foreground hover:text-accent transition-colors">
              Untold Stories
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">
              Heritage
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Search Stories
            </Button>
            <Button variant="museum" size="sm">
              Begin Journey
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;