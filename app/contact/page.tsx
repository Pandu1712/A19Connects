'use client';

import React from "react"

import { useState, FormEvent } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyContact } from '@/components/sticky-contact';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    'A19 News',
    'A19 Properties',
    'A19 Campaign',
    'A19 Digital Marketing',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const whatsappNumber = '919966202419';
    const message = `
Hello A19 Connects,

*Contact Information:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}

*Service Inquiry:* ${formData.service}

*Message:*
${formData.message}

Looking forward to hearing from you!
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        service: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

return (
  <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
    <StickyContact />

    {/* HERO */}
    <section className="relative overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-primary py-24">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_white,_transparent_40%)]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          Let’s Connect
        </h1>
        <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
          Have a project, idea, or requirement? Our team is ready to assist you with premium solutions.
        </p>
      </div>
    </section>

    {/* CONTACT CARDS */}
    <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <Mail size={30} />,
            title: 'Email Us',
            desc: 'a19connects@gmail.com',
            link: 'mailto:a19connects@gmail.com',
          },
          {
            icon: <Phone size={30} />,
            title: 'Call Us',
            desc: '+91 9966202419',
            link: 'tel:+919966202419',
          },
          {
            icon: <MapPin size={30} />,
            title: 'Visit Us',
            desc: 'Vijayawada-Prasadampadu-521108, India',
            link: '#',
          },
        ].map((item, i) => (
          <a
            key={i}
            href={item.link}
            className="bg-white/80 backdrop-blur-lg border border-gray-200 shadow-xl rounded-2xl p-10 text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
          >
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
            <p className="mt-2 text-gray-600 font-medium">{item.desc}</p>
          </a>
        ))}
      </div>
    </section>

    {/* FORM + INFO */}
    <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
      {/* FORM */}
      <div className="bg-white border border-gray-200 shadow-2xl rounded-3xl p-10">
        <h2 className="text-3xl font-bold text-foreground mb-10">
          Send a Message
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Your Name' },
            { label: 'Email Address', name: 'email', type: 'email', placeholder: 'your@email.com' },
            { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+91 98765 43210' },
            { label: 'Address', name: 'address', type: 'text', placeholder: 'City, State' },
          ].map((field) => (
            <div key={field.name}>
              <label className="text-sm font-semibold text-gray-700">{field.label}</label>
              <input
                {...field}
                value={(formData as any)[field.name]}
                onChange={handleChange}
                className="mt-2 w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary outline-none transition"
                required={field.name !== 'address'}
              />
            </div>
          ))}

          {/* Service */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Select Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="mt-2 w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
            >
              <option value="">Choose a service...</option>
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="mt-2 w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary outline-none resize-none"
              placeholder="Tell us about your requirement..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-5 rounded-xl bg-primary text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Send via WhatsApp
          </button>
        </form>

        {submitted && (
          <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-5 flex items-center gap-4">
            <CheckCircle className="text-green-600" />
            <div>
              <p className="font-semibold text-green-900">Message sent successfully!</p>
              <p className="text-sm text-green-800">We will contact you soon.</p>
            </div>
          </div>
        )}
      </div>

      {/* INFO PANEL */}
      <div className="rounded-3xl p-12 bg-gradient-to-br from-primary to-primary/80 text-white shadow-2xl">
        <h3 className="text-3xl font-bold mb-10">Why A19 Connects?</h3>

        <ul className="space-y-6">
          {[
            '10+ years industry expertise',
            '500+ successful client projects',
            'Dedicated account managers',
            '24/7 premium customer support',
            'Multi-domain marketing solutions',
            'Customized business strategies',
          ].map((point, i) => (
            <li key={i} className="flex gap-4 items-start">
              <CheckCircle className="text-accent mt-1" />
              <span className="text-lg">{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 border-t border-white/30 pt-6 text-white/80">
          For urgent support, contact us directly through WhatsApp or phone.
        </div>
      </div>
    </section>


  </main>
);

}
