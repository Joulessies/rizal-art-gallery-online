
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import TimelineSection from '@/components/TimelineSection';
import Footer from '@/components/Footer';

const Timeline = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen paper-texture">
      <Navbar />
      <motion.div
        className="container mx-auto px-6 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="museum-heading text-4xl md:text-5xl mb-4 text-rizal-navy">Artistic Journey</h1>
          <div className="h-0.5 w-24 bg-rizal-gold mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto font-serif">
            Explore the chronological development of José Rizal's artistic career, from his early education to his final works.
          </p>
          <div className="quote-block max-w-2xl mx-auto mt-8">
            "The man who has art and science also has religion; but the man who has neither should have religion."
            <div className="text-right mt-2">— José Rizal, in a letter to his family</div>
          </div>
        </motion.div>
      </motion.div>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <TimelineSection />
      </motion.main>
      <Footer />
    </div>
  );
};

export default Timeline;
