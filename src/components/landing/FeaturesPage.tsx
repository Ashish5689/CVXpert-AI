import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Brain, FileOutput, MoveHorizontal, Zap, Shield, Users, BarChart, Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({
  icon,
  title,
  description,
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

interface FeatureSectionProps {
  title: string;
  description: string;
  features: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  imageSrc?: string;
  imageAlt?: string;
  reversed?: boolean;
}

export const FeatureSection = ({
  title,
  description,
  features,
  imageSrc = "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
  imageAlt = "Feature illustration",
  reversed = false,
}: FeatureSectionProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
      <div className={`space-y-6 ${reversed ? "lg:order-2" : ""}`}>
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        <p className="text-lg text-muted-foreground">{description}</p>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-medium">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`${reversed ? "lg:order-1" : ""}`}>
        <div className="relative rounded-lg overflow-hidden shadow-xl">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

const FeaturesPage = () => {
  const coreFeatures = [
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
    {
      icon: <Zap className="h-6 w-6" />,
      title: "ATS Optimization",
      description:
        "Ensure your resume passes through Applicant Tracking Systems with our built-in optimization tools.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Privacy Protection",
      description:
        "Your data is secure with our advanced encryption and privacy-first approach to resume building.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration Tools",
      description:
        "Share your resume with mentors or colleagues for feedback before finalizing your application.",
    },
  ];

  const featureSections = [
    {
      title: "AI-Powered Resume Building",
      description:
        "Our advanced AI technology analyzes job descriptions and suggests tailored content for your resume, increasing your chances of getting noticed by recruiters.",
      features: [
        {
          icon: <Brain className="h-5 w-5" />,
          title: "Smart Content Suggestions",
          description: "Get personalized content recommendations based on your experience and target job.",
        },
        {
          icon: <BarChart className="h-5 w-5" />,
          title: "Skills Analysis",
          description: "Identify skill gaps and strengths compared to job requirements.",
        },
        {
          icon: <Zap className="h-5 w-5" />,
          title: "Keyword Optimization",
          description: "Automatically include relevant keywords to pass ATS screening.",
        },
      ],
      imageSrc: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
      imageAlt: "AI-powered resume building",
    },
    {
      title: "Beautiful Templates & Customization",
      description:
        "Choose from dozens of professionally designed templates and customize every aspect to create a unique resume that stands out.",
      features: [
        {
          icon: <MoveHorizontal className="h-5 w-5" />,
          title: "Drag-and-Drop Editor",
          description: "Easily rearrange sections and elements with intuitive controls.",
        },
        {
          icon: <FileOutput className="h-5 w-5" />,
          title: "Professional Templates",
          description: "Access industry-specific templates designed by HR professionals.",
        },
        {
          icon: <Users className="h-5 w-5" />,
          title: "Custom Styling",
          description: "Personalize fonts, colors, and spacing to match your personal brand.",
        },
      ],
      imageSrc: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80",
      imageAlt: "Resume templates and customization",
      reversed: true,
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features to Build Your Perfect Resume
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Discover all the tools and features designed to help you create
            professional, ATS-friendly resumes that get you noticed.
          </p>
          <Button size="lg" className="gap-2">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Features</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to create professional resumes that stand out
              from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Feature Sections */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {featureSections.map((section, index) => (
            <FeatureSection
              key={index}
              title={section.title}
              description={section.description}
              features={section.features}
              imageSrc={section.imageSrc}
              imageAlt={section.imageAlt}
              reversed={section.reversed}
            />
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compare Features</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See what features are available in each plan to find the perfect fit for your needs.
            </p>
          </div>

          <Tabs defaultValue="free" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="free">Free</TabsTrigger>
              <TabsTrigger value="pro">Pro</TabsTrigger>
              <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
            </TabsList>
            <TabsContent value="free" className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Free Plan Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Basic resume templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Up to 2 resumes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Export as PDF</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>AI content suggestions (limited)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Email support</span>
                </li>
              </ul>
              <Button className="mt-6 w-full" variant="outline">
                Start Free
              </Button>
            </TabsContent>
            <TabsContent value="pro" className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Pro Plan Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>All Free features</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Advanced templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Unlimited resumes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Export in multiple formats</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Full AI content suggestions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>ATS optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Priority support</span>
                </li>
              </ul>
              <Button className="mt-6 w-full">
                Get Pro
              </Button>
            </TabsContent>
            <TabsContent value="enterprise" className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Enterprise Plan Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>All Pro features</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Custom branding</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Team management</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Analytics dashboard</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>API access</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Custom integrations</span>
                </li>
              </ul>
              <Button className="mt-6 w-full" variant="outline">
                Contact Sales
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto bg-primary text-primary-foreground rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Build Your Professional Resume?</h2>
              <p className="text-lg mb-6 text-primary-foreground/90">
                Join thousands of job seekers who have successfully landed their dream jobs using our platform.
              </p>
              <Button size="lg" variant="secondary" className="gap-2">
                Get Started Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&q=80"
                alt="Resume success"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage; 