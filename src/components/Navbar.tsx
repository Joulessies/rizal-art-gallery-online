
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
      </div>
    </motion.header>
  );
};

export default Navbar;
