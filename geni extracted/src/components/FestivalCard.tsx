import { useState } from 'react';
import { Festival } from '../types/festival';
import { VideoModal } from './VideoModal';
import { VideoPreview } from './VideoPreview';
import { VideoPlayer } from './VideoPlayer';

interface FestivalCardProps {
  festival: Festival;
  showVideo?: boolean;
}

export function FestivalCard({ festival, showVideo = false }: FestivalCardProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoModalOpen(true);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {showVideo ? (
          <VideoPlayer videoUrl={festival.videoUrl} title={festival.name} />
        ) : (
          <VideoPreview
            videoUrl={festival.videoUrl}
            title={festival.name}
            thumbnailUrl={festival.imageUrl}
            onPlay={handlePlayVideo}
          />
        )}
        <div className="p-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold text-gray-900">{festival.name}</h3>
            <span className="px-2 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">
              {festival.religion}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-2">{festival.date}</p>
          <p className="text-gray-700">{festival.story}</p>
        </div>
      </div>

      {isVideoModalOpen && (
        <VideoModal
          videoUrl={festival.videoUrl}
          title={festival.name}
          onClose={() => setIsVideoModalOpen(false)}
        />
      )}
    </>
  );
}