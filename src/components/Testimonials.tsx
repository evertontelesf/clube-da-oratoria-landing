import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Play } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Gerente de Vendas",
      text: "Não sabia que minha voz podia ter esse poder.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ana Costa",
      role: "Empresária",
      text: "Finalmente consegui participar de uma reunião sem travar.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Roberto Mendes",
      role: "Advogado",
      text: "Comecei a fazer lives e vender sem ter vergonha.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Provas Sociais
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            O que dizem os alunos
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card-brand hover:shadow-brand transition-all duration-300 border-2 border-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <Quote className="text-primary mr-2 flex-shrink-0" size={24} />
                    <p className="text-foreground italic leading-relaxed">{testimonial.text}</p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* YouTube Video Testimonials */}
            <Card className="shadow-card-brand border-2 border-primary/10 overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  width="100%"
                  height="300"
                  src="https://www.youtube.com/embed/3FYMfHsjb6I"
                  title="Depoimento YouTube"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[300px]"
                />
              </CardContent>
            </Card>
            
            <Card className="shadow-card-brand border-2 border-primary/10 overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  width="100%"
                  height="300"
                  src="https://www.youtube.com/embed/uCYfQ2sdaQ8"
                  title="Depoimento YouTube"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[300px]"
                />
              </CardContent>
            </Card>
            
            <Card className="shadow-card-brand border-2 border-primary/10 overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  width="100%"
                  height="300"
                  src="https://www.youtube.com/embed/b1QddrSINZk"
                  title="Depoimento YouTube"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[300px]"
                />
              </CardContent>
            </Card>
            
            <Card className="shadow-card-brand border-2 border-primary/10 overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  width="100%"
                  height="300"
                  src="https://www.youtube.com/embed/_Q75JppuaXo"
                  title="Depoimento YouTube"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[300px]"
                />
              </CardContent>
            </Card>
            
            <Card className="shadow-card-brand border-2 border-primary/10 overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  width="100%"
                  height="300"
                  src="https://www.youtube.com/embed/0kFCHMeRyBE"
                  title="Depoimento YouTube"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[300px]"
                />
              </CardContent>
            </Card>
            
            <Card className="shadow-card-brand border-2 border-primary/10 overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  width="100%"
                  height="300"
                  src="https://www.youtube.com/embed/JSN4K69dMIs"
                  title="Depoimento YouTube"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[300px]"
                />
              </CardContent>
            </Card>
            
            <Card className="shadow-card-brand border-2 border-primary/10 overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  width="100%"
                  height="300"
                  src="https://www.youtube.com/embed/Yiw0CGAFqsk"
                  title="Depoimento YouTube"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[300px]"
                />
              </CardContent>
            </Card>
            
            <Card className="shadow-card-brand border-2 border-primary/10 overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  width="100%"
                  height="300"
                  src="https://www.youtube.com/embed/ONG2Cj4C8ss"
                  title="Depoimento YouTube"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[300px]"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};