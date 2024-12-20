import { useState, useEffect } from 'react';
import { Play, Maximize2, Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
}

export function VideoPlayer({ videoUrl, title }: VideoPlayerProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [player, setPlayer] = useState<YT.Player | null>(null);

  // Convert YouTube URL to embed format if needed
  const getEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  const toggleMute = () => {
    if (player) {
      if (isMuted) {
        player.unMute();
      } else {
        player.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  const handlePlay = () => {
    if (player) {
      player.playVideo();
    }
  };

  const handleFullscreen = () => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframe.requestFullscreen?.();
    }
  };

  return (
    <div className="relative group">
      <div className="aspect-video bg-black rounded-lg overflow-hidden">
        <iframe
          src={`${embedUrl}?enablejsapi=1&autoplay=0&mute=${isMuted ? 1 : 0}&controls=1&rel=0&modestbranding=1`}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center justify-between text-white">
          <button
            onClick={toggleMute}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePlay}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
              title="Play"
            >
              <Play size={20} />
            </button>
            <button
              onClick={handleFullscreen}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
              title="Fullscreen"
            >
              <Maximize2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}