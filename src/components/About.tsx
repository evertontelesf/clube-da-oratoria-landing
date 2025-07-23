import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            O que é o <span className="text-primary">Clube da Oratória</span>
          </h2>
          
          <Card className="shadow-card-brand border-2 border-primary/20">
            <CardContent className="p-8">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                O <strong>Clube da Oratória</strong> é um curso online completo com{" "}
                <span className="text-primary font-semibold">4 módulos essenciais</span>: 
                Mentalidade, Autenticidade, Assertividade e Atração. Nossa missão é transformar 
                pessoas tímidas, inseguras e travadas em comunicadores{" "}
                <span className="text-primary font-semibold">magnéticos, confiantes e respeitados</span>.
              </p>
              
              <div className="mt-6 p-6 bg-muted rounded-lg">
                <p className="text-md font-medium">
                  Ideal para quem quer se expressar melhor em público, no trabalho, 
                  em vídeos ou na vida pessoal com total segurança e autenticidade.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};