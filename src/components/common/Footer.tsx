import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Facebook, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Compass size={28} className="text-secondary-500" />
              <span className="font-heading font-bold text-xl">TunisOrientation</span>
            </div>
            <p className="text-gray-300 text-sm">
              Une plateforme conçue pour les élèves tunisiens, en partenariat avec le ministère de l'Éducation et des ONGs.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-secondary-500 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-secondary-500 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary-500 transition-colors duration-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-gray-300 hover:text-secondary-500 transition-colors duration-300">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/#features" className="text-gray-300 hover:text-secondary-500 transition-colors duration-300">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-gray-300 hover:text-secondary-500 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-gray-300 hover:text-secondary-500 transition-colors duration-300">
                  Espace Membres
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary-500 transition-colors duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary-500 transition-colors duration-300">
                  Guides d'Orientation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary-500 transition-colors duration-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-secondary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">contact@tunisorientation.tn</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-secondary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">+216 71 234 567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} TunisOrientation. Tous droits réservés.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-secondary-500 transition-colors duration-300">
              Politique de Confidentialité
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-secondary-500 transition-colors duration-300">
              Conditions d'Utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;