
import { useRef, useState, useEffect } from 'react';

const MissionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="mission" className="py-20 md:py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-accent/15"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div 
          ref={sectionRef}
          className={`max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="order-2 lg:order-1">
            <span className="inline-block px-6 py-2 mb-8 text-sm font-semibold glass-card rounded-full">
              Our Vision
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight mb-8">
              To give <span className="gradient-text">1 million people</span> the tools, support, and systems to live happier, more fulfilling lives.
            </h2>
            <p className="text-xl text-muted-foreground mb-10 glass-card p-6 rounded-2xl leading-relaxed">
              We believe that happiness is not a luxury but a fundamental human need. Through strategic investments, research, and community initiatives, we're working to create lasting positive impact on individual lives and society as a whole.
            </p>
            
            <div className="space-y-8 glass-card p-8 rounded-3xl">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Measurable impact</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">We use data-driven approaches to track and maximize our impact on happiness metrics.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Sustainable change</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">We focus on creating long-term, sustainable improvements rather than temporary fixes.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Inclusive approach</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">We design programs and investments that benefit diverse populations across socioeconomic backgrounds.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square max-w-lg mx-auto overflow-hidden rounded-3xl glass-card">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
              <div className="w-full h-full bg-gradient-to-br from-primary/10 via-accent/5 to-primary/15 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🎯</div>
                  <div className="text-2xl font-bold text-foreground">Our Mission</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-6 -bottom-6 w-48 h-48 glass-card rounded-3xl p-6 flex flex-col justify-center items-center animate-float">
              <div className="text-5xl font-black gradient-text">1M+</div>
              <div className="text-sm text-muted-foreground text-center mt-2">Lives we aim to impact by 2035</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
