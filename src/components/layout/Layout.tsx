import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  hideNavbar?: boolean;
  hideFooter?: boolean;
  centerContent?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  hideNavbar = false,
  hideFooter = false,
  centerContent = false
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      {!hideNavbar && <Navbar />}
      <main className={`flex-grow ${centerContent ? 'flex justify-center items-center' : ''}`}>
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout; 