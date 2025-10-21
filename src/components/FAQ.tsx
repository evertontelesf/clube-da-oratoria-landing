"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronRight } from "lucide-react";
export const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const faqs = [
    {
      question: "É para quem nunca falou em público?",
      answer:
        "Sim! O curso é perfeito tanto para iniciantes quanto para quem já tem alguma experiência. Começamos do básico e evoluímos gradualmente, respeitando o ritmo de cada aluno.",
    },
    {
      question: "Posso aplicar no trabalho?",
      answer:
        "Absolutamente! As técnicas são voltadas para situações reais: reuniões, apresentações, negociações, liderança de equipes e comunicação corporativa em geral.",
    },
    {
      question: "Preciso aparecer em vídeo?",
      answer:
        "Não é obrigatório! O curso tem exercícios opcionais de gravação para quem quiser praticar, mas você pode fazer todo o treinamento sem se expor se preferir.",
    },
    {
      question: "Por quanto tempo terei acesso?",
      answer:
        "Você pode fazer o curso no seu ritmo e revisitar o conteúdo sempre que quiser. O acesso é garantido por tempo determinado conforme descrito na oferta.",
    },
    {
      question: "Funciona para pessoas muito tímidas?",
      answer:
        "Sim! Nosso método foi especialmente desenvolvido para quebrar barreiras da timidez. Começamos trabalhando a mentalidade e autoconfiança antes de partir para a prática.",
    },
    {
      question: "Tem suporte se eu tiver dúvidas?",
      answer:
        "Sim! Oferecemos suporte exclusivo via WhatsApp para esclarecer dúvidas sobre o conteúdo e te ajudar na sua jornada de desenvolvimento.",
    },
  ];
  return (
    <section className="py-16 lg:py-32 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Perguntas <span className="text-primary">Frequentes</span>
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre o curso
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className={`shadow-lg border-2 overflow-hidden transition-all duration-300 ${
                  openFaq === index
                    ? "border-primary bg-orange-50"
                    : "border-gray-200 bg-white hover:border-primary/50"
                }`}>
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 group">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      openFaq === index ? "bg-primary" : "bg-gray-200 group-hover:bg-primary/20"
                    }`}>
                      {openFaq === index ? (
                        <ChevronDown className="text-white" size={20} />
                      ) : (
                        <ChevronRight className="text-gray-600 group-hover:text-primary" size={20} />
                      )}
                    </div>
                  </button>

                  {openFaq === index && (
                    <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
                      <div className="pt-4 border-t border-primary/20">
                        <p className="text-gray-700 leading-relaxed text-base">
                          {faq.answer}
                        </p>
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
