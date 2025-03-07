import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, X, User, LogOut, Settings, ChevronDown } from "lucide-react";
import { useUser, useClerk, SignedIn, SignedOut } from "@clerk/clerk-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user } = useUser();
  const { signOut } = useClerk();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = () => {
    signOut();
  };

  // Get user initials for avatar fallback
  const getUserInitials = () => {
    if (!user) return "U";
    
    if (user.firstName && user.lastName) {
      return `${user.firstName[0]}${user.lastName[0]}`;
    }
    
    if (user.firstName) {
      return user.firstName[0];
    }
    
    if (user.username) {
      return user.username[0].toUpperCase();
    }
    
    return "U";
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and desktop navigation */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-primary">
                CVXpert-AI
              </Link>
            </div>
            <nav className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                to="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive("/")
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300"
                }`}
              >
                Home
              </Link>
              <Link
                to="/templates"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive("/templates")
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300"
                }`}
              >
                Templates
              </Link>
              <Link
                to="/features"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive("/features")
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300"
                }`}
              >
                Features
              </Link>
              <Link
                to="/pricing"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive("/pricing")
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300"
                }`}
              >
                Pricing
              </Link>
              <SignedIn>
                <Link
                  to="/dashboard"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    isActive("/dashboard")
                      ? "border-primary text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300"
                  }`}
                >
                  Dashboard
                </Link>
              </SignedIn>
            </nav>
          </div>

          {/* Auth buttons (desktop) */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <SignedOut>
              <Link to="/sign-in">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link to="/sign-up">
                <Button>Sign up</Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 p-1 px-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user?.imageUrl} alt={user?.fullName || "User"} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {getUserInitials()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium hidden sm:inline-block">
                      {user?.firstName || user?.username || user?.emailAddresses[0]?.emailAddress?.split('@')[0]}
                    </span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5 text-sm font-medium text-muted-foreground">
                    {user?.emailAddresses[0]?.emailAddress}
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="cursor-pointer flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard" className="cursor-pointer flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={handleSignOut}
                    className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SignedIn>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive("/")
                  ? "border-primary text-primary-foreground bg-primary/10"
                  : "border-transparent text-muted-foreground hover:bg-gray-50 hover:border-gray-300 hover:text-foreground"
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/templates"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive("/templates")
                  ? "border-primary text-primary-foreground bg-primary/10"
                  : "border-transparent text-muted-foreground hover:bg-gray-50 hover:border-gray-300 hover:text-foreground"
              }`}
              onClick={toggleMenu}
            >
              Templates
            </Link>
            <Link
              to="/features"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive("/features")
                  ? "border-primary text-primary-foreground bg-primary/10"
                  : "border-transparent text-muted-foreground hover:bg-gray-50 hover:border-gray-300 hover:text-foreground"
              }`}
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive("/pricing")
                  ? "border-primary text-primary-foreground bg-primary/10"
                  : "border-transparent text-muted-foreground hover:bg-gray-50 hover:border-gray-300 hover:text-foreground"
              }`}
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <SignedIn>
              <Link
                to="/dashboard"
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  isActive("/dashboard")
                    ? "border-primary text-primary-foreground bg-primary/10"
                    : "border-transparent text-muted-foreground hover:bg-gray-50 hover:border-gray-300 hover:text-foreground"
                }`}
                onClick={toggleMenu}
              >
                Dashboard
              </Link>
            </SignedIn>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <SignedOut>
              <div className="flex items-center px-4 space-x-3">
                <Link to="/sign-in" className="w-full" onClick={toggleMenu}>
                  <Button variant="ghost" className="w-full justify-center">
                    Log in
                  </Button>
                </Link>
                <Link to="/sign-up" className="w-full" onClick={toggleMenu}>
                  <Button className="w-full justify-center">Sign up</Button>
                </Link>
              </div>
            </SignedOut>
            <SignedIn>
              <div className="px-4 py-2">
                <div className="flex items-center mb-3">
                  <div className="flex-shrink-0">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user?.imageUrl} alt={user?.fullName || "User"} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {getUserInitials()}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium">
                      {user?.firstName || user?.username || "User"}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {user?.emailAddresses[0]?.emailAddress}
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Link 
                    to="/profile" 
                    className="block px-4 py-2 text-base font-medium text-foreground hover:bg-gray-100 rounded-md"
                    onClick={toggleMenu}
                  >
                    <div className="flex items-center">
                      <User className="mr-3 h-5 w-5 text-muted-foreground" />
                      Profile
                    </div>
                  </Link>
                  <Link 
                    to="/dashboard" 
                    className="block px-4 py-2 text-base font-medium text-foreground hover:bg-gray-100 rounded-md"
                    onClick={toggleMenu}
                  >
                    <div className="flex items-center">
                      <Settings className="mr-3 h-5 w-5 text-muted-foreground" />
                      Dashboard
                    </div>
                  </Link>
                  <button 
                    onClick={() => {
                      handleSignOut();
                      toggleMenu();
                    }}
                    className="w-full text-left px-4 py-2 text-base font-medium text-red-600 hover:bg-gray-100 rounded-md"
                  >
                    <div className="flex items-center">
                      <LogOut className="mr-3 h-5 w-5" />
                      Log out
                    </div>
                  </button>
                </div>
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
