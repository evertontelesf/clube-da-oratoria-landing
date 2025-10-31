"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { LeadCaptureDialog } from "./LeadCaptureDialog";
export const VVVProduct = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <section className="py-16 lg:py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              O que é o <span className="text-primary">Clube da Oratória</span>?
            </h2>
          </div>
          <div className="relative w-full h-[300px] md:h-[550px] mb-16">
            <Image
              src="/lovable-uploads/macbook-everton.webp"
              alt=""
              fill
              className="mx-auto object-contain z-10"
            />
             <Image
              src="/lovable-uploads/iphone.png"
              alt=""
              width={0}
              height={0}
              sizes="100%"
              className="md:block md:w-96 max-md:w-40  z-[11] max-md:bottom-0 max-md:-left-2 h-auto absolute -bottom-12 -left-10 object-contain rotate-12"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="shadow-lg border-2 border-primary/20 hover:border-primary/50 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">6h</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Conteúdo Completo</h3>
                <p className="text-gray-600">Mais de 6 horas de aulas práticas e objetivas</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-2 border-primary/20 hover:border-primary/50 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">4</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Módulos Práticos</h3>
                <p className="text-gray-600">Metodologia estruturada passo a passo</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-2 border-primary/20 hover:border-primary/50 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">∞</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Acesso Vitalicio</h3>
                <p className="text-gray-600">Estude no seu ritmo, quando quiser</p>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-2xl border-0 bg-gradient-to-br from-orange-50 to-white">
            <CardContent className="p-10">
              <p className="text-xl text-gray-800 leading-relaxed mb-8 text-center">
                Um curso completo que te ajuda a <strong className="text-primary">destravar a fala</strong>, vencer o medo de se expressar, ganhar carisma e <strong className="text-primary">comunicar com autoridade</strong>.
              </p>

              <div className="bg-white rounded-xl p-8 border-l-4 border-primary shadow-lg">
                <p className="text-2xl font-bold text-center text-primary leading-relaxed">
                  Não importa se você é tímido, travado ou sente que não nasceu para falar bem: é aqui que você vai virar esse jogo.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <LeadCaptureDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
};
