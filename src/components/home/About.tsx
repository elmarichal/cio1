import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Trophy, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Élèves tunisiens" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-10 -left-5 w-24 h-24 bg-accent-500/20 rounded-full"></div>
            <div className="absolute bottom-10 -right-5 w-32 h-32 bg-secondary-500/20 rounded-full"></div>
            <div className="absolute -bottom-4 left-1/4 w-64 h-8 bg-primary-500/30 blur-xl"></div>
          </motion.div>
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-800 mb-6">
              À propos de <span className="text-primary-500">TunisOrientation</span>
            </h2>
            
            <p className="text-neutral-600 text-lg mb-6">
              Une plateforme conçue pour les élèves tunisiens, en partenariat avec le ministère de l'Éducation et des ONGs, pour faciliter l'orientation scolaire et professionnelle.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <BadgeCheck size={24} className="text-secondary-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-neutral-800">Expertise locale</h3>
                  <p className="text-neutral-600">
                    Contenus et conseils adaptés au système éducatif tunisien et au marché du travail local.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Trophy size={24} className="text-secondary-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-neutral-800">Approche personnalisée</h3>
                  <p className="text-neutral-600">
                    Recommandations et parcours adaptés aux intérêts, compétences et aspirations de chaque élève.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <GraduationCap size={24} className="text-secondary-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-neutral-800">Suivi continu</h3>
                  <p className="text-neutral-600">
                    Accompagnement tout au long du parcours scolaire, de l'orientation à l'insertion professionnelle.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="inline-flex items-center space-x-2 text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300">
              <span>En savoir plus sur notre mission</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;