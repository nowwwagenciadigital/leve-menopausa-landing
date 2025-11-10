import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-nutritionist.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-muted py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-center md:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Menopausa Leve — Uma nova forma de viver o corpo feminino
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Um programa completo de reconexão com o corpo e com a alimentação, feito para mulheres que querem atravessar a menopausa com leveza, prazer e vitalidade — sem dietas, sem culpa e sem medo do espelho.
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full md:w-auto px-8 py-6 text-lg rounded-full shadow-2xl hover:scale-105 transform transition-all"
            >
              🧡 QUERO COMEÇAR UMA NOVA VIDA
            </Button>
          </div>
          <div className="flex justify-center animate-scale-in">
            <img 
              src={heroImage} 
              alt="Nutri Carol Althoff - Especialista em menopausa" 
              className="rounded-3xl shadow-2xl max-w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
