
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { WrittenWork } from './types';

interface WorkCardProps {
  work: WrittenWork;
  onReadMore: (work: WrittenWork) => void;
  index: number;
}

const WorkCard = ({ work, onReadMore, index }: WorkCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border-t-0 group">
        {work.imageUrl ? (
          <div className="relative h-56 overflow-hidden">
            <AspectRatio ratio={16/9} className="bg-gray-100">
              <img 
                src={work.imageUrl} 
                alt={work.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://images.unsplash.com/photo-1639671224447-791fd1e746ea?q=80&w=1974";
                }}
              />
            </AspectRatio>
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
          <Button 
            variant="ghost" 
            className="text-rizal-navy hover:text-rizal-gold"
            onClick={() => onReadMore(work)}
          >
            Read More
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default WorkCard;
