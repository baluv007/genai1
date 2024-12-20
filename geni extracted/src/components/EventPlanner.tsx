import { Calendar, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Festival } from '../types/festival';

interface EventPlannerProps {
  festival: Festival;
}

export function EventPlanner({ festival }: EventPlannerProps) {
  const [isPlanning, setIsPlanning] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-900">Plan Your Celebration</h3>
        <Calendar className="text-orange-600" size={24} />
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center text-gray-600">
          <Clock className="mr-2" size={20} />
          <span>{festival.date}</span>
        </div>
        
        <button
          onClick={() => setIsPlanning(!isPlanning)}
          className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors"
        >
          {isPlanning ? 'Hide Planning Tools' : 'Start Planning'}
        </button>
        
        {isPlanning && (
          <div className="space-y-4 mt-4">
            <div className="flex items-start space-x-2">
              <MapPin className="text-orange-600 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-gray-900">Suggested Venues</h4>
                <ul className="text-sm text-gray-600 list-disc list-inside ml-2">
                  <li>Local Community Centers</li>
                  <li>Cultural Venues</li>
                  <li>Public Parks</li>
                  <li>Religious Centers</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Preparation Checklist</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Book the venue</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Plan the menu</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Arrange decorations</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Send invitations</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}