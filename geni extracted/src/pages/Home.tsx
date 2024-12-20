import { BookOpen, Calendar, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FestivalBookshelf } from '../components/FestivalBookshelf';
import { EventPlanner } from '../components/EventPlanner';
import { festivals } from '../data/festivals';

export function Home() {
  const upcomingFestival = festivals[0]; // You might want to calculate the next upcoming festival

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-800 mb-4">
            Discover Indian Festivals
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the rich cultural heritage of India through its diverse festivals.
            Learn about the stories behind these celebrations and plan your festivities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Link
            to="/stories"
            className="transform hover:scale-105 transition-transform duration-200"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
              <BookOpen size={48} className="text-orange-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Festival Stories</h2>
              <p className="text-gray-600 text-center">
                Discover the fascinating stories and traditions behind each festival
              </p>
            </div>
          </Link>

          <Link
            to="/videos"
            className="transform hover:scale-105 transition-transform duration-200"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
              <Video size={48} className="text-orange-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Festival Videos</h2>
              <p className="text-gray-600 text-center">
                Watch engaging videos explaining the significance of each celebration
              </p>
            </div>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <FestivalBookshelf />
          </div>
          <div>
            <EventPlanner festival={upcomingFestival} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
            <Calendar className="text-orange-600" size={32} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {festivals.slice(0, 3).map((festival) => (
              <div key={festival.id} className="bg-orange-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{festival.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{festival.date}</p>
                <p className="text-sm text-gray-700 line-clamp-2">{festival.story}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}