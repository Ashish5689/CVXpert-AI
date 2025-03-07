import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Brain, FileOutput, MoveHorizontal, Zap, BarChart, Users } from "lucide-react";
import PricingSection from "./PricingSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

// Import components from FeaturesPage
import { FeatureCard, FeatureSection } from "./FeaturesPage";

const PricingAndFeaturesPage = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features at Affordable Prices
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Choose the perfect plan for your needs and get access to our powerful resume building tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Tabs for Features and Pricing */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="pricing" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
            </TabsList>
            <TabsContent value="pricing">
              <PricingSection />
            </TabsContent>
            <TabsContent value="features">
              <div className="py-8">
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

                <div className="mt-16">
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
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our plans and features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Can I switch plans later?</h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be applied to your next billing cycle.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Is there a free trial?</h3>
              <p className="text-muted-foreground">
                We offer a 14-day free trial for our Pro plan so you can experience all the premium features before committing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">How does the AI suggestion feature work?</h3>
              <p className="text-muted-foreground">
                Our AI analyzes your experience and the job description to suggest relevant content for each section of your resume, helping you highlight the most important skills and achievements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Can I cancel my subscription?</h3>
              <p className="text-muted-foreground">
                Yes, you can cancel your subscription at any time from your account settings. You'll continue to have access until the end of your current billing period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
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

// Core features data
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
];

// Feature sections data
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

export default PricingAndFeaturesPage; 