
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <AboutSection />
      </motion.main>
      <Footer />
    </div>
  );
};

export default About;
