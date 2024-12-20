import { Book } from 'lucide-react';
import { Festival } from '../types/festival';

interface FestivalBookProps {
  festival: Festival;
}

export function FestivalBook({ festival }: FestivalBookProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
      <div className="h-48 overflow-hidden">
        <img 
          src={festival.imageUrl} 
          alt={festival.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">{festival.name}</h3>
          <Book className="text-orange-600" size={24} />
        </div>
        <p className="text-sm text-gray-600 mb-2">{festival.date}</p>
        <p className="text-gray-700 line-clamp-3">{festival.story}</p>
      </div>
    </div>
  );
}