import { Target, ArrowLeft, CheckCircle, Compass, Star, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PurposeFulfillment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5"></div>
        <div className="container mx-auto px-6 md:px-8 relative">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 glass-card mx-auto">
              <Target size={32} className="text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-8">
              Purpose & <span className="gradient-text">Fulfillment</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Helping individuals discover meaning, engagement, and contribution through values-aligned activities that create lasting impact and personal satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Meaning & <span className="gradient-text">Impact</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Purpose gives our lives direction and meaning. When we align our actions with our deepest values and contribute to something greater than ourselves, we experience profound fulfillment and lasting happiness.
              </p>
              <div className="space-y-4">
                {[
                  'Greater sense of meaning and direction in life',
                  'Increased motivation and engagement in daily activities',
                  'Enhanced resilience during challenging times',
                  'Deeper satisfaction from contributing to others'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl glass-card p-8 flex items-center justify-center">
                <div className="text-center">
                  <Target size={80} className="text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Purposeful Living</h3>
                  <p className="text-muted-foreground">Meaning, impact, and fulfillment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Guiding individuals to discover their unique purpose and create meaningful impact in their communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Compass size={24} />,
                title: 'Values Discovery',
                description: 'Guided exploration to help identify core values, passions, and strengths that form the foundation of purposeful living.'
              },
              {
                icon: <Star size={24} />,
                title: 'Goal Alignment',
                description: 'Strategic planning to align personal and professional goals with deeper purpose and values for authentic success.'
              },
              {
                icon: <Rocket size={24} />,
                title: 'Impact Creation',
                description: 'Opportunities to contribute meaningfully to causes and communities that resonate with individual passions and skills.'
              }
            ].map((area, index) => (
              <div key={index} className="pillar-card p-8">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 glass-card">
                  <div className="text-primary">{area.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-4">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PurposeFulfillment;