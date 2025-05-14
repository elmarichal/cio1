import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass, LogIn } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const isHeroSection = !scrolled && location.pathname === '/';

  const navItems = [
    { title: t('nav.home'), path: '/' },
    { title: t('nav.about'), path: '/#about' },
    { title: t('nav.features'), path: '/#features' },
    { title: t('nav.contact'), path: '/#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
          <Compass 
            size={28} 
            className={`${scrolled ? 'text-primary-500' : 'text-white'} transition-all duration-300`} 
          />
          <span 
            className={`font-heading font-bold text-xl ${
              scrolled ? 'text-primary-500' : 'text-white'
            } transition-all duration-300`}
          >
            TunisOrientation
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          <div className="flex space-x-6 rtl:space-x-reverse">
            {navItems.map((item) => (
              <button 
                key={item.path}
                onClick={() => scrollToSection(item.path.replace('/#', ''))}
                className={`font-medium hover:text-secondary-500 transition-all duration-300 ${
                  scrolled ? 'text-neutral-800' : 'text-white'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className={isHeroSection ? 'text-white' : ''}>
            <LanguageSwitcher />
          </div>
          <Link 
            to="/login" 
            className="btn-primary flex items-center space-x-2 rtl:space-x-reverse"
          >
            <LogIn size={18} />
            <span>{t('nav.login')}</span>
          </Link>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4 rtl:space-x-reverse">
          <div className={isHeroSection ? 'text-white' : ''}>
            <LanguageSwitcher />
          </div>
          <button 
            className="focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X size={24} className={`${scrolled ? 'text-neutral-800' : 'text-white'}`} />
            ) : (
              <Menu size={24} className={`${scrolled ? 'text-neutral-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute top-full left-0 right-0 animate-slide-in-right">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button 
                key={item.path}
                onClick={() => scrollToSection(item.path.replace('/#', ''))}
                className="font-medium text-neutral-800 hover:text-primary-500 transition-all duration-300"
              >
                {item.title}
              </button>
            ))}
            <Link 
              to="/login" 
              className="btn-primary flex items-center justify-center space-x-2 rtl:space-x-reverse mt-2"
            >
              <LogIn size={18} />
              <span>{t('nav.login')}</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;