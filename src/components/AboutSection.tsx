
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { 
      delay: i * 0.2,
      duration: 0.5 
    } 
  })
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-rizal-light-blue">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif font-bold mb-4 text-rizal-navy">The Artistic Journey of José Rizal</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Beyond his fame as a writer and revolutionary, José Rizal was a prolific visual artist whose works spanned multiple disciplines.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Jose_Rizal_self_portrait_1883.jpg" 
              alt="José Rizal self-portrait" 
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
            <p className="text-sm text-gray-500 mt-2 text-center">José Rizal's self-portrait, 1883</p>
          </motion.div>
          
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-bold mb-2 text-rizal-navy">Artistic Training</h3>
              <p className="text-gray-700">
                Rizal began developing his artistic talents from a young age under the tutelage of renowned European masters. 
                He studied at the Academia de Dibujo y Pintura in Manila and later continued his artistic education in Madrid and Paris.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-bold mb-2 text-rizal-navy">Versatile Mastery</h3>
              <p className="text-gray-700">
                His artistic repertoire included sketches, paintings, sculptures, and illustrations. The versatility of his skills allowed him 
                to capture portraits, landscapes, caricatures, and even anatomical studies with remarkable precision.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-bold mb-2 text-rizal-navy">Art as Expression</h3>
              <p className="text-gray-700">
                For Rizal, art was not merely a hobby but a powerful medium to document society, preserve culture, and express 
                his patriotism. His works often reflected his observations of Filipino life and his experiences abroad.
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Card className="bg-white border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="text-rizal-gold text-4xl font-serif font-bold mb-3">
                    {index === 0 ? '50+' : index === 1 ? '1875' : '3'}
                  </div>
                  <h3 className="text-xl font-medium mb-2">
                    {index === 0 ? 'Known Artworks' : index === 1 ? 'First Art Studies' : 'Artistic Disciplines'}
                  </h3>
                  <p className="text-gray-600">
                    {index === 0 
                      ? 'Documented sketches, paintings, and sculptures created throughout his lifetime.' 
                      : index === 1 
                      ? 'Began formal art education at the Academia de Dibujo y Pintura in Manila.' 
                      : 'Mastered drawing, painting, and sculpture across his career.'}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
