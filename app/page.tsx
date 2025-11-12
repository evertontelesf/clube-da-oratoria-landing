import dynamic from "next/dynamic";
import { VVVHero } from "@/components/VVVHero";
import { VVVProduct } from "@/components/VVVProduct";

// Lazy load components abaixo da dobra para melhorar FCP
const VVVTargetAudience = dynamic(() => import("@/components/VVVTargetAudience").then(mod => ({ default: mod.VVVTargetAudience })));
const VVVPillars = dynamic(() => import("@/components/VVVPillars").then(mod => ({ default: mod.VVVPillars })));
const VVVContent = dynamic(() => import("@/components/VVVContent").then(mod => ({ default: mod.VVVContent })));
const VVVCreator = dynamic(() => import("@/components/VVVCreator").then(mod => ({ default: mod.VVVCreator })));
const Testimonials = dynamic(() => import("@/components/Testimonials").then(mod => ({ default: mod.Testimonials })));
const VVVObjections = dynamic(() => import("@/components/VVVObjections").then(mod => ({ default: mod.VVVObjections })));
const FAQ = dynamic(() => import("@/components/FAQ").then(mod => ({ default: mod.FAQ })));
const Footer = dynamic(() => import("@/components/Footer").then(mod => ({ default: mod.Footer })));
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton").then(mod => ({ default: mod.WhatsAppButton })));

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Componentes críticos para FCP - carregam imediatamente com SSR */}
      <VVVHero />
      <VVVProduct />
      
      {/* Componentes abaixo da dobra - lazy loaded */}
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
