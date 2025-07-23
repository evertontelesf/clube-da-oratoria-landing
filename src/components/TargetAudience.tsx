import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const TargetAudience = () => {
  const targetPoints = [
    "Profissionais que travam em reuniões ou apresentações",
    "Pessoas tímidas, inseguras ou com medo do julgamento",
    "Homens que não conseguem se expressar com parceiras",
    "Mulheres que querem criar conteúdo mas sentem vergonha",
    "Pessoas que perdem oportunidades por falta de comunicação"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Para quem é esse <span className="text-primary">curso</span>
          </h2>
          
          <Card className="shadow-card-brand">
            <CardContent className="p-8">
              <div className="grid gap-6">
                {targetPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={24} />
                    <p className="text-lg text-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};