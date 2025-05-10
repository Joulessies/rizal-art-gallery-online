
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import FeaturedArtwork from '@/components/FeaturedArtwork';

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen paper-texture">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <motion.div 
          className="container mx-auto px-6 py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="museum-heading text-3xl md:text-4xl mb-8 text-center">Welcome to the José Rizal Art Museum</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl font-serif italic text-gray-700 mb-6">
              "The pen is mightier than the sword, but the brush speaks in colors of revolution."
            </p>
            <p className="mt-6 text-gray-600 mb-8">
              Discover the artistic side of the Philippine national hero through this digital exhibition of his works, 
              showcasing his talent as a visual artist alongside his literary and political legacy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md artwork-card"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-48 mb-4 overflow-hidden rounded-md">
                <img 
                  src="https://images.unsplash.com/photo-1639671224447-791fd1e746ea?q=80&w=1974" 
                  alt="Artwork Exhibition" 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Artistic Journey</h3>
              <p className="text-gray-600">Explore the evolution of Rizal's artistic style from his early sketches to mature paintings.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md artwork-card"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-48 mb-4 overflow-hidden rounded-md">
                <img 
                  src="https://images.unsplash.com/photo-1617552839336-4ce20ebe8918?q=80&w=1974" 
                  alt="Historic Documents" 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Literary Context</h3>
              <p className="text-gray-600">Understand how Rizal's artworks complemented his literary works and political activism.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md artwork-card"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="h-48 mb-4 overflow-hidden rounded-md">
                <img 
                  src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1770" 
                  alt="Art Techniques" 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Techniques & Influences</h3>
              <p className="text-gray-600">Discover the European and Filipino artistic traditions that shaped Rizal's unique visual style.</p>
            </motion.div>
          </div>
        </motion.div>
        
        <FeaturedArtwork />
        
        <motion.section 
          className="py-20 bg-rizal-cream ink-splatter"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="museum-heading text-3xl md:text-4xl mb-12 text-center">The Artist Behind the Hero</h2>
              
              <div className="quote-block mb-12">
                <p className="text-xl">
                  "Rizal's art was not merely a pastime, but an extension of his intellect and his passion for capturing
                  the beauty and truth of the world around him."
                </p>
                <p className="text-right mt-2 text-gray-600">— Dr. Ambeth Ocampo, Historian</p>
              </div>
              
              <div className="prose prose-lg mx-auto text-gray-600">
                <p className="mb-6">
                  While José Rizal is primarily celebrated as a writer, revolutionary, and national hero of the Philippines, 
                  his talents as a visual artist remain less explored. From his childhood in Calamba to his years of exile 
                  in Europe, Rizal produced hundreds of sketches, drawings, watercolors, and sculptures that reveal his 
                  keen artistic sensibility and observant eye.
                </p>
                
                <p className="mb-6">
                  Trained in the European academic tradition during his time in Madrid, Paris, and Berlin, Rizal absorbed 
                  the aesthetic principles of late 19th-century art while maintaining a distinctly Filipino perspective. 
                  His artwork often depicted scenes of everyday Philippine life, portraits of fellow reformists, and 
                  landscapes of places that held special meaning to him.
                </p>
                
                <p>
                  This museum celebrates this lesser-known dimension of Rizal's genius, contextualizing his visual art 
                  within his broader legacy as a polymath whose creative expression knew no boundaries.
                </p>
              </div>
              
              <motion.div 
                className="mt-12 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="/about" 
                  className="inline-block px-8 py-4 bg-rizal-navy text-white font-medium rounded-md hover:bg-opacity-90 transition-all"
                >
                  Learn More About Rizal's Artistic Journey
                </a>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Index;
