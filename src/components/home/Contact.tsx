import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section bg-neutral-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-800 mb-4">
            Nous contacter
          </h2>
          <p className="text-neutral-600 text-lg">
            Des questions? N'hésitez pas à nous écrire et notre équipe vous répondra dans les plus brefs délais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="font-heading font-semibold text-2xl text-neutral-800 mb-6">
              Envoyez-nous un message
            </h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Nom complet
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="input-field" 
                    placeholder="Votre nom"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="input-field" 
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                  Sujet
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className="input-field" 
                  placeholder="L'objet de votre message"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="input-field resize-none" 
                  placeholder="Votre message..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full py-3"
              >
                Envoyer le message
              </button>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 rounded-full p-3 flex-shrink-0">
                <Mail size={24} className="text-primary-600" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl text-neutral-800 mb-2">
                  Email
                </h3>
                <p className="text-neutral-600 mb-1">
                  Pour les questions générales:
                </p>
                <a 
                  href="mailto:contact@tunisorientation.tn" 
                  className="text-primary-600 hover:text-primary-700 transition-colors duration-300"
                >
                  contact@tunisorientation.tn
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-secondary-100 rounded-full p-3 flex-shrink-0">
                <MessageSquare size={24} className="text-secondary-600" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl text-neutral-800 mb-2">
                  Support
                </h3>
                <p className="text-neutral-600 mb-1">
                  Besoin d'aide avec la plateforme?
                </p>
                <a 
                  href="mailto:support@tunisorientation.tn" 
                  className="text-primary-600 hover:text-primary-700 transition-colors duration-300"
                >
                  support@tunisorientation.tn
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-accent-100 rounded-full p-3 flex-shrink-0">
                <MapPin size={24} className="text-accent-600" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl text-neutral-800 mb-2">
                  Localisation
                </h3>
                <p className="text-neutral-600">
                  Avenue Habib Bourguiba<br />
                  Tunis, 1000<br />
                  Tunisie
                </p>
              </div>
            </div>
            
            <div className="bg-primary-500 text-white p-6 rounded-lg mt-8">
              <h3 className="font-heading font-semibold text-xl mb-3">
                Horaires de disponibilité
              </h3>
              <p className="mb-4">
                Notre équipe est disponible pour vous aider:
              </p>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Lundi - Vendredi:</span>
                  <span>8:30 - 17:30</span>
                </li>
                <li className="flex justify-between">
                  <span>Samedi:</span>
                  <span>9:00 - 13:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Dimanche:</span>
                  <span>Fermé</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;