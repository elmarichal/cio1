import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '../../types';
import { testimonials } from '../../utils/data';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right, 0: initial

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section className="section bg-gradient-to-br from-primary-50 to-neutral-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-800 mb-4">
            Ce que disent nos utilisateurs
          </h2>
          <p className="text-neutral-600 text-lg">
            Découvre comment TunisOrientation a aidé d'autres élèves à trouver leur voie.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-8">
          {/* Navigation Buttons */}
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-primary-50 transition-all duration-300"
            onClick={prevTestimonial}
            aria-label="Précédent témoignage"
          >
            <ChevronLeft size={24} className="text-primary-500" />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-primary-50 transition-all duration-300"
            onClick={nextTestimonial}
            aria-label="Prochain témoignage"
          >
            <ChevronRight size={24} className="text-primary-500" />
          </button>
          
          {/* Testimonial Card */}
          <div className="overflow-hidden relative h-[320px] md:h-[260px]">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="card flex flex-col md:flex-row items-center gap-6 absolute inset-0"
            >
              <div className="relative md:w-1/3 flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <Quote 
                  size={42} 
                  className="absolute -top-4 -left-4 text-secondary-500 opacity-20" 
                />
              </div>
              
              <div className="md:w-2/3 text-center md:text-left">
                <p className="text-neutral-600 italic text-lg mb-6">
                  "{testimonials[currentIndex].text}"
                </p>
                <div>
                  <h4 className="font-heading font-semibold text-neutral-800">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-neutral-500">
                    {testimonials[currentIndex].age} ans
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary-500 w-6' 
                    : 'bg-primary-200'
                }`}
                aria-label={`Témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;