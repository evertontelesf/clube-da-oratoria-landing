"use client";

import { Quote } from "lucide-react";
import Image from "next/image";

export const VVVCreator = () => {
  return (
    <section className="py-20 md:py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Conheça o <span className="text-primary">Everton Teles</span>
            </h2>
            <p className="text-xl text-gray-600">Mentor de Oratória e Comunicação</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <div className="flex gap-3">
                  <Quote className="text-primary flex-shrink-0 mt-1" size={24} />
                  <p>
                    Desde criança, Everton Teles sentia que precisava ser ouvido. Entre apresentações na escola, palcos de teatro e experiências com música e comunicação, descobriu que <strong>falar bem não era um dom — era uma habilidade que podia ser desenvolvida.</strong>
                  </p>
                </div>
                
                <p>
                  Com o tempo, transformou a timidez em presença, a insegurança em confiança e aprendeu que uma boa comunicação abre portas em qualquer área da vida.
                </p>
                
                <p>
                  Hoje, é <strong className="text-primary">apresentador, mentor de oratória e especialista em comunicação</strong>, já tendo ajudado centenas de pessoas a destravarem a fala, vencerem o medo de se expor e conquistarem oportunidades que antes pareciam distantes.
                </p>
                
                <div className="bg-orange-50 border-l-4 border-primary p-6 rounded-r-lg">
                  <p className="font-medium text-gray-900">
                    Criador dos cursos "Apareça nos Stories", "Comunicação Assertiva" e agora do Clube da Oratória, Everton dedica sua vida a ensinar pessoas comuns a se tornarem comunicadores autênticos, carismáticos e impossíveis de serem ignorados.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
                <Image
                  src="/lovable-uploads/674be516-37e4-4ca1-bee1-6a80546e3ed0.png"
                  alt="Everton Teles"
                  width={600}
                  height={800}
                  loading="lazy"
                  className="relative w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};