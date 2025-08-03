import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import { LeadCaptureDialog } from "./LeadCaptureDialog";

export const VVVFinalCTA = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Sua <span className="text-primary">Transformação</span> Começa Agora
          </h2>
          
          <Card className="shadow-brand border-2 border-primary/30 bg-white/95 backdrop-blur-sm mb-8">
            <CardContent className="p-8">
              <p className="text-xl md:text-2xl font-bold mb-6 text-foreground">
                Se você sente que já perdeu oportunidades por medo de se expressar... 
                o Clube da Oratória é pra você.
              </p>
              
              <div className="bg-primary/10 rounded-lg p-6 mb-8">
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-primary" size={16} />
                    <span>Mais de 6h de conteúdo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-primary" size={16} />
                    <span>Garantia de 7 dias</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-primary" size={16} />
                    <span>Certificado incluso</span>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="cta-pulse" 
                size="xl" 
                className="w-full mb-6"
                onClick={() => setIsDialogOpen(true)}
              >
                Quero me comunicar com confiança
                <ArrowRight className="ml-2" />
              </Button>
              
              <p className="text-sm text-muted-foreground">
                Clique no botão acima e comece agora sua transformação.
              </p>
            </CardContent>
          </Card>
          
          <p className="text-gray-300 text-lg">
            Não deixe que o medo de se expressar continue limitando suas oportunidades. 
            O momento é agora.
          </p>
        </div>
      </div>
      
      <LeadCaptureDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
      />
    </section>
  );
};