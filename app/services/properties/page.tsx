'use client';

import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyContact } from '@/components/sticky-contact';
import { CheckCircle, ChevronRight } from 'lucide-react';
import Image from "next/image";
import React from 'react';

export default function PropertiesServicePage() {
  const packages = [
    {
      name: 'Basic',
      price: '₹19,999',
      period: 'per month',
      description: 'For individual property listings',
      features: [
        'Up to 5 property listings',
        'Professional photography',
        'Basic virtual tour',
        'Social media promotion',
        'Monthly analytics',
      ],
      popular: false,
    },
    {
      name: 'Premium',
      price: '₹49,999',
      period: 'per month',
      description: 'For real estate agents and brokers',
      features: [
        'Up to 20 property listings',
        'Professional photography & 3D tours',
        'Drone photography available',
        'Advanced targeting campaigns',
        'Lead generation & tracking',
        'Weekly performance reports',
        'SEO optimization',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '₹89,999',
      period: 'per month',
      description: 'For real estate companies',
      features: [
        'Unlimited property listings',
        'Premium photography & video tours',
        'Drone & aerial photography',
        'Multi-channel marketing campaigns',
        'Lead nurturing automation',
        'Real-time analytics dashboard',
        'SEO & paid advertising',
        'Dedicated account manager',
        'Investment analysis tools',
      ],
      popular: false,
    },
  ];
const [showForm, setShowForm] = React.useState(false);

const openWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
  const mobile = (form.elements.namedItem("mobile") as HTMLInputElement).value;
  const address = (form.elements.namedItem("address") as HTMLInputElement).value;
  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

  const text = `
*New Properties Service Enquiry*

Service: A19 Properties

Name: ${name}
Mobile: ${mobile}
Address: ${address}
Message: ${message}
`;

  const url = `https://wa.me/919966202419?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
};

  return (
  <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
    <StickyContact />

    {/* HERO */}
    <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-28">
      <div className="max-w-7xl mx-auto px-6 max-w-4xl">
        <p className="uppercase tracking-[6px] text-accent text-sm mb-4">
          Complete Real Estate Marketing Partner
        </p>
        <h1 className="text-6xl font-extrabold mb-6">A19 Properties</h1>
        <p className="text-lg text-gray-200 leading-relaxed">
          We market, promote, and generate qualified buyers for all types of
          properties across the state — plots, villas, apartments, commercial
          spaces, layouts, farmland, rentals, and resale properties.
        </p>
      </div>
      <div className="mt-8 flex justify-center">
  <button
    onClick={() => setShowForm(true)}
    className="px-8 py-4 bg-accent text-primary font-bold rounded-xl"
  >
    Enquiry Now
  </button>
</div>

    </section>

    {/* OVERVIEW */}
    <section className="py-28 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-5xl font-bold mb-8">From Listing to Closing Deals</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            A19 Properties handles complete marketing and lead generation for
            real estate projects and individual properties. We ensure your
            property reaches genuine buyers through targeted campaigns,
            professional presentation, and data-driven strategies.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our goal is simple: bring serious buyers directly to you and help
            you close deals faster.
          </p>
        </div>

        <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
  <Image
    src="https://2acompany.co.in/assets/upload/WhatsApp_Image_2024-06-06_at_12_43_22_PM.jpeg"   // <-- put your image path here
    alt="A19 News Coverage"
    fill
    className="object-cover"
    priority
  />
</div>

      </div>
    </section>

    {/* PROPERTY TYPES */}
    <section className="bg-gray-50 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Property Types We Market
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Open Plots & Layouts",
            "Villas & Independent Houses",
            "Apartments & Gated Communities",
            "Commercial Buildings & Shops",
            "Office Spaces & IT Parks",
            "Farmland & Agricultural Lands",
            "Rental & Lease Properties",
            "Resale & Investment Properties",
            "New Project Launches",
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <CheckCircle className="text-accent mb-4" />
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* WHAT WE DO */}
    <section className="py-28 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16">
        Complete Real Estate Marketing Services
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {[
          "Professional property photography & videography",
          "Drone aerial photography & site videos",
          "3D virtual tours and walkthroughs",
          "Brochure, hoarding, and creative designs",
          "Facebook, Instagram & Google Ads campaigns",
          "Buyer lead generation and qualification",
          "Landing pages and property microsites",
          "SEO for property visibility in search",
          "Daily lead reports and performance tracking",
        ].map((item, i) => (
          <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <CheckCircle className="text-accent mb-4" />
            <p className="text-gray-700 font-medium">{item}</p>
          </div>
        ))}
      </div>
    </section>

    {/* HOW WE WORK */}
    <section className="bg-gray-50 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">How A19 Properties Works</h2>

        <div className="grid md:grid-cols-4 gap-10 text-center">
          {[
            ["Property Analysis", "We study location, price, and target buyers"],
            ["Professional Presentation", "Photos, videos, creatives, and landing page"],
            ["Targeted Advertising", "Ads to genuine interested buyers"],
            ["Lead Delivery", "Qualified leads sent directly to you daily"],
          ].map((step, i) => (
            <div key={i}>
              <div className="text-5xl font-bold text-primary mb-4">0{i + 1}</div>
              <h3 className="text-xl font-semibold mb-2">{step[0]}</h3>
              <p className="text-gray-600">{step[1]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* SUCCESS HIGHLIGHTS */}
    <section className="py-28 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16">Our Real Estate Impact</h2>

      <div className="grid md:grid-cols-3 gap-10 text-center">
        {[
          ["500+ Properties Marketed", "Across multiple districts"],
          ["10,000+ Buyer Leads Generated", "Through digital campaigns"],
          ["Faster Property Closures", "With genuine buyer inquiries"],
        ].map((item, i) => (
          <div key={i} className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-accent mb-3">{item[0]}</h3>
            <p className="text-gray-600">{item[1]}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="py-28 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-3xl p-16 shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">
            Want to Sell or Promote Your Property Faster?
          </h2>
          <p className="text-gray-200 mb-10">
            Connect with A19 Properties and get genuine buyers for your listings.
          </p>
          <div className="mt-8 flex justify-center">
  <button
    onClick={() => setShowForm(true)}
    className="px-8 py-4 bg-accent text-primary font-bold rounded-xl"
  >
    Enquiry Now
  </button>
</div>

        </div>
      </div>
    </section>

    {showForm && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
    <div className="bg-white w-full max-w-lg rounded-2xl p-8 relative">
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-3 right-4 text-xl font-bold"
      >
        ×
      </button>

      <h3 className="text-2xl font-bold mb-6">Campaign Service Enquiry</h3>

      <form onSubmit={openWhatsApp} className="space-y-4">
        <input
          name="name"
          required
          placeholder="Your Name"
          className="w-full border p-3 rounded-lg"
        />
        <input
          name="mobile"
          required
          placeholder="Mobile Number"
          className="w-full border p-3 rounded-lg"
        />
        <input
          name="address"
          required
          placeholder="Address"
          className="w-full border p-3 rounded-lg"
        />
        <textarea
          name="message"
          required
          placeholder="Your Message"
          className="w-full border p-3 rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg font-bold"
        >
          Send to WhatsApp
        </button>
      </form>
    </div>
  </div>
)}

  </main>
);

}
