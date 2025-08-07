import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Play } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
export const Testimonials = () => {
  const testimonials = [{
    name: "Carlos Silva",
    role: "Gerente de Vendas",
    text: "Não sabia que minha voz podia ter esse poder.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  }, {
    name: "Ana Costa",
    role: "Empresária",
    text: "Finalmente consegui participar de uma reunião sem travar.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  }, {
    name: "Roberto Mendes",
    role: "Advogado",
    text: "Comecei a fazer lives e vender sem ter vergonha.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }];
  const imageTestimonials = ["/lovable-uploads/4346bc8f-5c71-42ad-848a-23af9e021ad7.png", "/lovable-uploads/81987eb1-ea1e-4cd6-a475-8a16320ea878.png", "/lovable-uploads/e823ecb8-2ec9-4d6b-bf34-6d409ea70429.png", "/lovable-uploads/fc44aa48-2243-43d6-ad24-1b9695dfa4dd.png", "/lovable-uploads/005d0fe9-bc1c-4f66-9b25-62190d84815c.png", "/lovable-uploads/6335da1c-8a53-46f4-bc10-3d1f30e427ac.png", "/lovable-uploads/1837293b-7ecb-4f2f-bc6a-6121ae15ea4d.png"];
  const videoTestimonials = ["https://www.youtube.com/embed/3FYMfHsjb6I", "https://www.youtube.com/embed/uCYfQ2sdaQ8", "https://www.youtube.com/embed/b1QddrSINZk", "https://www.youtube.com/embed/_Q75JppuaXo", "https://www.youtube.com/embed/0kFCHMeRyBE", "https://www.youtube.com/embed/JSN4K69dMIs", "https://www.youtube.com/embed/Yiw0CGAFqsk", "https://www.youtube.com/embed/ONG2Cj4C8ss"];
  return <section className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-orange-500">
            Provas Sociais
          </h2>
          <p className="text-xl text-center mb-12 text-gray-950">
            O que dizem os alunos
          </p>
          
          {/* Written Testimonials */}
          <div className="mb-16">
            
            
          </div>

          {/* Image Testimonials Carousel */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">Prints:</h3>
            <Carousel opts={{
            align: "start",
            loop: true
          }} className="w-full max-w-5xl mx-auto">
              <CarouselContent className="-ml-1">
                {imageTestimonials.map((image, index) => <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="shadow-card-brand border-2 border-primary/10 overflow-hidden bg-card">
                        <CardContent className="p-0">
                          <img src={image} alt={`Depoimento ${index + 1}`} className="w-full h-[300px] object-cover" />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>)}
              </CarouselContent>
              <CarouselPrevious className="text-primary border-primary hover:bg-primary hover:text-primary-foreground" />
              <CarouselNext className="text-primary border-primary hover:bg-primary hover:text-primary-foreground" />
            </Carousel>
          </div>

          {/* Video Testimonials Carousel */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">Gravações:</h3>
            <Carousel opts={{
            align: "start",
            loop: true
          }} className="w-full max-w-5xl mx-auto">
              <CarouselContent className="-ml-1">
                {videoTestimonials.map((video, index) => <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="shadow-card-brand border-2 border-primary/10 overflow-hidden bg-card">
                        <CardContent className="p-0">
                          <iframe width="100%" height="300" src={video} title={`Depoimento YouTube ${index + 1}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-[300px]" />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>)}
              </CarouselContent>
              <CarouselPrevious className="text-primary border-primary hover:bg-primary hover:text-primary-foreground" />
              <CarouselNext className="text-primary border-primary hover:bg-primary hover:text-primary-foreground" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>;
};