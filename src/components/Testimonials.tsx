import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Gerente de Vendas",
      text: "Depois do curso, fui promovido e hoje lidero reuniões com total segurança. Minha comunicação mudou completamente!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ana Costa",
      role: "Empresária",
      text: "Superei minha timidez e agora gravo vídeos para minha empresa sem medo. O Clube da Oratória transformou minha vida profissional.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Roberto Mendes",
      role: "Advogado",
      text: "Aprendi a me expressar com autenticidade e firmeza. Minhas apresentações no tribunal são muito mais impactantes agora.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Juliana Santos",
      role: "Coach",
      text: "O método das 3 dimensões é revolucionário. Consegui aumentar minha autoridade e conquistar mais clientes através da comunicação.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            O que nossos alunos <span className="text-primary">dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Transformações reais de pessoas como você
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
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
          </div>
        </div>
      </div>
    </section>
  );
};