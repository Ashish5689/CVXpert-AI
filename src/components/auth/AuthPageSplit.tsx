import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";

// Define the form value types
interface LoginFormValues {
  email: string;
  password: string;
}

interface SignupFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface AuthPageSplitProps {
  defaultTab?: "login" | "signup";
}

const AuthPageSplit: React.FC<AuthPageSplitProps> = ({ defaultTab = "login" }) => {
  const navigate = useNavigate();

  const handleLogin = async (data: LoginFormValues) => {
    try {
      console.log("Login data:", data);
      // Here you would typically make an API call to authenticate the user
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleSignup = async (data: SignupFormValues) => {
    try {
      console.log("Signup data:", data);
      // Here you would typically make an API call to register the user
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Left side - Image/Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-primary">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-primary-foreground">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">CVXpert-AI</h1>
            <p className="text-xl">Build your professional resume with AI</p>
          </div>
          <div className="max-w-md">
            <h2 className="text-2xl font-semibold mb-4">
              {defaultTab === "login"
                ? "Welcome back!"
                : "Join thousands of professionals"}
            </h2>
            <p className="text-lg mb-6">
              {defaultTab === "login"
                ? "Sign in to access your personalized resume builder and continue crafting your professional story."
                : "Create an account to start building your professional resume with our AI-powered tools and templates."}
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary-foreground/20 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                <p>AI-powered content suggestions</p>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary-foreground/20 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                <p>Professional templates</p>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary-foreground/20 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                <p>ATS optimization</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 text-primary-foreground/80 text-sm">
          © 2023 CVXpert-AI. All rights reserved.
        </div>
      </div>

      {/* Right side - Auth Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-2">
              {defaultTab === "login" ? "Sign in" : "Create an account"}
            </h2>
            <p className="text-muted-foreground">
              {defaultTab === "login"
                ? "Enter your credentials to access your account"
                : "Fill in your details to get started"}
            </p>
          </div>

          <AuthForm
            onLogin={handleLogin}
            onSignup={handleSignup}
            defaultTab={defaultTab}
          />

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              {defaultTab === "login" ? (
                <>
                  Don't have an account?{" "}
                  <a
                    href="/auth/signup"
                    className="font-medium text-primary hover:text-primary/90"
                  >
                    Sign up
                  </a>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <a
                    href="/auth/login"
                    className="font-medium text-primary hover:text-primary/90"
                  >
                    Sign in
                  </a>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPageSplit; 