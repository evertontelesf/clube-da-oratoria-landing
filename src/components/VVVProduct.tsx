import { Card, CardContent } from "@/components/ui/card";

export const VVVProduct = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            📚 O que é o <span className="text-primary">Clube da Oratória</span>
          </h2>
          
          <Card className="shadow-card-brand border-2 border-primary/20">
            <CardContent className="p-8">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                O <strong>Clube da Oratória</strong> é um curso completo, com mais de{" "}
                <span className="text-primary font-semibold">6 horas de conteúdo</span>{" "}
                dividido em 4 módulos práticos, que te ajuda a destravar a fala, vencer o medo 
                de se expressar, ganhar carisma e comunicar com autoridade.
              </p>
              
              <div className="bg-accent/10 rounded-lg p-6">
                <p className="text-lg font-medium text-center">
                  🔎 Não importa se você é tímido, travado ou sente que não nasceu para falar bem: 
                  é aqui que você vai virar esse jogo.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};