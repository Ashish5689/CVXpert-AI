import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "./landing/HeroSection";
import FeatureSection from "./landing/FeatureSection";
import AuthForm from "./auth/AuthForm";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Home: React.FC = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          title="Build ATS-Friendly Resumes with AI Assistance"
          subtitle="Create professional resumes that stand out with our intuitive drag-and-drop builder and AI-powered content suggestions."
          features={[
            "AI-powered content suggestions",
            "Drag-and-drop editor",
            "Real-time preview",
            "Multiple export options",
          ]}
          imageSrc="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80"
        />

        {/* Feature Section */}
        <FeatureSection />

        {/* Authentication Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Get Started Today
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Join thousands of job seekers who have successfully landed
                  interviews with resumes created using our platform.
                </p>
              </div>

              <SignedOut>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">
                      Create Your Professional Resume in Minutes
                    </h3>
                    <p className="text-gray-600">
                      Our intuitive platform makes it easy to build a
                      professional, ATS-friendly resume that highlights your
                      skills and experience.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-primary mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Choose from professional templates</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-primary mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Get AI-powered content suggestions</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-primary mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Download in multiple formats</span>
                      </li>
                    </ul>
                    <div className="pt-4">
                      <Link
                        to="/sign-up"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      >
                        Get Started
                        <svg
                          className="ml-2 -mr-1 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <AuthForm defaultTab="signup" />
                  </div>
                </div>
              </SignedOut>

              <SignedIn>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Welcome back, {user?.firstName || user?.username || "there"}!
                  </h3>
                  <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Continue working on your professional resume or create a new one from our templates.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="gap-2" asChild>
                      <Link to="/dashboard">
                        Go to Dashboard
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/templates">
                        Browse Templates
                      </Link>
                    </Button>
                  </div>
                </div>
              </SignedIn>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
