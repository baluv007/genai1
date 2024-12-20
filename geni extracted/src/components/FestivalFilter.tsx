import { Festival } from '../types/festival';

type Religion = Festival['religion'];

interface FestivalFilterProps {
  selectedReligion: Religion | 'all';
  onFilterChange: (religion: Religion | 'all') => void;
}

export function FestivalFilter({ selectedReligion, onFilterChange }: FestivalFilterProps) {
  const religions: Array<Religion | 'all'> = [
    'all',
    'Hindu',
    'Muslim',
    'Sikh',
    'Christian',
    'Jain',
    'Buddhist'
  ];

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2 justify-center">
        {religions.map((religion) => (
          <button
            key={religion}
            onClick={() => onFilterChange(religion)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${selectedReligion === religion
                ? 'bg-orange-600 text-white'
                : 'bg-orange-100 text-orange-800 hover:bg-orange-200'
              }`}
          >
            {religion === 'all' ? 'All Festivals' : `${religion} Festivals`}
          </button>
        ))}
      </div>
    </div>
  );
}