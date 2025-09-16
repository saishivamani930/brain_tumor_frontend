// src/components/Navigation.tsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Brain, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/upload", label: "Upload" },
  { path: "/how-it-works", label: "How it Works" },
  { path: "/developer", label: "Developer" },
  { path: "/help", label: "Help" },
  { path: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-2 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg"
            >
              <Brain className="h-6 w-6 text-white" />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Neuro Scan Assist
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="relative inline-block">
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-blue-100"
          >
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
