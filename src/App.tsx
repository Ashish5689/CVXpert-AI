import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import PricingSection from "./components/landing/PricingSection";
import FeaturesPage from "./components/landing/FeaturesPage";
import PricingAndFeaturesPage from "./components/landing/PricingAndFeaturesPage";
import AuthPage from "./components/auth/AuthPage";
import AuthPageSplit from "./components/auth/AuthPageSplit";
import TemplatesPage from "./components/templates/TemplatesPage";
import TemplateSelectionPage from "./components/templates/TemplateSelectionPage";
import ResumeEditor from "./components/resume/ResumeEditor";
import Layout from "./components/layout/Layout";
import Dashboard from "./components/dashboard/Dashboard";
import ProfilePage from "./components/profile/ProfilePage";
import { ClerkProviderWithChildren } from "./lib/clerk";
import { Toaster } from "./components/ui/toaster";
import { 
  SignIn, 
  SignUp, 
  SignedIn, 
  SignedOut, 
  RedirectToSignIn 
} from "@clerk/clerk-react";

function App() {
  return (
    <ClerkProviderWithChildren>
      <Suspense fallback={<p>Loading...</p>}>
        <>
          <Routes>
            {/* Main routes with navbar */}
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/pricing" element={<Layout><PricingSection /></Layout>} />
            <Route path="/features" element={<Layout><FeaturesPage /></Layout>} />
            <Route path="/pricing-and-features" element={<Layout><PricingAndFeaturesPage /></Layout>} />
            <Route path="/templates" element={<Layout><TemplateSelectionPage /></Layout>} />
            <Route path="/templates/browse" element={<Layout><TemplatesPage /></Layout>} />
            <Route path="/resume/editor" element={<Layout><ResumeEditor /></Layout>} />
            
            {/* Clerk Authentication Routes */}
            <Route
              path="/sign-in/*"
              element={<Layout hideFooter centerContent><SignIn routing="path" path="/sign-in" /></Layout>}
            />
            <Route
              path="/sign-up/*"
              element={<Layout hideFooter centerContent><SignUp routing="path" path="/sign-up" /></Layout>}
            />
            
            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <>
                  <SignedIn>
                    <Layout>
                      <Dashboard />
                    </Layout>
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <SignedIn>
                    <Layout>
                      <ProfilePage />
                    </Layout>
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />
            
            {/* Legacy Auth Pages - can be removed once Clerk is fully integrated */}
            <Route path="/login" element={<Layout centerContent><AuthPageSplit defaultTab="login" /></Layout>} />
            <Route path="/signup" element={<Layout centerContent><AuthPageSplit defaultTab="signup" /></Layout>} />
            <Route path="/auth" element={<Layout centerContent><AuthPage /></Layout>} />
            <Route path="/auth/login" element={<Layout centerContent><AuthPage defaultTab="login" /></Layout>} />
            <Route path="/auth/signup" element={<Layout centerContent><AuthPage defaultTab="signup" /></Layout>} />
            <Route path="/auth-split" element={<Layout centerContent><AuthPageSplit /></Layout>} />
            <Route path="/auth-split/login" element={<Layout centerContent><AuthPageSplit defaultTab="login" /></Layout>} />
            <Route path="/auth-split/signup" element={<Layout centerContent><AuthPageSplit defaultTab="signup" /></Layout>} />
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
          <Toaster />
        </>
      </Suspense>
    </ClerkProviderWithChildren>
  );
}

export default App;
