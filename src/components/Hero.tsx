
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-happiness-mental/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-happiness-purpose/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-700 delay-300 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
              Our mission: 1 million happier people by 2035
            </span>
          </div>
          
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 transition-all duration-700 delay-500 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Creating a world of <br className="hidden md:block" />
            <span className="text-amber-500">happiness</span> and fulfillment
          </h1>
          
          <p className={`text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 transition-all duration-700 delay-700 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            We build and invest in people, communities, and organizations that align with our mission to make 1 million people measurably happier by 2035.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-900 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <a href="#pillars" className="w-full sm:w-auto happiness-button border border-amber-500 text-amber-500">
              <span>Discover Our Approach</span>
            </a>
            <a href="#join" className="w-full sm:w-auto px-6 py-3 rounded-full font-medium bg-amber-500 text-white hover:bg-amber-600 transition-colors duration-300">
              Join Our Mission
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
