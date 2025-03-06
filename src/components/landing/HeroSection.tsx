import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  features?: string[];
  imageSrc?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Build ATS-Friendly Resumes with AI Assistance",
  subtitle = "Create professional resumes that stand out with our intuitive drag-and-drop builder and AI-powered content suggestions.",
  ctaText = "Get Started",
  features = [
    "AI-powered content suggestions",
    "Drag-and-drop editor",
    "Real-time preview",
    "Multiple export options",
  ],
  imageSrc = "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
}) => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="flex flex-col items-start space-y-6 lg:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            {title}
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-[600px]">
            {subtitle}
          </p>

          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2">
              {ctaText}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              View Templates
            </Button>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img
              src={imageSrc}
              alt="Resume builder preview"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
