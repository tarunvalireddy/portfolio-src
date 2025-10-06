import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Tarun Valireddy
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-foreground/90">
            Aspiring AWS DevOps Engineer
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Building scalable cloud solutions with modern DevOps practices. 
            Passionate about automation, CI/CD, and infrastructure as code.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Button
              onClick={scrollToAbout}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg glow-effect"
            >
              Explore My Work
            </Button>
            <Button
              onClick={() => window.open("https://linkedin.com/in/tarunvalireddy", "_blank")}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
            >
              Connect on LinkedIn
            </Button>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce inline-block"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-8 w-8 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
