import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadCaptureDialog } from "./LeadCaptureDialog";
export const VVVObjections = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const objections = [
    {
      objection: "Mas eu sou muito tímido",
      response:
        "Por isso mesmo o curso existe. Começa do zero e te guia passo a passo.",
    },
    {
      objection: "Não tenho tempo",
      response:
        "As aulas são curtas, diretas e você pode assistir no seu ritmo.",
    },
    {
      objection: "Tenho medo de me expor",
      response: "A exposição é gradual e respeita o seu momento.",
    },
    {
      objection: "Será que funciona mesmo?",
      response: "Temos 7 dias de garantia total. Teste sem risco.",
    },
    {
      objection: "É muito caro para mim",
      response:
        "Dividimos em até 12x. Invista no seu futuro por menos de UM REAL por dia.",
    },
    {
      objection: "Já tentei outros cursos",
      response:
        "Nossa metodologia única com os 3 pilares é diferente de tudo que existe.",
    },
  ];
  return (
    <section className="py-10 lg:py-32 bg-gradient-subtle ">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-zinc-950 md:text-5xl">
            Objeções Comuns
          </h2>
          <p className="text-xl text-center mb-12 text-gray-950">
            Respondendo suas principais dúvidas
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {objections.map((item, index) => (
              <Card
                key={index}
                className="shadow-card-brand border-2 border-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <X className="text-red-500 mt-1 flex-shrink-0" size={24} />
                    <p className="text-lg font-medium text-foreground">
                      "{item.objection}"
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle
                      className="text-primary mt-1 flex-shrink-0"
                      size={24}
                    />
                    <p className="text-muted-foreground">{item.response}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
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
              Quero me comunicar com confiança
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <LeadCaptureDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
};
