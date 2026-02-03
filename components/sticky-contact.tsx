'use client';

import { MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';

export function StickyContact() {
  const [showTooltipWhatsApp, setShowTooltipWhatsApp] = useState(false);
  const [showTooltipCall, setShowTooltipCall] = useState(false);

  const whatsappNumber = '919876543210';
  const phoneNumber = '+919876543210';
  const defaultMessage = 'Hello A19 Connects, I would like to inquire about your services.';

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <div className="relative">
        <button
          onMouseEnter={() => setShowTooltipWhatsApp(true)}
          onMouseLeave={() => setShowTooltipWhatsApp(false)}
          onClick={() => {
            window.open(
              `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`,
              '_blank'
            );
          }}
          className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200 hover:bg-green-600"
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle size={28} />
        </button>
        {showTooltipWhatsApp && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg whitespace-nowrap text-sm">
            Chat with us on WhatsApp
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
          </div>
        )}
      </div>

      {/* Call Button */}
      <div className="relative">
        <button
          onMouseEnter={() => setShowTooltipCall(true)}
          onMouseLeave={() => setShowTooltipCall(false)}
          onClick={() => {
            window.location.href = `tel:${phoneNumber}`;
          }}
          className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200 hover:bg-blue-700"
          aria-label="Call us"
        >
          <Phone size={28} />
        </button>
        {showTooltipCall && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg whitespace-nowrap text-sm">
            Call us now
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
          </div>
        )}
      </div>
    </div>
  );
}
