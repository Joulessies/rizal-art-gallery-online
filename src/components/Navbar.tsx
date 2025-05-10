
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-rizal-navy text-white py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-serif text-2xl font-bold flex items-center">
          <span className="text-rizal-gold">Rizal</span>
          <span className="mx-1">|</span>
          <span className="text-white">The Artist</span>
        </Link>
        
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="hover:text-rizal-gold transition-colors">Home</Link>
            </li>
            <li>
              <a href="#about" className="hover:text-rizal-gold transition-colors">About</a>
            </li>
            <li>
              <a href="#artworks" className="hover:text-rizal-gold transition-colors">Artworks</a>
            </li>
            <li>
              <a href="#timeline" className="hover:text-rizal-gold transition-colors">Timeline</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
