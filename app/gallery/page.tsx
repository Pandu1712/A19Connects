'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyContact } from '@/components/sticky-contact';
import { useState } from 'react';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleries = [
    {
      id: 1,
      category: 'healthcare',
      title: 'Hospital Campaign Launch',
      description: 'Strategic marketing campaign for City Medical Center',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
    },
    {
      id: 2,
      category: 'properties',
      title: 'Luxury Property Showcase',
      description: 'Premium residential property portfolio marketing',
      image: 'bg-gradient-to-br from-orange-400 to-orange-600',
    },
    {
      id: 3,
      category: 'campaigns',
      title: 'Digital Marketing Campaign',
      description: 'Multi-channel marketing campaign execution',
      image: 'bg-gradient-to-br from-purple-400 to-purple-600',
    },
    {
      id: 4,
      category: 'digital',
      title: 'Website Redesign',
      description: 'Complete digital transformation project',
      image: 'bg-gradient-to-br from-green-400 to-green-600',
    },
    {
      id: 5,
      category: 'healthcare',
      title: 'Healthcare Brand Strategy',
      description: 'Comprehensive brand positioning and messaging',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
    },
    {
      id: 6,
      category: 'properties',
      title: 'Commercial Real Estate',
      description: 'Office space marketing and leasing campaign',
      image: 'bg-gradient-to-br from-orange-400 to-orange-600',
    },
    {
      id: 7,
      category: 'campaigns',
      title: 'Social Media Campaign',
      description: 'Viral social media marketing initiative',
      image: 'bg-gradient-to-br from-purple-400 to-purple-600',
    },
    {
      id: 8,
      category: 'digital',
      title: 'Content Marketing',
      description: 'Strategic content development and distribution',
      image: 'bg-gradient-to-br from-green-400 to-green-600',
    },
    {
      id: 9,
      category: 'healthcare',
      title: 'Medical Services Marketing',
      description: 'Healthcare services promotion and awareness',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'properties', label: 'Properties' },
    { id: 'campaigns', label: 'Campaigns' },
    { id: 'digital', label: 'Digital' },
  ];

  const filteredGalleries = selectedCategory === 'all'
    ? galleries
    : galleries.filter((g) => g.category === selectedCategory);

  return (
    <main className="min-h-screen bg-white">
     
      <StickyContact />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work Gallery</h1>
          <p className="text-lg text-gray-200">
            Showcasing our successful projects and marketing campaigns
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-accent text-primary shadow-lg'
                  : 'bg-gray-100 text-foreground hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGalleries.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className={`w-full h-48 ${item.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-4xl">
                    🔍
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full mb-3">
                  {categories.find((c) => c.id === item.category)?.label}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>

                {/* Hover CTA */}
                {/* <div className="mt-4 pt-4 border-t border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-accent font-semibold text-sm hover:gap-2 transition-all flex items-center gap-1">
                    View Details
                    <span>→</span>
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredGalleries.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No projects found in this category.</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
     {/*  <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Impressed by Our Work?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Let's create something amazing together. Our team is ready to bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:shadow-lg transition-all"
          >
            Start Your Project
            <span>→</span>
          </a>
        </div>
      </section>
 */}
    </main>
  );
}
