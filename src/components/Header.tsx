
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
        <a href="/" className="text-2xl font-display font-bold tracking-tight text-foreground">
          thehappinessorg
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#mission" className="nav-link py-2">Mission</a>
          <a href="#pillars" className="nav-link py-2">Pillars</a>
          <a href="#join" className="nav-link py-2">Join Us</a>
        </nav>
        
        <div className="flex items-center space-x-2">
          <a 
            href="#join" 
            className="hidden md:inline-flex relative overflow-hidden px-6 py-2.5 rounded-full font-medium text-white bg-amber-500 transition-all duration-300 hover:bg-amber-600"
          >
            <span className="relative z-10">Get Involved</span>
          </a>
          
          <button className="md:hidden p-2 rounded-md text-gray-600 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
