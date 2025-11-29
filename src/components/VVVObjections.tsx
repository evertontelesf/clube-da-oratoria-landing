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

          <div className="text-center pt-20`` py-10 relative">
            {/* Decoração de fundo */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 via-transparent to-transparent rounded-3xl"></div>
            
            <div className="relative z-10">
              <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-6 uppercase tracking-wide">
                Oferta Especial
              </span>
              
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
                Clube da Oratória
              </h3>
              
              <div className="relative inline-block mb-6">
                <span className="text-2xl md:text-3xl text-gray-400 font-medium">
                  De: R$ 697,00
                </span>
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-red-500 -rotate-6 rounded-full"></div>
              </div>
              
              <p className="text-lg text-gray-600 mb-3 font-medium">
                Por apenas
              </p>
              
              <div className="mb-4">
                <span className="text-5xl md:text-7xl font-black text-primary">
                  12x
                </span>
                <span className="text-5xl md:text-7xl font-black text-primary ml-2">
                  R$ 25,10
                </span>
              </div>
              
              <p className="text-xl text-gray-600 mb-10">
                ou <span className="font-bold text-gray-900 text-2xl">R$ 247,00</span> à vista
              </p>
              
              <Button
                variant="cta"
                className="w-full md:w-auto text-xl max-md:text-lg max-md:px-8 px-12 py-7 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
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
      </div>

      <LeadCaptureDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
};
