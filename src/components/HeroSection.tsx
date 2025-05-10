
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1617552839336-4ce20ebe8918?q=80&w=2069')", 
          filter: "brightness(0.5)"
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4">
            José Rizal:<br/>
            <span className="text-rizal-gold">The Artist Behind The Hero</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 font-light">
            Explore the artistic legacy of the Philippine national hero, poet, novelist, and visual artist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-rizal-gold hover:bg-amber-600 text-rizal-navy font-medium px-8 py-6 text-lg" 
              asChild
            >
              <a href="#artworks">Explore His Works</a>
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 font-medium px-8 py-6 text-lg"
              asChild
            >
              <a href="#about">Learn About Rizal</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
