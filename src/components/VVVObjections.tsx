"use client";

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
    <section className="py-16 lg:py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Talvez você esteja pensando...
            </h2>
            <p className="text-xl text-gray-600">
              Veja como o Clube da Oratória resolve suas <span className="text-primary font-semibold">principais dúvidas</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {objections.map((item, index) => (
              <Card
                key={index}
                className="group shadow-lg border-2 border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <X className="text-red-600" size={18} />
                      </div>
                      <p className="text-lg font-bold text-gray-900 leading-tight">
                        "{item.objection}"
                      </p>
                    </div>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-primary">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="text-white" size={16} />
                      </div>
                      <p className="text-gray-800 font-medium leading-relaxed">{item.response}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 bg-white rounded-2xl p-4 md:p-16 shadow-2xl border-2 border-primary/20">
            <p className="text-2xl font-bold text-primary mb-6">
              Ainda tem dúvidas? Vamos resolver isso juntos!
            </p>
            <Button
              variant="cta"
              className="w-full md:w-auto"
              size="lg"
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
