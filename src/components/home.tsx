import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./layout/Navbar";
import HeroSection from "./landing/HeroSection";
import FeatureSection from "./landing/FeatureSection";
import AuthForm from "./auth/AuthForm";
import Footer from "./layout/Footer";

interface HomeProps {
  isAuthenticated?: boolean;
}

const Home: React.FC<HomeProps> = ({ isAuthenticated = false }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar isAuthenticated={isAuthenticated} />

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

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <svg
                          className="h-6 w-6 text-primary"
                          xmlns="http://www.w3.org/2000/svg"
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
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">
                          Quick Setup
                        </h3>
                        <p className="text-gray-600">
                          Create an account in seconds and start building your
                          professional resume right away.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <svg
                          className="h-6 w-6 text-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">AI-Powered</h3>
                        <p className="text-gray-600">
                          Our AI assistant helps you craft compelling content
                          tailored to your target job positions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <svg
                          className="h-6 w-6 text-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">
                          ATS-Optimized
                        </h3>
                        <p className="text-gray-600">
                          All our templates are designed to pass through
                          Applicant Tracking Systems with ease.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <AuthForm defaultTab="signup" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Users Say
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Thousands of job seekers have found success using our resume
                builder.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
                      alt="User avatar"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Alex Johnson</h4>
                    <p className="text-sm text-gray-500">Software Engineer</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The AI suggestions helped me highlight achievements I would
                  have otherwise overlooked. I received interview calls from 3
                  companies within a week of applying!"
                </p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="h-5 w-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                      alt="User avatar"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Sarah Miller</h4>
                    <p className="text-sm text-gray-500">Marketing Manager</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The drag-and-drop interface made it so easy to customize my
                  resume. I was able to create different versions for different
                  job applications in minutes."
                </p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="h-5 w-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
                      alt="User avatar"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Michael Chen</h4>
                    <p className="text-sm text-gray-500">Product Designer</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "After struggling to get interviews for months, I created a
                  resume with this tool and landed my dream job within weeks.
                  The ATS optimization really works!"
                </p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="h-5 w-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
