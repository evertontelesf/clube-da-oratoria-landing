import { Mic, Users, Target, Shield, Star, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Benefits = () => {
  const benefits = [
    {
      icon: Mic,
      title: "Falar com segurança",
      description: "Domine técnicas para se expressar com clareza e confiança em qualquer situação"
    },
    {
      icon: Star,
      title: "Ser notado em qualquer ambiente",
      description: "Desenvolva presença marcante que faz você se destacar naturalmente"
    },
    {
      icon: Target,
      title: "Convencer e influenciar pessoas",
      description: "Aprenda a persuadir e inspirar através da comunicação autêntica"
    },
    {
      icon: Shield,
      title: "Vencer o medo e a timidez",
      description: "Supere bloqueios emocionais e fale sem medo do julgamento"
    },
    {
      icon: Users,
      title: "Ter autenticidade e presença",
      description: "Seja genuinamente você mesmo enquanto impacta positivamente"
    },
    {
      icon: TrendingUp,
      title: "Aumentar vendas e oportunidades",
      description: "Use a comunicação como ferramenta para crescimento profissional"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Benefícios e <span className="text-primary">Transformações</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            O que você vai conquistar com o Clube da Oratória
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-card-brand hover:shadow-brand transition-all duration-300 border-2 border-primary/10 hover:border-primary/30">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};