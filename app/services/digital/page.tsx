'use client';

import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyContact } from '@/components/sticky-contact';
import { CheckCircle, ChevronRight } from 'lucide-react';

export default function DigitalServicePage() {
  const packages = [
    {
      name: 'Starter',
      price: '₹24,999',
      period: 'per month',
      description: 'Perfect for establishing online presence',
      features: [
        'Website maintenance',
        'Basic SEO optimization',
        'Social media management (2 platforms)',
        'Monthly newsletter',
        'Google Analytics setup',
        'Monthly reporting',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '₹64,999',
      period: 'per month',
      description: 'For growing digital presence',
      features: [
        'Complete website management',
        'Advanced SEO and SEM',
        'Social media (all platforms)',
        'Content marketing (8 posts/month)',
        'Email marketing automation',
        'PPC advertising management',
        'Weekly analytics & optimization',
        'Conversion rate optimization',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '₹129,999',
      period: 'per month',
      description: 'For complete digital transformation',
      features: [
        'Full digital ecosystem management',
        'Enterprise SEO strategy',
        'Multi-channel advertising',
        'Content production studio',
        'Marketing automation platform',
        'AI-powered analytics',
        'A/B testing and optimization',
        'Dedicated digital strategist',
        'Custom integrations & tools',
      ],
      popular: false,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      
      <StickyContact />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold opacity-90">Premium Service</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">A19 Digital Marketing</h1>
            <p className="text-xl text-gray-100 mb-8">
              End-to-end digital marketing services for modern businesses seeking growth and online dominance.
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
              Transform Your Digital Presence
            </h2>
            <p className="text-gray-600 mb-4">
              In today's digital-first world, having a strong online presence is non-negotiable. A19 Digital Marketing delivers comprehensive digital solutions that drive traffic, engagement, and conversions.
            </p>
            <p className="text-gray-600 mb-6">
              Our integrated approach combines SEO, social media, content marketing, and paid advertising to create a cohesive digital strategy that propels your business forward.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg p-8 flex items-center justify-center h-80">
            <div className="text-6xl">💻</div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">What We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Search engine optimization (SEO)',
              'Pay-per-click (PPC) advertising',
              'Social media marketing & management',
              'Content creation and marketing',
              'Email marketing automation',
              'Website design and development',
              'Marketing analytics and reporting',
              'Conversion rate optimization',
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
            Complete digital marketing solutions at every scale
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
                    const message = `I'm interested in the ${pkg.name} package of A19 Digital Marketing service. Please provide more details.`;
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
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Digital Success Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                client: 'E-Commerce Ventures',
                result: '300% increase in online sales',
                quote: 'A19 Digital transformed our online business completely.',
              },
              {
                client: 'Service Based Startup',
                result: '500+ monthly website visitors',
                quote: 'Professional digital marketing expertise. Excellent ROI!',
              },
              {
                client: 'Global Tech Corp',
                result: '1000+ qualified leads monthly',
                quote: 'Best digital marketing partner we could ask for.',
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Dominate Your Digital Space?</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
            Let our digital experts create a comprehensive strategy to grow your online presence.
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
