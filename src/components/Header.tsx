import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface HeaderProps {
  transparent?: boolean;
}

const Header = ({ transparent = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full ${transparent ? "bg-transparent" : "bg-background"} border-b`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold">TagIt</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* Product Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                Products <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link to="/product/tagpulse" className="w-full">
                  TagPulse
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/product/tagio" className="w-full">
                  TagIo
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/product/tagit" className="w-full">
                  TagIt
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Supporting Pages */}
          <Link
            to="/about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            to="/pricing"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button size="sm">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <h3 className="font-medium text-sm text-muted-foreground">
              Products
            </h3>
            <Link
              to="/product/tagpulse"
              className="px-2 py-2 hover:bg-accent rounded-md"
              onClick={toggleMenu}
            >
              TagPulse
            </Link>
            <Link
              to="/product/tagio"
              className="px-2 py-2 hover:bg-accent rounded-md"
              onClick={toggleMenu}
            >
              TagIo
            </Link>
            <Link
              to="/product/tagit"
              className="px-2 py-2 hover:bg-accent rounded-md"
              onClick={toggleMenu}
            >
              TagIt
            </Link>

            <div className="border-t my-2"></div>

            <Link
              to="/about"
              className="px-2 py-2 hover:bg-accent rounded-md"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/pricing"
              className="px-2 py-2 hover:bg-accent rounded-md"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="px-2 py-2 hover:bg-accent rounded-md"
              onClick={toggleMenu}
            >
              Contact
            </Link>

            <div className="pt-2">
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
