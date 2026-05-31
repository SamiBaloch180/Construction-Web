import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "./button";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <Button
      size="icon"
      className="fixed bottom-8 right-8 z-50 rounded-none w-12 h-12 shadow-xl hover:-translate-y-1 transition-transform bg-primary hover:bg-primary/90 text-primary-foreground border border-primary-foreground/10"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6" />
    </Button>
  );
}
