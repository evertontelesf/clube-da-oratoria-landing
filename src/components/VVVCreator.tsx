import { Card, CardContent } from "@/components/ui/card";

export const VVVCreator = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            🏋️ Sobre o Criador
          </h2>
          
          <Card className="shadow-card-brand border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold mb-4">Everton Teles</h3>
                <p className="text-xl text-primary font-semibold mb-4">
                  Apresentador, mentor de oratória, especialista em comunicação
                </p>
              </div>
              
              <div className="prose prose-lg mx-auto text-center">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Já ajudou <strong>centenas de pessoas</strong> a perderem o medo de se expressar. 
                  Criador dos cursos <em>"Apareça nos Stories"</em> e <em>"Comunicação Assertiva"</em>.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Atuou como cantor, ator, produtor e comunicador. Hoje, dedica sua vida a formar 
                  comunicadores autênticos e confiantes.
                </p>
                
                <div className="bg-primary/10 rounded-lg p-6">
                  <p className="text-lg font-medium text-primary">
                    "Minha missão é transformar pessoas tímidas em comunicadores magnéticos 
                    através de técnicas práticas e autenticidade."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};