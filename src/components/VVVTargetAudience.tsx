import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LeadCaptureDialog } from "./LeadCaptureDialog";

export const VVVTargetAudience = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const targetPoints = [
    "Pra quem trava em conversas importantes",
    "Pra quem sente que não é levado a sério no trabalho",
    "Pra quem quer vender melhor suas ideias, produtos ou serviços",
    "Pra quem deseja se expressar com verdade, carisma e presença",
    "Pra quem não aguenta mais passar os fins de semana sozinho",
    "Pra quem sente o rosto pegar fogo toda vez que é chamado para falar em público",
    "Pra quem sempre desiste de abrir a boca e dar uma ideia, com medo de julgamentos",
    "Pra quem quer liderar com respeito e autoridade, seja em casa ou no trabalho"
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            Pra quem é esse <span className="text-primary">curso</span>
          </h2>
          
          <Card className="shadow-card-brand border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="grid gap-6">
                {targetPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={24} />
                    <p className="text-lg text-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center mt-12">
            <Button 
              variant="cta" 
              size="xl"
              onClick={() => setIsDialogOpen(true)}
            >
              Quero me comunicar com confiança
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