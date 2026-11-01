import React, { useState, useRef } from 'react';
import { Play, Pause, Maximize2, X, Volume2, VolumeX } from 'lucide-react';

export default function ArchitecturalVideoReel() {
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const reels = [
    {
      id: 'living-ambient',
      title: 'LIVING SPACES',
      tag: 'MODULAR & LIGHTING',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-luxurious-living-room-41662-large.mp4',
      poster: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'slabs-porcelain',
      title: 'PORCELAIN SLABS',
      tag: 'LARGE FORMAT GVT',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-interior-with-large-windows-40348-large.mp4',
      poster: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'bath-fixtures',
      title: 'BATH CONCEPTS',
      tag: 'CONCEALED SHOWERS',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-water-flowing-from-a-luxury-faucet-41687-large.mp4',
      poster: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'kitchen-worktops',
      title: 'CHEF KITCHENS',
      tag: 'GRANITE & SURFACES',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-contemporary-kitchen-with-granite-countertop-41660-large.mp4',
      poster: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  return (
    <div className="w-full space-y-4">
      {/* Visual Title Only */}
      <div className="flex items-center justify-between border-b border-stone-200 pb-3">
        <h2 className="font-display font-black text-2xl sm:text-3xl text-stone-900 tracking-tight uppercase">
          CINEMATIC SPACES
        </h2>
        <span className="text-xs font-mono text-stone-400 uppercase tracking-widest">
          LIVE MOTION REELS
        </span>
      </div>

      {/* 4 Video Reel Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {reels.map((reel, idx) => (
          <div
            key={reel.id}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={() => setActiveVideoModal(reel)}
            className="luxury-card rounded-3xl overflow-hidden relative h-80 sm:h-96 cursor-pointer group shadow-lg border border-stone-200 hover:border-[#C85A32] transition-all"
          >
            {/* Background Video (Plays on hover or auto loop) */}
            <video
              src={reel.videoUrl}
              poster={reel.poster}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 brightness-[0.78]"
            />

            {/* Dark Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

            {/* Top Reel Badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>{reel.tag}</span>
            </div>

            {/* Center Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-115 group-hover:bg-[#C85A32] transition-all shadow-xl">
                <Play className="w-5 h-5 fill-white ml-0.5" />
              </div>
            </div>

            {/* Bottom Title Only */}
            <div className="absolute inset-x-0 bottom-0 p-6 z-10 text-white flex items-end justify-between">
              <div>
                <h3 className="font-display font-black text-xl text-white group-hover:text-amber-200 transition-colors uppercase tracking-tight">
                  {reel.title}
                </h3>
              </div>
              <Maximize2 className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal Lightbox */}
      {activeVideoModal && (
        <div 
          onClick={() => setActiveVideoModal(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-stone-950 rounded-3xl overflow-hidden border border-stone-800 shadow-2xl"
          >
            {/* Modal Header */}
            <div className="absolute top-4 right-4 z-20">
              <button
                onClick={() => setActiveVideoModal(null)}
                className="w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full aspect-video bg-black flex items-center justify-center">
              <video
                src={activeVideoModal.videoUrl}
                poster={activeVideoModal.poster}
                autoPlay
                controls
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 sm:p-6 bg-stone-900 flex items-center justify-between text-white">
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold">
                  {activeVideoModal.tag}
                </span>
                <h3 className="font-display font-black text-xl text-white uppercase">
                  {activeVideoModal.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
