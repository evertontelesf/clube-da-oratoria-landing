import { Card, CardContent } from "@/components/ui/card";
import { Play, Users, Gift } from "lucide-react";

export const VVVContent = () => {
  const modules = [
    { title: "Aula Inaugural", description: "Imersiva, com personagens internos" },
    { title: "Módulo 1: Mentalidade", description: "Quebra de crenças e desbloqueio emocional" },
    { title: "Módulo 2: Autenticidade", description: "Descubra sua voz única" },
    { title: "Módulo 3: Assertividade", description: "Técnicas práticas de comunicação" },
    { title: "Módulo 4: Atração", description: "Storytelling e presença magnética" }
  ];

  const bonuses = [
    "Mentorias gravadas exclusivas",
    "Atividades práticas para aplicar o conhecimento",
    "Comunidade fechada de alunos"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            🌟 Conteúdo do Curso
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            O que você vai receber
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">📚 Módulos Principais</h3>
              <div className="space-y-4">
                {modules.map((module, index) => (
                  <Card key={index} className="shadow-card-brand border-2 border-primary/10">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <Play className="text-primary" size={20} />
                        <div>
                          <h4 className="font-semibold">{module.title}</h4>
                          <p className="text-sm text-muted-foreground">{module.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">🎁 Bônus Exclusivos</h3>
              <Card className="shadow-card-brand border-2 border-accent/30 bg-accent/5">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {bonuses.map((bonus, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Gift className="text-accent flex-shrink-0" size={20} />
                        <p className="font-medium">{bonus}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};