"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Star, Quote, Play, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LeadCaptureDialog } from "./LeadCaptureDialog";
export const Testimonials = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Gerente de Vendas",
      text: "Não sabia que minha voz podia ter esse poder.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Ana Costa",
      role: "Empresária",
      text: "Finalmente consegui participar de uma reunião sem travar.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Roberto Mendes",
      role: "Advogado",
      text: "Comecei a fazer lives e vender sem ter vergonha.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
  ];
  const imageTestimonials = [
    "/lovable-uploads/4346bc8f-5c71-42ad-848a-23af9e021ad7.png",
    "/lovable-uploads/81987eb1-ea1e-4cd6-a475-8a16320ea878.png",
    "/lovable-uploads/e823ecb8-2ec9-4d6b-bf34-6d409ea70429.png",
    "/lovable-uploads/fc44aa48-2243-43d6-ad24-1b9695dfa4dd.png",
    "/lovable-uploads/005d0fe9-bc1c-4f66-9b25-62190d84815c.png",
    "/lovable-uploads/6335da1c-8a53-46f4-bc10-3d1f30e427ac.png",
    "/lovable-uploads/1837293b-7ecb-4f2f-bc6a-6121ae15ea4d.png",
  ];
  const videoTestimonials = [
    "https://www.youtube.com/embed/ONG2Cj4C8ss",
    "https://www.youtube.com/embed/b1QddrSINZk",
    "https://www.youtube.com/embed/_Q75JppuaXo",
    "https://www.youtube.com/embed/0kFCHMeRyBE",
    "https://www.youtube.com/embed/JSN4K69dMIs",
    "https://www.youtube.com/embed/uCYfQ2sdaQ8",
    "https://www.youtube.com/embed/Yiw0CGAFqsk",
    "https://www.youtube.com/embed/3FYMfHsjb6I",
  ];
  return (
    <section className="py-16 lg:py-32 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Veja o que dizem nossos <span className="text-primary">alunos</span>
            </h2>
            <p className="text-xl text-gray-600">
              Centenas de pessoas já transformaram sua comunicação
            </p>
          </div>

          {/* Image Testimonials Carousel */}
          <div className="mb-20">
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
              <h3 className="text-2xl font-bold text-primary">💬 Mensagens dos Alunos</h3>
              <div className="h-px bg-gradient-to-r from-primary via-primary to-transparent flex-1"></div>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto">
              <CarouselContent className="-ml-1">
                {imageTestimonials.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Card className="group shadow-lg border-2 border-primary/20 overflow-hidden bg-white cursor-pointer hover:shadow-2xl hover:border-primary/40 transition-all duration-300">
                            <CardContent className="p-0 relative">
                              <img
                                src={image}
                                alt={`Depoimento ${index + 1}`}
                                className="w-full h-[320px] object-contain group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </CardContent>
                          </Card>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl w-full h-[80vh]">
                          <img
                            src={image}
                            alt={`Depoimento ${index + 1}`}
                            className="w-full h-full object-contain"
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-primary border-primary hover:bg-primary hover:text-primary-foreground" />
              <CarouselNext className="text-primary border-primary hover:bg-primary hover:text-primary-foreground" />
            </Carousel>
          </div>

          {/* Video Testimonials Carousel */}
          <div className="mb-20">
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
              <h3 className="text-2xl font-bold text-primary">🎥 Depoimentos em Vídeo</h3>
              <div className="h-px bg-gradient-to-r from-primary via-primary to-transparent flex-1"></div>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto">
              <CarouselContent className="-ml-1">
                {videoTestimonials.map((video, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="shadow-lg border-2 border-primary/20 overflow-hidden bg-white hover:shadow-2xl hover:border-primary/40 transition-all duration-300">
                        <CardContent className="p-0">
                          <div className="relative aspect-video">
                            <iframe
                              width="100%"
                              height="100%"
                              src={video}
                              title={`Depoimento YouTube ${index + 1}`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="absolute inset-0 w-full h-full"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-primary border-primary hover:bg-primary hover:text-primary-foreground" />
              <CarouselNext className="text-primary border-primary hover:bg-primary hover:text-primary-foreground" />
            </Carousel>
          </div>

          {/* CTA após provas sociais */}
          <div className="text-center bg-white rounded-2xl p-12 shadow-2xl border-2 border-primary/20">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Viu quantas pessoas já se transformaram?
            </h3>
            <p className="text-xl mb-8 text-gray-700">
              Agora é a sua vez de conquistar a comunicação que você sempre sonhou
            </p>
            <Button
              variant="cta"
              size="xl"
              onClick={() => {
                window.open(
                  "https://pay.hub.la/QfP7RDivS3zNjbRWqtx6?_path=/checkout/QfP7RDivS3zNjbRWqtx6 ",
                  "_blank"
                );
              }}>
              Quero me comunicar com assertividade
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <LeadCaptureDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
};
