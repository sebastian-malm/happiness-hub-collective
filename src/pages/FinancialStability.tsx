import { Coins, ArrowLeft, CheckCircle, TrendingUp, Shield, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FinancialStability = () => {
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
              <Coins size={32} className="text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-8">
              Financial <span className="gradient-text">Stability</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Creating security through income sufficiency, money management skills, and economic opportunity for lasting peace of mind.
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
                Security & <span className="gradient-text">Freedom</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Financial stability provides the foundation for pursuing our dreams and weathering life's challenges. It's not just about wealth—it's about having enough to feel secure and free to make choices based on our values.
              </p>
              <div className="space-y-4">
                {[
                  'Reduced stress and anxiety about money matters',
                  'Freedom to make life choices without financial constraints',
                  'Ability to plan for the future and achieve goals',
                  'Capacity to help others and contribute to communities'
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
                  <Coins size={80} className="text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Economic Wellness</h3>
                  <p className="text-muted-foreground">Security, growth, and opportunity</p>
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
              Our <span className="gradient-text">Strategy</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Building financial resilience through education, skill development, and strategic planning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <TrendingUp size={24} />,
                title: 'Financial Literacy',
                description: 'Comprehensive education on budgeting, investing, and money management to build confidence in financial decisions.'
              },
              {
                icon: <Shield size={24} />,
                title: 'Security Planning',
                description: 'Emergency fund strategies, insurance guidance, and retirement planning to protect against financial uncertainties.'
              },
              {
                icon: <Lightbulb size={24} />,
                title: 'Opportunity Creation',
                description: 'Skill development programs and entrepreneurship support to increase earning potential and career advancement.'
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

export default FinancialStability;