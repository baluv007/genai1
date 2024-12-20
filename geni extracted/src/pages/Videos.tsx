import { useState } from 'react';
import { FestivalCard } from '../components/FestivalCard';
import { FestivalFilter } from '../components/FestivalFilter';
import { festivals } from '../data/festivals';
import { Festival } from '../types/festival';

export function Videos() {
  const [selectedReligion, setSelectedReligion] = useState<Festival['religion'] | 'all'>('all');

  const filteredFestivals = selectedReligion === 'all'
    ? festivals
    : festivals.filter(festival => festival.religion === selectedReligion);

  return (
    <div className="min-h-screen bg-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-800 mb-8 text-center">
          Festival Videos
        </h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Watch immersive videos about Indian festivals. Learn about their significance, 
          traditions, and celebrations through these carefully curated visual stories.
        </p>
        <FestivalFilter
          selectedReligion={selectedReligion}
          onFilterChange={setSelectedReligion}
        />
        <div className="grid md:grid-cols-2 gap-8">
          {filteredFestivals.map((festival) => (
            <FestivalCard key={festival.id} festival={festival} showVideo />
          ))}
        </div>
      </div>
    </div>
  );
}