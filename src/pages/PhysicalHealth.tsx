import { Heart, ArrowLeft, CheckCircle, Activity, Apple, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PhysicalHealth = () => {
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
              <Heart size={32} className="text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-8">
              Physical <span className="gradient-text">Health</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Promoting habits that nurture the body through movement, nutrition, rest, and preventive health practices for optimal vitality.
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
                Foundation of <span className="gradient-text">Vitality</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Physical health is the cornerstone of a fulfilling life. When our bodies are strong and healthy, we have the energy and capacity to pursue our goals and enjoy life to the fullest.
              </p>
              <div className="space-y-4">
                {[
                  'Increased energy levels and stamina',
                  'Better immune system function and disease prevention',
                  'Improved mood and cognitive performance',
                  'Enhanced longevity and quality of life'
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
                  <Heart size={80} className="text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Body Wellness</h3>
                  <p className="text-muted-foreground">Strength, vitality, and longevity</p>
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
              Our <span className="gradient-text">Framework</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive approach to physical wellness that addresses movement, nutrition, and recovery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Activity size={24} />,
                title: 'Movement & Exercise',
                description: 'Regular physical activity programs designed to build strength, endurance, and flexibility while being accessible to all fitness levels.'
              },
              {
                icon: <Apple size={24} />,
                title: 'Nutrition & Wellness',
                description: 'Evidence-based nutrition guidance and meal planning to fuel your body optimally for sustained energy and health.'
              },
              {
                icon: <Moon size={24} />,
                title: 'Rest & Recovery',
                description: 'Sleep hygiene practices and recovery strategies to help your body repair, regenerate, and maintain peak performance.'
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

export default PhysicalHealth;