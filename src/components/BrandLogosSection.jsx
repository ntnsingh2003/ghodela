import React from 'react';

export default function BrandLogosSection() {
  const brands = [
    {
      id: 'legrand',
      name: 'Legrand France',
      category: 'Luxury Modular Switches',
      logo: (
        <svg viewBox="0 0 160 40" className="h-7 sm:h-8 w-auto">
          <rect x="2" y="5" width="30" height="30" rx="6" fill="#E21D24" />
          <rect x="8" y="11" width="8" height="8" rx="1" fill="#FFFFFF" />
          <rect x="18" y="21" width="8" height="8" rx="1" fill="#FFFFFF" />
          <text x="38" y="27" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="21" fill="currentColor" letterSpacing="-0.5">legrand</text>
        </svg>
      )
    },
    {
      id: 'kajaria',
      name: 'Kajaria Eternity',
      category: 'GVT & Glazed Slabs',
      logo: (
        <svg viewBox="0 0 155 40" className="h-7 sm:h-8 w-auto">
          <path d="M4 32 L16 8 L28 32 Z" fill="#D32F2F" />
          <path d="M16 16 L22 28 L10 28 Z" fill="#FFFFFF" />
          <text x="34" y="25" fontFamily="Playfair Display, Georgia, serif" fontWeight="700" fontSize="21" fill="currentColor" letterSpacing="0.5">Kajaria</text>
          <text x="36" y="34" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700" fontSize="6.5" fill="#D32F2F" letterSpacing="2">TILES & SURFACES</text>
        </svg>
      )
    },
    {
      id: 'jaquar',
      name: 'Jaquar Artize',
      category: 'Showers & Sanitary',
      logo: (
        <svg viewBox="0 0 145 40" className="h-7 sm:h-8 w-auto">
          <path d="M8 30 C12 18, 16 10, 26 6 C20 14, 18 22, 16 30 Z" fill="#C8963E" />
          <circle cx="27" cy="6" r="2.5" fill="#C8963E" />
          <text x="32" y="27" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="22" fill="currentColor" letterSpacing="1">Jaquar</text>
        </svg>
      )
    },
    {
      id: 'kohler',
      name: 'Kohler Signature',
      category: 'Luxury Bathrooms',
      logo: (
        <svg viewBox="0 0 140 40" className="h-6 sm:h-7 w-auto">
          <text x="2" y="28" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="25" fill="currentColor" letterSpacing="3.5">KOHLER</text>
        </svg>
      )
    },
    {
      id: 'schneider',
      name: 'Schneider Electric',
      category: 'Smart Home Automation',
      logo: (
        <svg viewBox="0 0 175 40" className="h-7 sm:h-8 w-auto">
          <path d="M4 14 C4 8, 10 4, 18 4 C14 12, 12 18, 18 26 C12 26, 4 22, 4 14 Z" fill="#3DCD58" />
          <path d="M18 10 C24 14, 26 20, 24 28 C18 28, 16 20, 18 10 Z" fill="#009530" />
          <text x="32" y="20" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="14" fill="currentColor" letterSpacing="-0.2">Schneider</text>
          <text x="32" y="32" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700" fontSize="10.5" fill="#009530" letterSpacing="1">Electric</text>
        </svg>
      )
    },
    {
      id: 'havells',
      name: 'Havells Crabtree',
      category: 'Modular Rocker Plates',
      logo: (
        <svg viewBox="0 0 150 40" className="h-7 sm:h-8 w-auto">
          <path d="M4 8 L18 8 L11 20 Z" fill="#E31837" />
          <path d="M12 20 L26 20 L19 32 Z" fill="#E31837" />
          <text x="32" y="27" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="900" fontSize="20" fill="currentColor" letterSpacing="1.5">HAVELLS</text>
        </svg>
      )
    },
    {
      id: 'ultratech',
      name: 'UltraTech Cement',
      category: 'Direct Rake Supply',
      logo: (
        <svg viewBox="0 0 165 40" className="h-7 sm:h-8 w-auto">
          <rect x="2" y="6" width="28" height="28" rx="4" fill="#FBB034" />
          <path d="M16 8 L19 16 L27 16 L21 21 L23 29 L16 24 L9 29 L11 21 L5 16 L13 16 Z" fill="#D4145A" />
          <text x="36" y="21" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="14.5" fill="currentColor">UltraTech</text>
          <text x="37" y="32" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="900" fontSize="9.5" fill="#E21D24" letterSpacing="2">CEMENT</text>
        </svg>
      )
    },
    {
      id: 'somany',
      name: 'Somany Ceramics',
      category: 'Large Format Slabs',
      logo: (
        <svg viewBox="0 0 150 40" className="h-7 sm:h-8 w-auto">
          <path d="M6 10 C14 6, 22 10, 18 18 C14 24, 6 24, 14 30 C18 32, 22 30, 24 26" stroke="#E6252E" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <text x="30" y="27" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="18.5" fill="currentColor" letterSpacing="1.5">SOMANY</text>
        </svg>
      )
    },
    {
      id: 'cera',
      name: 'Cera Sanitaryware',
      category: 'Rimless Commodes',
      logo: (
        <svg viewBox="0 0 130 40" className="h-7 sm:h-8 w-auto">
          <ellipse cx="16" cy="20" rx="13" ry="11" fill="#E31E24" />
          <text x="16" y="25" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="900" fontSize="13" fill="#FFFFFF" textAnchor="middle" fontStyle="italic">C</text>
          <text x="34" y="27" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="900" fontSize="21" fill="currentColor" fontStyle="italic" letterSpacing="1">CERA</text>
        </svg>
      )
    },
    {
      id: 'astral',
      name: 'Astral Pipes',
      category: 'CPVC & Drainage',
      logo: (
        <svg viewBox="0 0 155 40" className="h-7 sm:h-8 w-auto">
          <circle cx="16" cy="20" r="12" fill="#005BAA" />
          <path d="M10 20 C10 14, 22 14, 22 20 C22 24, 14 24, 16 28" stroke="#FFFFFF" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <text x="34" y="23" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="900" fontSize="16.5" fill="currentColor" letterSpacing="1">ASTRAL</text>
          <text x="35" y="33" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700" fontSize="8.5" fill="#005BAA" letterSpacing="2">PIPES</text>
        </svg>
      )
    },
    {
      id: 'polycab',
      name: 'Polycab Maxima',
      category: 'FR Copper Wires',
      logo: (
        <svg viewBox="0 0 150 40" className="h-7 sm:h-8 w-auto">
          <polygon points="15,6 26,20 15,34 4,20" fill="#ED1C24" />
          <circle cx="15" cy="20" r="4" fill="#FFFFFF" />
          <text x="32" y="27" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="19" fill="currentColor" letterSpacing="1">POLYCAB</text>
        </svg>
      )
    },
    {
      id: 'ambuja',
      name: 'Ambuja Cement',
      category: 'Strong Foundation Cement',
      logo: (
        <svg viewBox="0 0 165 40" className="h-7 sm:h-8 w-auto">
          <polygon points="16,6 28,14 26,32 16,35 6,32 4,14" fill="#004A99" />
          <polygon points="16,10 24,16 22,29 16,31 10,29 8,16" fill="#F7A800" />
          <text x="36" y="22" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="15.5" fill="currentColor">Ambuja</text>
          <text x="37" y="32" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700" fontSize="8.5" fill="#004A99" letterSpacing="1.5">CEMENT</text>
        </svg>
      )
    }
  ];

  return (
    <section className="content-container">
      <div className="py-6 sm:py-8 border-y border-stone-200/80 bg-white/50 backdrop-blur-xs rounded-3xl p-6 sm:p-8">
        {/* Brand Logos Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center p-3 rounded-2xl bg-white/70 hover:bg-white border border-stone-200/60 hover:border-stone-300 shadow-2xs hover:shadow-md transition-all duration-300 w-full h-16 group cursor-default text-stone-700 hover:text-stone-950"
              title={`${brand.name} • ${brand.category}`}
            >
              <div className="transform transition-transform duration-300 group-hover:scale-105">
                {brand.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
