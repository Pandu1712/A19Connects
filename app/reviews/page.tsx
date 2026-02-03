'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyContact } from '@/components/sticky-contact';
import { Star } from 'lucide-react';

export default function ReviewsPage() {
 const reviews = [
  {
    id: 1,
    name: 'Dr. Sandeep Reddy',
    title: 'Medical Director, Sunrise Hospitals',
    location: 'Vijayawada, Andhra Pradesh',
    rating: 5,
    review:
      'A19 News significantly improved our hospital’s media visibility across AP. Their press coverage and reputation management brought a noticeable rise in patient trust and inquiries.',
    service: 'A19 News',
  },
  {
    id: 2,
    name: 'Dr. Lakshmi Prasad',
    title: 'Administrator, Care Multispeciality Hospital',
    location: 'Guntur, Andhra Pradesh',
    rating: 5,
    review:
      'Professional media handling and timely news publications helped us build strong credibility in the region. A19 News understands healthcare communication perfectly.',
    service: 'A19 News',
  },
  {
    id: 3,
    name: 'Ravi Teja Chowdary',
    title: 'Managing Partner, Teja Constructions',
    location: 'Visakhapatnam, Andhra Pradesh',
    rating: 5,
    review:
      'A19 Properties created stunning drone videos and campaigns for our gated community project. Lead quality improved drastically and sales accelerated.',
    service: 'A19 Properties',
  },
  {
    id: 4,
    name: 'Sowmya Reddy',
    title: 'Sales Director, Reddy Realty Group',
    location: 'Tirupati, Andhra Pradesh',
    rating: 5,
    review:
      'Virtual tours and targeted property campaigns delivered by A19 Properties helped us close multiple premium units within weeks.',
    service: 'A19 Properties',
  },
  {
    id: 5,
    name: 'Mahesh Yadav',
    title: 'Campaign Strategist, Public Leadership Initiative',
    location: 'Hyderabad, Telangana',
    rating: 5,
    review:
      'A19 Campaign managed our political outreach with precision. Booth-level strategy, digital creatives, and ground surveys gave us excellent voter engagement.',
    service: 'A19 Campaign',
  },
  {
    id: 6,
    name: 'Anusha Naik',
    title: 'Communications Head, Youth Development Forum',
    location: 'Warangal, Telangana',
    rating: 5,
    review:
      'Their election campaign planning, poster designs, and social media narratives created strong public visibility for our leader across the district.',
    service: 'A19 Campaign',
  },
  {
    id: 7,
    name: 'Harish Kumar',
    title: 'Founder, TrendKart E-Commerce',
    location: 'Hyderabad, Telangana',
    rating: 5,
    review:
      'A19 Digital Marketing handled our SEO and paid ads brilliantly. Monthly sales increased by 280% without any website redevelopment.',
    service: 'A19 Digital Marketing',
  },
  {
    id: 8,
    name: 'Divya Praneeth',
    title: 'Marketing Manager, FreshMart Retail',
    location: 'Khammam, Telangana',
    rating: 5,
    review:
      'Their social media management and ad campaigns brought excellent footfall and online engagement for our retail brand.',
    service: 'A19 Digital Marketing',
  },
  {
    id: 9,
    name: 'Dr. Praveen Kumar',
    title: 'Chairman, LifeCare Hospitals',
    location: 'Kurnool, Andhra Pradesh',
    rating: 5,
    review:
      'With A19 News support, our hospital gained consistent regional media presence which directly improved brand authority and patient reach.',
    service: 'A19 News',
  },
];


  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? 'fill-accent text-accent' : 'text-gray-300'}
        />
      ))}
    </div>
  );

  return (
    <main className="min-h-screen bg-white">
      

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Reviews & Testimonials</h1>
          <p className="text-lg text-gray-200">
            Hear from our satisfied clients about their experience with A19 Connects
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <p className="text-foreground font-semibold">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">4.9/5</div>
              <p className="text-foreground font-semibold">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <p className="text-foreground font-semibold">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="mb-4">
                <StarRating rating={review.rating} />
              </div>

              {/* Review Text */}
              <p className="text-gray-600 mb-6 italic line-clamp-4">"{review.review}"</p>

              {/* Service Badge */}
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
                  {review.service}
                </span>
              </div>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-foreground text-sm">{review.name}</p>
                <p className="text-accent text-xs font-semibold">{review.title}</p>
                <p className="text-gray-500 text-xs">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Why Clients Love Working With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                number: '01',
                title: 'Results-Focused Approach',
                description:
                  'We measure success by your business growth. Every strategy is designed to deliver measurable ROI.',
              },
              {
                number: '02',
                title: 'Transparent Communication',
                description:
                  'Regular updates, detailed reports, and open dialogue ensure you always know where your marketing stands.',
              },
              {
                number: '03',
                title: 'Dedicated Account Management',
                description:
                  'Your success is our priority. Dedicated account managers provide personalized attention and support.',
              },
              {
                number: '04',
                title: 'Industry Expertise',
                description:
                  'With 10+ years of experience across healthcare, real estate, and corporate sectors, we know what works.',
              },
              {
                number: '05',
                title: 'Cutting-Edge Technology',
                description:
                  'We leverage the latest marketing tools and platforms to maximize campaign effectiveness.',
              },
              {
                number: '06',
                title: '24/7 Support Available',
                description:
                  'Our team is always available to address your concerns and optimize your campaigns.',
              },
            ].map((reason, index) => (
              <div key={index} className="bg-white rounded-lg p-8">
                <div className="text-4xl font-bold text-accent mb-4">{reason.number}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 md:p-16 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Growing Family of Satisfied Clients</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
            Experience the A19 Connects difference. Let's achieve extraordinary results together.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:shadow-2xl transition-all duration-200 hover:scale-105"
          >
            Get Started Today
            <span>→</span>
          </a>
        </div>
      </section> */}

     
    </main>
  );
}
