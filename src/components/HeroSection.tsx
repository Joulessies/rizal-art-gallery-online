
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/b/b0/Jose_Rizal_self_portrait_1883.jpg')", 
          filter: "brightness(0.5)"
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            José Rizal:<br/>
            <span className="text-rizal-gold">The Artist Behind The Hero</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Explore the artistic legacy of the Philippine national hero, poet, novelist, and visual artist.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              className="bg-rizal-gold hover:bg-amber-600 text-rizal-navy font-medium px-8 py-6 text-lg" 
              asChild
            >
              <motion.a 
                href="/artworks"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore His Works
              </motion.a>
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 font-medium px-8 py-6 text-lg"
              asChild
            >
              <motion.a 
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn About Rizal
              </motion.a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
