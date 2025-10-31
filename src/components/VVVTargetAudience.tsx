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
    "Pra quem quer liderar com respeito e autoridade, seja em casa ou no trabalho",
  ];
  return (
    <section className="py-16 md:py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-orange-500 px-2">
            Pra quem é esse <span className="text-primary">curso</span>
          </h2>

          <Card className="shadow-card-brand border-2 border-primary/20">
            <CardContent className="p-6 md:p-8">
              <div className="grid gap-4 md:gap-6">
                {targetPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 md:gap-4">
                    <CheckCircle
                      className="text-primary mt-1 flex-shrink-0"
                      size={20}
                    />
                    <p className="text-base md:text-lg text-foreground">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8 md:mt-12 px-4">
            <Button
              variant="cta"
              size="xl"
              className="w-full md:w-auto text-sm md:text-lg"
              onClick={() => {
                window.open(
                  "https://pay.hub.la/QfP7RDivS3zNjbRWqtx6?_path=/checkout/QfP7RDivS3zNjbRWqtx6 ",
                  "_blank"
                );
              }}>
              Quero me comunicar com confiança
            </Button>
          </div>
        </div>
      </div>

      <LeadCaptureDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
};
