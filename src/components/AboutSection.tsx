import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-nutritionist.jpg";

const AboutSection = () => {
  return (
    <section className="bg-accent py-16 md:py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Quem é a Nutri Carol Althoff?
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-5 text-foreground leading-relaxed">
              <p className="text-lg">
                <span className="font-semibold text-primary">Nutricionista funcional há mais de 10 anos</span>, Carol ajuda mulheres a atravessarem a menopausa com leveza, consciência e prazer.
              </p>
              <p>
                Criadora dos programas <span className="font-semibold">Menopausa Leve</span>, <span className="font-semibold">Menopausa Magnética</span> e <span className="font-semibold">Renascer na Menopausa</span>, tem como missão devolver autonomia e autoestima às mulheres.
              </p>
              <p className="text-muted-foreground">
                Carol acredita que a menopausa não é o fim de nada — é o começo de uma nova fase de sabedoria, poder e conexão profunda com o próprio corpo.
              </p>
              <p className="italic text-primary font-medium">
                "Meu propósito é que cada mulher se sinta bem na própria pele, independente da idade ou fase da vida."
              </p>
            </div>
            <div className="mt-8">
              <Button 
                variant="cta" 
                size="lg" 
                className="w-full md:w-auto px-8 py-6 text-lg rounded-full shadow-xl hover:scale-105 transform transition-all"
              >
                QUERO CUIDAR DA SAÚDE AGORA!
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src={aboutImage} 
              alt="Carol Althoff - Nutricionista Funcional" 
              className="rounded-3xl shadow-2xl max-w-full h-auto object-cover border-4 border-primary/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
