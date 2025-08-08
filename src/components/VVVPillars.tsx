import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, Zap, ArrowRight } from "lucide-react";
import { LeadCaptureDialog } from "./LeadCaptureDialog";
export const VVVPillars = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const pillars = [{
    icon: Heart,
    title: "1. Autenticidade",
    description: "Descubra quem você é na fala. Desconstrua expectativas irreais, recupere sua voz verdadeira e pare de tentar agradar a todos."
  }, {
    icon: MessageSquare,
    title: "2. Assertividade",
    description: "Aprenda a se expressar com clareza, objetividade e confiança. Entonação, dicção, estrutura, vocabulário e organização de ideias."
  }, {
    icon: Zap,
    title: "3. Atração",
    description: "Comunique de forma magnética: linguagem não verbal, storytelling, empatia e conexão com o público. Seja lembrado."
  }];
  return <section className="py-16 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-950 px-2">
            As <span className="text-primary">3 Dimensões</span> da Oratória
          </h2>
          <p className="text-lg md:text-xl text-center mb-8 md:mb-12 text-zinc-950 px-2">
            O que você vai aprender para se tornar um comunicador irresistível
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {pillars.map((pillar, index) => <Card key={index} className="shadow-card-brand hover:shadow-brand transition-all duration-300 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <pillar.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground">{pillar.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>)}
          </div>
          
          <div className="text-center mt-12">
            
          </div>
        </div>
      </div>
      
      <LeadCaptureDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>;
};