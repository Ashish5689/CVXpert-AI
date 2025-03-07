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

interface AuthPageProps {
  defaultTab?: "login" | "signup";
}

const AuthPage: React.FC<AuthPageProps> = ({ defaultTab = "login" }) => {
  const navigate = useNavigate();

  const handleLogin = async (data: LoginFormValues) => {
    try {
      console.log("Login data:", data);
      // Here you would typically make an API call to authenticate the user
      // For example:
      // const response = await api.login(data);
      
      // For now, we'll just simulate a successful login
      // In a real app, you would store the auth token in localStorage or a state management solution
      localStorage.setItem("isAuthenticated", "true");
      
      // Redirect to home page or dashboard after successful login
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      // Handle login errors (display error message, etc.)
    }
  };

  const handleSignup = async (data: SignupFormValues) => {
    try {
      console.log("Signup data:", data);
      // Here you would typically make an API call to register the user
      // For example:
      // const response = await api.signup(data);
      
      // For now, we'll just simulate a successful signup
      // In a real app, you would store the auth token in localStorage or a state management solution
      localStorage.setItem("isAuthenticated", "true");
      
      // Redirect to home page or dashboard after successful signup
      navigate("/");
    } catch (error) {
      console.error("Signup error:", error);
      // Handle signup errors (display error message, etc.)
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {defaultTab === "login" ? "Sign in to your account" : "Create a new account"}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {defaultTab === "login" ? (
            <>
              Or{" "}
              <a
                href="/auth/signup"
                className="font-medium text-primary hover:text-primary/90"
              >
                create a new account
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

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <AuthForm
            onLogin={handleLogin}
            onSignup={handleSignup}
            defaultTab={defaultTab}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPage; 