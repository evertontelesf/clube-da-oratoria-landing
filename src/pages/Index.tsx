import { VVVHero } from "@/components/VVVHero";
import { VVVProduct } from "@/components/VVVProduct";
import { VVVTargetAudience } from "@/components/VVVTargetAudience";
import { VVVPillars } from "@/components/VVVPillars";
import { VVVContent } from "@/components/VVVContent";
import { VVVCreator } from "@/components/VVVCreator";
import { Testimonials } from "@/components/Testimonials";
import { VVVOffer } from "@/components/VVVOffer";
import { VVVObjections } from "@/components/VVVObjections";
import { FAQ } from "@/components/FAQ";
import { VVVFinalCTA } from "@/components/VVVFinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <VVVHero />
      <VVVProduct />
      <VVVTargetAudience />
      <VVVPillars />
      <VVVContent />
      <VVVCreator />
      <Testimonials />
      <VVVOffer />
      <FAQ />
      <VVVObjections />
      <VVVFinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
