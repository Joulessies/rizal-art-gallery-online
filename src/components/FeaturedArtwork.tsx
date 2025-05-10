
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const FeaturedArtwork = () => {
  return (
    <section className="bg-rizal-navy text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6">Featured Artwork: <span className="text-rizal-gold">The Study of Paris</span></h2>
            <p className="mb-6 text-gray-300">
              Completed in 1886 during his time in Europe, this rarely seen watercolor painting showcases Rizal's
              mastery of light and perspective. The piece depicts the bustling streets of Paris, capturing both
              the architecture and the spirit of the city that influenced his artistic and political thinking.
            </p>
            <ul className="space-y-3 mb-8 text-gray-300">
              <li className="flex items-start">
                <span className="text-rizal-gold mr-2">•</span>
                <span>Created using watercolor on special imported paper</span>
              </li>
              <li className="flex items-start">
                <span className="text-rizal-gold mr-2">•</span>
                <span>One of the few urban landscapes in Rizal's collection</span>
              </li>
              <li className="flex items-start">
                <span className="text-rizal-gold mr-2">•</span>
                <span>Restored in 1998 by the National Museum conservation team</span>
              </li>
              <li className="flex items-start">
                <span className="text-rizal-gold mr-2">•</span>
                <span>Shows influence of European impressionist techniques</span>
              </li>
            </ul>
            <Button className="bg-rizal-gold hover:bg-amber-600 text-rizal-navy group">
              Read the Full Analysis
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1568662550477-8659242fdbba?q=80&w=1974" 
              alt="The Study of Paris by José Rizal" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <div className="text-sm text-rizal-gold">1886, Watercolor on Paper</div>
              <h3 className="font-serif font-semibold text-xl">The Study of Paris</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtwork;
