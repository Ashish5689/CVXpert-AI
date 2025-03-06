import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight, Brain, MoveHorizontal, FileOutput } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({
  icon = <Brain />,
  title = "Feature Title",
  description = "Feature description goes here.",
}: FeatureCardProps) => {
  return (
    <Card className="bg-white h-full flex flex-col">
      <CardHeader>
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const FeatureSection = () => {
  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Powered Suggestions",
      description:
        "Get intelligent content recommendations for your resume sections using our advanced AI integration.",
    },
    {
      icon: <MoveHorizontal className="h-6 w-6" />,
      title: "Intuitive Drag-and-Drop",
      description:
        "Easily organize and customize your resume with our simple drag-and-drop interface.",
    },
    {
      icon: <FileOutput className="h-6 w-6" />,
      title: "Multiple Export Options",
      description:
        "Export your resume in various formats including PDF, DOCX, or share directly with potential employers.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our resume builder combines cutting-edge technology with
            user-friendly design to help you create standout resumes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="group" size="lg">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
