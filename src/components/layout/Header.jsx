import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

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

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Custom Software Development', href: '/services/custom-software' },
        { name: 'Web Application Development', href: '/services/web-development' }, 
        { name: 'Mobile App Development', href: '/services/mobile-development' }, 
        { name: 'UI/UX Design', href: '/services/ui-ux-design' },
        { name: 'Digital Marketing', href: '/services/digital-marketing' }
      ]
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white backdrop-blur-md shadow-lg py-4' 
        : 'bg-white py-4'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Code2 className="w-5 h-5 text-slate-900" />
              </div>
              <span className={`text-2xl font-black transition-colors duration-300 ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`}>
                <span className="bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                  Software
                </span>
                <span className={isScrolled ? 'text-slate-800' : 'text-black'}>
                  Solutions
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-1 font-semibold transition-all duration-300 ${
                      isScrolled 
                        ? 'text-slate-700 hover:text-slate-900' 
                        : 'text-black hover:text-[#FFB400]'  
                    } hover:scale-105`}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />}
                  </Link>
                ) : (
                  <Link
                    to={item.href}
                    className={`font-semibold transition-all duration-300 ${
                      isScrolled 
                        ? 'text-slate-700 hover:text-slate-900' 
                        : 'text-black hover:text-[#FFB400]' 
                    } hover:scale-105`}
                  >
                    {item.name}
                  </Link>
                )}
                
                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform -translate-y-4 group-hover:translate-y-0 border border-[#FFB400]/20">
                    <div className="py-3">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block px-6 py-3 text-sm text-slate-700 hover:bg-gradient-to-r hover:from-[#FFB400]/5 hover:to-[#FFD700]/5 hover:text-slate-900 transition-all duration-300 group/item"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-1.5 h-1.5 bg-[#FFB400] rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                            <span>{dropdownItem.name}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="relative bg-gradient-to-r from-[#FFB400] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FFB400] text-slate-900 px-8 py-3 rounded-xl font-bold transition-all duration-500 hover:scale-105 shadow-lg group overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 hover:rounded-2xl transition-transform duration-500 origin-left"></div>
              <span className="relative tracking-wide">Get Started</span>
            </Link>
          </div>

          {/* Mobile menu button - FIXED */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-3 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'text-slate-700 hover:bg-slate-100' 
                  : 'text-black hover:bg-white/10' 
              } hover:scale-105`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-[#FFB400]/20 shadow-2xl">
            <div className="px-6 py-6 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block text-slate-700 hover:text-slate-900 font-semibold py-4 px-4 rounded-xl hover:bg-gradient-to-r hover:from-[#FFB400]/5 hover:to-[#FFD700]/5 transition-all duration-300 border-b border-slate-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block text-slate-600 hover:text-slate-800 py-2 px-4 rounded-lg hover:bg-slate-50 transition-all duration-300 text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="block bg-gradient-to-r from-[#FFB400] to-[#FFD700] text-slate-900 text-center py-4 rounded-xl font-bold mt-4 shadow-lg hover:scale-105 transition-transform duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;