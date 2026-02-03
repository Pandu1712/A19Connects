'use client';

import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyContact } from '@/components/sticky-contact';
import { CheckCircle, Award, Users, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
   
      <StickyContact />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About A19 Connects</h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Premium marketing and communication solutions delivered with excellence, integrity, and results.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-6">
              <Award size={24} className="text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To empower businesses and healthcare institutions with innovative marketing solutions that build trust, drive growth, and create lasting value in an ever-evolving marketplace.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-6">
              <Zap size={24} className="text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To become the most trusted and innovative marketing partner across South India, recognized for excellence, integrity, and delivering transformative results for every client we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12">Our Story</h2>

          <div className="prose prose-lg max-w-4xl mx-auto text-gray-600">
            <p className="mb-6">
              A19 Connects was founded with a simple yet powerful belief: exceptional marketing requires a blend of creativity, expertise, and genuine understanding of each client's unique needs. What started as a small team of passionate marketers has evolved into a comprehensive marketing powerhouse serving over 500 satisfied clients across South India.
            </p>

            <p className="mb-6">
              Over a decade, we've built four specialized service lines – A19 News, A19 Properties, A19 Campaign, and A19 Digital Marketing – each designed to address specific market needs. Our journey has been defined by innovation, integrity, and an unwavering commitment to delivering measurable results.
            </p>

            <p>
              Today, A19 Connects stands as a symbol of marketing excellence, trusted by hospitals, real estate developers, enterprises, and businesses of all sizes. We don't just execute campaigns; we partner with clients to achieve their most ambitious goals.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: 'Excellence', description: 'We pursue the highest standards in everything we do.' },
            { title: 'Integrity', description: 'Transparency and honesty are foundational to our relationships.' },
            { title: 'Innovation', description: 'We constantly evolve and embrace new marketing technologies.' },
            { title: 'Results', description: 'Client success and measurable ROI drive our every decision.' },
          ].map((value, index) => (
            <div key={index} className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-gray-600">
              A diverse team of marketing, creative, and technology experts dedicated to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                role: 'Founder & CEO',
                expertise: 'Strategic Marketing & Business Development',
              },
              {
                name: 'Priya Sharma',
                role: 'Head of Creative',
                expertise: 'Content & Campaign Strategy',
              },
              {
                name: 'Amit Patel',
                role: 'Head of Digital',
                expertise: 'SEO, SEM & Analytics',
              },
              {
                name: 'Anjali Gupta',
                role: 'Head of Operations',
                expertise: 'Client Success & Service Delivery',
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gradient-to-br from-primary to-accent" />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-accent font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Why Choose A19 Connects?</h2>

        <div className="space-y-6">
          {[
            {
              title: '10+ Years of Industry Experience',
              description:
                'A decade of proven success in healthcare, real estate, and corporate marketing sectors.',
            },
            {
              title: '500+ Satisfied Clients',
              description:
                'Trusted by hospitals, real estate developers, startups, and enterprises across South India.',
            },
            {
              title: 'Four Specialized Service Lines',
              description:
                'Comprehensive solutions covering news, properties, campaigns, and digital marketing.',
            },
            {
              title: 'Data-Driven Approach',
              description:
                'Every strategy is backed by research, analytics, and real-time performance optimization.',
            },
            {
              title: 'Dedicated Account Managers',
              description:
                'Personal attention and customized solutions for each client, not one-size-fits-all approaches.',
            },
            {
              title: '24/7 Customer Support',
              description:
                'Round-the-clock support ensures your marketing runs smoothly without interruption.',
            },
          ].map((point, index) => (
            <div key={index} className="flex gap-4 pb-6 border-b border-gray-200 last:border-0">
              <div className="flex-shrink-0">
                <CheckCircle size={24} className="text-accent mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">10+</div>
              <p className="text-gray-300">Years in Business</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">500+</div>
              <p className="text-gray-300">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">4</div>
              <p className="text-gray-300">Service Lines</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">30+</div>
              <p className="text-gray-300">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 md:p-16 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
            Ready to experience the A19 Connects difference? Connect with our team today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:shadow-2xl transition-all duration-200 hover:scale-105"
          >
            Get In Touch
            <CheckCircle size={20} />
          </Link>
        </div>
      </section>

   
    </main>
  );
}
