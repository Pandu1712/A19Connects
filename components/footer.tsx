'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/a19connects', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/a19connects', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/a19connects', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com/a19connects', label: 'YouTube' },
    { icon: MessageCircle, href: 'https://wa.me/919966202419', label: 'WhatsApp' },
  ];

  const services = [
    { label: 'A19 News', href: '/services/news' },
    { label: 'A19 Properties', href: '/services/properties' },
    { label: 'A19 Campaign', href: '/services/campaign' },
    { label: 'A19 Digital Marketing', href: '/services/digital' },
  ];

  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">A19</span>
              </div>
              <span className="text-xl font-bold">A19 Connects</span>
            </div>
            <p className="text-gray-300 text-sm">Premium marketing solutions for hospitals and businesses across South India.</p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail size={18} className="text-accent" />
                <a href="mailto:a19connects@gmail.com" className="hover:text-accent transition-colors">
                  a19connects@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone size={18} className="text-accent" />
                <a href="tel:+919966202419" className="hover:text-accent transition-colors">
                  +91 9966202419
                </a>
              </div>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-sm">Vijayawada,Prasadampadu-521108 India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-gray-300 hover:text-accent transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          {/* Social Media */}
<div>
  <h3 className="text-lg font-bold mb-4 text-accent">Follow Us</h3>

  <div className="space-y-6">

    {/* A19 Connects */}
    <div>
      <p className="text-sm text-gray-400 mb-2 font-semibold">A19 Digital Marketing</p>
      <div className="flex flex-wrap gap-3">
        {[
         /*  { icon: Facebook, href: 'https://facebook.com/a19connects', label: 'Facebook' },
          { icon: Instagram, href: 'https://instagram.com/a19connects', label: 'Instagram' }, */
          { icon: Youtube, href: 'https://www.youtube.com/@a19digitalmarketing', label: 'Youtube' },
        ].map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-10 h-10 bg-accent text-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
    </div>

    {/* A19 News */}
    <div>
      <p className="text-sm text-gray-400 mb-2 font-semibold">A19 News</p>
      <div className="flex flex-wrap gap-3">
        {[
          { icon: Youtube, href: 'https://youtube.com/@a19news?si=pO23WPbs7Zwc21SP', label: 'YouTube' },
          { icon: Facebook, href: 'https://www.facebook.com/share/16Tvizs91a/', label: 'Facebook' },
          { icon: Instagram, href: 'https://www.instagram.com/a19news?igsh=ODhxMmU2YWRybWNo', label: 'Instagram' },
        ].map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-10 h-10 bg-accent text-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
    </div>

    {/* A19 Properties */}
    <div>
      <p className="text-sm text-gray-400 mb-2 font-semibold">A19 Properties</p>
      <div className="flex flex-wrap gap-3">
        {[
          { icon: Instagram, href: 'https://www.instagram.com/a19properties?igsh=bzBtZzVva3M0bDc=', label: 'Instagram' },
          { icon: Youtube, href: 'https://www.youtube.com/@a19properties', label: 'Youtube' },
        ].map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-10 h-10 bg-accent text-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
    </div>

    {/* A19 Campaign */}
    <div>
      <p className="text-sm text-gray-400 mb-2 font-semibold">A19 Campaign</p>
      <div className="flex flex-wrap gap-3">
        {[
          { icon: MessageCircle, href: 'https://wa.me/919966202419', label: 'WhatsApp' },
          { icon: Facebook, href: 'https://facebook.com/a19campaign', label: 'Facebook' },
        ].map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-10 h-10 bg-accent text-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
    </div>

  </div>
</div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} A19 Connects. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
