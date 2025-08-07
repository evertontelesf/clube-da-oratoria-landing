import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import { LeadCaptureDialog } from "./LeadCaptureDialog";
export const VVVFinalCTA = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <section className="py-32 bg-gradient-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            É Hora de <span className="text-orange-300">Transformar</span> Sua Comunicação
          </h2>
          
          <p className="text-xl mb-8 opacity-90">
            Não deixe mais nenhuma oportunidade passar. Sua nova versão te espera.
          </p>
          
          <Card className="bg-white/10 backdrop-blur border-white/20 mb-8">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-orange-300" size={24} />
                  <span>Metodologia única</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-orange-300" size={24} />
                  <span>Resultados garantidos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-orange-300" size={24} />
                  <span>Suporte completo</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Button 
            variant="cta" 
            size="xl" 
            className="bg-orange-500 hover:bg-orange-600 text-white border-0"
            onClick={() => setIsDialogOpen(true)}
          >
            Garantir Minha Vaga Agora
            <ArrowRight className="ml-2" />
          </Button>
          
          <p className="text-sm mt-4 opacity-75">
            ⚡ Últimas vagas disponíveis • Garantia de 7 dias
          </p>
        </div>
      </div>
      
      <LeadCaptureDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
};