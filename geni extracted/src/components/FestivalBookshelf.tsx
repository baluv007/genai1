import { festivals } from '../data/festivals';
import { FestivalBook } from './FestivalBook';

export function FestivalBookshelf() {
  return (
    <div className="bg-orange-50 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-orange-800 mb-6">Festival Library</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {festivals.map((festival) => (
          <FestivalBook key={festival.id} festival={festival} />
        ))}
      </div>
    </div>
  );
}