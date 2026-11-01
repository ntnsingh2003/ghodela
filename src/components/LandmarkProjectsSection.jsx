import React, { useState } from 'react';
import { Building2, MapPin, Calendar, Layers, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';
import { LANDMARK_PROJECTS } from '../data/mockData';

export default function LandmarkProjectsSection({ onExploreMaterials }) {
  const [activeProject, setActiveProject] = useState(LANDMARK_PROJECTS[0]);

  return (
    <div className="w-full space-y-6">
      
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-stone-200 pb-4">
        <h2 className="font-display font-black text-2xl sm:text-3xl text-stone-900 tracking-tight uppercase">
          PROJECTS
        </h2>
      </div>

      {/* Projects Grid (Pure Visual Architecture Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {LANDMARK_PROJECTS.map((proj) => (
          <div
            key={proj.id}
            onClick={() => {
              if (onExploreMaterials) onExploreMaterials();
            }}
            className="luxury-card rounded-3xl overflow-hidden relative h-80 sm:h-96 cursor-pointer group shadow-lg border border-stone-200 hover:shadow-2xl hover:border-[#C85A32] transition-all"
          >
            {/* Project Photo */}
            <img 
              src={proj.image} 
              alt={proj.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.75]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            
            {/* Badge */}
            <span className="absolute top-4 left-4 text-[9px] font-mono px-3 py-1 rounded-full bg-white/90 text-stone-900 font-bold uppercase backdrop-blur-xs">
              {proj.badge}
            </span>

            {/* Bottom Overlay - Title & Location */}
            <div className="absolute inset-x-0 bottom-0 p-6 text-white space-y-1">
              <span className="text-[10px] font-mono text-amber-300 font-semibold flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-400" />
                {proj.location}
              </span>
              <h4 className="font-display font-extrabold text-xl text-white group-hover:text-amber-200 transition-colors leading-snug">
                {proj.name}
              </h4>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
