'use client';

import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyContact } from '@/components/sticky-contact';
import { CheckCircle, ChevronRight } from 'lucide-react';

export default function NewsServicePage() {
  const packages = [
    {
      name: 'Starter',
      price: '₹29,999',
      period: 'per month',
      description: 'Perfect for small healthcare facilities',
      features: [
        'Press release distribution',
        '2 news articles per month',
        'Basic social media promotion',
        'Email newsletter',
        'Monthly reporting',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '₹59,999',
      period: 'per month',
      description: 'Ideal for mid-size hospitals',
      features: [
        'Unlimited press releases',
        '8 news articles per month',
        'Advanced social media management',
        'Weekly newsletters',
        'Bi-weekly reporting',
        'Crisis communication support',
        'Media relationship management',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '₹99,999',
      period: 'per month',
      description: 'For large hospital chains',
      features: [
        'Unlimited press releases',
        'Unlimited news articles',
        'Complete social media management',
        'Daily newsletters',
        'Real-time analytics',
        'Dedicated account manager',
        'Crisis communication hotline',
        'Video content production',
        'Podcast development',
      ],
      popular: false,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
     
      <StickyContact />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold opacity-90">Premium Service</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">A19 News</h1>
            <p className="text-xl text-gray-100 mb-8">
              Healthcare Marketing Excellence - Comprehensive news coverage and media relations for hospitals and healthcare providers.
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
              Elevate Your Healthcare Brand
            </h2>
            <p className="text-gray-600 mb-4">
              In today's competitive healthcare market, media presence and patient trust are paramount. A19 News provides comprehensive news coverage and media relations solutions specifically designed for hospitals and healthcare institutions.
            </p>
            <p className="text-gray-600 mb-6">
              Our expert team manages your healthcare narrative, builds credibility, and ensures your message reaches the right audience at the right time.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-8 flex items-center justify-center h-80">
            <div className="text-6xl">📰</div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">What We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Press release distribution to 100+ media outlets',
              'Healthcare news article writing and publication',
              'Media interview coaching and representation',
              'Social media content creation and scheduling',
              'Monthly performance analytics and reporting',
              'Crisis communication and reputation management',
              'Industry event coverage and promotion',
              'Patient testimonial stories and features',
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
            Choose the perfect plan for your healthcare organization
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
                    const message = `I'm interested in the ${pkg.name} package of A19 News service. Please provide more details.`;
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
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Client Success Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                hospital: 'City Medical Center',
                result: '150% increase in patient inquiries',
                quote: 'A19 News transformed our media presence and patient trust.',
              },
              {
                hospital: 'Regional Healthcare Group',
                result: '200+ media mentions in 6 months',
                quote: 'Professional and results-driven team. Highly recommended!',
              },
              {
                hospital: 'Apollo Health Systems',
                result: '85% social media engagement increase',
                quote: 'Exceptional content and strategic approach to healthcare marketing.',
              },
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
                <p className="text-accent font-semibold text-lg mb-2">{story.result}</p>
                <p className="text-foreground font-bold mb-4">{story.hospital}</p>
                <p className="text-gray-600 italic">"{story.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 md:p-16 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Enhance Your Healthcare Brand?</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
            Contact our team today for a personalized consultation and pricing quote.
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
