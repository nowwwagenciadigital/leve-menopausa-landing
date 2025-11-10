import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Renascer na Menopausa",
    price: "R$ 297",
    description: "Jornada individual de autotransformação",
    features: [
      "Programa completo de 8 semanas",
      "Exercícios práticos diários",
      "Material de apoio exclusivo"
    ],
    highlight: false
  },
  {
    name: "Menopausa Magnética",
    price: "R$ 399",
    description: "4 encontros personalizados ao vivo",
    features: [
      "4 encontros ao vivo individuais",
      "Plano alimentar personalizado",
      "Suporte via WhatsApp"
    ],
    highlight: false
  },
  {
    name: "Menopausa Leve",
    price: "R$ 799",
    description: "Curso online com 15 módulos e comunidade",
    features: [
      "15 módulos gravados completos",
      "Comunidade exclusiva no WhatsApp",
      "Aulas bônus e relâmpago",
      "Ebook de receitas",
      "Acesso vitalício"
    ],
    highlight: true
  },
  {
    name: "E-book Receitas Práticas",
    price: "R$ 79",
    description: "Alimentação leve e prazerosa todos os dias",
    features: [
      "50+ receitas práticas",
      "Guia de substituições",
      "Lista de compras",
      "Acesso imediato"
    ],
    highlight: false
  }
];

const PricingSection = () => {
  return (
    <section className="bg-gradient-to-b from-muted to-card py-16 md:py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Escolha o plano ideal pra você
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Invista na sua saúde e bem-estar
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative ${
                plan.highlight 
                  ? 'border-4 border-cta shadow-2xl scale-105 bg-gradient-to-br from-secondary/10 to-primary/10' 
                  : 'border-2 border-primary/20 hover:shadow-lg'
              } transition-all hover:-translate-y-1 duration-300`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cta text-white px-6 py-1 rounded-full text-sm font-bold shadow-lg">
                  MAIS COMPLETO
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <h3 className="font-bold text-xl mb-2 text-foreground">{plan.name}</h3>
                <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.highlight ? "cta" : "secondary"}
                  className="w-full rounded-full font-semibold"
                  size="lg"
                >
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center bg-secondary/10 rounded-2xl p-6 border-2 border-secondary/30">
          <p className="text-lg font-semibold text-secondary">
            7 dias de garantia incondicional
          </p>
          <p className="text-muted-foreground mt-2">
            Se não for pra você, devolvemos 100% do seu investimento
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
