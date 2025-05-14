import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import LoginForm from '../components/login/LoginForm';

const LoginPage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://images.pexels.com/photos/5212359/pexels-photo-5212359.jpeg',
    'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg',
    'https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg',
    'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg'
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
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

      {/* Decorative Elements */}
      <div className="hidden lg:block absolute right-0 top-0 w-1/3 h-1/2 bg-secondary-500/10 rounded-bl-full backdrop-blur-sm z-20"></div>
      <div className="hidden lg:block absolute left-20 bottom-20 w-20 h-20 bg-accent-500/20 rounded-full backdrop-blur-sm z-20"></div>
      
      {/* Back to Home */}
      <div className="container-custom pt-6 relative z-20">
        <Link to="/" className="inline-flex items-center text-white hover:text-secondary-100 transition-colors duration-300">
          <ArrowLeft size={18} className="mr-2" />
          <span>Retour à l'accueil</span>
        </Link>
      </div>
      
      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center px-4 py-12 relative z-20">
        {/* Logo */}
        <div className="mb-8 flex items-center">
          <Compass size={32} className="text-white" />
          <span className="font-heading font-bold text-2xl text-white ml-2">TunisOrientation</span>
        </div>
        
        {/* Login Form */}
        <LoginForm />
        
        {/* Additional Info */}
        <div className="mt-8 text-center text-white/80">
          <p>Plateforme d'orientation scolaire et professionnelle</p>
          <p className="mt-1 text-sm">Pour les élèves tunisiens</p>
        </div>
      </div>
      
      {/* Footer */}
      <div className="container-custom py-6 relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} TunisOrientation. Tous droits réservés.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link to="/privacy" className="text-white/70 text-sm hover:text-white transition-colors duration-300">
              Politique de Confidentialité
            </Link>
            <Link to="/terms" className="text-white/70 text-sm hover:text-white transition-colors duration-300">
              Conditions d'Utilisation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;