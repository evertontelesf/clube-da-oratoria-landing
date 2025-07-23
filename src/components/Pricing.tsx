import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Infinity, ArrowRight } from "lucide-react";

export const Pricing = () => {
  const features = [
    "Acesso vitalício a todo o conteúdo",
    "4 módulos completos com 41 aulas",
    "Atualizações futuras incluídas",
    "Suporte exclusivo via WhatsApp",
    "Certificado de conclusão",
    "Exercícios práticos e dinâmicas"
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Investimento e <span className="text-primary">Garantia</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Transforme sua comunicação com um investimento que cabe no seu bolso
          </p>
          
          <Card className="shadow-brand border-2 border-primary/30 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="inline-block bg-primary/10 rounded-full px-6 py-2 mb-4">
                  <span className="text-primary font-semibold">OFERTA LIMITADA</span>
                </div>
                
                <div className="mb-6">
                  <span className="text-6xl font-bold text-foreground">R$ 697</span>
                  <div className="text-muted-foreground mt-2">
                    à vista ou <strong className="text-foreground">12x de R$ 69,90</strong>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                    <Shield size={20} />
                    <span className="font-medium">7 dias de garantia</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                    <Infinity size={20} />
                    <span className="font-medium">Acesso vitalício</span>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-primary/5 rounded-lg p-6 mb-8">
                <h4 className="font-bold text-lg mb-2">🎁 Bônus Exclusivos Incluídos:</h4>
                <p className="text-muted-foreground">
                  Acesso vitalício + todas as atualizações futuras + suporte exclusivo
                </p>
              </div>
              
              <Button variant="cta" size="xl" className="w-full mb-4">
                Quero entrar agora
                <ArrowRight className="ml-2" />
              </Button>
              
              <p className="text-sm text-muted-foreground">
                Satisfação 100% garantida ou seu dinheiro de volta em 7 dias
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};