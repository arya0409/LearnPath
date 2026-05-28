import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/logolearnpath.png';

const MainNavbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-surface-light dark:bg-surface-dark shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <img
                  src={logo}
                  alt="LearnPath Logo"
                  className="h-10 w-auto"
                />
                <span className="font-bold text-xl text-text-light dark:text-text-dark">LearnPath</span>
              </Link>
            </div>

            {/* Center Menu (Desktop) */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
              <Link
                to="/"
                className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary-light px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/industry-trends"
                className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary-light px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Industry Trends
              </Link>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Link
              to="/login"
              className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary-light px-3 py-2 text-sm font-medium transition-colors"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm"
            >
              Signup
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-slate-700 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-slate-700">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-4 py-2 text-base font-medium text-text-light dark:text-text-dark hover:bg-gray-50 dark:hover:bg-slate-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/industry-trends"
              className="block px-4 py-2 text-base font-medium text-text-light dark:text-text-dark hover:bg-gray-50 dark:hover:bg-slate-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Industry Trends
            </Link>
            <Link
              to="/login"
              className="block px-4 py-2 text-base font-medium text-text-light dark:text-text-dark hover:bg-gray-50 dark:hover:bg-slate-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block px-4 py-2 text-base font-medium text-primary dark:text-primary-light hover:bg-gray-50 dark:hover:bg-slate-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Signup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;
