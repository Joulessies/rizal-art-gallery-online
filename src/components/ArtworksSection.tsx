import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Artwork {
  id: number;
  title: string;
  year: string;
  image: string;
  description: string;
  medium: string;
  location: string;
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Self-Portrait",
    year: "1883",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Jose_Rizal_self_portrait_1883.jpg",
    description: "One of Rizal's most famous artworks, this self-portrait was created during his time in Spain. It showcases his technical skill and attention to detail, painted when he was just 22 years old.",
    medium: "Oil on canvas",
    location: "National Museum of the Philippines"
  },
  {
    id: 2,
    title: "The Mother's Revenge",
    year: "1894",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Rizal%27s_sketch_of_himself_and_a_Spanish_girl.jpg",
    description: "A powerful sculpture showing an allegory of Philippine history, depicting a mother crocodile finding her nest ransacked and eggs stolen. A commentary on colonial rule.",
    medium: "Clay sculpture",
    location: "Fort Santiago Museum"
  },
  {
    id: 3,
    title: "Sketch of a Woman",
    year: "1884",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Jose_Rizal_-_Mi_Primera_Inspiracion%2C_1874.jpg",
    description: "This elegant sketch demonstrates Rizal's talent for capturing the female form. Created during his European studies, it shows his growing artistic confidence.",
    medium: "Charcoal on paper",
    location: "Rizal Museum, Calamba"
  },
  {
    id: 4,
    title: "Portrait of Father Guerrico",
    year: "1885",
    image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/jose-rizal-celestial-images.jpg",
    description: "A detailed portrait of the Jesuit priest who was one of Rizal's teachers at the Ateneo Municipal de Manila, showing his skill in portraiture.",
    medium: "Charcoal on paper",
    location: "Ateneo de Manila University"
  },
  {
    id: 5,
    title: "Dapitan Girls",
    year: "1895",
    image: "https://www.joserizal.ph/im/sk/sk03.jpg",
    description: "Created during his exile in Dapitan, this sketch captures local young women in their traditional attire, demonstrating Rizal's interest in documenting Filipino culture.",
    medium: "Ink on paper",
    location: "Rizal Shrine, Dapitan"
  },
  {
    id: 6,
    title: "Dr. Antonio Paterno",
    year: "1886",
    image: "https://www.joserizal.ph/im/sk/sk04.jpg",
    description: "A portrait of Filipino diplomat and lawyer Antonio Paterno, showcasing Rizal's talent for capturing the personality of his subjects.",
    medium: "Oil on canvas",
    location: "Private Collection"
  },
  {
    id: 7,
    title: "The Triumph of Science Over Death",
    year: "1890",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Triumph_of_Science_over_Death.jpg/640px-Triumph_of_Science_over_Death.jpg",
    description: "A sculpture depicting a naked youth with raised arms holding a torch. Science, represented by the torch, triumphs over death, represented by the skull under the youth's foot.",
    medium: "Clay sculpture",
    location: "National Museum of the Philippines"
  },
  {
    id: 8,
    title: "The Monkey and the Turtle",
    year: "1885",
    image: "https://www.joserizal.ph/im/sk/sk02.jpg",
    description: "An illustration for his children's fable based on a Filipino folk tale. The drawing shows Rizal's playful side and his interest in children's education.",
    medium: "Ink on paper",
    location: "Rizal Library Collection"
  },
  {
    id: 9,
    title: "View of Manila",
    year: "1880",
    image: "https://www.joserizal.ph/im/sk/sk01.jpg",
    description: "A panoramic sketch of Manila showing the city skyline and bay. This work demonstrates Rizal's skill with landscapes and architectural drawing.",
    medium: "Watercolor on paper",
    location: "Rizal Museum, Manila"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ArtworksSection = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  return (
    <section id="artworks" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-serif font-bold mb-4 text-rizal-navy">Notable Artworks</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Explore José Rizal's artistic legacy through these significant works that showcase his versatility and talent.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {artworks.map((artwork) => (
            <motion.div key={artwork.id} variants={item}>
              <Card 
                className="artwork-card overflow-hidden border-none shadow-md cursor-pointer"
                onClick={() => setSelectedArtwork(artwork)}
              >
                <motion.div 
                  className="h-64 w-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={artwork.image} 
                    alt={artwork.title} 
                    className="h-full w-full object-cover"
                  />
                </motion.div>
                <div className="p-5">
                  <h3 className="text-xl font-serif font-bold">{artwork.title}</h3>
                  <p className="text-gray-600">{artwork.year}</p>
                  <div className="flex items-center mt-2">
                    <span className="inline-block bg-rizal-light-blue px-3 py-1 text-sm rounded-full text-rizal-navy">
                      {artwork.medium}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      <Dialog open={!!selectedArtwork} onOpenChange={() => setSelectedArtwork(null)}>
        {selectedArtwork && (
          <DialogContent className="sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-serif">{selectedArtwork.title} ({selectedArtwork.year})</DialogTitle>
              <DialogDescription className="text-sm text-gray-500">{selectedArtwork.medium}</DialogDescription>
            </DialogHeader>
            <motion.div 
              className="grid md:grid-cols-2 gap-6 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="overflow-hidden rounded-md">
                <img 
                  src={selectedArtwork.image} 
                  alt={selectedArtwork.title}
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <p className="text-gray-700 mb-4">{selectedArtwork.description}</p>
                <div className="mt-4 space-y-2">
                  <div>
                    <strong className="text-rizal-navy">Current Location:</strong>
                    <p className="text-gray-700">{selectedArtwork.location}</p>
                  </div>
                  <div>
                    <strong className="text-rizal-navy">Medium:</strong>
                    <p className="text-gray-700">{selectedArtwork.medium}</p>
                  </div>
                  <div>
                    <strong className="text-rizal-navy">Created:</strong>
                    <p className="text-gray-700">{selectedArtwork.year}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default ArtworksSection;
