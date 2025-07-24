import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const VVVTargetAudience = () => {
  const targetPoints = [
    "Pra quem trava em conversas importantes",
    "Pra quem quer liderar com autoridade", 
    "Pra quem sente que não é levado a sério no trabalho",
    "Pra quem sofre com timidez ou insegurança",
    "Pra quem quer vender melhor suas ideias, produtos ou serviços",
    "Pra quem deseja se expressar com verdade, carisma e presença"
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            Para quem é esse <span className="text-brand-orange">curso</span>
          </h2>
          
          <Card className="shadow-card-brand border-2 border-brand-orange/20 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid gap-6">
                {targetPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="text-brand-orange mt-1 flex-shrink-0" size={24} />
                    <p className="text-lg text-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};