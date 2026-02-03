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
  <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
    <StickyContact />

    {/* HERO */}
    <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-28">
      <div className="max-w-7xl mx-auto px-6 max-w-4xl">
        <p className="uppercase tracking-[6px] text-accent text-sm mb-4">
          Complete Digital Marketing Services
        </p>
        <h1 className="text-6xl font-extrabold mb-6">A19 Digital Marketing</h1>
        <p className="text-lg text-gray-200 leading-relaxed">
          We handle end-to-end digital marketing for businesses, brands,
          institutions, and leaders — from social media to ads, SEO to content —
          everything except website development.
        </p>
      </div>
    </section>

    {/* OVERVIEW */}
    <section className="py-24 max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">Build Strong Online Presence & Generate Leads</h2>
      <p className="text-gray-600 text-lg leading-relaxed">
        A19 Digital Marketing focuses on visibility, engagement, and conversion.
        We use strategic content, ads, SEO, and analytics to help brands reach
        the right audience and grow consistently.
      </p>
    </section>

    {/* SERVICES */}
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-10">What We Handle</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Search Engine Optimization (SEO)",
            "Google Ads & Pay-Per-Click Campaigns",
            "Facebook & Instagram Advertising",
            "YouTube Video Promotions",
            "Social Media Account Management",
            "Daily Post & Creative Content Design",
            "Reels, Posters, and Video Editing",
            "Content Marketing & Branding",
            "Performance Analytics & Reporting",
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
              <CheckCircle className="text-accent mb-3" />
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* SOCIAL MEDIA HANDLING */}
    <section className="py-24 max-w-7xl mx-auto px-6">
      <h3 className="text-3xl font-bold mb-4">Complete Social Media Handling</h3>
      <p className="text-gray-600 mb-10">
        We manage your social platforms daily to ensure continuous engagement
        and professional brand presence.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          "Facebook page management",
          "Instagram business management",
          "Twitter / X handling",
          "YouTube channel management",
          "Post scheduling and engagement replies",
          "Follower growth strategy",
        ].map((item, i) => (
          <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <CheckCircle className="text-accent mb-3" />
            {item}
          </div>
        ))}
      </div>
    </section>

    {/* WHO IT IS FOR */}
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-10">Who This Is For</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Businesses & Startups",
            "Real Estate Companies",
            "Educational Institutions",
            "Hospitals & Clinics",
            "Political Leaders",
            "Personal Brands & Influencers",
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow border">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* IMPACT */}
    <section className="py-24 max-w-7xl mx-auto px-6 text-center">
      <h3 className="text-3xl font-bold mb-10">Our Digital Impact</h3>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          ["500+ Ad Campaigns Managed", "Across multiple industries"],
          ["Daily Social Media Management", "For active brands and leaders"],
          ["Consistent Lead Generation", "Through targeted digital ads"],
        ].map((item, i) => (
          <div key={i} className="bg-white p-10 rounded-xl shadow border">
            <h4 className="text-2xl font-bold text-accent mb-2">{item[0]}</h4>
            <p className="text-gray-600">{item[1]}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-3xl p-14">
          <h2 className="text-4xl font-bold mb-6">
            Need Strong Digital Presence for Your Brand?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-accent text-primary font-bold rounded-xl"
          >
            Contact Digital Team
            <ChevronRight />
          </Link>
        </div>
      </div>
    </section>


  </main>
);

}
