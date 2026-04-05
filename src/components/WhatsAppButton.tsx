import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform duration-300 pulse-ring"
    >
      <MessageCircle size={30} fill="currentColor" />
    </a>
  );
}
