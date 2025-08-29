
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden section-bg min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/30"></div>
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-700 delay-300 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="inline-block px-6 py-2 mb-8 text-sm font-semibold glass-card rounded-full animate-fade-in">
              Our mission: 1 million happier people by 2035
            </span>
          </div>
          
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight mb-8 transition-all duration-700 delay-500 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Creating a world of <br className="hidden md:block" />
            <span className="gradient-text">happiness</span> and fulfillment
          </h1>
          
          <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 transition-all duration-700 delay-700 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            We build and invest in people, communities, and organizations that align with our mission to make 1 million people measurably happier by 2035.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-700 delay-900 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <a href="#pillars" className="w-full sm:w-auto happiness-button text-foreground">
              <span>Discover Our Approach</span>
            </a>
            <a href="#join" className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-primary-foreground transition-all duration-500 hover:scale-105" style={{ background: 'var(--gradient-primary)', boxShadow: 'var(--glow-primary)' }}>
              Join Our Mission
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
