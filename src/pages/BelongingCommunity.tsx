import { Users, ArrowLeft, CheckCircle, Heart, Globe, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BelongingCommunity = () => {
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
              <Users size={32} className="text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-8">
              Belonging & <span className="gradient-text">Community</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Fostering meaningful relationships and social connections that provide support, understanding, and acceptance in our shared human experience.
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
                Connection & <span className="gradient-text">Belonging</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Humans are inherently social beings. Our sense of belonging and connection to others is fundamental to our happiness and well-being. Strong communities provide the support system we need to thrive.
              </p>
              <div className="space-y-4">
                {[
                  'Reduced feelings of loneliness and isolation',
                  'Enhanced emotional support and resilience',
                  'Opportunities for shared experiences and growth',
                  'Increased sense of purpose through helping others'
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
                  <Users size={80} className="text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Social Wellness</h3>
                  <p className="text-muted-foreground">Connection, support, and shared growth</p>
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
              Our <span className="gradient-text">Vision</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Building inclusive communities where everyone feels valued, heard, and supported in their journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Heart size={24} />,
                title: 'Meaningful Relationships',
                description: 'Facilitating deep, authentic connections through shared interests, values, and experiences that foster lasting bonds.'
              },
              {
                icon: <Globe size={24} />,
                title: 'Inclusive Communities',
                description: 'Creating spaces where diversity is celebrated and everyone feels welcome, regardless of background or circumstances.'
              },
              {
                icon: <MessageCircle size={24} />,
                title: 'Support Networks',
                description: 'Peer-to-peer support systems and mentorship programs that provide guidance during both challenges and celebrations.'
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

export default BelongingCommunity;