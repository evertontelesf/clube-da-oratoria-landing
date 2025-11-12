"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LeadCaptureDialog } from "./LeadCaptureDialog";
import { LazyYouTube } from "./LazyYouTube";
export const VVVHero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <section className="py-12 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 md:mb-8">
            <Image
              src="/logo.png"
              alt="Clube da Oratória"
              width={256}
              height={96}
              priority
              className="h-[6rem] w-[16rem] md:h-[6rem] md:w-[16rem] mx-auto mb-4 md:mb-6"
            />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight px-2">
              Aula: Descubra como desenvolver uma comunicação{" "}
              <span className="text-primary">
                autêntica, confiante e irresistível
              </span>
            </h1>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 mb-6 md:mb-8 mx-2">
            <p className="text-base md:text-lg italic text-gray-200">
              Comunicar-se bem não é um dom. É uma habilidade treinável,
              acessível e transformadora. E pode ser a chave que está faltando
              entre você e as oportunidades que deseja.
            </p>
          </div>
          
            <LazyYouTube videoId="fDCMw3ySHdA" title="Clube da Oratória - Aula Gratuita" />

            

            <h2 className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-gray-300 leading-relaxed px-2">
              — mesmo que você sinta vergonha, insegurança ou não saiba por onde
              começar.
            </h2>
          </div>


          {/* VSL Placeholder */}
          <div className="relative mx-2">
            
            
            {/* <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 border border-primary/30 mb-8">
              <p className="text-xl md:text-2xl font-bold text-center text-white mb-2">
                🎬 Assista à aula gratuita
              </p>
              <p className="text-base md:text-lg text-center text-gray-200">
                Entenda como a comunicação pode transformar sua vida
              </p>
            </div> */}
            
            <Button
              variant="cta"
              size="xl"
              className="w-full md:w-auto text-base md:text-xl animate-pulse-cta"
              onClick={() => {
                window.open(
                  "https://pay.hub.la/QfP7RDivS3zNjbRWqtx6?_path=/checkout/QfP7RDivS3zNjbRWqtx6 ",
                  "_blank"
                );
              }}>
              Quero me comunicar com excelência
            </Button>
          </div>
        </div>
      </div>

      <LeadCaptureDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
};
