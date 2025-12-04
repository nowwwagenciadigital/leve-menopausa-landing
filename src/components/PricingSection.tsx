import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Programa Menopausa Leve",
    price: "R$ 256",
    description: "Curso completo com 15 módulos e comunidade",
    features: [
      "15 módulos gravados",
      "Comunidade exclusiva no WhatsApp",
      "Aulas bônus e conteúdos extras",
      "E-book de receitas",
      "4 Planos Alimentares Acessíveis",
      "Acesso vitalício"
    ],
    highlight: false,
    link: "https://pay.kiwify.com.br/9TRDNpm"
  },
  {
    name: "Menopausa Magnética",
    price: "R$ 497",
    description: "Jornada individual de autotransformação",
    features: [
      "4 encontros individuais ao vivo",
      "Plano alimentar personalizado",
      "Suporte direto pelo WhatsApp"
    ],
    highlight: false,
    link: "https://pay.kiwify.com.br/x6Edytz"
  },
  {
    name: "Renascer na Menopausa",
    price: "R$ 748",
    description: "6 encontros individuais ao vivo",
    features: [
      "Programa completo de 6 semanas",
      "Atendimento aprofundado baseado em Self Coacching e Nutrição",
      "Plano alimentar personalizado",
      "Suporte direto pelo WhatsApp",
      "Ferramentas práticas diárias",
      "Material exclusivo de apoio"
    ],
    highlight: true,
    link: "https://pay.kiwify.com.br/7bHMBpX"
  },
  {
    name: "E-book Receitas Práticas",
    price: "R$ 38",
    description: "Alimentação leve e saborosa no dia a dia",
    features: [
      "+ de 20 receitas práticas para:",
      "Aumentar sua energia",
      "Reduzir os sintomas da menopausa",
      "Cuidar da saúde hormonal e óssea",
      "Manter prazer à mesa, sem radicalismos",
      "Acesso imediato"
    ],
    highlight: false,
    link: "https://pay.kiwify.com.br/Dzj4zrc"
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-gradient-to-b from-muted to-card py-16 md:py-24 px-6 md:px-12">
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
                  ? 'border-4 border-cta shadow-2xl scale-105 bg-gradient-to-br from-secondary/10 to-primary/10 mt-6' 
                  : 'border-2 border-primary/20 hover:shadow-lg'
              } transition-all hover:-translate-y-1 duration-300`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-cta text-white px-6 py-1 rounded-full text-sm font-bold shadow-lg">
                  MAIS COMPLETO
                </div>
              )}
              <CardHeader className={`text-center pb-4 ${plan.highlight ? 'pt-8' : ''}`}>
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
                  asChild
                >
                  <a href={plan.link} target="_blank" rel="noopener noreferrer">
                    Escolher Plano
                  </a>
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
