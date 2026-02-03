'use client';

import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyContact } from '@/components/sticky-contact';
import { CheckCircle, ChevronRight } from 'lucide-react';

export default function CampaignServicePage() {
  const packages = [
    {
      name: 'Growth',
      price: '₹39,999',
      period: 'per month',
      description: 'For startups and small businesses',
      features: [
        'Campaign strategy development',
        'Creative content production',
        'Multi-channel distribution',
        'Performance tracking',
        'Monthly optimization',
        'Social media integration',
      ],
      popular: false,
    },
    {
      name: 'Accelerate',
      price: '₹79,999',
      period: 'per month',
      description: 'For growing businesses',
      features: [
        'Advanced campaign strategy',
        'Premium creative content',
        'Omnichannel marketing',
        'Real-time analytics',
        'Weekly optimization',
        'Influencer partnerships',
        'A/B testing and analysis',
        'Conversion optimization',
      ],
      popular: true,
    },
    {
      name: 'Dominate',
      price: '₹129,999',
      period: 'per month',
      description: 'For large enterprises',
      features: [
        'Full-service campaign management',
        'Production studio access',
        'All distribution channels',
        'Advanced AI analytics',
        'Daily optimization',
        'Brand ambassador program',
        'Crisis management',
        'Market research & insights',
        'Dedicated strategy team',
      ],
      popular: false,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      
      <StickyContact />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold opacity-90">Premium Service</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">A19 Campaign</h1>
            <p className="text-xl text-gray-100 mb-8">
              Innovative and targeted marketing campaigns designed for maximum brand impact and ROI.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:shadow-lg transition-all"
            >
              Enquire Now
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Strategic Campaigns That Deliver Results
            </h2>
            <p className="text-gray-600 mb-4">
              In the competitive business landscape, generic marketing doesn't cut it. A19 Campaign creates customized, data-driven marketing campaigns that resonate with your target audience and drive measurable results.
            </p>
            <p className="text-gray-600 mb-6">
              From strategy to execution, we leverage creativity, technology, and market insights to amplify your brand voice and achieve your business objectives.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg p-8 flex items-center justify-center h-80">
            <div className="text-6xl">📢</div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">What We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Market research and competitive analysis',
              'Campaign strategy and positioning',
              'Creative content development',
              'Multi-channel campaign execution',
              'Paid advertising management',
              'Social media campaign integration',
              'Influencer and partner collaborations',
              'Performance analytics and reporting',
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Pricing Packages</h2>
          <p className="text-lg text-gray-600">
            Scalable solutions for campaigns of any size
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                pkg.popular
                  ? 'ring-2 ring-accent shadow-2xl scale-105'
                  : 'border border-gray-200 hover:shadow-lg'
              } bg-white`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-accent text-primary px-4 py-1 text-sm font-bold rounded-bl-lg">
                  POPULAR
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{pkg.description}</p>

                <div className="mb-8">
                  <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                  <span className="text-gray-600 ml-2">{pkg.period}</span>
                </div>

                <button
                  onClick={() => {
                    const message = `I'm interested in the ${pkg.name} package of A19 Campaign service. Please provide more details.`;
                    window.open(
                      `https://wa.me/919876543210?text=${encodeURIComponent(message)}`,
                      '_blank'
                    );
                  }}
                  className={`w-full px-6 py-3 font-bold rounded-lg transition-all duration-200 mb-8 ${
                    pkg.popular
                      ? 'bg-accent text-primary hover:shadow-lg'
                      : 'bg-gray-100 text-foreground hover:bg-gray-200'
                  }`}
                >
                  {pkg.popular ? 'Choose Package' : 'Learn More'}
                </button>

                <div className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Campaign Success Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                client: 'TechStart India',
                result: '350% increase in brand awareness',
                quote: 'The campaign strategy was brilliant. ROI exceeded expectations!',
              },
              {
                client: 'Wellness Plus',
                result: '10,000+ qualified leads generated',
                quote: 'A19 Campaign understands our market perfectly.',
              },
              {
                client: 'Fashion Forward',
                result: '₹5 crore in sales in 60 days',
                quote: 'Best marketing investment we made. Highly professional!',
              },
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
                <p className="text-accent font-semibold text-lg mb-2">{story.result}</p>
                <p className="text-foreground font-bold mb-4">{story.client}</p>
                <p className="text-gray-600 italic">"{story.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 md:p-16 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Launch Your Next Big Campaign</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
            Our experts are ready to create a campaign that drives real results for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:shadow-2xl transition-all duration-200 hover:scale-105"
          >
            Get Started Today
            <ChevronRight size={20} />
          </Link>
        </div>
      </section>

      
    </main>
  );
}
