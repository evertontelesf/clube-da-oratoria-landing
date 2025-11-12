import { Facebook, Instagram, Youtube, Mail } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo.png"
                  alt="Clube da Oratória"
                  width={192}
                  height={72}
                  loading="lazy"
                  className="h-auto w-48"
                />
               
              </div>
              <p className="text-gray-300 mb-4">
                Transformando vidas através da comunicação autêntica e
                impactante. Desbloqueie seu potencial e torne-se impossível de
                ser ignorado.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors">
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors">
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors">
                  <Youtube size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Sobre o Curso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Suporte
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Reembolso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 Everton Teles. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
