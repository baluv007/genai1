export interface Festival {
  id: string;
  name: string;
  religion: 'Hindu' | 'Muslim' | 'Sikh' | 'Christian' | 'Jain' | 'Buddhist';
  date: string;
  story: string;
  videoUrl: string;
  imageUrl: string;
}