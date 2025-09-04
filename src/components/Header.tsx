import React, { useState, useEffect } from 'react';
import { Search, Menu, X, User, Heart, Bookmark } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    'Home', 'Lifestyle', 'Technology', 'Travel', 'Food', 'Fashion', 'Culture', 'About'
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        {/* Top Bar */}
        <div className={`py-2 border-b transition-colors duration-300 ${
          isScrolled ? 'border-gray-200' : 'border-white/20'
        }`}>
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span className={`transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                Tuesday, January 16, 2025
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className={`p-1 rounded-full transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 hover:text-orange-500' : 'text-white/80 hover:text-white'
              }`}>
                <User size={16} />
              </button>
              <button className={`p-1 rounded-full transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 hover:text-orange-500' : 'text-white/80 hover:text-white'
              }`}>
                <Heart size={16} />
              </button>
              <button className={`p-1 rounded-full transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 hover:text-orange-500' : 'text-white/80 hover:text-white'
              }`}>
                <Bookmark size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-slate-800' : 'text-white'
                }`}>
                  MagArt
                </h1>
                <p className={`text-xs transition-colors duration-300 ${
                  isScrolled ? 'text-gray-500' : 'text-white/70'
                }`}>
                  Modern Magazine
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`relative font-medium transition-all duration-300 hover:scale-105 group ${
                    isScrolled ? 'text-slate-700 hover:text-orange-500' : 'text-white hover:text-orange-300'
                  }`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Search & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isScrolled ? 'text-slate-600 hover:text-orange-500 hover:bg-orange-50' : 'text-white hover:text-orange-300 hover:bg-white/10'
              }`}>
                <Search size={20} />
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isScrolled ? 'text-slate-600 hover:text-orange-500' : 'text-white hover:text-orange-300'
                }`}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}>
          <nav className="flex flex-col space-y-4 pt-4 border-t border-gray-200">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`font-medium transition-colors duration-300 hover:text-orange-500 ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;