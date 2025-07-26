import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronRight } from "lucide-react";

export const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "É para quem nunca falou em público?",
      answer: "Sim! O curso é perfeito tanto para iniciantes quanto para quem já tem alguma experiência. Começamos do básico e evoluímos gradualmente, respeitando o ritmo de cada aluno."
    },
    {
      question: "Posso aplicar no trabalho?",
      answer: "Absolutamente! As técnicas são voltadas para situações reais: reuniões, apresentações, negociações, liderança de equipes e comunicação corporativa em geral."
    },
    {
      question: "Preciso aparecer em vídeo?",
      answer: "Não é obrigatório! O curso tem exercícios opcionais de gravação para quem quiser praticar, mas você pode fazer todo o treinamento sem se expor se preferir."
    },
    {
      question: "Por quanto tempo terei acesso?",
      answer: "Você pode fazer o curso no seu ritmo e revisitar o conteúdo sempre que quiser. O acesso é garantido por tempo determinado conforme descrito na oferta."
    },
    {
      question: "Funciona para pessoas muito tímidas?",
      answer: "Sim! Nosso método foi especialmente desenvolvido para quebrar barreiras da timidez. Começamos trabalhando a mentalidade e autoconfiança antes de partir para a prática."
    },
    {
      question: "Tem suporte se eu tiver dúvidas?",
      answer: "Sim! Oferecemos suporte exclusivo via WhatsApp para esclarecer dúvidas sobre o conteúdo e te ajudar na sua jornada de desenvolvimento."
    }
  ];

  return (
    <section className="py-32 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Esclarecemos as principais dúvidas sobre o curso
          </p>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-card-brand border-2 border-primary/10 overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left hover:bg-muted/50 transition-colors flex items-center justify-between"
                  >
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    {openFaq === index ? 
                      <ChevronDown className="text-primary" size={24} /> : 
                      <ChevronRight className="text-primary" size={24} />
                    }
                  </button>
                  
                  {openFaq === index && (
                    <div className="px-6 pb-6 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed mt-4">{faq.answer}</p>
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