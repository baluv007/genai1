import { useState } from 'react';
import { FestivalCard } from '../components/FestivalCard';
import { FestivalFilter } from '../components/FestivalFilter';
import { festivals } from '../data/festivals';
import { Festival } from '../types/festival';

export function Stories() {
  const [selectedReligion, setSelectedReligion] = useState<Festival['religion'] | 'all'>('all');

  const filteredFestivals = selectedReligion === 'all'
    ? festivals
    : festivals.filter(festival => festival.religion === selectedReligion);

  return (
    <div className="min-h-screen bg-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-800 mb-8 text-center">
          Festival Stories
        </h1>
        <FestivalFilter
          selectedReligion={selectedReligion}
          onFilterChange={setSelectedReligion}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFestivals.map((festival) => (
            <FestivalCard key={festival.id} festival={festival} />
          ))}
        </div>
      </div>
    </div>
  );
}