import { Card, CardContent } from "@/components/ui/card";
export const VVVCreator = () => {
  return <section className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Quem está por trás do Clube da Oratória</h2>
          
          <Card className="shadow-card-brand border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-shrink-0 md:w-1/3">
                  <img src="/lovable-uploads/674be516-37e4-4ca1-bee1-6a80546e3ed0.png" alt="Everton Teles" className="w-full h-auto rounded-lg object-cover border-4 border-primary" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-3xl font-bold mb-6">Everton Teles</h3>
                  <div className="space-y-4 text-foreground leading-relaxed">
                    <p>
                      Desde criança, Everton Teles sentia que precisava ser ouvido. Entre apresentações na escola, palcos de teatro e experiências com música e comunicação, descobriu que falar bem não era um dom — era uma habilidade que podia ser desenvolvida.
                    </p>
                    
                    <p>
                      Com o tempo, transformou a timidez em presença, a insegurança em confiança e aprendeu que uma boa comunicação abre portas em qualquer área da vida. Hoje, é apresentador, mentor de oratória e especialista em comunicação, já tendo ajudado centenas de pessoas a destravarem a fala, vencerem o medo de se expor e conquistarem oportunidades que antes pareciam distantes.
                    </p>
                    
                    <p>
                      Criador dos cursos "Apareça nos Stories", "Comunicação Assertiva" e agora do Clube da Oratória, Everton dedica sua vida a ensinar pessoas comuns a se tornarem comunicadores autênticos, carismáticos e impossíveis de serem ignorados.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};