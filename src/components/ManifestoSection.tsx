const ManifestoSection = () => {
  return (
    <section className="bg-card py-16 md:py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-relaxed">
            A menopausa não é o fim da tua fase fértil.
          </h2>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-6 leading-relaxed">
            É o renascimento da tua maturidade feminina — um convite pra cuidar do corpo de um jeito novo, mais sensível, mais consciente e mais verdadeiro.
          </p>
          <div className="mt-8 text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>
              O Menopausa Leve não é um curso de dieta.
            </p>
            <p className="font-medium">
              É uma jornada prática e acolhedora pra te ensinar como comer, viver e sentir o teu corpo com prazer novamente — respeitando teus ritmos, teus sintomas e o que realmente importa: o teu bem-estar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
