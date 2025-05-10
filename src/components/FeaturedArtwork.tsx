
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

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
            <h2 className="text-4xl font-serif font-bold mb-6">Featured Artwork: <span className="text-rizal-gold">The Study of Paris</span></h2>
            <p className="mb-6 text-gray-300">
              Completed in 1886 during his time in Europe, this rarely seen watercolor painting showcases Rizal's
              mastery of light and perspective. The piece depicts the bustling streets of Paris, capturing both
              the architecture and the spirit of the city that influenced his artistic and political thinking.
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
                    {i === 0 ? 'Created using watercolor on special imported paper' :
                     i === 1 ? 'One of the few urban landscapes in Rizal\'s collection' :
                     i === 2 ? 'Restored in 1998 by the National Museum conservation team' :
                     'Shows influence of European impressionist techniques'}
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
            className="relative h-96 md:h-[500px] overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1568662550477-8659242fdbba?q=80&w=1974" 
              alt="The Study of Paris by José Rizal" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <div className="text-sm text-rizal-gold">1886, Watercolor on Paper</div>
              <h3 className="font-serif font-semibold text-xl">The Study of Paris</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtwork;
