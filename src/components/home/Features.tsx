import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, BookOpen, MessageCircle } from 'lucide-react';
import { Feature } from '../../types';
import { features } from '../../utils/data';

const iconComponents = {
  'clipboard-list': ClipboardList,
  'book-open': BookOpen,
  'message-circle': MessageCircle,
};

const Features: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="features" className="section bg-neutral-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-800 mb-4">
            Fonctionnalités clés
          </h2>
          <p className="text-neutral-600 text-lg">
            Des outils puissants pour t'aider à prendre les meilleures décisions pour ton avenir académique et professionnel.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature: Feature, index: number) => {
            const IconComponent = iconComponents[feature.icon as keyof typeof iconComponents];
            
            return (
              <motion.div 
                key={index}
                className="card hover:border-l-4 hover:border-l-primary-500 group"
                variants={itemVariants}
              >
                <div className="h-14 w-14 rounded-full bg-primary-100 flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-all duration-300">
                  <IconComponent size={28} className="text-primary-600 group-hover:text-white transition-all duration-300" />
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-neutral-800 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-neutral-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;