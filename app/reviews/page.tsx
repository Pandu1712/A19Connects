'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyContact } from '@/components/sticky-contact';
import { Star } from 'lucide-react';

export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      name: 'Dr. Rajesh Sharma',
      title: 'CEO, City Medical Center',
      location: 'Bangalore',
      rating: 5,
      review:
        'A19 News transformed our healthcare brand presence. The team is professional, results-driven, and truly understands the healthcare sector. Highly recommended!',
      service: 'A19 News',
    },
    {
      id: 2,
      name: 'Priya Desai',
      title: 'Founder, Royal Estates',
      location: 'Pune',
      rating: 5,
      review:
        'Working with A19 Properties was a game-changer for our real estate business. Our property sales increased by 45% in just 3 months. Outstanding service!',
      service: 'A19 Properties',
    },
    {
      id: 3,
      name: 'Amit Gupta',
      title: 'Managing Director, TechStart India',
      location: 'Bangalore',
      rating: 5,
      review:
        'The A19 Campaign team created an innovative marketing campaign that exceeded all expectations. ROI was 350%! Simply exceptional work.',
      service: 'A19 Campaign',
    },
    {
      id: 4,
      name: 'Anjali Patel',
      title: 'Head of Marketing, Fashion Plus',
      location: 'Chennai',
      rating: 5,
      review:
        'A19 Digital Marketing provided comprehensive digital solutions that transformed our online presence. Website traffic increased by 280%!',
      service: 'A19 Digital Marketing',
    },
    {
      id: 5,
      name: 'Dr. Vikram Kumar',
      title: 'Administrator, Apollo Health Systems',
      location: 'Hyderabad',
      rating: 5,
      review:
        'The professionalism and expertise of the A19 team is unmatched. They delivered results that significantly improved our hospital\'s brand credibility.',
      service: 'A19 News',
    },
    {
      id: 6,
      name: 'Meera Singh',
      title: 'Director, Metro Builders',
      location: 'Bangalore',
      rating: 5,
      review:
        'A19 Properties handled our ₹50 crore portfolio with exceptional expertise. The virtual tours and targeted campaigns were incredibly effective.',
      service: 'A19 Properties',
    },
    {
      id: 7,
      name: 'Suresh Reddy',
      title: 'CEO, Wellness Plus',
      location: 'Telangana',
      rating: 5,
      review:
        'The campaign strategy was brilliant and data-driven. A19 Campaign generated over 10,000 qualified leads for us. Best investment ever!',
      service: 'A19 Campaign',
    },
    {
      id: 8,
      name: 'Kavya Sharma',
      title: 'Founder, E-Commerce Ventures',
      location: 'Bangalore',
      rating: 5,
      review:
        'A19 Digital Marketing is truly world-class. They transformed our online sales by 300% through strategic SEO, PPC, and content marketing.',
      service: 'A19 Digital Marketing',
    },
    {
      id: 9,
      name: 'Dr. Naveen Kumar',
      title: 'Head of Marketing, Regional Healthcare',
      location: 'Mysore',
      rating: 5,
      review:
        'A19 News provided exceptional media relations and press coverage for our healthcare group. Patient inquiries increased significantly!',
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
