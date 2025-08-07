import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import { LeadCaptureDialog } from "./LeadCaptureDialog";
export const VVVFinalCTA = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-orange-500 md:text-5xl">
            Pronto para transformar sua comunicação?
          </h2>
          <p className="text-xl mb-8 text-foreground">
            Não deixe para amanhã a mudança que pode começar hoje
          </p>
          
          <Button variant="cta" size="xl" onClick={() => setIsDialogOpen(true)}>
            Quero me comunicar com assertividade
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
      
      <LeadCaptureDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
};