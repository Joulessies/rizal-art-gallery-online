
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import ArtworksSection from '@/components/ArtworksSection';
import WrittenWorksSection from '@/components/WrittenWorksSection';
import FeaturedArtwork from '@/components/FeaturedArtwork';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Artworks = () => {
  const [activeTab, setActiveTab] = useState("artworks");
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };
  
  return (
    <div className="min-h-screen paper-texture">
      <Navbar />
      <motion.div
        className="container mx-auto px-6 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="museum-heading text-4xl md:text-5xl mb-4 text-rizal-navy">Exhibition Gallery</h1>
          <div className="h-0.5 w-24 bg-rizal-gold mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto font-serif">
            This collection features both the artistic and literary works of José Rizal, showcasing his talent and vision beyond his historical significance.
          </p>
          
          <Tabs 
            defaultValue={activeTab} 
            value={activeTab}
            onValueChange={handleTabChange}
            className="mt-8 max-w-2xl mx-auto"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="artworks">Visual Arts</TabsTrigger>
              <TabsTrigger value="literature">Literary Works</TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>
      </motion.div>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Tabs 
          value={activeTab} 
          onValueChange={handleTabChange}
          className="container mx-auto px-6"
        >
          <TabsContent value="artworks">
            <ArtworksSection />
            <FeaturedArtwork />
          </TabsContent>
          <TabsContent value="literature">
            <WrittenWorksSection />
          </TabsContent>
        </Tabs>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Artworks;
