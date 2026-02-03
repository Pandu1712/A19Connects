'use client';

import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyContact } from '@/components/sticky-contact';
import { CheckCircle, ChevronRight } from 'lucide-react';
import Image from "next/image";

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
  <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
    <StickyContact />

    {/* HERO */}
    <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-28">
      <div className="max-w-7xl mx-auto px-6 max-w-4xl">
        <p className="uppercase tracking-[6px] text-accent text-sm mb-4">
          Statewide Media Network
        </p>
        <h1 className="text-6xl font-extrabold mb-6">A19 News</h1>
        <p className="text-lg text-gray-200 leading-relaxed">
          We publish, promote, and amplify news across the entire state through
          our strong media presence, journalist network, and digital platforms.
          From political coverage to business stories, events to public
          announcements — A19 News ensures your message reaches every corner.
        </p>
      </div>
    </section>

    {/* OVERVIEW */}
    <section className="py-28 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-5xl font-bold mb-8">Complete News & Media Coverage</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            A19 News operates as a powerful media bridge between organizations,
            leaders, businesses, and the public. We ensure news visibility
            through digital news portals, social platforms, and regional media
            relationships.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether it’s a political announcement, business launch, public
            event, or social cause — we provide statewide news reach with
            professional reporting and promotion.
          </p>
        </div>

        <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
  <Image
    src="https://scontent.fhyd14-4.fna.fbcdn.net/v/t39.30808-6/548500625_122128396862939304_2726733041647332082_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=XQq2aZLAMZYQ7kNvwHJRYPo&_nc_oc=Adm_NV2c-eRZLgtXXyt0smPZHOqfE4O5hgcDpdhoONLso-NYFCGS4vjhjxPAsj9ZnapZ7Ls_5mqWDlz_YxGxGIx_&_nc_zt=23&_nc_ht=scontent.fhyd14-4.fna&_nc_gid=lhttf7I63yu7CrsgOglPAw&oh=00_AftnYAPmDkCY4amKfSbt2Na_Kbtik4sAl3Ly9p1AFVDU7Q&oe=69879205"   // <-- put your image path here
    alt="A19 News Coverage"
    fill
    className="object-cover"
    priority
  />
</div>

      </div>
    </section>

    {/* WHAT WE COVER */}
    <section className="bg-gray-50 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          News Categories We Cover Across the State
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Political News & Leader Activities",
            "Government Programs & Public Announcements",
            "Business Launches & Corporate News",
            "Real Estate & Infrastructure Developments",
            "Education & Institutional Achievements",
            "Social Causes & NGO Activities",
            "Events, Press Meets & Public Meetings",
            "Celebrity Visits & Public Appearances",
            "Local Area & District Level Developments",
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <CheckCircle className="text-accent mb-4" />
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* HOW WE WORK */}
    <section className="py-28 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16">How A19 News Works</h2>

      <div className="grid md:grid-cols-4 gap-10 text-center">
        {[
          ["Content Collection", "We gather complete details, images, and information"],
          ["Professional Writing", "Our team crafts news in media-ready format"],
          ["Media Distribution", "Published across portals and journalist network"],
          ["Digital Amplification", "Promoted via social media and digital channels"],
        ].map((step, i) => (
          <div key={i}>
            <div className="text-5xl font-bold text-primary mb-4">0{i + 1}</div>
            <h3 className="text-xl font-semibold mb-2">{step[0]}</h3>
            <p className="text-gray-600">{step[1]}</p>
          </div>
        ))}
      </div>
    </section>

    {/* SAMPLE NEWS LINKS */}
    <section className="bg-gray-50 py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Sample News Published by A19
        </h2>

        <div className="space-y-8">
          {[
            { title: "Leader Addressed Massive Public Meeting in Vijayawada", link: "#" },
            { title: "Grand Opening of New Commercial Complex", link: "#" },
            { title: "Mega Job Mela Conducted with 5000 Participants", link: "#" },
            { title: "Educational Institution Achieves State Rank", link: "#" },
          ].map((news, i) => (
            <a
              key={i}
              href={news.link}
              target="_blank"
              className="flex justify-between items-center p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition bg-white"
            >
              <span className="text-lg font-semibold text-foreground">
                {news.title}
              </span>
              <ChevronRight />
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* TRUST STRIP */}
    <section className="bg-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
        {[
          ["Statewide Journalist Network", "Strong relationships across districts"],
          ["1000+ News Articles Published", "Covering multiple categories"],
          ["Fast & Priority Publishing", "Timely coverage for important news"],
        ].map((item, i) => (
          <div key={i}>
            <h3 className="text-2xl font-bold text-accent mb-3">{item[0]}</h3>
            <p className="text-gray-200">{item[1]}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="py-28 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-3xl p-16 shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">
            Want Your News to Reach the Entire State?
          </h2>
          <p className="text-gray-200 mb-10">
            Connect with A19 News team and get your story published across our
            media network.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-primary font-bold rounded-xl hover:shadow-2xl hover:-translate-y-1 transition"
          >
            Contact Our Team
            <ChevronRight />
          </Link>
        </div>
      </div>
    </section>


  </main>
);

}
