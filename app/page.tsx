"use client";

import { VVVHero } from "@/components/VVVHero";
import { VVVProduct } from "@/components/VVVProduct";
import { VVVTargetAudience } from "@/components/VVVTargetAudience";
import { VVVPillars } from "@/components/VVVPillars";
import { VVVContent } from "@/components/VVVContent";
import { VVVCreator } from "@/components/VVVCreator";
import { Testimonials } from "@/components/Testimonials";
import { VVVObjections } from "@/components/VVVObjections";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen">
      <VVVHero />
      <VVVProduct />
      <VVVTargetAudience />
      <VVVPillars />
      <VVVContent />
      <VVVCreator />
      <Testimonials />
      <VVVObjections />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
