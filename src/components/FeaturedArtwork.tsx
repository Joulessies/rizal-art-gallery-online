
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({ 
    opacity: 1, 
    x: 0, 
    transition: { 
      delay: i * 0.1 + 0.3,
      duration: 0.5 
    } 
  })
};

const FeaturedArtwork = () => {
  return (
    <section className="bg-rizal-navy text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold mb-6">Featured Artwork: <span className="text-rizal-gold">The Triumph of Science Over Death</span></h2>
            <p className="mb-6 text-gray-300">
              This remarkable sculpture created in 1890 during Rizal's exile in Dapitan represents his philosophy on life and death.
              The sculpture depicts a naked youth with raised arms holding a torch, symbolizing science and knowledge overcoming death,
              represented by the skull beneath the youth's foot.
            </p>
            <ul className="space-y-3 mb-8 text-gray-300">
              {[0, 1, 2, 3].map((i) => (
                <motion.li 
                  key={i}
                  className="flex items-start"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={listItemVariants}
                >
                  <span className="text-rizal-gold mr-2">•</span>
                  <span>
                    {i === 0 ? 'Sculpted from clay during his exile in Dapitan' :
                     i === 1 ? 'Represents Rizal\'s scientific training as a physician' :
                     i === 2 ? 'One of his most philosophical artistic works' :
                     'Currently housed at the National Museum of the Philippines'}
                  </span>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button className="bg-rizal-gold hover:bg-amber-600 text-rizal-navy group">
                <motion.span
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Read the Full Analysis
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <AspectRatio ratio={3/4} className="bg-gray-900">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Triumph_of_Science_over_Death.jpg/640px-Triumph_of_Science_over_Death.jpg" 
                alt="The Triumph of Science Over Death by José Rizal" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1770";
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="text-sm text-rizal-gold">1890, Clay Sculpture</div>
                <h3 className="font-serif font-semibold text-xl">The Triumph of Science Over Death</h3>
              </div>
            </AspectRatio>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtwork;
