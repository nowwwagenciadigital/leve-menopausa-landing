import { Button } from "@/components/ui/button";
import { CreditCard, Shield, MessageCircle } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="bg-gradient-to-br from-primary via-primary/90 to-secondary py-16 md:py-24 px-6 md:px-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-relaxed">
          "Não é sobre emagrecer.
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 leading-relaxed">
          É sobre voltar a se reconhecer no espelho — e gostar do que vê."
        </p>
        <Button 
          variant="secondary"
          size="lg"
          className="bg-white text-primary hover:bg-white/90 w-full md:w-auto px-12 py-8 text-xl rounded-full shadow-2xl hover:scale-105 transform transition-all font-bold mb-12"
        >
          QUERO COMEÇAR UMA NOVA VIDA AGORA
        </Button>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="p-4 bg-white/20 rounded-full">
              <CreditCard className="w-8 h-8" />
            </div>
            <p className="text-sm font-medium">Pagamento seguro</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="p-4 bg-white/20 rounded-full">
              <Shield className="w-8 h-8" />
            </div>
            <p className="text-sm font-medium">Garantia 7 dias</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="p-4 bg-white/20 rounded-full">
              <MessageCircle className="w-8 h-8" />
            </div>
            <p className="text-sm font-medium">Suporte no WhatsApp</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
