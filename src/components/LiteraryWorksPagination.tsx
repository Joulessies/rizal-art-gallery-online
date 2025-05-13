
import React from 'react';
import { 
  Pagination,
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious
} from "@/components/ui/pagination";

interface LiteraryWorksPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const LiteraryWorksPagination = ({
  currentPage,
  totalPages,
  onPageChange
}: LiteraryWorksPaginationProps) => {

  // Create array of page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    
    // Always show first page
    pages.push(1);
    
    // Current page neighborhood
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }
    
    // Always show last page if we have more than one page
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    
    // Remove duplicates and sort
    return [...new Set(pages)].sort((a, b) => a - b);
  };

  const pageNumbers = getPageNumbers();
  
  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
            aria-disabled={currentPage === 1}
          />
        </PaginationItem>
        
        {pageNumbers.map((page, index) => {
          // Add ellipsis if there are gaps between page numbers
          const needsEllipsisBefore = index > 0 && pageNumbers[index] - pageNumbers[index - 1] > 1;
          
          return (
            <React.Fragment key={page}>
              {needsEllipsisBefore && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              
              <PaginationItem>
                <PaginationLink
                  isActive={page === currentPage}
                  onClick={() => onPageChange(page)}
                  className="cursor-pointer"
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            </React.Fragment>
          );
        })}
        
        <PaginationItem>
          <PaginationNext
            onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
            className={currentPage === totalPages || totalPages === 0 ? "pointer-events-none opacity-50" : "cursor-pointer"}
            aria-disabled={currentPage === totalPages || totalPages === 0}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default LiteraryWorksPagination;
