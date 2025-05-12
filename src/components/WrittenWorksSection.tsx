
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

interface WrittenWork {
  id: number;
  title: string;
  year: string;
  description: string;
  category: 'novel' | 'poetry' | 'essay' | 'play';
  imageUrl?: string;
}

const writtenWorks: WrittenWork[] = [
  {
    id: 1,
    title: "Noli Me Tángere",
    year: "1887",
    description: "Rizal's first novel exposes the corruption of Spanish colonial rule in the Philippines, following the story of Juan Crisóstomo Ibarra y Magsalin, who returns home after studying in Europe.",
    category: 'novel',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Noli_me_tangere_first_edition_cover.png"
  },
  {
    id: 2,
    title: "El Filibusterismo",
    year: "1891",
    description: "The sequel to Noli Me Tángere continues Ibarra's story under the disguise of Simoun, who returns with a revolutionary plot against the Spanish colonizers.",
    category: 'novel',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/El_Filibusterismo.jpg"
  },
  {
    id: 3,
    title: "Mi Último Adiós",
    year: "1896",
    description: "Rizal's final poem, written on the eve of his execution, expressing his love for his native land and his willingness to die for it.",
    category: 'poetry'
  },
  {
    id: 4,
    title: "To The Filipino Youth",
    year: "1879",
    description: "A poem written when Rizal was only 18, urging the youth to rise to the challenges of nation-building through education and service.",
    category: 'poetry'
  },
  {
    id: 5,
    title: "The Philippines a Century Hence",
    year: "1889-1890",
    description: "An essay predicting the future of the Philippines in which Rizal foresees the end of Spanish colonialism and speculates on the country's destiny.",
    category: 'essay'
  },
  {
    id: 6,
    title: "Filipinas Dentro De Cien Años",
    year: "1889-1890",
    description: "The original Spanish version of 'The Philippines a Century Hence', published in La Solidaridad.",
    category: 'essay'
  },
  {
    id: 7,
    title: "La Indolencia de los Filipinos",
    year: "1890",
    description: "An essay challenging the Spanish perception that Filipinos are inherently lazy, arguing that any apparent indolence is a product of colonial oppression.",
    category: 'essay'
  },
  {
    id: 8,
    title: "San Euistaquio, Mártir",
    year: "1876",
    description: "One of Rizal's early dramatic works, a play about the life of Saint Eustace, written during his student days.",
    category: 'play'
  }
];

const WrittenWorksSection = () => {
  return (
    <section className="py-16 bg-white paper-texture">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="museum-heading text-4xl font-serif font-bold text-rizal-navy mb-4">Literary Works</h2>
          <div className="h-0.5 w-24 bg-rizal-gold mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-700">
            Beyond his artistic talents, José Rizal was a prolific writer whose literary works sparked the Philippine independence movement and continue to inspire generations. His novels, essays, and poetry critiqued colonial society and advocated for reform.
          </p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" className="border-rizal-navy text-rizal-navy hover:bg-rizal-navy hover:text-white">
              All Works
            </Button>
            <Button variant="outline" className="border-rizal-navy text-rizal-navy hover:bg-rizal-navy hover:text-white">
              Novels
            </Button>
            <Button variant="outline" className="border-rizal-navy text-rizal-navy hover:bg-rizal-navy hover:text-white">
              Poetry
            </Button>
            <Button variant="outline" className="border-rizal-navy text-rizal-navy hover:bg-rizal-navy hover:text-white">
              Essays
            </Button>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {writtenWorks.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border-t-0 group">
                {work.imageUrl ? (
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={work.imageUrl} 
                      alt={work.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-0 left-0 bg-rizal-gold py-1 px-3 text-xs text-white font-medium">
                      {work.year}
                    </div>
                  </div>
                ) : (
                  <div className="relative h-56 bg-rizal-light-blue flex items-center justify-center overflow-hidden">
                    <BookOpen className="w-16 h-16 text-rizal-navy opacity-30" />
                    <div className="absolute top-0 left-0 bg-rizal-gold py-1 px-3 text-xs text-white font-medium">
                      {work.year}
                    </div>
                  </div>
                )}
                
                <CardHeader>
                  <div className="text-xs text-rizal-gold uppercase font-medium mb-1">
                    {work.category}
                  </div>
                  <CardTitle className="font-serif">{work.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600">{work.description}</p>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <Button variant="ghost" className="text-rizal-navy hover:text-rizal-gold">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Button className="bg-rizal-gold hover:bg-amber-600 text-rizal-navy px-8 py-6">
            Explore All Literary Works
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WrittenWorksSection;
