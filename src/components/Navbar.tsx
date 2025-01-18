import { useState } from "react";

interface Props{
  button: string
}

export function Header({ button }: Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#e6f2fe] backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img
              src={`/techbor.svg`}
              alt="Techbor Logo"
              width={100}
              height={100}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 border border-[#e6f2fe] px-6 py-2 rounded-full bg-white">
            <a href="/" className="text-sm font-medium text-gray-900">
              Home
            </a>
            <a
              href="/services"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Services
            </a>
            <a
              href="/about"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Contact Us
            </a>
          </nav>

          {/* Book Consultation Button */}
          <button className="hidden md:inline-flex h-10 rounded-full px-4 py-2 text-base bg-[#0066FF] text-white hover:bg-[#0066FF]/90">
            {button}
          </button>

          {/* Hamburger Icon */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-4 p-4 border-t border-gray-200 bg-white rounded-lg">
              <a href="/" className="text-sm font-medium text-gray-900">
                Home
              </a>
              <a
                href="/services"
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                Services
              </a>
              <a
                href="/about"
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                About Us
              </a>
              <a
                href="/contact"
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                Contact Us
              </a>
              <button className="w-full h-10 rounded-full px-4 py-2 text-base bg-[#0066FF] text-white hover:bg-[#0066FF]/90">
                {button}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
