"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

export const WhatsAppButton = () => {
  const whatsappNumber = "5531993800887";
  const message = "Olá! Tenho interesse no Clube da Oratória e gostaria de saber mais informações.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="whatsapp"
        size="lg"
        className="rounded-full shadow-2xl"
        onClick={() => window.open(whatsappUrl, '_blank')}
      >
        <MessageCircle size={24} />
        <span className="hidden sm:inline">Fale comigo no WhatsApp</span>
      </Button>
    </div>
  );
};