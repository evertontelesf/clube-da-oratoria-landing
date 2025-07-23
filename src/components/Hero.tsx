import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="mb-8">
          <img 
            src={logo} 
            alt="Clube da Oratória" 
            className="h-20 w-20 mx-auto mb-4"
          />
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Aprenda a se comunicar com{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              clareza, confiança
            </span>{" "}
            e autenticidade
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Desbloqueie sua voz, vença a timidez e torne-se impossível de ser ignorado
        </p>
        
        <Button variant="cta" size="xl" className="animate-pulse">
          Quero entrar no Clube
          <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
};