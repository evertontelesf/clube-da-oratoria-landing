import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, X } from "lucide-react";

export const VVVObjections = () => {
  const objections = [
    {
      objection: "Mas eu sou muito tímido",
      response: "Por isso mesmo o curso existe. Começa do zero e te guia passo a passo."
    },
    {
      objection: "Não tenho tempo",
      response: "As aulas são curtas, diretas e você pode assistir no seu ritmo."
    },
    {
      objection: "Tenho medo de me expor",
      response: "A exposição é gradual e respeita o seu momento."
    },
    {
      objection: "Será que funciona mesmo?",
      response: "Temos 7 dias de garantia total. Teste sem risco."
    },
    {
      objection: "É muito caro para mim",
      response: "Dividimos em até 12x. Invista em você por menos de R$ 70/mês."
    },
    {
      objection: "Já tentei outros cursos",
      response: "Nossa metodologia única com os 3 pilares é diferente de tudo que existe."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            🚫 Objeções <span className="text-primary">Comuns</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Respondendo suas principais dúvidas
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {objections.map((item, index) => (
              <Card key={index} className="shadow-card-brand border-2 border-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <X className="text-red-500 mt-1 flex-shrink-0" size={24} />
                    <p className="text-lg font-medium text-foreground">
                      "{item.objection}"
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={24} />
                    <p className="text-muted-foreground">
                      {item.response}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};