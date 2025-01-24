"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

interface Props {
  button?: string;
  onButtonClick?: () => void;
}

export function Header({ button, onButtonClick }: Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: "Software Development", href: "/software" },
    { name: "Digital Transformation", href: "/digital" },
    { name: "Business Solutions", href: "/business-page" },
    { name: "IT Training", href: "/it-page" },
  ];

  const getButtonLink = () => {
    if (button?.toLowerCase() === "book consultation") {
      if (location.pathname === "/") {
        return "#consultation";
      } else if (
        ["/software", "/digital", "/business-page", "/it-page"].includes(
          location.pathname
        )
      ) {
        return "/contact";
      }
    }
    return "/";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#e6f2fe] backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - Fixed width */}
          <div className="w-[180px] min-w-[180px]">
            <a href="/" className="flex items-center space-x-2">
              <img
                src={`/techbor.svg`}
                alt="Techbor Logo"
                width={180}
                height={180}
                className="ml-4"
              />
            </a>
          </div>

          {/* Navigation - Fixed position with flex-1 */}
          <div className="flex-1 flex justify-center">
            <nav className="hidden md:flex items-center space-x-8 ml-32 md:ml-32 lg:ml-64 border border-[#e6f2fe] px-6 py-2 rounded-full">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-md font-medium ${
                    isActive
                      ? "text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`
                }
              >
                Home
              </NavLink>

              <div
                className="relative group"
                onMouseEnter={() => setIsServicesMenuOpen(true)}
                onMouseLeave={() => setIsServicesMenuOpen(false)}
              >
                <button
                  id="services-menu-button"
                  aria-expanded={isServicesMenuOpen}
                  aria-haspopup="true"
                  aria-controls="services-dropdown"
                  className="flex items-center text-md font-medium text-gray-600 hover:text-gray-900"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
                </button>
                <div
                  id="services-dropdown"
                  role="menu"
                  aria-labelledby="services-menu-button"
                  className={`absolute left-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none
                    ${isServicesMenuOpen ? "block" : "hidden"} 
                    before:content-[''] before:absolute before:top-[-10px] before:left-0 before:w-full before:h-[10px]`}
                >
                  <div className="py-1">
                    {services.map((service, index) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        tabIndex={0}
                        id={`service-item-${index}`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-md font-medium ${
                    isActive
                      ? "text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`
                }
              >
                About Us
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-md font-medium ${
                    isActive
                      ? "text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`
                }
              >
                Contact Us
              </NavLink>
            </nav>
          </div>

          {/* Button - Fixed width container */}
          <div className="w-[180px] min-w-[180px] hidden md:flex justify-end">
            {button &&
              (location.pathname === "/" ? (
                <button
                  onClick={onButtonClick}
                  className="hidden md:inline-flex h-10 rounded-full px-4 py-2 text-base bg-[#0066FF] text-white hover:bg-[#0066FF]/90"
                >
                  {button}
                </button>
              ) : (
                <Link to={getButtonLink()}>
                  <button className="hidden md:inline-flex h-10 rounded-full px-4 py-2 text-base bg-[#0066FF] text-white hover:bg-[#0066FF]/90">
                    {button}
                  </button>
                </Link>
              ))}
          </div>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md text-black focus:outline-none absolute right-4 top-1/2 -translate-y-1/2"
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
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white">
          <nav className="flex flex-col space-y-4 p-4 border-t border-gray-200">
            <a href="/" className="text-sm font-medium text-gray-900">
              Home
            </a>
            <div>
              <button
                id="mobile-services-button"
                aria-expanded={isServicesMenuOpen}
                aria-haspopup="true"
                aria-controls="mobile-services-dropdown"
                onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
                className="flex items-center justify-between w-full text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                Services
                <ChevronDown
                  className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                    isServicesMenuOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              {isServicesMenuOpen && (
                <div
                  id="mobile-services-dropdown"
                  role="menu"
                  aria-labelledby="mobile-services-button"
                  className="mt-2 space-y-2 pl-4"
                >
                  {services.map((service, index) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="block text-sm text-gray-600 hover:text-gray-900 py-2"
                      role="menuitem"
                      tabIndex={0}
                      id={`mobile-service-item-${index}`}
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
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
            {button &&
              (location.pathname === "/" ? (
                <button
                  onClick={onButtonClick}
                  className="w-full h-10 rounded-full px-4 py-2 text-base bg-[#0066FF] text-white hover:bg-[#0066FF]/90"
                >
                  {button}
                </button>
              ) : (
                <Link
                  to={getButtonLink()}
                  className="w-full h-full flex items-center justify-center"
                >
                  <button className="w-full h-10 rounded-full px-4 py-2 text-base bg-[#0066FF] text-white hover:bg-[#0066FF]/90">
                    {button}
                  </button>
                </Link>
              ))}
          </nav>
        </div>
      )}
    </header>
  );
}
