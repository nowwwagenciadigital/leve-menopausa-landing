import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-nutritionist.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-muted py-16 md:py-24 px-6 md:px-12 overflow-hidden">
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
              QUERO COMEÇAR UMA NOVA VIDA
            </Button>
          </div>
          <div className="flex justify-center animate-scale-in">
            <div className="relative w-full max-w-2xl">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/BKoEyIcddaU"
                  title="Menopausa Leve - Vídeo de Apresentação"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
