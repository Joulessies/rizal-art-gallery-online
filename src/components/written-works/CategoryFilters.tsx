
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

interface CategoryFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilters = ({ selectedCategory, onCategoryChange }: CategoryFiltersProps) => {
  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-4 mt-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.7 }}
      viewport={{ once: true }}
    >
      <Button 
        variant="outline" 
        className={`border-rizal-navy hover:bg-rizal-navy hover:text-white ${selectedCategory === 'all' ? 'bg-rizal-navy text-white' : 'text-rizal-navy'}`}
        onClick={() => onCategoryChange('all')}
      >
        All Works
      </Button>
      <Button 
        variant="outline" 
        className={`border-rizal-navy hover:bg-rizal-navy hover:text-white ${selectedCategory === 'novel' ? 'bg-rizal-navy text-white' : 'text-rizal-navy'}`}
        onClick={() => onCategoryChange('novel')}
      >
        Novels
      </Button>
      <Button 
        variant="outline" 
        className={`border-rizal-navy hover:bg-rizal-navy hover:text-white ${selectedCategory === 'poetry' ? 'bg-rizal-navy text-white' : 'text-rizal-navy'}`}
        onClick={() => onCategoryChange('poetry')}
      >
        Poetry
      </Button>
      <Button 
        variant="outline" 
        className={`border-rizal-navy hover:bg-rizal-navy hover:text-white ${selectedCategory === 'essay' ? 'bg-rizal-navy text-white' : 'text-rizal-navy'}`}
        onClick={() => onCategoryChange('essay')}
      >
        Essays
      </Button>
      <Button 
        variant="outline" 
        className={`border-rizal-navy hover:bg-rizal-navy hover:text-white ${selectedCategory === 'play' ? 'bg-rizal-navy text-white' : 'text-rizal-navy'}`}
        onClick={() => onCategoryChange('play')}
      >
        Plays
      </Button>
    </motion.div>
  );
};

export default CategoryFilters;
