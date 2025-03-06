import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Menu, X, User, LogIn } from "lucide-react";

interface NavbarProps {
  isAuthenticated?: boolean;
}

const Navbar = ({ isAuthenticated = false }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full h-[70px] bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-primary">ResumeAI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/templates"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Templates
          </Link>
          <Link
            to="/features"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Pricing
          </Link>
        </div>

        {/* Authentication Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                      >
                        <User className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Link to="/dashboard" className="w-full">
                          Dashboard
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link to="/profile" className="w-full">
                          Profile
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link to="/logout" className="w-full">
                          Logout
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Account</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link to="/login">Log in</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Sign up</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/templates"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Templates
            </Link>
            <Link
              to="/features"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <div className="pt-2 border-t border-border">
              {isAuthenticated ? (
                <div className="flex flex-col space-y-2">
                  <Link
                    to="/dashboard"
                    className="flex items-center text-sm font-medium hover:text-primary transition-colors py-2"
                    onClick={toggleMenu}
                  >
                    <User className="h-4 w-4 mr-2" />
                    Dashboard
                  </Link>
                  <Link
                    to="/profile"
                    className="flex items-center text-sm font-medium hover:text-primary transition-colors py-2"
                    onClick={toggleMenu}
                  >
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Link>
                  <Link
                    to="/logout"
                    className="flex items-center text-sm font-medium hover:text-primary transition-colors py-2"
                    onClick={toggleMenu}
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    Logout
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Button variant="ghost" asChild className="justify-start">
                    <Link to="/login" onClick={toggleMenu}>
                      <LogIn className="h-4 w-4 mr-2" />
                      Log in
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link to="/signup" onClick={toggleMenu}>
                      Sign up
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
