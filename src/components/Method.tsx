import { Card, CardContent } from "@/components/ui/card";
import { Heart, MessageSquare, Zap } from "lucide-react";

export const Method = () => {
  const dimensions = [
    {
      icon: Heart,
      title: "Autenticidade",
      description: "Seja quem você é de verdade ao se comunicar",
      detail: "Descubra sua voz única e conecte-se genuinamente com as pessoas"
    },
    {
      icon: MessageSquare,
      title: "Assertividade", 
      description: "Diga o que precisa ser dito, com respeito e firmeza",
      detail: "Aprenda técnicas práticas para se posicionar com clareza e convicção"
    },
    {
      icon: Zap,
      title: "Atração",
      description: "Faça com que sua presença seja magnética e memorável",
      detail: "Desenvolva carisma natural e a capacidade de influenciar positivamente"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            O método exclusivo: As <span className="text-primary">3 Dimensões</span> da Oratória
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Uma abordagem única que transforma sua comunicação completamente
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {dimensions.map((dimension, index) => (
              <Card key={index} className="shadow-card-brand hover:shadow-brand transition-all duration-300 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <dimension.icon className="text-white" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{dimension.title}</h3>
                  <p className="text-lg font-medium mb-4 text-primary">{dimension.description}</p>
                  <p className="text-muted-foreground">{dimension.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center space-x-4 bg-primary/10 rounded-full px-8 py-4">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <div className="w-8 h-1 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-8 h-1 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};