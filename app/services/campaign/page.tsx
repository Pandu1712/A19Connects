'use client';

import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyContact } from '@/components/sticky-contact';
import { CheckCircle, ChevronRight } from 'lucide-react';
import Image from "next/image";

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
  <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
    <StickyContact />

    {/* HERO */}
    <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-28">
      <div className="max-w-7xl mx-auto px-6 max-w-4xl">
        <p className="uppercase tracking-[6px] text-accent text-sm mb-4">
          Election Campaign • Political Branding • Voter Survey Intelligence
        </p>
        <h1 className="text-6xl font-extrabold mb-6">A19 Campaign</h1>
        <p className="text-lg text-gray-200 leading-relaxed">
          We manage end-to-end election campaigns, political leader branding,
          digital promotion, ground activation, and scientific voter surveys
          to maximize public support and vote conversion.
        </p>
      </div>
    </section>

    {/* OVERVIEW */}
    <section className="py-24 max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">Complete Political Campaign Partner</h2>
      <p className="text-gray-600 text-lg leading-relaxed">
        A19 Campaign works with MLAs, MPs, Corporators, Party Leaders, and Independent
        candidates to build strong public image, execute booth-level strategies,
        and maintain continuous engagement with voters — both online and on ground.
      </p>
    </section>

    {/* ELECTION MANAGEMENT */}
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-4">Election Campaign Management</h3>
        <p className="text-gray-600 mb-10">
          Structured planning and execution from constituency level to booth level
          ensuring maximum voter reach and visibility.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Booth-wise campaign planning",
            "Poster, banner, flex & hoarding designs",
            "Rallies, meetings & event management",
            "Volunteer & cadre coordination",
            "WhatsApp voter communication",
            "LED vehicles & outdoor branding",
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border">
              <CheckCircle className="text-accent mb-3" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* DIGITAL & SOCIAL MEDIA */}
    <section className="py-24 max-w-7xl mx-auto px-6">
      <h3 className="text-3xl font-bold mb-4">Political Leader Digital Branding</h3>
      <p className="text-gray-600 mb-10">
        Continuous social media presence and leader image building to stay connected
        with the public every day.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          "Daily posts on Facebook, Instagram, Twitter, YouTube",
          "Speech videos, reels, and creative posters",
          "Festival, birthday & event creatives",
          "Follower growth & engagement strategy",
          "Political ad campaigns (Meta & Google)",
          "Reputation and sentiment management",
        ].map((item, i) => (
          <div key={i} className="bg-gray-50 p-6 rounded-xl border">
            <CheckCircle className="text-accent mb-3" />
            {item}
          </div>
        ))}
      </div>
    </section>

    {/* MEDIA PROMOTION */}
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-4">Media & News Promotion</h3>
        <p className="text-gray-600 mb-10">
          Strong media coordination to ensure leaders receive continuous news coverage
          and public visibility.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Press note writing and distribution",
            "News coverage through A19 News",
            "Press meets and journalist coordination",
            "Interview management",
            "Video promotions on YouTube & Google",
            "Constituency-level digital reach",
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border">
              <CheckCircle className="text-accent mb-3" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* SURVEY SECTION */}
   {/* SURVEY SECTION */}
<section className="py-24 max-w-7xl mx-auto px-6">
  <h3 className="text-3xl font-bold mb-4">Political Survey & Voter Intelligence</h3>
  <p className="text-gray-600 mb-10">
    We conduct scientific voter surveys and constituency analysis to understand
    public opinion, key issues, and winning probability before elections.
  </p>

  <div className="grid md:grid-cols-3 gap-8">
    {[
      "Door-to-door voter surveys",
      "Booth-wise voter opinion collection",
      "Public issue and sentiment analysis",
      "Candidate strength and weakness report",
      "Swing voter identification",
      "Detailed survey report with strategy inputs",
      "Pre-election and post-election surveys",
      "Ward / village level data collection",
      "Survey-based campaign strategy planning",
    ].map((item, i) => (
      <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
        <CheckCircle className="text-accent mb-3" />
        <p className="text-gray-700 font-medium">{item}</p>
      </div>
    ))}
  </div>
</section>


    {/* IMPACT */}
    <section className="bg-gray-50 py-24 text-center">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {[
          ["50+ Campaigns Managed", "Across multiple constituencies"],
          ["365 Days Digital Presence", "For political leaders"],
          ["Accurate Survey Insights", "Data-driven election strategy"],
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
            Planning Elections or Strengthening Political Presence?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-accent text-primary font-bold rounded-xl"
          >
            Contact Campaign Team
            <ChevronRight />
          </Link>
        </div>
      </div>
    </section>

  
  </main>
);


}
