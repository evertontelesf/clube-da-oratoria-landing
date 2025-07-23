import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TargetAudience } from "@/components/TargetAudience";
import { Benefits } from "@/components/Benefits";
import { Method } from "@/components/Method";
import { Testimonials } from "@/components/Testimonials";
import { Curriculum } from "@/components/Curriculum";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <TargetAudience />
      <Benefits />
      <Method />
      <Testimonials />
      <Curriculum />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
