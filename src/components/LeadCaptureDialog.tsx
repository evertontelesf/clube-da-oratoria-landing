import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";

interface LeadCaptureDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LeadCaptureDialog = ({ open, onOpenChange }: LeadCaptureDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save lead data to Supabase
    console.log("Lead data:", formData);
    
    // Redirect to checkout after capturing lead
    window.open("https://checkout-url.com", "_blank");
    onOpenChange(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] mx-4 w-[calc(100vw-2rem)]">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-bold text-center">
            Última Etapa para Garantir sua Vaga
          </DialogTitle>
          <DialogDescription className="text-center text-sm md:text-base">
            Preencha seus dados para ter acesso ao checkout exclusivo
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome Completo</Label>
            <Input
              id="name"
              placeholder="Digite seu nome completo"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="Digite seu melhor e-mail"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp</Label>
            <Input
              id="whatsapp"
              placeholder="(11) 99999-9999"
              value={formData.whatsapp}
              onChange={(e) => handleInputChange("whatsapp", e.target.value)}
              required
            />
          </div>
          
          <Button type="submit" variant="cta-pulse" size="xl" className="w-full text-sm md:text-lg">
            Acessar Checkout Exclusivo
            <ArrowRight className="ml-2" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};