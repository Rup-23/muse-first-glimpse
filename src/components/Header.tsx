import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-museum-gold to-accent rounded-full"></div>
            <span className="text-xl font-playfair font-semibold">Artisan Museum</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#exhibitions" className="text-foreground hover:text-accent transition-colors">
              Exhibitions
            </a>
            <a href="#collections" className="text-foreground hover:text-accent transition-colors">
              Collections
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="#visit" className="text-foreground hover:text-accent transition-colors">
              Visit
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Search
            </Button>
            <Button variant="museum" size="sm">
              Virtual Tour
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;