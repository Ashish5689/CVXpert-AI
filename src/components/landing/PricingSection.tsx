import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight, Check, X } from "lucide-react";
import { Badge } from "../ui/badge";

interface PricingTierProps {
  title: string;
  price: string;
  description: string;
  features: Array<{ text: string; included: boolean }>;
  isPopular?: boolean;
  ctaText?: string;
  variant?: "default" | "outline";
}

const PricingTier = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  ctaText = "Get Started",
  variant = "outline",
}: PricingTierProps) => {
  return (
    <Card
      className={`h-full flex flex-col ${
        isPopular
          ? "border-primary shadow-lg relative"
          : "border-border shadow"
      }`}
    >
      {isPopular && (
        <Badge
          className="absolute -top-3 right-4 bg-primary text-primary-foreground"
          variant="default"
        >
          Most Popular
        </Badge>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="mt-2">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Free" && <span className="text-muted-foreground ml-1">/month</span>}
        </div>
        <CardDescription className="text-base mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              {feature.included ? (
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              ) : (
                <X className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              )}
              <span
                className={
                  feature.included ? "text-foreground" : "text-muted-foreground"
                }
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full group"
          variant={variant}
          size="lg"
        >
          {ctaText}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const PricingSection = () => {
  const pricingTiers = [
    {
      title: "Free",
      price: "Free",
      description: "Basic features for students and casual users.",
      isPopular: false,
      ctaText: "Start Free",
      variant: "outline" as const,
      features: [
        { text: "Basic resume templates", included: true },
        { text: "Up to 2 resumes", included: true },
        { text: "Export as PDF", included: true },
        { text: "AI content suggestions (limited)", included: true },
        { text: "Email support", included: true },
        { text: "Advanced templates", included: false },
        { text: "Unlimited resumes", included: false },
        { text: "ATS optimization", included: false },
      ],
    },
    {
      title: "Pro",
      price: "$12",
      description: "Everything you need for professional resume building.",
      isPopular: true,
      ctaText: "Get Pro",
      variant: "default" as const,
      features: [
        { text: "All Free features", included: true },
        { text: "Advanced templates", included: true },
        { text: "Unlimited resumes", included: true },
        { text: "Export in multiple formats", included: true },
        { text: "Full AI content suggestions", included: true },
        { text: "ATS optimization", included: true },
        { text: "Priority support", included: true },
        { text: "Custom branding", included: false },
      ],
    },
    {
      title: "Enterprise",
      price: "$29",
      description: "Advanced features for teams and businesses.",
      isPopular: false,
      ctaText: "Contact Sales",
      variant: "outline" as const,
      features: [
        { text: "All Pro features", included: true },
        { text: "Custom branding", included: true },
        { text: "Team management", included: true },
        { text: "Analytics dashboard", included: true },
        { text: "API access", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Custom integrations", included: true },
        { text: "SLA guarantees", included: true },
      ],
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Select the perfect plan for your needs. All plans include core features to help you create impressive resumes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              title={tier.title}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              isPopular={tier.isPopular}
              ctaText={tier.ctaText}
              variant={tier.variant}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Need a custom plan for your organization?
          </p>
          <Button variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 