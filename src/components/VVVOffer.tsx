import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle, ArrowRight } from "lucide-react";
import { LeadCaptureDialog } from "./LeadCaptureDialog";
export const VVVOffer = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const features = ["Mais de 6 horas de conteúdo exclusivo", "4 módulos completos + aula inaugural", "Atividades práticas para aplicar", "Mentorias gravadas exclusivas", "Comunidade fechada de alunos", "Certificado de conclusão"];
  return <section className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Oferta <span className="text-slate-50">Especial</span>
          </h2>
          <p className="text-xl mb-12 text-zinc-950">
            Transforme sua comunicação agora com condições exclusivas
          </p>
          
          <Card className="shadow-brand border-2 border-primary/30 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                
                
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                    <Shield size={20} />
                    <span className="font-medium">7 dias de garantia</span>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="text-foreground">{feature}</span>
                  </div>)}
              </div>
              
              <Button variant="cta-pulse" size="xl" className="w-full mb-4" onClick={() => setIsDialogOpen(true)}>
                Quero me comunicar com confiança
                <ArrowRight className="ml-2" />
              </Button>
              
              <p className="text-sm text-muted-foreground">
                Garantia incondicional de 7 dias. Se não gostar do curso por qualquer motivo, 
                devolvemos 100% do valor.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <LeadCaptureDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>;
};