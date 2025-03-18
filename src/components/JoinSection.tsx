
import { useRef, useState, useEffect } from 'react';
import HubspotForm from './HubspotForm';

const JoinSection = () => {
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
    <section id="join" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-100 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-50 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-8">
        <div 
          ref={sectionRef}
          className={`max-w-5xl mx-auto text-center transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-amber-100 text-amber-600 rounded-full">
            Join Our Movement
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
            Be part of our mission to create <span className="text-amber-500">1 million</span> happier lives
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Whether you're an individual looking to contribute, an organization seeking partnership, or an investor aligned with our mission, we welcome you to join us.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Volunteer</h3>
              <p className="text-gray-600 mb-6">Contribute your time, skills, and passion to our initiatives and community projects.</p>
              <a href="#" className="text-amber-500 font-medium hover:underline">Learn more →</a>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                  <path d="M12 2v20"></path>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Donate</h3>
              <p className="text-gray-600 mb-6">Support our work financially to help us expand our reach and impact more lives.</p>
              <a href="#" className="text-amber-500 font-medium hover:underline">Contribute →</a>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                  <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Partner</h3>
              <p className="text-gray-600 mb-6">Collaborate with us on projects or initiatives that align with our mission and values.</p>
              <a href="https://share.hsforms.com/1YvKOfJrNRG-ZGmnEVLKtZwtid60" target="_blank" rel="noopener noreferrer" className="text-amber-500 font-medium hover:underline">Get in touch →</a>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Join the community</h3>
              <p className="text-gray-600 mb-6">Connect with like-minded individuals and organizations dedicated to spreading happiness.</p>
              <a href="#" className="text-amber-500 font-medium hover:underline">Join now →</a>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 p-8 md:p-12">
            <h3 className="text-2xl font-semibold mb-6">Stay Connected</h3>
            <div className="flex flex-col items-center justify-center">
              <HubspotForm 
                portalId="49565736"
                formId="2d1a3833-3083-44ae-86e4-dee921ac03bd"
                isButton={true}
                buttonText="Join the newsletter"
                formUrl="https://share.hsforms.com/1IFvGm8AbRume7KaSe3gDlwtid60"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
