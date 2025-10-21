"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Users, Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadCaptureDialog } from "./LeadCaptureDialog";
export const VVVContent = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const modules = [
    {
      number: "00",
      title: "Aula Inaugural",
      description: "Imersiva, com personagens internos",
      duration: "45 min"
    },
    {
      number: "01",
      title: "Mentalidade",
      description: "Quebra de crenças e desbloqueio emocional",
      duration: "1h 30min"
    },
    {
      number: "02",
      title: "Autenticidade",
      description: "Descubra sua voz única",
      duration: "1h 15min"
    },
    {
      number: "03",
      title: "Assertividade",
      description: "Técnicas práticas de comunicação",
      duration: "1h 45min"
    },
    {
      number: "04",
      title: "Atração",
      description: "Storytelling e presença magnética",
      duration: "1h 30min"
    },
  ];
  const bonuses = [
    {
      title: "Mentorias Gravadas",
      description: "Sessões exclusivas com casos reais"
    },
    {
      title: "Atividades Práticas",
      description: "Exercícios para aplicar o conhecimento"
    },
    {
      title: "Comunidade Exclusiva",
      description: "Grupo fechado de alunos para networking"
    },
  ];
  return (
    <section className="py-10 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-orange-500 md:text-5xl">
            Conteúdo do Curso
          </h2>
          <p className="text-xl text-center mb-12 text-zinc-950">
            O que você vai receber
          </p>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-primary">
              📚 Módulos Principais
            </h3>
            <div className="space-y-3">
              {modules.map((module, index) => (
                <Card
                  key={index}
                  className="shadow-card-brand border-2 border-primary/10 hover:border-primary/30 transition-all hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                        {module.number}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-lg">{module.title}</h4>
                          <span className="text-sm text-primary font-medium">{module.duration}</span>
                        </div>
                        <p className="text-muted-foreground">
                          {module.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center text-primary">
              🎁 Bônus Exclusivos
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {bonuses.map((bonus, index) => (
                <Card key={index} className="shadow-card-brand border-2 border-primary/20 bg-gradient-subtle hover:scale-105 transition-transform">
                  <CardContent className="p-6 text-center">
                    <Gift className="text-primary mx-auto mb-4" size={40} />
                    <h4 className="font-bold text-lg mb-2">{bonus.title}</h4>
                    <p className="text-sm text-muted-foreground">{bonus.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="cta"
              size="xl"
              onClick={() => {
                window.open(
                  "https://pay.hub.la/QfP7RDivS3zNjbRWqtx6?_path=/checkout/QfP7RDivS3zNjbRWqtx6 ",
                  "_blank"
                );
              }}>
              Quero me comunicar com assertividade
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <LeadCaptureDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
};
