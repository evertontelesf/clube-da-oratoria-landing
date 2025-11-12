"use client";

import { Button } from "@/components/ui/button";
import { BsWhatsapp } from "react-icons/bs";

export const WhatsAppButton = () => {
  const whatsappNumber = "5531993800887";
  const message = "Olá! Tenho interesse no Clube da Oratória e gostaria de saber mais informações.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className="rounded-full flex items-center justify-center bg-green-500 text-white w-14 h-14 shadow-2xl"
        onClick={() => window.open(whatsappUrl, '_blank')}
      >
        <BsWhatsapp size={28} className=" flex-shrink-0"/>
       
      </button>
    </div>
  );
};