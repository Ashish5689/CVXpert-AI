import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface TemplateCardProps {
  title: string;
  description: string;
  imageSrc: string;
  category: string;
}

const TemplateCard: React.FC<TemplateCardProps> = ({
  title,
  description,
  imageSrc,
  category,
}) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
          {category}
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full group" variant="outline">
          Use Template
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const TemplatesPage: React.FC = () => {
  const templates = [
    {
      id: 1,
      title: "Professional",
      description: "A clean, professional template suitable for corporate roles.",
      imageSrc: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=500&q=80",
      category: "Business",
    },
    {
      id: 2,
      title: "Creative",
      description: "Stand out with this modern design for creative industries.",
      imageSrc: "https://images.unsplash.com/photo-1586282391129-76a6df230234?w=500&q=80",
      category: "Creative",
    },
    {
      id: 3,
      title: "Technical",
      description: "Highlight your technical skills with this specialized layout.",
      imageSrc: "https://images.unsplash.com/photo-1586282023358-9bfaa12d8a9b?w=500&q=80",
      category: "IT",
    },
    {
      id: 4,
      title: "Academic",
      description: "Perfect for academic positions and research roles.",
      imageSrc: "https://images.unsplash.com/photo-1586282391463-44d6ce0f1d1e?w=500&q=80",
      category: "Academic",
    },
    {
      id: 5,
      title: "Minimalist",
      description: "A clean, simple design that lets your experience speak for itself.",
      imageSrc: "https://images.unsplash.com/photo-1586282023555-8c1f8b7faac4?w=500&q=80",
      category: "General",
    },
    {
      id: 6,
      title: "Executive",
      description: "Designed for senior management and executive positions.",
      imageSrc: "https://images.unsplash.com/photo-1586282023692-6accfcf40d1e?w=500&q=80",
      category: "Executive",
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Resume Templates
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Choose from our collection of professionally designed templates to create your perfect resume.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button variant="outline">All Templates</Button>
            <Button variant="outline">Business</Button>
            <Button variant="outline">Creative</Button>
            <Button variant="outline">IT</Button>
            <Button variant="outline">Academic</Button>
            <Button variant="outline">Executive</Button>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <TemplateCard
                key={template.id}
                title={template.title}
                description={template.description}
                imageSrc={template.imageSrc}
                category={template.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            We offer custom template designs tailored to your specific needs.
          </p>
          <Button size="lg" className="gap-2">
            Request Custom Template
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default TemplatesPage; 