import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    age: "52 anos",
    text: "Depois do programa, eu finalmente entendi meu corpo. Os calores diminuíram muito e eu voltei a dormir bem. Me sinto mais leve e feliz!",
    rating: 5
  },
  {
    name: "Ana Paula",
    age: "48 anos", 
    text: "Achei que nunca mais ia me sentir bem comigo mesma. O Menopausa Leve me devolveu a autoestima e a energia que eu pensava ter perdido pra sempre!",
    rating: 5
  },
  {
    name: "Carla Mendes",
    age: "55 anos",
    text: "Não é sobre dieta, é sobre cuidado. Aprendi a comer com prazer, respeitar meu corpo e viver essa fase com leveza. Gratidão!",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="bg-accent py-16 md:py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Mulheres que já estão vivendo a menopausa com leveza
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Veja o que elas dizem sobre essa transformação
        </p>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-2 border-primary/30 bg-card/90 backdrop-blur hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
            >
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-cta text-cta" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.age}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button 
            variant="cta" 
            size="lg" 
            className="w-full md:w-auto px-8 py-6 text-lg rounded-full shadow-xl hover:scale-105 transform transition-all"
            asChild
          >
            <a href="#pricing">QUERO COMEÇAR UMA NOVA VIDA!</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
