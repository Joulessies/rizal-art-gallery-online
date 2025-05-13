
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import { BookOpen } from 'lucide-react';

const About = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen paper-texture">
      <Navbar />
      <motion.div
        className="container mx-auto px-4 sm:px-6 py-8 sm:py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="museum-heading text-3xl sm:text-4xl md:text-5xl mb-4 text-rizal-navy">The Artist</h1>
          <div className="h-0.5 w-24 bg-rizal-gold mx-auto"></div>
        </motion.div>
        
        {/* Hero Quote Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-12 sm:mb-16"
        >
          <div className="quote-block py-6 sm:py-8 px-4 sm:px-6">
            <p className="text-lg sm:text-xl md:text-2xl mb-4">
              "As the traveler who ascends a mountain and finds himself at the top in the midst of a vast sea of clouds rising up below him, so with my freed mind I behold at my feet the peoples and their institutions."
            </p>
            <p className="text-right text-gray-600">— From "The Social Cancer" (Noli Me Tángere)</p>
          </div>
        </motion.div>
      </motion.div>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <AboutSection />
        
        {/* Literary Works Brief Section */}
        <section className="bg-rizal-cream py-12 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div 
              className="text-center mb-10 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="inline-block p-3 bg-rizal-navy rounded-full mb-6">
                <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-rizal-gold" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4 text-rizal-navy">Literary Genius</h2>
              <p className="text-base sm:text-lg max-w-3xl mx-auto text-gray-700">
                While Rizal's visual art showcased remarkable talent, his literary works cemented his legacy as one of the greatest Filipino intellectuals.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  title: "Noli Me Tángere",
                  year: "1887",
                  description: "Rizal's first novel exposed the corruption of Spanish colonial rule in the Philippines, using powerful visual imagery and character descriptions that reflected his artistic eye."
                },
                {
                  title: "El Filibusterismo",
                  year: "1891",
                  description: "The sequel to Noli Me Tángere continued Rizal's social commentary through richly painted scenes and characters, demonstrating his ability to create visual worlds through words."
                },
                {
                  title: "Mi Último Adiós",
                  year: "1896",
                  description: "Written on the eve of his execution, this poem showcases Rizal's ability to create evocative imagery and emotional resonance through carefully crafted verses and metaphors."
                },
                {
                  title: "Essays & Articles",
                  year: "1882-1896",
                  description: "Throughout his life, Rizal wrote numerous essays and articles that often included his own illustrations, merging his visual artistic talents with his powerful prose."
                }
              ].map((work, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="border-b-4 border-rizal-gold"></div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-xl font-serif font-bold text-rizal-navy mb-1">{work.title}</h3>
                    <p className="text-sm text-rizal-gold font-medium mb-3">{work.year}</p>
                    <p className="text-gray-700">{work.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-10 sm:mt-12"
            >
              <a href="/artworks" className="inline-flex items-center text-rizal-navy hover:text-rizal-gold transition-colors font-medium">
                <span>Explore Rizal's complete portfolio of works</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>
      </motion.main>
      <Footer />
    </div>
  );
};

export default About;
