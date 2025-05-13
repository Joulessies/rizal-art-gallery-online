
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const SectionHeading = ({ title, description, children }: SectionHeadingProps) => {
  return (
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="museum-heading text-4xl font-serif font-bold text-rizal-navy mb-4">{title}</h2>
      <div className="h-0.5 w-24 bg-rizal-gold mx-auto mb-6"></div>
      <p className="max-w-3xl mx-auto text-gray-700">
        {description}
      </p>
      
      {children}
    </motion.div>
  );
};

export default SectionHeading;
