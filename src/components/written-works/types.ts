
export interface WrittenWork {
  id: number;
  title: string;
  year: string;
  description: string;
  category: 'novel' | 'poetry' | 'essay' | 'play';
  imageUrl?: string;
  fullText?: string;
  analysis?: string;
}
