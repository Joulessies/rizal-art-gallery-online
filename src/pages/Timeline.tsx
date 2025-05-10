
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import TimelineSection from '@/components/TimelineSection';
import Footer from '@/components/Footer';

const Timeline = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <TimelineSection />
      </motion.main>
      <Footer />
    </div>
  );
};

export default Timeline;
