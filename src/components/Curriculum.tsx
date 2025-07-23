import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronRight, Play, Clock, Users } from "lucide-react";

export const Curriculum = () => {
  const [openModule, setOpenModule] = useState<number | null>(0);

  const modules = [
    {
      title: "Módulo 1 – Mentalidade",
      subtitle: "Quebra de crenças e desbloqueio emocional",
      duration: "2h 30min",
      lessons: 8,
      content: [
        "Identificando e quebrando crenças limitantes",
        "Superando o medo do julgamento",
        "Desenvolvendo autoconfiança genuína",
        "Técnicas de respiração e controle da ansiedade"
      ]
    },
    {
      title: "Módulo 2 – Autenticidade", 
      subtitle: "Descubra sua voz e identidade comunicacional",
      duration: "3h 15min",
      lessons: 10,
      content: [
        "Encontrando sua voz única",
        "Alinhando comunicação com personalidade",
        "Desenvolvendo naturalidade ao falar",
        "Exercícios práticos de autoconhecimento"
      ]
    },
    {
      title: "Módulo 3 – Assertividade",
      subtitle: "Técnicas práticas de fala, dicção e entonação",
      duration: "4h 20min", 
      lessons: 12,
      content: [
        "Técnicas avançadas de dicção e entonação",
        "Linguagem corporal impactante",
        "Como estruturar ideias com clareza",
        "Práticas de improvisação e espontaneidade"
      ]
    },
    {
      title: "Módulo 4 – Atração",
      subtitle: "Storytelling, carisma e influência",
      duration: "3h 45min",
      lessons: 11,
      content: [
        "Arte do storytelling persuasivo",
        "Desenvolvendo carisma natural",
        "Técnicas de influência ética",
        "Criando conexão emocional com a audiência"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            O que você vai <span className="text-primary">aprender</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Conteúdo completo dividido em 4 módulos práticos
          </p>
          
          <div className="space-y-4">
            {modules.map((module, index) => (
              <Card key={index} className="shadow-card-brand border-2 border-primary/20 overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenModule(openModule === index ? null : index)}
                    className="w-full p-6 text-left hover:bg-muted/50 transition-colors flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                      <p className="text-primary font-medium mb-2">{module.subtitle}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          {module.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Play size={16} />
                          {module.lessons} aulas
                        </div>
                      </div>
                    </div>
                    {openModule === index ? 
                      <ChevronDown className="text-primary" size={24} /> : 
                      <ChevronRight className="text-primary" size={24} />
                    }
                  </button>
                  
                  {openModule === index && (
                    <div className="px-6 pb-6 border-t border-border">
                      <div className="grid gap-3 mt-4">
                        {module.content.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-foreground">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};