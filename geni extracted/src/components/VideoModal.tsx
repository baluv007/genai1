import { X } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';

interface VideoModalProps {
  videoUrl: string;
  title: string;
  onClose: () => void;
}

export function VideoModal({ videoUrl, title, onClose }: VideoModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white hover:text-orange-200 transition-colors"
        >
          <X size={24} />
        </button>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-4">{title}</h3>
          <VideoPlayer videoUrl={videoUrl} title={title} />
        </div>
      </div>
    </div>
  );
}