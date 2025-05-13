
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <motion.header 
      className="bg-rizal-navy text-white py-4 px-6 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-serif text-2xl font-bold flex items-center">
          <motion.span 
            className="text-rizal-gold"
            whileHover={{ scale: 1.05 }}
          >
            Rizal
          </motion.span>
          <span className="mx-1">|</span>
          <span className="text-white">The Artist</span>
        </Link>
        
        {isMobile ? (
          <>
            <button 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {isMenuOpen && (
              <motion.div 
                className="fixed inset-0 bg-rizal-navy z-40 pt-20"
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ duration: 0.3 }}
              >
                <nav className="px-6">
                  <ul className="flex flex-col space-y-6 items-center">
                    <motion.li 
                      whileTap={{ scale: 0.95 }}
                      className="w-full text-center py-3 border-b border-gray-700"
                    >
                      <Link 
                        to="/" 
                        className="text-xl hover:text-rizal-gold transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Home
                      </Link>
                    </motion.li>
                    <motion.li 
                      whileTap={{ scale: 0.95 }}
                      className="w-full text-center py-3 border-b border-gray-700"
                    >
                      <Link 
                        to="/about" 
                        className="text-xl hover:text-rizal-gold transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        About
                      </Link>
                    </motion.li>
                    <motion.li 
                      whileTap={{ scale: 0.95 }}
                      className="w-full text-center py-3 border-b border-gray-700"
                    >
                      <Link 
                        to="/artworks" 
                        className="text-xl hover:text-rizal-gold transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Artworks
                      </Link>
                    </motion.li>
                    <motion.li 
                      whileTap={{ scale: 0.95 }}
                      className="w-full text-center py-3 border-b border-gray-700"
                    >
                      <Link 
                        to="/timeline" 
                        className="text-xl hover:text-rizal-gold transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Timeline
                      </Link>
                    </motion.li>
                  </ul>
                </nav>
              </motion.div>
            )}
          </>
        ) : (
          <nav>
            <ul className="flex space-x-8">
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link to="/" className="hover:text-rizal-gold transition-colors">Home</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link to="/about" className="hover:text-rizal-gold transition-colors">About</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link to="/artworks" className="hover:text-rizal-gold transition-colors">Artworks</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link to="/timeline" className="hover:text-rizal-gold transition-colors">Timeline</Link>
              </motion.li>
            </ul>
          </nav>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
