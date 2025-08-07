import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Users, Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadCaptureDialog } from "./LeadCaptureDialog";
export const VVVContent = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const modules = [{
    title: "Aula Inaugural",
    description: "Imersiva, com personagens internos"
  }, {
    title: "Módulo 1: Mentalidade",
    description: "Quebra de crenças e desbloqueio emocional"
  }, {
    title: "Módulo 2: Autenticidade",
    description: "Descubra sua voz única"
  }, {
    title: "Módulo 3: Assertividade",
    description: "Técnicas práticas de comunicação"
  }, {
    title: "Módulo 4: Atração",
    description: "Storytelling e presença magnética"
  }];
  const bonuses = ["Mentorias gravadas exclusivas", "Atividades práticas para aplicar o conhecimento", "Comunidade fechada de alunos"];
  return <section className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-orange-500 md:text-5xl">
            Conteúdo do Curso
          </h2>
          <p className="text-xl text-center mb-12 text-zinc-950">
            O que você vai receber
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-white">Módulos Principais</h3>
              <div className="space-y-4">
                {modules.map((module, index) => <Card key={index} className="shadow-card-brand border-2 border-primary/10">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <Play className="text-primary" size={20} />
                        <div>
                          <h4 className="font-semibold">{module.title}</h4>
                          <p className="text-sm text-muted-foreground">{module.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-white">Bônus Exclusivos</h3>
              <Card className="shadow-card-brand border-2 border-primary/30 bg-primary/5">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {bonuses.map((bonus, index) => <div key={index} className="flex items-center gap-3">
                        <Gift className="text-primary flex-shrink-0" size={20} />
                        <p className="font-medium">{bonus}</p>
                      </div>)}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="cta" size="xl" onClick={() => setIsDialogOpen(true)}>
              Quero me comunicar com assertividade
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
      
      <LeadCaptureDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>;
};