import { Button } from "@/components/ui/button";

const ForWhoSection = () => {
  return (
    <section className="bg-muted py-16 md:py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          🌿 Pra quem é o Menopausa Leve
        </h2>
        <div className="bg-card/80 backdrop-blur rounded-3xl p-8 md:p-12 shadow-xl border border-primary/20">
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
            <span className="font-semibold text-primary">Mulheres 45+</span> que sentem que o corpo mudou, que estão cansadas de tentar dietas e querem finalmente <span className="font-semibold text-secondary">viver a menopausa com leveza, consciência e prazer.</span>
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Se você sente que perdeu a conexão com seu corpo, se os sintomas da menopausa estão tirando sua energia e autoestima, e se deseja uma transformação verdadeira — este programa é para você.
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            className="w-full md:w-auto px-8 py-6 text-lg rounded-full shadow-lg hover:scale-105 transform transition-all"
          >
            🌱 QUERO COMEÇAR UMA NOVA VIDA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
