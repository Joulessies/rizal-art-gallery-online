
import React from 'react';
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { WrittenWork } from './types';

interface WorkDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  work: WrittenWork | null;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const WorkDetailsDialog = ({ open, onOpenChange, work, activeTab, onTabChange }: WorkDetailsDialogProps) => {
  if (!work) return null;
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">
            {work.title}
            <span className="ml-2 text-sm font-normal text-rizal-gold">
              ({work.year})
            </span>
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500 uppercase">
            {work.category}
          </DialogDescription>
        </DialogHeader>
        
        <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
          <TabsList className="grid grid-cols-2 mb-4 bg-gray-100">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="fullText">Full Text</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="prose max-w-none">
              <p className="text-gray-700">{work.description}</p>
              
              {work.analysis && (
                <>
                  <h3 className="text-xl font-serif mt-6 mb-2 text-rizal-navy">Analysis</h3>
                  <p className="text-gray-700">{work.analysis}</p>
                </>
              )}
              
              {work.imageUrl && (
                <div className="mt-6">
                  <AspectRatio ratio={16/9} className="max-w-sm mx-auto">
                    <img 
                      src={work.imageUrl} 
                      alt={work.title} 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = "https://images.unsplash.com/photo-1639671224447-791fd1e746ea?q=80&w=1974";
                      }}
                    />
                  </AspectRatio>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="fullText">
            <div className="prose max-w-none">
              <div className="bg-gray-50 p-6 rounded-md border border-gray-200">
                {work.fullText ? (
                  <p className="whitespace-pre-line text-gray-700">{work.fullText}</p>
                ) : (
                  <p className="text-gray-500 italic">Full text not available for this work.</p>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default WorkDetailsDialog;
