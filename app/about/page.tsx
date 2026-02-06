'use client';

import Image from "next/image";
import { StickyContact } from '@/components/sticky-contact';
import { CheckCircle, Award, Zap } from 'lucide-react';

export default function AboutPage() {
  const team = [
    {
      name: "M Surjith",
      role: "Founder & CEO",
      image: "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2026-02-03_at_16.30.02_sfypkf.jpg",
    },
    {
      name: "D Vijayram",
      role: "Head of Creative",
      image: "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2026-02-03_at_16.31.39_hycizj.jpg",
    },
    {
      name: "K RajKumar",
      role: "Head of Digital",
      image: "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2026-02-03_at_16.33.01_e7zt1d.jpg",
    },
     {
      name: "G Madhav",
      role: "Head of Operations",
      image: "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2026-02-04_at_10.40.54_xvndxr.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <StickyContact />

      {/* HERO */}
      <section className="bg-gradient-to-r from-primary via-primary/90 to-primary py-28 text-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            About A19 Connects
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Delivering premium marketing and branding solutions with measurable results.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: "Our Mission",
              icon: <Award size={26} />,
              text: "To empower businesses with innovative marketing solutions that build trust and drive growth.",
            },
            {
              title: "Our Vision",
              icon: <Zap size={26} />,
              text: "To become South India’s most trusted marketing partner recognized for excellence.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white shadow-xl rounded-3xl p-12">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                {item.icon}
              </div>
              <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 text-center">
        <div className="max-w-5xl mx-auto px-6 text-gray-600 text-lg space-y-6">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p>
            A19 Connects started with a vision to deliver powerful marketing backed by creativity and strategy.
            Today we serve hundreds of clients across News, Properties, Campaigns, and Digital Marketing.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-28 bg-gray-50">
        <div className="text-center mb-16 px-6">
          <h2 className="text-4xl font-bold mb-4">Meet Our Expert Team</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-10 px-6">
          {team.map((m, i) => (
            <div
              key={i}
              className="w-full sm:w-[320px] bg-white rounded-3xl shadow-xl border overflow-hidden"
            >
              {/* FULL LENGTH IMAGE */}
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className="object-contain bg-gray-100"
                />
              </div>

              <div className="p-8 text-center">
                <h3 className="text-lg font-bold">{m.name}</h3>
                <p className="text-accent font-semibold text-sm mt-2">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <h2 className="text-4xl font-bold text-center mb-10">Why Choose A19 Connects?</h2>
          {[
            "10+ Years Industry Experience",
            "500+ Satisfied Clients",
            "Four Specialized Service Lines",
            "Data-Driven Marketing Strategies",
          ].map((point, i) => (
            <div key={i} className="flex gap-4">
              <CheckCircle className="text-accent mt-1" />
              <p className="text-lg">{point}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
