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

    const whatsappNumber = '919876543210';
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
    <main className="min-h-screen bg-white">
     
      <StickyContact />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-200">Get in touch with our team for inquiries and support</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={32} className="text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
            <a href="mailto:info@a19connects.com" className="text-accent font-semibold hover:underline">
              info@a19connects.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={32} className="text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
            <a href="tel:+919876543210" className="text-accent font-semibold hover:underline">
              +91 98765 43210
            </a>
          </div>

          {/* Address */}
          <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={32} className="text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Address</h3>
            <p className="text-gray-600">
              Bangalore, India<br />
              South India Operations
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="City, State"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Select Service(s)
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                >
                  <option value="">Choose a service...</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-4 bg-accent text-primary font-bold rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                Send via WhatsApp
              </button>
            </form>

            {/* Success Message */}
            {submitted && (
              <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                <CheckCircle size={24} className="text-green-600" />
                <div>
                  <p className="font-semibold text-green-900">Message sent successfully!</p>
                  <p className="text-sm text-green-800">Our team will contact you soon.</p>
                </div>
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="bg-primary text-white rounded-lg p-8 md:p-12 h-fit">
            <h3 className="text-2xl font-bold mb-8">Why Choose A19 Connects?</h3>
            <ul className="space-y-4 mb-8">
              {[
                'Expert team with 10+ years of experience',
                'Customized solutions for your business',
                'Proven track record with 500+ clients',
                '24/7 customer support and assistance',
                'Multi-service approach to marketing',
                'Dedicated account managers',
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-accent mt-1 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-8 border-t border-gray-700">
              <p className="text-gray-300 text-sm">
                Have urgent inquiries? Reach out to us immediately via WhatsApp or phone for instant support.
              </p>
            </div>
          </div>
        </div>
      </section>

     
    </main>
  );
}
