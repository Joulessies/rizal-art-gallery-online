
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-rizal-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="font-serif text-2xl font-bold mb-6 inline-block">
              <span className="text-rizal-gold">Rizal</span>
              <span className="mx-1">|</span>
              <span className="text-white">The Artist</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Dedicated to preserving and promoting the artistic legacy of José Rizal,
              showcasing his contributions to visual arts alongside his literary and political achievements.
            </p>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Rizal: The Artist. All rights reserved.
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-rizal-gold">Explore</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#artworks" className="text-gray-300 hover:text-white transition-colors">Artworks</a></li>
              <li><a href="#timeline" className="text-gray-300 hover:text-white transition-colors">Timeline</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-rizal-gold">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">References</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Museums</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Bibliographies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
