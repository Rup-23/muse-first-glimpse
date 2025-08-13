const Footer = () => {
  return (
    <footer className="bg-museum-blue text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-museum-gold to-accent rounded-full"></div>
              <span className="text-xl font-playfair font-semibold">Artisan Museum</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Discover the world's greatest art collections through immersive digital experiences that bring culture to life.
            </p>
          </div>
          
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Explore</h3>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-museum-gold transition-colors">Virtual Tours</a></li>
              <li><a href="#" className="hover:text-museum-gold transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-museum-gold transition-colors">Exhibitions</a></li>
              <li><a href="#" className="hover:text-museum-gold transition-colors">Educational Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-museum-gold transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-museum-gold transition-colors">Partner Museums</a></li>
              <li><a href="#" className="hover:text-museum-gold transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-museum-gold transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-museum-gold transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-museum-gold transition-colors">Social Media</a></li>
              <li><a href="#" className="hover:text-museum-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-museum-gold transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 Artisan Digital Museum. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-museum-gold transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-museum-gold transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-museum-gold transition-colors text-sm">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;