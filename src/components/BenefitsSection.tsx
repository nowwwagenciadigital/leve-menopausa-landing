import { Heart, Sparkles, Battery, Flower, Shield, Moon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Heart,
    title: "Entender o corpo sem medo",
    description: "Compreenda os sinais da menopausa com clareza e segurança"
  },
  {
    icon: Sparkles,
    title: "Alimentação real e leve",
    description: "Aprenda a se alimentar de forma prazerosa e possível no seu dia a dia"
  },
  {
    icon: Shield,
    title: "Reduzir sintomas",
    description: "Diminua calor, irritação, insônia e inchaço naturalmente"
  },
  {
    icon: Battery,
    title: "Recuperar energia",
    description: "Sinta-se mais disposta, viva e com vitalidade renovada"
  },
  {
    icon: Flower,
    title: "Elevar autoestima",
    description: "Reconquiste sua confiança e prazer em viver"
  },
  {
    icon: Moon,
    title: "Respeitar seus ciclos",
    description: "Crie um estilo de vida alinhado com seus ritmos naturais"
  }
];

const BenefitsSection = () => {
  return (
    <section className="bg-accent py-16 md:py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          ❤️ O que você vai conquistar
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Transformações reais para uma nova fase da vida
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 bg-card/80 backdrop-blur"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
