import { Play } from 'lucide-react';

interface VideoPreviewProps {
  videoUrl: string;
  title: string;
  thumbnailUrl: string;
  onPlay: () => void;
}

export function VideoPreview({ videoUrl, title, thumbnailUrl, onPlay }: VideoPreviewProps) {
  return (
    <div 
      className="relative group cursor-pointer overflow-hidden rounded-lg"
      onClick={onPlay}
    >
      <img 
        src={thumbnailUrl} 
        alt={`${title} preview`}
        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
          <Play className="w-8 h-8 text-white" />
        </div>
      </div>
    </div>
  );
}