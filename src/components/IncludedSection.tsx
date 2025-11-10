import { Video, BookOpen, Scale, Brain, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const included = [
  {
    icon: Video,
    title: "15 módulos gravados",
    description: "Vídeos curtos e práticos para assistir no seu tempo"
  },
  {
    icon: BookOpen,
    title: "Ebook de receitas",
    description: "Receitas práticas e gostosas para o dia a dia"
  },
  {
    icon: Scale,
    title: "Guia de porções",
    description: "Substituições inteligentes e porções equilibradas"
  },
  {
    icon: Brain,
    title: "Aulas bônus",
    description: "Sobre sabotadores e comer emocional"
  },
  {
    icon: Users,
    title: "Comunidade WhatsApp",
    description: "Suporte e troca com outras mulheres"
  },
  {
    icon: Zap,
    title: "Aulas relâmpago",
    description: "Encontros ao vivo sob demanda"
  }
];

const IncludedSection = () => {
  return (
    <section className="bg-card py-16 md:py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          🎁 O que está incluso na tua jornada
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Tudo que você precisa para sua transformação
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {included.map((item, index) => (
            <Card 
              key={index}
              className="border-2 border-secondary/20 hover:border-secondary/50 transition-all hover:shadow-lg group cursor-pointer bg-accent/50"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="inline-block p-3 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-colors">
                    <item.icon className="w-7 h-7 text-secondary" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncludedSection;
