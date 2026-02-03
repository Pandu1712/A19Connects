'use client';

import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyContact } from '@/components/sticky-contact';
import { ChevronRight, Contact } from 'lucide-react';
import { useEffect, useState } from 'react';
import ReviewsPage from './reviews/page';
import AboutPage from './about/page';
import ContactPage from './contact/page';

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
const slides = [
  {
    title: 'A19 News',
    subtitle: 'Statewide News & Media Coverage',
    description:
      'We publish and promote news across the state through our journalist network, media portals, and digital platforms for leaders, organizations, and businesses.',
    image:
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'A19 Properties',
    subtitle: 'Complete Real Estate Marketing',
    description:
      'End-to-end marketing for plots, villas, apartments, commercial spaces, layouts, and resale properties to generate genuine buyer leads.',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'A19 Campaign',
    subtitle: 'Election Campaign & Political Branding',
    description:
      'Full election campaign management, political leader branding, booth-level strategy, digital promotion, ground activities, and voter surveys.',
    image:
      'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'A19 Digital Marketing',
    subtitle: 'Social Media, Ads & SEO',
    description:
      'Complete digital marketing including SEO, Google Ads, social media handling, content creation, and performance analytics (excluding website development).',
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop',
  },
];


  const services = [
  {
    title: 'A19 News',
    description:
      'Statewide news publication and media coverage through our journalist network, press distribution, and digital promotion for leaders, organizations, and businesses.',
    href: '/services/news',
    image:
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'A19 Properties',
    description:
      'Complete real estate marketing for plots, villas, apartments, commercial spaces, layouts, farmland, rentals, and resale properties to generate genuine buyer leads.',
    href: '/services/properties',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'A19 Campaign',
    description:
      'Election campaign management, political leader branding, booth-level planning, digital promotion, ground activities, and voter survey intelligence.',
    href: '/services/campaign',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'A19 Digital Marketing',
    description:
      'SEO, Google Ads, social media handling, content creation, and performance analytics for brands and leaders — excluding website development.',
    href: '/services/digital',
    image:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop',
  },
];


  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white">
 
      <StickyContact />

      {/* ================= PREMIUM HERO ================= */}
      <section className="relative h-[92vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              activeSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center scale-105"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

            <div className="relative z-20 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-6 text-white">
                <p className="text-accent font-semibold tracking-widest uppercase mb-4">
                  {slide.subtitle}
                </p>

                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-3xl mb-6">
                  {slide.title}
                </h1>

                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-10">
                  {slide.description}
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary font-bold rounded-xl shadow-2xl hover:scale-105 transition"
                >
                  Get Started
                  <ChevronRight size={22} />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-2 rounded-full transition-all ${
                activeSlide === index ? 'w-10 bg-accent' : 'w-3 bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ================= PREMIUM SERVICES ================= */}
      <section className="py-28 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Elite marketing and communication solutions crafted for modern brands.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative h-[420px] rounded-2xl overflow-hidden shadow-xl"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition duration-700"
                  style={{
                    backgroundImage: `url(${service.image})`,
                  }}
                />

                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition" />

                <div className="absolute bottom-0 p-8 text-white backdrop-blur-md">
                  <h3 className="text-2xl font-bold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-200 mb-4">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-accent font-semibold">
                    Explore
                    <ChevronRight size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <AboutPage/>
    <ReviewsPage/>  
    <ContactPage/>
   
    </main>
  );
}
