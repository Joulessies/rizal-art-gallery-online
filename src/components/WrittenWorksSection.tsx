
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import WorkCard from './written-works/WorkCard';
import WorkDetailsDialog from './written-works/WorkDetailsDialog';
import SectionHeading from './written-works/SectionHeading';
import CategoryFilters from './written-works/CategoryFilters';
import LiteraryWorksPagination from './LiteraryWorksPagination';
import { WrittenWork } from './written-works/types';
import { writtenWorks } from './written-works/data';

const WrittenWorksSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<WrittenWork | null>(null);
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [currentPage, setCurrentPage] = useState(1);
  const worksPerPage = 6;
  
  const filteredWorks = selectedCategory === 'all' 
    ? writtenWorks 
    : writtenWorks.filter(work => work.category === selectedCategory);

  // Calculate pagination
  const indexOfLastWork = currentPage * worksPerPage;
  const indexOfFirstWork = indexOfLastWork - worksPerPage;
  const currentWorks = filteredWorks.slice(indexOfFirstWork, indexOfLastWork);
  const totalPages = Math.ceil(filteredWorks.length / worksPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of works section
    window.scrollTo({ top: document.getElementById('written-works')?.offsetTop || 0, behavior: 'smooth' });
  };
  
  const openWorkDetails = (work: WrittenWork) => {
    setSelectedWork(work);
    setDialogOpen(true);
    setActiveTab('overview');
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };
  
  return (
    <section id="written-works" className="py-16 bg-white paper-texture">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Literary Works"
          description="Beyond his artistic talents, José Rizal was a prolific writer whose literary works sparked the Philippine independence movement and continue to inspire generations. His novels, essays, and poetry critiqued colonial society and advocated for reform."
        >
          <CategoryFilters 
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentWorks.map((work, index) => (
            <WorkCard 
              key={work.id} 
              work={work} 
              onReadMore={openWorkDetails} 
              index={index}
            />
          ))}
        </div>
        
        {filteredWorks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No works found in this category.</p>
          </div>
        )}
        
        {/* Pagination Component */}
        {filteredWorks.length > worksPerPage && (
          <div className="flex justify-center mt-12">
            <LiteraryWorksPagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Button 
            className="bg-rizal-gold hover:bg-amber-600 text-rizal-navy px-8 py-6"
            onClick={() => {
              setSelectedCategory('all');
              setCurrentPage(1);
            }}
          >
            Explore All Literary Works
          </Button>
        </motion.div>
      </div>
      
      {/* Dialog for Work Details */}
      <WorkDetailsDialog 
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        work={selectedWork}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </section>
  );
};

export default WrittenWorksSection;
