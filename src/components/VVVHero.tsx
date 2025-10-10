import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { LeadCaptureDialog } from "./LeadCaptureDialog";
export const VVVHero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <section className="py-16 md:py-32 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 md:mb-8">
            <img
              src={logo}
              alt="Clube da Oratória"
              className="h-[6rem] w-[16rem] md:h-[6rem] md:w-[16rem] mx-auto mb-4 md:mb-6"
            />

            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-2">
              Aula: Descubra como desenvolver uma comunicação{" "}
              <span className="text-primary">
                autêntica, confiante e irresistível
              </span>
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-gray-300 leading-relaxed px-2">
              — mesmo que você sinta vergonha, insegurança ou não saiba por onde
              começar.
            </h2>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 mb-6 md:mb-8 mx-2">
            <p className="text-base md:text-lg italic text-gray-200">
              Comunicar-se bem não é um dom. É uma habilidade treinável,
              acessível e transformadora. E pode ser a chave que está faltando
              entre você e as oportunidades que deseja.
            </p>
          </div>

          {/* VSL Placeholder */}
          <div className="relative bg-black/50 rounded-xl p-4 md:p-8 mb-6 md:mb-8 border-2 border-accent/30 mx-2">
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-4 md:mb-6">
              {/* <div className="text-center">
                <Play className="mx-auto mb-2 md:mb-4 text-primary" size={48} />
                <p className="text-lg md:text-xl text-gray-300">Aula Gratuita</p>
                <p className="text-xs md:text-sm text-gray-400 px-2">Assista à aula e entenda como a comunicação muda tudo</p>
              </div> */}

              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/fDCMw3ySHdA?si=TF-bOKNZI23Wlc2C"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>
            </div>
            <p className="text-base md:text-lg font-medium text-primary mb-4 md:mb-6 px-2">
              Assista à aula acima e entenda como a comunicação muda tudo.
            </p>
            <Button
              variant="cta"
              size="xl"
              className="w-full md:w-auto text-sm md:text-lg"
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
