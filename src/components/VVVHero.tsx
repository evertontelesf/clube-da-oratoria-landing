import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-bg-orange.jpg";
import logo from "@/assets/logo.png";

export const VVVHero = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src={logo} 
              alt="Clube da Oratória" 
              className="h-16 w-16 mx-auto mb-6"
            />
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Descubra como desenvolver uma comunicação{" "}
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                autêntica, confiante e irresistível
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
              mesmo que você sinta vergonha, insegurança ou não saiba por onde começar.
            </h2>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <p className="text-lg italic text-gray-200">
              Comunicar-se bem não é um dom. É uma habilidade treinável, acessível e transformadora. 
              E pode ser a chave que está faltando entre você e as oportunidades que deseja.
            </p>
          </div>
          
          {/* VSL Placeholder */}
          <div className="relative bg-black/50 rounded-xl p-8 mb-8 border-2 border-brand-orange/30">
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <Play className="mx-auto mb-4 text-brand-orange" size={64} />
                <p className="text-xl text-gray-300">Aula Gratuita</p>
                <p className="text-sm text-gray-400">Assista à aula e entenda como a comunicação muda tudo</p>
              </div>
            </div>
            <p className="text-lg font-medium text-brand-orange">
              Assista à aula acima e entenda como a comunicação muda tudo.
            </p>
          </div>
          
          <Button variant="cta-pulse" size="xl" className="w-full mb-8">
            Quero me comunicar com confiança
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};