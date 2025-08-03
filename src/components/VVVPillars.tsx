import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, Zap, ArrowRight } from "lucide-react";
import { LeadCaptureDialog } from "./LeadCaptureDialog";

export const VVVPillars = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const pillars = [
    {
      icon: Heart,
      title: "1. Autenticidade",
      description: "Descubra quem você é na fala. Desconstrua expectativas irreais, recupere sua voz verdadeira e pare de tentar agradar a todos."
    },
    {
      icon: MessageSquare,
      title: "2. Assertividade", 
      description: "Aprenda a se expressar com clareza, objetividade e confiança. Entonação, dicção, estrutura, vocabulário e organização de ideias."
    },
    {
      icon: Zap,
      title: "3. Atração",
      description: "Comunique de forma magnética: linguagem não verbal, storytelling, empatia e conexão com o público. Seja lembrado."
    }
  ];

  return (
    <section className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            As <span className="text-primary">3 Dimensões</span> da Oratória
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            O que você vai aprender para se tornar um comunicador irresistível
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={index} className="shadow-card-brand hover:shadow-brand transition-all duration-300 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <pillar.icon className="text-white" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="cta" 
              size="xl"
              onClick={() => setIsDialogOpen(true)}
            >
              Quero me comunicar com confiança
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
      
      <LeadCaptureDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
      />
    </section>
  );
};