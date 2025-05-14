import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://images.pexels.com/photos/5212359/pexels-photo-5212359.jpeg',
    'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg',
    'https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg',
    'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 to-primary-800/90 z-10"></div>
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentImage === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Hero Content */}
      <div className="container-custom relative z-20 h-screen flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('hero.title')} <span className="text-secondary-500">TunisOrientation</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white/90 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div 
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              to="/login" 
              className="btn-secondary px-8 py-3 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              {t('hero.signup')}
            </Link>
            <button 
              onClick={() => scrollToSection('features')}
              className="btn-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 px-8 py-3 text-lg"
            >
              {t('hero.discover')}
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white cursor-pointer z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={() => scrollToSection('features')}
      >
        <ChevronDown size={32} />
      </motion.div>
    </div>
  );
};

export default Hero;