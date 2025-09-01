import { Brain, ArrowLeft, CheckCircle, Target, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MentalHealth = () => {
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
              <Brain size={32} className="text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-8">
              Mental <span className="gradient-text">Health</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building emotional resilience, mindfulness, and cognitive well-being through accessible resources and support systems that nurture psychological wellness.
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
                Why Mental Health <span className="gradient-text">Matters</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Mental health is the foundation of overall well-being. It affects how we think, feel, and act in our daily lives. Strong mental health enables us to handle stress, relate to others, and make healthy choices.
              </p>
              <div className="space-y-4">
                {[
                  'Improved emotional regulation and resilience',
                  'Better decision-making and problem-solving abilities',
                  'Enhanced relationships and social connections',
                  'Increased productivity and life satisfaction'
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
                  <Brain size={80} className="text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Holistic Wellness</h3>
                  <p className="text-muted-foreground">Mind, body, and spirit in harmony</p>
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
              Our <span className="gradient-text">Approach</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We focus on evidence-based strategies and accessible resources to support mental wellness for everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Target size={24} />,
                title: 'Mindfulness & Meditation',
                description: 'Practices to increase awareness, reduce stress, and cultivate inner peace through guided meditation and mindfulness techniques.'
              },
              {
                icon: <Users size={24} />,
                title: 'Support Communities',
                description: 'Safe spaces for sharing experiences, building connections, and receiving peer support from others on similar journeys.'
              },
              {
                icon: <BookOpen size={24} />,
                title: 'Educational Resources',
                description: 'Comprehensive guides, tools, and workshops to build emotional intelligence and coping strategies.'
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

export default MentalHealth;