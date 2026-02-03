'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyContact } from '@/components/sticky-contact';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function ServicesPage() {
  const [active, setActive] = useState('news');

  const services = [
    {
      id: 'news',
      title: 'A19 News',
      subtitle: 'Healthcare Media Solutions',
      image:
        'https://images.unsplash.com/photo-1581090700227-1e8a1f5b8a9c?q=80&w=2070&auto=format&fit=crop',
      description:
        'Comprehensive media coverage and branding for hospitals and healthcare providers.',
      features: [
        'Press release distribution',
        'Media coverage management',
        'Healthcare news articles',
        'Social media promotion',
        'Crisis communications',
      ],
    },
    {
      id: 'properties',
      title: 'A19 Properties',
      subtitle: 'Real Estate Marketing',
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      description:
        'Strategic marketing solutions for residential and commercial properties.',
      features: [
        'Drone photography',
        'Virtual tours',
        'Buyer lead campaigns',
        'Brochure & hoarding designs',
        'Property branding',
      ],
    },
    {
      id: 'campaign',
      title: 'A19 Campaign',
      subtitle: 'Strategic Campaigns',
      image:
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070&auto=format&fit=crop',
      description:
        'Creative and data-driven campaigns for brands and political leaders.',
      features: [
        'Campaign planning',
        'Market research',
        'Offline & online ads',
        'Event promotions',
        'Performance analytics',
      ],
    },
    {
      id: 'digital',
      title: 'A19 Digital Marketing',
      subtitle: 'Digital Excellence',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      description:
        'Complete digital marketing strategies for modern businesses.',
      features: [
        'SEO & Google Ads',
        'Social media management',
        'Content marketing',
        'Website development',
        'Analytics reports',
      ],
    },
  ];

  const current = services.find((s) => s.id === active)!;

  return (
    <main className="bg-white">
      
      <StickyContact />

      {/* Hero */}
      <section className="relative h-[60vh]">
        <Image
          src={current.image}
          alt={current.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-6 text-white">
          <div>
            <p className="uppercase tracking-widest text-accent mb-3">
              {current.subtitle}
            </p>
            <h1 className="text-5xl font-extrabold">{current.title}</h1>
            <p className="mt-4 max-w-2xl text-gray-200">
              {current.description}
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-4 justify-center">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                active === s.id
                  ? 'bg-accent text-primary'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8">{current.title} Features</h2>

            <ul className="space-y-4">
              {current.features.map((f, i) => (
                <li key={i} className="flex gap-3 text-lg text-gray-700">
                  <span className="text-accent font-bold">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href={`/services/${current.id}`}
              className="inline-flex mt-10 items-center gap-3 px-8 py-4 bg-accent text-primary font-bold rounded-xl hover:scale-105 transition"
            >
              View Detailed Page
              <ChevronRight />
            </Link>
          </div>
        </div>
      </section>

      
    </main>
  );
}
