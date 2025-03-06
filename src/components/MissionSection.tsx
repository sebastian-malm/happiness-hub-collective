
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
    <section id="mission" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div 
          ref={sectionRef}
          className={`max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Our Vision
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">
              A world where happiness is accessible to all
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We believe that happiness is not a luxury but a fundamental human need. Through strategic investments, research, and community initiatives, we're working to create lasting positive impact on individual lives and society as a whole.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-happiness-purpose/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Measurable impact</h3>
                  <p className="text-gray-600">We use data-driven approaches to track and maximize our impact on happiness metrics.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-happiness-physical/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sustainable change</h3>
                  <p className="text-gray-600">We focus on creating long-term, sustainable improvements rather than temporary fixes.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-happiness-community/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Inclusive approach</h3>
                  <p className="text-gray-600">We design programs and investments that benefit diverse populations across socioeconomic backgrounds.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-happiness-mental/30 to-happiness-purpose/30 mix-blend-multiply"></div>
              <img 
                src="https://images.unsplash.com/photo-1531686264889-56fdcabd163f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="People celebrating together" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            <div className="absolute -right-4 -bottom-4 w-40 h-40 bg-white rounded-xl shadow-lg p-4 flex flex-col justify-center items-center animate-float">
              <div className="text-4xl font-bold text-primary">1M+</div>
              <div className="text-sm text-gray-600 text-center">Lives we aim to impact by 2033</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
