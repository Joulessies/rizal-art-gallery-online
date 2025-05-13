
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  category: 'art' | 'life' | 'publication';
  icon?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: "1875",
    title: "Formal Art Education Begins",
    description: "Starts studying at the Academia de Dibujo y Pintura in Manila under the instruction of Spanish artist Agustín Sáez.",
    category: 'art'
  },
  {
    id: 2,
    year: "1876-1877",
    title: "Early Sculptures",
    description: "Creates his first known sculptures, including busts and figurines, displaying natural talent for three-dimensional art.",
    category: 'art'
  },
  {
    id: 3,
    year: "1879",
    title: "University Studies in Madrid",
    description: "Travels to Spain to pursue higher education, where he continues his artistic training alongside medical studies.",
    category: 'life'
  },
  {
    id: 4,
    year: "1883",
    title: "Self-Portrait",
    description: "Completes his famous self-portrait in oil, demonstrating his developing skill and technique in painting.",
    category: 'art'
  },
  {
    id: 5,
    year: "1884-1885",
    title: "European Art Exposure",
    description: "Travels extensively in Europe, visiting museums and studios in Paris, Berlin, and Rome, enriching his artistic perspective.",
    category: 'art'
  },
  {
    id: 6,
    year: "1887",
    title: "Noli Me Tángere Illustrations",
    description: "Creates illustrations for his novel Noli Me Tángere, combining his literary and artistic talents.",
    category: 'publication'
  },
  {
    id: 7,
    year: "1892-1896",
    title: "Dapitan Period",
    description: "During his exile in Dapitan, creates numerous sketches documenting local life and landscapes.",
    category: 'art'
  },
  {
    id: 8,
    year: "1892",
    title: "The Mother's Revenge",
    description: "Sculpts 'The Mother's Revenge,' a clay sculpture rich in symbolism about colonial rule.",
    category: 'art'
  }
];

const TimelineSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="timeline" className="py-12 sm:py-20 bg-rizal-light-blue">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4 text-rizal-navy">Artistic Timeline</h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto text-gray-700">
            Follow the chronological development of Rizal's artistic career from his early education to his final works.
          </p>
          <motion.div 
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="bg-white px-2 sm:px-3 py-1 border-rizal-navy text-rizal-navy">
              Art Events
            </Badge>
            <Badge variant="outline" className="bg-white px-2 sm:px-3 py-1 border-rizal-gold text-rizal-gold">
              Life Events
            </Badge>
            <Badge variant="outline" className="bg-white px-2 sm:px-3 py-1 border-rizal-brown text-rizal-brown">
              Publications
            </Badge>
          </motion.div>
        </motion.div>
        
        <div className="relative flex flex-col items-center">
          {/* Timeline line - only show on non-mobile */}
          {!isMobile && (
            <div className="absolute h-full w-1 bg-gray-300 left-1/2 -translate-x-1/2"></div>
          )}
          
          {timelineEvents.map((event, index) => (
            <motion.div 
              key={event.id}
              className={`mb-8 sm:mb-12 w-full ${
                isMobile ? 'pl-6 border-l-4 border-gray-300' : 
                `flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'}`
              } relative`}
              initial={{ opacity: 0, x: isMobile ? 0 : (index % 2 === 0 ? 50 : -50) }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Timeline dot - only show on non-mobile */}
              {!isMobile && (
                <motion.div 
                  className="absolute w-4 h-4 rounded-full bg-white border-2 border-[#0A1933] left-1/2 -translate-x-1/2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                />
              )}
              
              {/* For mobile, show timeline dot on the left */}
              {isMobile && (
                <motion.div 
                  className="absolute w-3 h-3 rounded-full bg-white border-2 border-[#0A1933] left-[-8px] top-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                />
              )}
              
              <Card className={`w-full md:w-auto max-w-lg border-t-4 shadow-md ${
                event.category === 'art' ? 'border-rizal-navy' : 
                event.category === 'life' ? 'border-rizal-gold' : 'border-rizal-brown'
              }`}>
                <motion.div 
                  className="p-4 sm:p-6"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="font-serif font-bold text-xl mb-2">
                    {event.title}
                  </div>
                  <div className="text-sm text-gray-500 mb-3">{event.year}</div>
                  <p className="text-gray-700">{event.description}</p>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
