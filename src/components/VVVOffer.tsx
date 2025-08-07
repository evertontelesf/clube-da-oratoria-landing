import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle, ArrowRight } from "lucide-react";
import { LeadCaptureDialog } from "./LeadCaptureDialog";
export const VVVOffer = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const features = ["Mais de 6 horas de conteúdo exclusivo", "4 módulos completos + aula inaugural", "Atividades práticas para aplicar", "Mentorias gravadas exclusivas", "Comunidade fechada de alunos", "Certificado de conclusão"];
  return (
    <section className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-orange-500">
            Oferta <span className="text-primary">Especial</span>
          </h2>
          <p className="text-xl text-center mb-12 text-gray-950">
            Tudo que você precisa para se comunicar com confiança
          </p>
          
          <Card className="shadow-card-brand border-2 border-primary/10 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-primary">O que você vai receber:</h3>
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="mb-6">
                    <p className="text-lg text-muted-foreground mb-2">De R$ 997 por apenas</p>
                    <p className="text-4xl font-bold text-orange-500 mb-2">R$ 397</p>
                    <p className="text-sm text-muted-foreground">ou 12x de R$ 39,70</p>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 mb-6 text-primary">
                    <Shield size={20} />
                    <span className="text-sm">7 dias de garantia incondicional</span>
                  </div>
                  
                  <Button 
                    variant="cta" 
                    size="xl" 
                    className="w-full"
                    onClick={() => setIsDialogOpen(true)}
                  >
                    Quero me comunicar com assertividade
                    <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <LeadCaptureDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
};