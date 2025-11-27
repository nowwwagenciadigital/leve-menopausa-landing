import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import depoimento1 from "@/assets/depoimento-1.jpeg";
import depoimento2 from "@/assets/depoimento-2.jpeg";
import depoimento3 from "@/assets/depoimento-3.jpeg";
import depoimento4 from "@/assets/depoimento-4.jpeg";
import depoimento5 from "@/assets/depoimento-5.jpeg";
import depoimento6 from "@/assets/depoimento-6.jpeg";

const testimonials = [
  { image: depoimento1, alt: "Depoimento sobre programa de emagrecimento" },
  { image: depoimento2, alt: "Depoimento Teresa" },
  { image: depoimento3, alt: "Depoimento Sâmia Santos" },
  { image: depoimento4, alt: "Depoimento Gilian Poffo" },
  { image: depoimento5, alt: "Depoimento Iara Simoni" },
  { image: depoimento6, alt: "Depoimento sobre Nutri Carol" }
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
        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mb-12"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/3">
                <div className="p-1">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.alt}
                    className="w-full h-auto rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
        <div className="text-center">
          <Button 
            variant="cta" 
            size="lg" 
            className="w-full md:w-auto px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-full shadow-xl hover:scale-105 transform transition-all whitespace-normal leading-tight"
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
