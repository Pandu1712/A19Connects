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
    subtitle: 'Statewide Media & News Coverage',
    image:
      'https://scontent.fhyd14-4.fna.fbcdn.net/v/t39.30808-6/548500625_122128396862939304_2726733041647332082_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=XQq2aZLAMZYQ7kNvwHJRYPo&_nc_oc=Adm_NV2c-eRZLgtXXyt0smPZHOqfE4O5hgcDpdhoONLso-NYFCGS4vjhjxPAsj9ZnapZ7Ls_5mqWDlz_YxGxGIx_&_nc_zt=23&_nc_ht=scontent.fhyd14-4.fna&_nc_gid=lhttf7I63yu7CrsgOglPAw&oh=00_AftnYAPmDkCY4amKfSbt2Na_Kbtik4sAl3Ly9p1AFVDU7Q&oe=69879205',
    description:
      'We publish and promote news across the entire state through our media network, journalist connections, and digital platforms for leaders, organizations, and businesses.',
    features: [
      'Statewide news publication',
      'Press note writing & distribution',
      'Media and journalist coordination',
      'Event & public meeting coverage',
      'Digital news promotions',
    ],
  },
  {
    id: 'properties',
    title: 'A19 Properties',
    subtitle: 'Complete Real Estate Marketing',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    description:
      'End-to-end marketing for plots, villas, apartments, commercial spaces, layouts, farmland, rentals, and resale properties to generate genuine buyer leads.',
    features: [
      'Drone & property photography',
      '3D virtual tours & videos',
      'Buyer lead generation campaigns',
      'Brochure, hoarding & creatives',
      'Targeted real estate ads',
    ],
  },
  {
    id: 'campaign',
    title: 'A19 Campaign',
    subtitle: 'Election Campaign & Political Branding',
    image:
      'https://miro.medium.com/max/875/0*_9D1GLR9jb08x4g5.jpg',
    description:
      'Complete election campaign management, political leader branding, booth-level strategy, digital promotion, ground activities, and voter survey intelligence.',
    features: [
      'Booth-level election planning',
      'Political social media handling',
      'Rallies, meetings & ground activation',
      'Media coverage & press management',
      'Voter surveys & data analysis',
    ],
  },
  {
    id: 'digital',
    title: 'A19 Digital Marketing',
    subtitle: 'Social Media, Ads & SEO (No Website Dev)',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    description:
      'Comprehensive digital marketing including SEO, social media management, Google/Facebook ads, content creation, and analytics — excluding website development.',
    features: [
      'SEO & Google Ads management',
      'Complete social media handling',
      'Creative posts, reels & videos',
      'Content marketing & branding',
      'Performance analytics reports',
    ],
  },
];


  const current = services.find((s) => s.id === active)!;

return (
  <main className="bg-gradient-to-b from-white via-gray-50 to-white min-h-screen">
    <StickyContact />

    {/* HERO */}
    <section className="relative h-[75vh] overflow-hidden">
      <Image src={current.image} alt={current.title} fill className="object-cover scale-105" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-6 text-white">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[6px] text-accent mb-4 text-sm">
            {current.subtitle}
          </p>
          <h1 className="text-6xl font-extrabold leading-tight">
            {current.title}
          </h1>
          <p className="mt-6 text-lg text-gray-200 leading-relaxed">
            {current.description}
          </p>
        </div>
      </div>
    </section>

    {/* SERVICE SELECTOR (GLASS TABS) */}
    <section className="relative -mt-14 z-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white/70 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl p-6 flex flex-wrap gap-4 justify-center">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                active === s.id
                  ? 'bg-primary text-white shadow-xl scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>
    </section>

    {/* FEATURES SECTION */}
    <section className="py-28 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        {/* Image Card */}
        <div className="relative h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
          <Image
            src={current.image}
            alt={current.title}
            fill
            className="object-cover hover:scale-110 transition duration-700"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-5xl font-bold mb-10 text-foreground">
            What You Get with {current.title}
          </h2>

          <ul className="space-y-6">
            {current.features.map((f, i) => (
              <li key={i} className="flex gap-4 items-start">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                  ✓
                </div>
                <p className="text-lg text-gray-700">{f}</p>
              </li>
            ))}
          </ul>

          <Link
            href={`/services/${current.id}`}
            className="inline-flex mt-12 items-center gap-3 px-10 py-5 bg-primary text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            Explore Detailed Service
            <ChevronRight />
          </Link>
        </div>
      </div>
    </section>

    {/* PREMIUM DIFFERENCE STRIP */}
    <section className="bg-primary py-20 text-white m-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
        {[
          ["10+ Years Expertise", "Deep industry knowledge and proven execution."],
          ["500+ Successful Clients", "Trusted across healthcare, real estate & enterprises."],
          ["Data Driven Strategy", "Every campaign optimized with analytics and insights."],
        ].map((item, i) => (
          <div key={i}>
            <h3 className="text-2xl font-bold text-accent mb-3">{item[0]}</h3>
            <p className="text-gray-200">{item[1]}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
   {/*  <section className="py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-16 text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Grow with {current.title}?
          </h2>
          <p className="text-gray-200 mb-10">
            Let our experts design a custom strategy tailored to your business goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-primary font-bold rounded-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            Talk to Our Team
            <ChevronRight />
          </Link>
        </div>
      </div>
    </section>
 */}
   
  </main>
);

}
