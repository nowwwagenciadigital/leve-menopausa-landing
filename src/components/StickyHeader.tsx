import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const StickyHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-primary">
            Menopausa Leve
          </h1>
          <p className="text-xs text-muted-foreground hidden md:block">
            com Nutri Carol Althoff
          </p>
        </div>
        <Button 
          variant="cta" 
          size="lg"
          className="rounded-full shadow-lg text-sm md:text-base px-6 md:px-8"
        >
          COMEÇAR AGORA
        </Button>
      </div>
    </header>
  );
};

export default StickyHeader;
