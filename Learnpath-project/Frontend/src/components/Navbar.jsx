import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MoonIcon as Moon, SunIcon as Sun, Bars3Icon as Menu, XMarkIcon as X, UserCircleIcon, ArrowRightOnRectangleIcon, UserIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/logolearnpath.png';

const MainNavbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check auth state on mount and when custom event fires
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('accessToken');
      setIsAuthenticated(!!token);
    };

    checkAuth();
    window.addEventListener('auth-change', checkAuth);

    return () => {
      window.removeEventListener('auth-change', checkAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsAuthenticated(false);
    setIsProfileMenuOpen(false);
    navigate('/login');
  };

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
              {isAuthenticated && (
                <Link
                  to="/dashboard"
                  className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary-light px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Dashboard
                </Link>
              )}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center gap-2 focus:outline-none"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                    <UserCircleIcon className="w-7 h-7" />
                  </div>
                </button>

                {/* Profile Dropdown */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-100 dark:border-slate-700 py-1 z-50">
                    <Link
                      to="/profile"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-text-light dark:text-text-dark hover:bg-gray-50 dark:hover:bg-slate-700"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      <UserIcon className="w-4 h-4" />
                      My Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    >
                      <ArrowRightOnRectangleIcon className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-slate-700 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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

            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 text-base font-medium text-text-light dark:text-text-dark hover:bg-gray-50 dark:hover:bg-slate-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-base font-medium text-text-light dark:text-text-dark hover:bg-gray-50 dark:hover:bg-slate-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Profile
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left block px-4 py-2 text-base font-medium text-red-600 hover:bg-gray-50 dark:hover:bg-slate-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;