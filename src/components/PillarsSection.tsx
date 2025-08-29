
import { useEffect, useRef, useState } from 'react';
import { Brain, Heart, Coins, Users, Target } from 'lucide-react';

interface PillarCardProps {
  title: string;
  description: string;
  color: string;
  icon: JSX.Element;
  delay: number;
}

const PillarCard = ({ title, description, color, icon, delay }: PillarCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={`pillar-card p-8 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 pillar-icon glass-card">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
      <div className="absolute bottom-0 left-0 h-1 w-full rounded-full" style={{ background: 'var(--gradient-primary)' }}></div>
    </div>
  );
};

const PillarsSection = () => {
  const pillars = [
    {
      title: "Mental Health",
      description: "Building emotional resilience, mindfulness, and cognitive well-being through accessible resources and support.",
      color: "#9EB8D9",
      icon: <Brain size={24} />,
    },
    {
      title: "Physical Health",
      description: "Promoting habits that nurture the body through movement, nutrition, rest, and preventive health practices.",
      color: "#88D18A",
      icon: <Heart size={24} />,
    },
    {
      title: "Financial Stability",
      description: "Creating security through income sufficiency, money management skills, and economic opportunity.",
      color: "#F7DD72",
      icon: <Coins size={24} />,
    },
    {
      title: "Belonging & Community",
      description: "Fostering meaningful relationships and social connections that provide support, understanding, and acceptance.",
      color: "#F4B393",
      icon: <Users size={24} />,
    },
    {
      title: "Purpose & Fulfillment",
      description: "Helping individuals discover meaning, engagement, and contribution through values-aligned activities.",
      color: "#C38D9E",
      icon: <Target size={24} />,
    },
  ];

  return (
    <section id="pillars" className="py-20 md:py-32 section-bg relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5"></div>
      <div className="container mx-auto px-6 md:px-8 relative">
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32">
          <span className="inline-block px-6 py-2 mb-8 text-sm font-semibold glass-card rounded-full">
            The 5 Pillars of Happiness
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight mb-8">
            A holistic approach to <span className="gradient-text">well-being</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We've identified five interconnected pillars that form the foundation of sustained happiness and life satisfaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={pillar.title}
              title={pillar.title}
              description={pillar.description}
              color={pillar.color}
              icon={pillar.icon}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
