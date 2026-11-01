// Shree Vishwakarma BuildMart & Infra - Comprehensive Product, Brand & Trader Data
// 100% Verified Architectural Luxury Data (Zero Broken Images, High-Precision SVG/Visuals)

export const TRADER_INFO = {
  name: "Ghodela BuildMart & Infra",
  legalEntity: "Ghodela Building Materials & Architectural Surfaces Corp.",
  tagline: "Premier Wholesale & Retail Depot for Architectural Fittings & Structural Civil Supplies",
  establishedYear: 1998,
  gstin: "08AABCU9603R1ZM",
  pan: "AABCU9603R",
  centralGodown: {
    title: "Central Dispatch Godown & Warehouse",
    address: "Plot 42-45, Phase-2, Vishwakarma Industrial Area (VKI), Sikar Road, Jaipur, Rajasthan 302013",
    capacity: "35,000+ Sq.Ft Ready Slab Stock & 500 MT Cement Silos",
    status: "Live Stock Ready for Same-Day Dispatch"
  },
  flagshipShowroom: {
    title: "Executive Experience Studio",
    address: "Showroom 12-14, BuildMart Plaza, Tonk Road & Ring Road Junction, Jaipur",
    phone: "+91 141 2894500",
    whatsapp: "+919829012345",
    whatsappDisplay: "+91 98290 12345",
    email: "quotes@vishwakarmabuildmart.com",
    hours: "Mon - Sat: 9:00 AM – 8:30 PM | Sunday: 10:00 AM – 4:00 PM"
  }
};

export const AUTHORIZED_BRANDS = [
  { name: "Havells", category: "Electricals & Switches", tier: "Platinum Partner", origin: "India", since: 2004 },
  { name: "Legrand", category: "Luxury Modular Switches", tier: "Authorized Dealer", origin: "France", since: 2011 },
  { name: "Schneider Electric", category: "Smart Home & Automation", tier: "Certified Studio", origin: "France", since: 2015 },
  { name: "Kajaria", category: "Vitrified & GVT Tiles", tier: "Direct Factory Depo", origin: "India", since: 2001 },
  { name: "Somany Ceramics", category: "Full-Body & Slab Tiles", tier: "Master Distributor", origin: "India", since: 2006 },
  { name: "Jaquar", category: "Luxury Sanitary & Showers", tier: "Premier Dealer", origin: "India", since: 2005 },
  { name: "Cera", category: "Ceramics & Commodes", tier: "Wholesale Partner", origin: "India", since: 2003 },
  { name: "Kohler", category: "Artisan Bath Systems", tier: "Display Partner", origin: "USA", since: 2018 },
  { name: "UltraTech Cement", category: "OPC 53 & PPC Bulk", tier: "Authorized Rake Depot", origin: "Aditya Birla", since: 1999 },
  { name: "Ambuja Cement", category: "Waterproof Raw Supply", tier: "Stockist", origin: "India", since: 2002 },
  { name: "Astral Pipes", category: "CPVC Plumbing & Drainage", tier: "Direct Distributor", origin: "India", since: 2008 },
  { name: "Polycab", category: "FR-LSH Wires & Cables", tier: "Master Stockist", origin: "India", since: 2007 }
];

export const CATEGORIES = [
  {
    id: "electricals",
    name: "Electricals & Modular Switches",
    shortTitle: "Electricals",
    tagline: "Designer Glass Plates, Smart Rockers, FR Copper Wires & MCB Panels",
    badge: "15,000+ Switch Units in Godown",
    color: "#C85A32",
    subCategories: [
      "All Sub-Categories",
      "Modular Switch Plates",
      "Smart Touch Switches",
      "Sockets & Fan Regulators",
      "MCB & Distribution Boxes",
      "Flame-Retardant Copper Wires (90m Coils)",
      "Architectural LED Panels"
    ]
  },
  {
    id: "tiles",
    name: "Tiles, Marble & Granite",
    shortTitle: "Tiles & Marble",
    tagline: "Large Format 600x1200 GVT Slabs, Imported Statuario & Anti-Skid Series",
    badge: "24,000 Sq.Ft Slabs on Display",
    color: "#B08D57",
    subCategories: [
      "All Sub-Categories",
      "600x1200mm GVT Slabs",
      "Double Charge Vitrified Tiles",
      "Italian Statuario Marble",
      "Anti-Skid Parking & Bathroom Tiles",
      "Wooden Floor Planks",
      "Black Galaxy Kitchen Granite"
    ]
  },
  {
    id: "sanitary",
    name: "Sanitaryware & Bath Fittings",
    shortTitle: "Sanitary & Bath",
    tagline: "Rimless One-Piece Commodes, Concealed Diverters & Rose Gold Showers",
    badge: "Jaquar & Cera Authorized Hub",
    color: "#2C4A52",
    subCategories: [
      "All Sub-Categories",
      "Rimless One-Piece Commodes",
      "Countertop Designer Basins",
      "Concealed Thermostatic Diverters",
      "Matte Black & Rose Gold Rain Showers",
      "CP Taps & Health Faucets",
      "uPVC/CPVC Plumbing Pipes"
    ]
  },
  {
    id: "cement",
    name: "Cement, Bajri & Raw Construction",
    shortTitle: "Cement & Bajri",
    tagline: "UltraTech OPC 53/PPC Bags, Washed Banas River Sand, Gitti & Adhesives",
    badge: "Direct Factory Rake Dispatch",
    color: "#6E685F",
    subCategories: [
      "All Sub-Categories",
      "OPC 53 & PPC Grade Cement (50kg Bags)",
      "Washed River Sand / Banas Bajri (By Ton/Trolley)",
      "10mm/20mm Stone Aggregate (Gitti)",
      "Tile Adhesives & Epoxy Grout",
      "Waterproofing Chemicals"
    ]
  }
];

export const PRODUCTS = [
  // --- ELECTRICALS & SWITCHES (7 items) ---
  {
    id: "elec-1",
    imageUrl: "https://images.unsplash.com/photo-1585412727053-48a19eef546b?auto=format&fit=crop&w=800&q=80",
    name: "Arteor Crystal Toughened Glass Modular Plate (8-Module)",
    brand: "Legrand France",
    sku: "SVB-SW-LEG-8M",
    category: "electricals",
    subCategory: "Modular Switch Plates",
    unit: "Pieces",
    rateEstimateRange: "₹ 1,420 – ₹ 1,750 / Plate",
    dimensionsUnit: "8-Module Horizontal (245 x 90mm)",
    shortDesc: "Diamond-cut beveled safety glass plate with electroplated brass inner chassis. Fingerprint resistant oleophobic coating.",
    fullSpecs: {
      "Dimensions": "245mm (W) x 90mm (H) x 8.5mm (D)",
      "Material": "4mm Ultra-Clear Beveled Toughened Safety Glass",
      "Back Chassis": "Flame-Retardant Polycarbonate with Zinc Galvanized Steel Frame",
      "Standard Fitment": "Compatible with standard GI metal concealed boxes (8M)",
      "Warranty": "10-Year Comprehensive Replacement Warranty",
      "Certification": "BIS IS-3854, CE Approved, RoHS Compliant",
      "Stock Status": "In Central Godown (840 Units Ready)"
    },
    finishes: [
      { name: "Smoked Obsidian Black", colorCode: "#1F2124", bg: "#1F2124", border: "#444" },
      { name: "Pure Arctic White Glass", colorCode: "#F9FAF9", bg: "#F9FAF9", border: "#DDD" },
      { name: "Brushed Champagne Gold", colorCode: "#C8A66D", bg: "#C8A66D", border: "#B59357" },
      { name: "Titanium Silver Mirror", colorCode: "#999DA0", bg: "#999DA0", border: "#888" }
    ],
    applications: ["Master Bedroom", "Luxury Living Room", "Executive Boardrooms"],
    popular: true,
    bestsellerBadge: "Architect's Choice"
  },
  {
    id: "elec-2",
    imageUrl: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    name: "Fabio Stealth Matte 16A Rocker Switch with Soft Amber LED",
    brand: "Havells Crabtree",
    sku: "SVB-SW-HAV-16A",
    category: "electricals",
    subCategory: "Modular Switch Plates",
    unit: "Pieces",
    rateEstimateRange: "₹ 185 – ₹ 240 / Piece",
    dimensionsUnit: "1-Module (Standard 22.5mm)",
    shortDesc: "Ultra-quiet micro-travel mechanical rocker switch with soft glow amber LED locator for night visibility.",
    fullSpecs: {
      "Current Rating": "16A, 240V AC (Heavy Duty for AC, Geyser & Microwave)",
      "Contact Material": "Silver-Nickel (AgNi) Alloy Contacts with Beryllium Copper Springs",
      "Endurance": "Tested for over 120,000 continuous switching operations",
      "Acoustics": "Whisper-quiet dampened click feedback",
      "Fire Rating": "Self-extinguishing V-0 Grade Polycarbonate (850°C Glow Wire Test)",
      "Stock Status": "In Stock (3,200+ Pcs in Godown)"
    },
    finishes: [
      { name: "Velvet Matte Charcoal", colorCode: "#242526", bg: "#242526", border: "#555" },
      { name: "Architectural Snow White", colorCode: "#FFFFFF", bg: "#FFFFFF", border: "#CCC" },
      { name: "Earthy Terracotta Brown", colorCode: "#7A3E26", bg: "#7A3E26", border: "#5E2F1C" }
    ],
    applications: ["Heavy Appliance Control", "Living Hub", "Kitchen Heavy Points"],
    popular: true
  },
  {
    id: "elec-3",
    imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
    name: "Wiser 4-Node Smart WiFi + Zigbee Touch Glass Switch Module",
    brand: "Schneider Electric",
    sku: "SVB-SW-SCH-SMART4",
    category: "electricals",
    subCategory: "Smart Touch Switches",
    unit: "Pieces",
    rateEstimateRange: "₹ 3,850 – ₹ 4,400 / Piece",
    dimensionsUnit: "2-Module Retrofit (Standard Concealed)",
    shortDesc: "Capacitive touch switchboard with dual WiFi & Zigbee 3.0 protocol. Works seamlessly with Alexa, Google Home & Smart Life app.",
    fullSpecs: {
      "Loads": "4 Independent Channels (Up to 650W Resistive per channel)",
      "Connectivity": "2.4GHz Wi-Fi + Zigbee 3.0 Local Mesh Gateway support",
      "Touch Response": "Ultra-responsive 20ms capacitive sensor with dual-state RGB feedback",
      "Timer & Automation": "In-built scheduler, vacation mode, and overload protection",
      "Retrofit Ease": "Fits in standard GI box without altering existing conduit wiring",
      "Warranty": "3-Year Direct On-Site Replacement Warranty"
    },
    finishes: [
      { name: "Onyx Black Glass", colorCode: "#111111", bg: "#111111", border: "#444" },
      { name: "Crystal Ice White", colorCode: "#F5F5F7", bg: "#F5F5F7", border: "#CCC" }
    ],
    applications: ["Smart Automation", "Villa Control", "Home Theatre"],
    popular: true,
    bestsellerBadge: "Trending 2026"
  },
  {
    id: "elec-4",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    name: "5-Pin Universal Safety Shutter Socket (6A / 16A Twin Rating)",
    brand: "Legrand Myrius",
    sku: "SVB-SW-LEG-SOC16",
    category: "electricals",
    subCategory: "Sockets & Fan Regulators",
    unit: "Pieces",
    rateEstimateRange: "₹ 260 – ₹ 320 / Piece",
    dimensionsUnit: "2-Module (45 x 45mm)",
    shortDesc: "Child-safety interlocking shutters with solid phosphor-bronze inner sleeve for non-loosening grip over 15 years.",
    fullSpecs: {
      "Compatibility": "Universal 2-Pin, 3-Pin, Europlug and UK Pin configurations",
      "Safety Mechanism": "Internal safety gate prevents foreign object entry into live terminals",
      "Terminal Screws": "Deep captive brass screws with combo drive heads",
      "Heat Withstanding": "Engineered for zero spark erosion at peak 3200W loads",
      "Stock Status": "Ready in Wholesale Godown (2,400 Pcs)"
    },
    finishes: [
      { name: "Matte Anthracite", colorCode: "#2C2D30", bg: "#2C2D30", border: "#555" },
      { name: "Pristine White", colorCode: "#FAFAFA", bg: "#FAFAFA", border: "#DDD" },
      { name: "Brushed Brass Tone", colorCode: "#B5985A", bg: "#B5985A", border: "#9A7E44" }
    ],
    applications: ["Bedside Stations", "Kitchen Worktop", "TV Units"],
    popular: false
  },
  {
    id: "elec-5",
    imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80",
    name: "Optipro Flame-Retardant (FR-LSH) Pure Copper Wire (90m Coil)",
    brand: "Polycab Maxima",
    sku: "SVB-WR-POL-25MM",
    category: "electricals",
    subCategory: "Flame-Retardant Copper Wires (90m Coils)",
    unit: "Coils",
    rateEstimateRange: "₹ 2,450 – ₹ 2,850 / Coil (90m)",
    dimensionsUnit: "2.5 sq.mm | 90 Meters Sealed Coil",
    shortDesc: "100% Electrolytic ETP grade copper multi-strand conductor with low smoke zero halogen insulation for residential fire safety.",
    fullSpecs: {
      "Conductor": "99.97% Pure Oxygen-Free Copper (Class 5 Flexible Stranding)",
      "Insulation": "Special FR-LSH Grade PVC with Oxygen Index > 29%",
      "Current Carrying": "Up to 24 Amperes continuous load at 40°C ambient",
      "Certification": "IS: 694 marked, FIA/TAC approved",
      "Packaging": "Original Holographic Anti-Counterfeit Sealed Carton (90m Coil)",
      "Stock Status": "380 Coils Ready in Central Electrical Godown"
    },
    finishes: [
      { name: "Safety Red (Phase)", colorCode: "#D32F2F", bg: "#D32F2F", border: "#9A0007" },
      { name: "Neutral Black", colorCode: "#212121", bg: "#212121", border: "#000" },
      { name: "Earth Green", colorCode: "#2E7D32", bg: "#2E7D32", border: "#1B5E20" },
      { name: "Inverter Blue", colorCode: "#1565C0", bg: "#1565C0", border: "#0D47A1" }
    ],
    applications: ["Concealed House Wiring", "AC & Power Sockets", "Site Mains"],
    popular: true,
    bestsellerBadge: "Master Contractor Choice"
  },
  {
    id: "elec-6",
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    name: "12-Way Double Door IP42 TPN Distribution Board (MCB Box)",
    brand: "Havells Euroload",
    sku: "SVB-DB-HAV-12W",
    category: "electricals",
    subCategory: "MCB & Distribution Boxes",
    unit: "Pieces",
    rateEstimateRange: "₹ 2,900 – ₹ 3,600 / Piece",
    dimensionsUnit: "12-Way SPN / TPN Concealed Flush",
    shortDesc: "Deep drawn CRCA sheet steel box with phosphor-chromated powder coating. Removable top and bottom gland plates with insulated busbars.",
    fullSpecs: {
      "Enclosure": "1.2mm Heavy Duty CRCA Sheet Steel with Epoxypolyester Powder Coat",
      "Protection": "IP42 Ingress Protection against dust and dripping water",
      "Busbar": "Electrolytic Copper Busbar rated for 100A continuous bus supply",
      "Mounting": "Both Surface and Concealed Flush Wall Mountable",
      "Door": "Reversible transparent polycarbonate inspection window door"
    },
    finishes: [
      { name: "Architectural Off-White", colorCode: "#ECEBE4", bg: "#ECEBE4", border: "#C4C2B8" },
      { name: "Industrial Dark Slate", colorCode: "#343A40", bg: "#343A40", border: "#212529" }
    ],
    applications: ["Main Distribution", "Floor Isolation", "Villa Main Panel"],
    popular: false
  },
  {
    id: "elec-7",
    imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    name: "Architectural Deep Recessed Anti-Glare LED COB Downlight (12W)",
    brand: "Havells Professional",
    sku: "SVB-LT-HAV-12W",
    category: "electricals",
    subCategory: "Architectural LED Panels",
    unit: "Pieces",
    rateEstimateRange: "₹ 620 – ₹ 850 / Piece",
    dimensionsUnit: "Cutout: 75mm | Rim: 85mm",
    shortDesc: "Deep recessed reflector with UGR<19 anti-glare baffle and high CRI>90 color rendering for premium ceilings.",
    fullSpecs: {
      "Wattage": "12 Watts (1080 Lumens output)",
      "CRI Rating": "> 92 CRI (Shows true marble and wood textures)",
      "Beam Angle": "36° Focused Architectural Beam",
      "Driver": "Isolated surge protected constant current driver (4kV surge tolerance)",
      "Color Temperature": "Switchable (3000K Warm / 4000K Neutral / 6000K Daylight)"
    },
    finishes: [
      { name: "Matte White Rim / Dark Baffle", colorCode: "#F5F5F5", bg: "#F5F5F5", border: "#DDD" },
      { name: "Solid Matte Black Trim", colorCode: "#1C1C1E", bg: "#1C1C1E", border: "#444" },
      { name: "Brushed Brass Bezel", colorCode: "#C8A66D", bg: "#C8A66D", border: "#B59357" }
    ],
    applications: ["Living Ceilings", "False Ceiling Downlights", "Art Wall Accent"],
    popular: true
  },

  // --- TILES, MARBLE & GRANITE (7 items) ---
  {
    id: "tile-1",
    imageUrl: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80",
    name: "Italian Statuario Royale Glazed Vitrified Tile (GVT Slab)",
    brand: "Kajaria Eternity",
    sku: "SVB-TL-KAJ-1206",
    category: "tiles",
    subCategory: "600x1200mm GVT Slabs",
    unit: "Boxes",
    rateEstimateRange: "₹ 78 – ₹ 92 / Sq.Ft (₹ 1,210 – ₹ 1,425 / Box)",
    dimensionsUnit: "600 x 1200mm (2x4 ft) | 2 Pcs / Box (15.5 Sq.Ft)",
    shortDesc: "High-definition digital print replicating natural Carrara mountain veins with nanotech satin carving glaze.",
    fullSpecs: {
      "Dimensions": "600mm x 1200mm (9.0mm thickness)",
      "Coverage per Box": "1.44 Sq.Mtr (15.5 Sq.Ft) per box containing 2 precision-cut tiles",
      "Surface Finish": "High Gloss Carving & Satin Silk Finish",
      "Water Absorption": "< 0.05% (Non-porous vitrified body)",
      "Edge Type": "Laser Rectified Sharp Edges (Allows 1.5mm hairline joint)",
      "Mohs Hardness": "Rating 6 (Highly scratch resistant under heavy traffic)",
      "Stock Status": "3,400 Sq.Ft Ready in Covered Tile Depot"
    },
    finishes: [
      { name: "Carving Satin Silk", colorCode: "#ECECEC", bg: "linear-gradient(135deg, #FFF 60%, #DDD 100%)", border: "#CCC" },
      { name: "Mirror High Gloss Polish", colorCode: "#FFFFFF", bg: "#FFFFFF", border: "#BBB" },
      { name: "Honed Matte Anti-Smudge", colorCode: "#E2DDD5", bg: "#E2DDD5", border: "#C8BFA8" }
    ],
    applications: ["Living Room Flooring", "Accent TV Feature Wall", "Master Bedroom"],
    popular: true,
    bestsellerBadge: "Showroom Favorite"
  },
  {
    id: "tile-2",
    imageUrl: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    name: "Armani Brown Bookmatch Double Charge Vitrified Slab",
    brand: "Somany Max",
    sku: "SVB-TL-SOM-DC80",
    category: "tiles",
    subCategory: "Double Charge Vitrified Tiles",
    unit: "Boxes",
    rateEstimateRange: "₹ 64 – ₹ 75 / Sq.Ft (₹ 890 – ₹ 1,050 / Box)",
    dimensionsUnit: "800 x 800mm | 2 Pcs / Box (13.78 Sq.Ft)",
    shortDesc: "Double layer 3.5mm thick pigment design layer ensures eternal shine even in high-footfall commercial areas.",
    fullSpecs: {
      "Dimensions": "800mm x 800mm (9.5mm heavy body)",
      "Design Layer": "Double Charge hydraulic compacted vitrified porcelain",
      "Stain Resistance": "Class 5 Stain Resistant (Zero penetration from tea/coffee/haldi)",
      "Breaking Strength": "> 2200 Newtons (Slab grade integrity)",
      "Packaging": "Reinforced export grade corrugated carton with corner foam protectors"
    },
    finishes: [
      { name: "Armani Warm Walnut", colorCode: "#4A3B32", bg: "#4A3B32", border: "#2E241E" },
      { name: "Crema Marfil Ivory", colorCode: "#E8DECB", bg: "#E8DECB", border: "#C8BFA8" },
      { name: "Pulpis Grey Mirror", colorCode: "#7A7B7D", bg: "#7A7B7D", border: "#555" }
    ],
    applications: ["Hall Flooring", "Boutique Offices", "Banquet Entrance"],
    popular: false
  },
  {
    id: "tile-3",
    imageUrl: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80",
    name: "Authentic Imported Italian Statuario White Marble Slab (Block Cut)",
    brand: "Ghodela Natural Stone Depot",
    sku: "SVB-MB-NAT-STAT",
    category: "tiles",
    subCategory: "Italian Statuario Marble",
    unit: "Sq.Ft",
    rateEstimateRange: "₹ 480 – ₹ 850 / Sq.Ft (Wholesale Lot Rate)",
    dimensionsUnit: "Custom Gangsaw Slabs (Avg. 45 - 65 Sq.Ft per Slab)",
    shortDesc: "Direct imported Italian Carrara block cut slabs with crystalline white calcite background and dramatic slate grey flowing veins.",
    fullSpecs: {
      "Origin": "Carrara Quarry, Tuscany, Italy (Direct Custom Port Dispatch)",
      "Thickness": "18mm to 20mm Gangsaw calibrated thickness with epoxy fiber net backing",
      "Polish Grade": "Raw Unpolished or Factory Multi-Head Diamond Mirror Polish",
      "Vein Matching": "Available in full 4-Piece Symmetric Bookmatch sets",
      "Suitability": "Indoor luxury villas, grand lobbies, master suites",
      "Inspection": "Physical Slab Inspection & Dry Laying Welcome at Godown"
    },
    finishes: [
      { name: "Natural Bookmatch Calcite", colorCode: "#FBFBFA", bg: "linear-gradient(45deg, #FDFDFD 50%, #C4C4C4 52%, #FDFDFD 55%)", border: "#AAA" },
      { name: "Satin Honed Leather", colorCode: "#EFECE6", bg: "#EFECE6", border: "#C0B8A7" }
    ],
    applications: ["Palatial Villas", "Grand Foyer", "Temple / Mandir Wall"],
    popular: true,
    bestsellerBadge: "Ultra Luxury"
  },
  {
    id: "tile-4",
    imageUrl: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=80",
    name: "Rustic Natural Teak Wood Plank Vitrified Floor Tile",
    brand: "Kajaria Woodstyle",
    sku: "SVB-TL-KAJ-WD20",
    category: "tiles",
    subCategory: "Wooden Floor Planks",
    unit: "Boxes",
    rateEstimateRange: "₹ 68 – ₹ 82 / Sq.Ft (₹ 980 – ₹ 1,180 / Box)",
    dimensionsUnit: "200 x 1200mm | 6 Pcs / Box (14.4 Sq.Ft)",
    shortDesc: "Authentic deep timber embossing with randomized realistic wood grain knots. Zero termite risk, 100% waterproof flooring.",
    fullSpecs: {
      "Dimensions": "200mm x 1200mm x 9mm plank proportion",
      "Texture": "Tactile Synchronized 3D Wood Grain Embossing",
      "Anti-Slip": "R-10 slip resistance rating (Warm and secure underfoot)",
      "Installation Pattern": "Subway 1/3 Stagger or 45° Classical Herringbone pattern recommended",
      "Maintenance": "Zero waxing required, mop with water and ordinary detergents"
    },
    finishes: [
      { name: "Heritage Burma Teak", colorCode: "#85542C", bg: "#85542C", border: "#5C3615" },
      { name: "Scandinavian White Ash", colorCode: "#D6C7B2", bg: "#D6C7B2", border: "#B5A48D" },
      { name: "Smoked American Walnut", colorCode: "#4A3728", bg: "#4A3728", border: "#2E2117" }
    ],
    applications: ["Bedrooms", "Balcony Deck", "Terrace Lounges"],
    popular: true
  },
  {
    id: "tile-5",
    imageUrl: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80",
    name: "R11 Heavy-Duty Punch Anti-Skid Parking & Terrace Tile",
    brand: "Somany Durastone",
    sku: "SVB-TL-SOM-R11",
    category: "tiles",
    subCategory: "Anti-Skid Parking & Bathroom Tiles",
    unit: "Boxes",
    rateEstimateRange: "₹ 48 – ₹ 58 / Sq.Ft (₹ 575 – ₹ 695 / Box)",
    dimensionsUnit: "400 x 400mm (16x16 inch) | 6 Pcs / Box (10.3 Sq.Ft)",
    shortDesc: "12mm extra-thick vitrified body with rough stone punch texture capable of withstanding heavy SUV vehicle loads.",
    fullSpecs: {
      "Dimensions": "400mm x 400mm x 12mm thickness",
      "Load Bearing": "Withstands axle loads exceeding 5,000 kg",
      "Friction Rating": "R-11 Wet Friction Coefficient (Prevents tyre skidding and slips)",
      "Weather Resistance": "UV resistant, frost proof, and zero color fading in hot Indian summers"
    },
    finishes: [
      { name: "Basalt Charcoal Grit", colorCode: "#3C3F42", bg: "#3C3F42", border: "#232628" },
      { name: "Cotswold Sandstone Beige", colorCode: "#C8B9A0", bg: "#C8B9A0", border: "#A7977E" },
      { name: "Terracotta Earth Punch", colorCode: "#965239", bg: "#965239", border: "#6D3723" }
    ],
    applications: ["Driveway & Porch", "Open Terrace", "Wet Bathroom Flooring"],
    popular: false
  },
  {
    id: "tile-6",
    imageUrl: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=800&q=80",
    name: "Rajasthan Natural Black Galaxy Granite (Pre-Cut Countertop)",
    brand: "Ghodela Natural Stone Quarry",
    sku: "SVB-GR-NAT-GALX",
    category: "tiles",
    subCategory: "Black Galaxy Kitchen Granite",
    unit: "Sq.Ft",
    rateEstimateRange: "₹ 165 – ₹ 220 / Sq.Ft",
    dimensionsUnit: "Custom Slabs (Width: 2.5 - 3.5 ft, Length: 8 - 11 ft)",
    shortDesc: "Deep midnight black granite embedded with golden and bronzed mica specks. Non-porous mirror polished surface ideal for Indian modular kitchens.",
    fullSpecs: {
      "Thickness": "18mm to 20mm calibrated monolithic granite slab",
      "Density": "2.75 g/cm³ high density volcanic rock",
      "Heat Tolerance": "Resistant to hot cooking pans up to 450°C without scorch marks",
      "Acid Resistance": "Unaffected by lemon juice, tamarind, turmeric, or vinegar spills",
      "Edge Detailing": "Suitable for Bullnose, Chamfered, and Double Sandwich profile edges"
    },
    finishes: [
      { name: "Midnight Galaxy Gold Specks", colorCode: "#151618", bg: "#151618", border: "#D4AF37" },
      { name: "Honed Matt Absolute Black", colorCode: "#242526", bg: "#242526", border: "#444" }
    ],
    applications: ["Modular Kitchen Counter", "Staircase Steps", "Vanity Counter"],
    popular: true
  },
  {
    id: "tile-7",
    imageUrl: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=800&q=80",
    name: "Moroccan Geometric Artisan Ceramic Wall Highlighter (300x600mm)",
    brand: "Kajaria Studio",
    sku: "SVB-TL-KAJ-MOROC",
    category: "tiles",
    subCategory: "Anti-Skid Parking & Bathroom Tiles",
    unit: "Boxes",
    rateEstimateRange: "₹ 52 – ₹ 65 / Sq.Ft (₹ 480 – ₹ 600 / Box)",
    dimensionsUnit: "300 x 600mm | 5 Pcs / Box (9.68 Sq.Ft)",
    shortDesc: "Vibrant Mediterranean pattern tiles with subtle crackle glaze relief for kitchen backsplashes and bathroom niches.",
    fullSpecs: {
      "Dimensions": "300mm x 600mm x 8.5mm",
      "Application": "Wall Only (Dry and Wet areas)",
      "Glaze Type": "Silky Satin Protective Topcoat with High Scratch Immunity",
      "Pattern Repeat": "4 Randomized matching motifs in each box"
    },
    finishes: [
      { name: "Mediterranean Cobalt Blue", colorCode: "#1E3F66", bg: "#1E3F66", border: "#112233" },
      { name: "Monochrome Graphite Grey", colorCode: "#495057", bg: "#495057", border: "#343A40" }
    ],
    applications: ["Kitchen Dado Backsplash", "Bathroom Shower Niche", "Bar Counter"],
    popular: false
  },

  // --- SANITARYWARE & BATH FITTINGS (7 items) ---
  {
    id: "san-1",
    imageUrl: "https://images.unsplash.com/photo-1564540574859-0dfb63985953?auto=format&fit=crop&w=800&q=80",
    name: "Artize Rimless Vortex One-Piece Western Commode (UF Soft Close)",
    brand: "Jaquar Luxury",
    sku: "SVB-SN-JAQ-WC01",
    category: "sanitary",
    subCategory: "Rimless One-Piece Commodes",
    unit: "Pieces",
    rateEstimateRange: "₹ 11,800 – ₹ 14,200 / Piece",
    dimensionsUnit: "680 x 370 x 740mm | S-Trap 300mm",
    shortDesc: "360° Tornado dual flush with nanoglaze anti-bacterial ceramic coating. Heavy-duty Urea Formaldehyde silent soft-close seat cover.",
    fullSpecs: {
      "Dimensions": "680mm (L) x 370mm (W) x 740mm (H)",
      "Trap Distance": "Standard S-Trap 300mm (12 inches) floor rough-in",
      "Flush Technology": "Rimless 360° Dual Tornado Flush (3 Liters / 4.5 Liters eco flush)",
      "Glaze Technology": "Ceramic Nanoglaze fired at 1280°C (Prevents limescale adhesion)",
      "Seat Cover": "Quick-release UF slim seat cover with hydraulic dampener",
      "Warranty": "10-Year Comprehensive Warranty on Ceramic & Dual Flush Mechanism"
    },
    finishes: [
      { name: "Alpine Brilliant White", colorCode: "#FFFFFF", bg: "#FFFFFF", border: "#DDD" },
      { name: "Stealth Matte Black", colorCode: "#242526", bg: "#242526", border: "#444" },
      { name: "Warm Sahara Beige", colorCode: "#E2D8C3", bg: "#E2D8C3", border: "#BAAD96" }
    ],
    applications: ["Master Bathroom", "Guest Powder Room", "Luxury Hotel Suites"],
    popular: true,
    bestsellerBadge: "Top Selling Commode"
  },
  {
    id: "san-2",
    imageUrl: "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?auto=format&fit=crop&w=800&q=80",
    name: "Florentine Concealed Single-Lever Diverter with 3-Way Thermostatic Control",
    brand: "Jaquar Bath",
    sku: "SVB-SN-JAQ-DIV03",
    category: "sanitary",
    subCategory: "Concealed Thermostatic Diverters",
    unit: "Pieces",
    rateEstimateRange: "₹ 6,400 – ₹ 7,850 / Piece",
    dimensionsUnit: "High Flow Diverter with Concealed Cast Brass Body",
    shortDesc: "Solid extruded forged brass body with Kerox European 40mm ceramic disc cartridge. Effortless fingertip temperature and flow blending.",
    fullSpecs: {
      "Body Material": "Virgin Forged Brass (CuZn39Pb3 grade with zero lead leaching)",
      "Cartridge": "Imported European Ceramic Disc Cartridge tested to 500,000 cycles",
      "Flow Rate": "High flow output of 32 Litres/minute at 3 bar pressure",
      "Trim Plate": "Electroplated solid brass trim plate with laser etched indicators",
      "Corrosion Life": "240-Hour NSS Neutral Salt Spray tested plating (Zero peeling)",
      "Warranty": "10-Year On-Site Manufacturer Warranty with Jaquar Care"
    },
    finishes: [
      { name: "Mirror Chrome Plating", colorCode: "#E0E3E5", bg: "#E0E3E5", border: "#B0B5B9" },
      { name: "Rose Gold PVD Mirror", colorCode: "#B76E79", bg: "#B76E79", border: "#9A545F" },
      { name: "Matte Black Powder Coat", colorCode: "#212121", bg: "#212121", border: "#000" },
      { name: "Brushed Antique Bronze", colorCode: "#8D734A", bg: "#8D734A", border: "#685331" }
    ],
    applications: ["Master Shower Cubicle", "Overhead Shower Suite", "Soaking Tub"],
    popular: true,
    bestsellerBadge: "B2B Contractor Choice"
  },
  {
    id: "san-3",
    imageUrl: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=800&q=80",
    name: "Architectural 300mm (12-inch) Ultra-Slim Stainless Steel Rain Shower",
    brand: "Jaquar Rainmaker",
    sku: "SVB-SN-JAQ-SHW12",
    category: "sanitary",
    subCategory: "Matte Black & Rose Gold Rain Showers",
    unit: "Pieces",
    rateEstimateRange: "₹ 3,200 – ₹ 4,600 / Piece",
    dimensionsUnit: "300 x 300mm Square / Round (12 inch)",
    shortDesc: "Laser-welded AISI 304 grade 2mm ultra-thin rain head with silicone rub-clean anti-clog descaling nozzles.",
    fullSpecs: {
      "Dimensions": "300mm x 300mm x 2mm edge thickness",
      "Air-Mix Tech": "Oxygen-infused droplets give a drenching sensation with 30% water saving",
      "Arm Connector": "Includes 400mm heavy duty ceiling/wall brass shower arm with escutcheon",
      "Swivel Ball": "Solid brass 360° angle adjustable swivel joint",
      "Operating Range": "Works smoothly from 1.5 bar to 5.0 bar water pressure"
    },
    finishes: [
      { name: "Rose Gold PVD Finish", colorCode: "#C27E89", bg: "#C27E89", border: "#A76570" },
      { name: "Obsidian Matte Black", colorCode: "#1F1F1F", bg: "#1F1F1F", border: "#444" },
      { name: "Mirror Polished Chrome", colorCode: "#ECEFF1", bg: "#ECEFF1", border: "#CFD8DC" }
    ],
    applications: ["Luxury Walk-in Showers", "Penthouse Bathrooms"],
    popular: true
  },
  {
    id: "san-4",
    imageUrl: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
    name: "Handcrafted Oval Ceramic Countertop Designer Basin (Thin Rim)",
    brand: "Cera Signature",
    sku: "SVB-SN-CER-BSN01",
    category: "sanitary",
    subCategory: "Countertop Designer Basins",
    unit: "Pieces",
    rateEstimateRange: "₹ 3,900 – ₹ 5,400 / Piece",
    dimensionsUnit: "560 x 360 x 140mm (Tabletop)",
    shortDesc: "Italian curve slim-rim countertop basin with micro-crystalline glaze and smooth internal drain slope to avoid water pooling.",
    fullSpecs: {
      "Dimensions": "560mm (L) x 360mm (W) x 140mm (Depth)",
      "Installation": "Tabletop counter mountable on granite, marble or wooden vanities",
      "Drain Size": "Standard 32mm waste coupling hole",
      "Edge Thickness": "Ultra-fine 5mm refined ceramic rim",
      "Resilience": "Resistant to common bathroom cleaners, iodine, and hair dyes"
    },
    finishes: [
      { name: "Pristine Snow White", colorCode: "#FFFFFF", bg: "#FFFFFF", border: "#CCC" },
      { name: "Matte Emerald Green", colorCode: "#274E45", bg: "#274E45", border: "#18322C" },
      { name: "Matte Charcoal Black", colorCode: "#2B2C2E", bg: "#2B2C2E", border: "#444" },
      { name: "Desert Terracotta Clay", colorCode: "#A35C43", bg: "#A35C43", border: "#7E422F" }
    ],
    applications: ["Vanity Counters", "Powder Rooms", "Restaurant Washrooms"],
    popular: true
  },
  {
    id: "san-5",
    imageUrl: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=800&q=80",
    name: "Kubix Prime Pillar Tap & Precision Brass Health Faucet Set",
    brand: "Jaquar Bath",
    sku: "SVB-SN-JAQ-HF09",
    category: "sanitary",
    subCategory: "CP Taps & Health Faucets",
    unit: "Pieces",
    rateEstimateRange: "₹ 1,750 – ₹ 2,250 / Set",
    dimensionsUnit: "Includes 1.2m Anti-Twist SS Flexible Hose & Wall Bracket",
    shortDesc: "Ergonomic thumb-press trigger health faucet crafted in solid chrome plated brass with stainless steel 304 braided hose.",
    fullSpecs: {
      "Material": "Heavy brass nozzle head with silicone anti-calcification spray plate",
      "Hose Quality": "Double-interlocked SS-304 hose with EPDM inner tube (Tested to 15 bar)",
      "Trigger Action": "Tested for 200,000 continuous trigger depressions without leakage",
      "Holder": "Concealed wall bracket with anchors included"
    },
    finishes: [
      { name: "High Sheen Chrome", colorCode: "#E2E5E8", bg: "#E2E5E8", border: "#BAC0C6" },
      { name: "Matte Midnight Black", colorCode: "#202124", bg: "#202124", border: "#000" },
      { name: "Brushed Gold", colorCode: "#CAA868", bg: "#CAA868", border: "#A78647" }
    ],
    applications: ["Commode Side Jet", "Powder Washroom", "Bidet Area"],
    popular: false
  },
  {
    id: "san-6",
    imageUrl: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80",
    name: "Astral PRO-CPVC SDR 11 Hot & Cold Heavy Plumbing Pipe (3 Meter Length)",
    brand: "Astral Pipes",
    sku: "SVB-PP-AST-CPVC1",
    category: "sanitary",
    subCategory: "uPVC/CPVC Plumbing Pipes",
    unit: "Pieces",
    rateEstimateRange: "₹ 480 – ₹ 620 / 3m Pipe Length",
    dimensionsUnit: "1 Inch (25mm) SDR 11 | 3 Meter Length",
    shortDesc: "High chlorinated polyvinyl chloride engineered for potable water lines with temperatures up to 93°C without chemical leaching.",
    fullSpecs: {
      "Diameter": "1 inch (25mm nominal diameter) SDR 11 heavy class",
      "Pressure Rating": "Working pressure of 28.1 kg/cm² at 23°C (12.7 kg/cm² at 82°C)",
      "Certifications": "IS 15778 standard, NSF/ANSI 14 & 61 certified for drinking water",
      "Life Expectancy": "50+ years design lifecycle under continuous pressure",
      "UV Stabilized": "Zero brittleness under direct sun exposure in concealed shafts"
    },
    finishes: [
      { name: "Off-White with Red Stripe (Hot/Cold)", colorCode: "#F5F3EC", bg: "#F5F3EC", border: "#C85A32" }
    ],
    applications: ["Concealed Bathroom Shafts", "Solar Geyser Supply", "Main Riser Lines"],
    popular: true
  },
  {
    id: "san-7",
    imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
    name: "Square Linear Tile-Insert Floor Drain with Cockroach Trap (SS-304)",
    brand: "Ghodela Architectural Hardware",
    sku: "SVB-DR-SS304-150",
    category: "sanitary",
    subCategory: "CP Taps & Health Faucets",
    unit: "Pieces",
    rateEstimateRange: "₹ 850 – ₹ 1,200 / Piece",
    dimensionsUnit: "150 x 150mm (6x6 inch) | 2mm Gauge",
    shortDesc: "Architectural invisible floor drain where matching bathroom tile is inserted into the top grate for seamless luxury drainage.",
    fullSpecs: {
      "Material": "Heavy gauge AISI-304 Food Grade Stainless Steel",
      "Odor Trap": "Internal mechanical counterweight shutter stops sewer gas and pests",
      "Flow Capacity": "Fast drain rate of 35 liters per minute prevents bathroom puddles",
      "Cleaning": "Includes easy-lift key to remove hair strainer basket"
    },
    finishes: [
      { name: "Satin Brushed Nickel", colorCode: "#C8CCD0", bg: "#C8CCD0", border: "#9DA3A9" },
      { name: "Matte Black PVD", colorCode: "#1B1C1D", bg: "#1B1C1D", border: "#333" }
    ],
    applications: ["Shower Cubicle Drainage", "Balcony Drain", "Wet Area Utility"],
    popular: false
  },

  // --- CEMENT, BAJRI & RAW CIVIL (7 items) ---
  {
    id: "cem-1",
    imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    name: "UltraTech Super OPC 53 Grade High Early Strength Cement (50kg Bag)",
    brand: "UltraTech Cement",
    sku: "SVB-CM-ULT-53",
    category: "cement",
    subCategory: "OPC 53 & PPC Grade Cement (50kg Bags)",
    unit: "50kg Bags",
    rateEstimateRange: "₹ 385 – ₹ 415 / 50kg Bag (Site Bulk Rate)",
    dimensionsUnit: "50 Kg HDPE Tamper-Proof Polypropylene Bag",
    shortDesc: "Premier Ordinary Portland Cement with 53 MPa minimum 28-day compressive strength. Highest early strength for RCC column casting and roof slabs.",
    fullSpecs: {
      "Compressive Strength": "28-day strength exceeds 58 MPa (Standard minimum is 53 MPa)",
      "Initial Setting Time": "35 to 45 minutes; Final setting in 210 minutes",
      "Fineness": "340 m²/kg specific surface area for dense concrete packing",
      "Packaging": "Moisture-resistant valve type woven polypropylene laminated bag",
      "Verification": "Original Manufacturer Hologram & Batch Test Certificate with every dispatch",
      "Godown Capacity": "8,500 Bags in Live Stock (Same-day dispatch via 10-wheeler trucks)"
    },
    finishes: [
      { name: "Standard 50kg Heavy Bag", colorCode: "#CFCAC2", bg: "#CFCAC2", border: "#9A948B" }
    ],
    applications: ["RCC Roof Slabs", "Foundations & Footings", "High Load Columns & Beams"],
    popular: true,
    bestsellerBadge: "Civil Top Seller"
  },
  {
    id: "cem-2",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    name: "Ambuja Kawach Water-Repellent PPC Shield Cement (50kg Bag)",
    brand: "Ambuja Cement",
    sku: "SVB-CM-AMB-KWC",
    category: "cement",
    subCategory: "OPC 53 & PPC Grade Cement (50kg Bags)",
    unit: "50kg Bags",
    rateEstimateRange: "₹ 395 – ₹ 425 / 50kg Bag",
    dimensionsUnit: "50 Kg Tamper-Evident Sealed Bag",
    shortDesc: "Engineered hydrophobic cement incorporating specialized silane additives to permanently resist water penetration, dampness, and efflorescence (shora).",
    fullSpecs: {
      "Water Repellency": "Forms dense micro-capillary barrier reducing permeability by over 60%",
      "Chemical Resistance": "Superior defense against sulphate and chloride attacks in saline soil",
      "Workability": "Higher slump retention with lower water-cement ratio",
      "Applications": "Basement retaining walls, external plaster, terrace water-shielding",
      "Batch Freshness": "Guaranteed under 15 days from grinding plant dispatch"
    },
    finishes: [
      { name: "Weather-Shield Sealed Sack", colorCode: "#2F5233", bg: "#2F5233", border: "#1F3622" }
    ],
    applications: ["Terrace Screed", "External Plaster", "Basement Retaining Walls"],
    popular: true
  },
  {
    id: "cem-3",
    imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    name: "Natural Washed River Sand / Banas River Bajri (Fine Silt-Free)",
    brand: "Ghodela Mining & Minerals",
    sku: "SVB-SD-BANS-TR",
    category: "cement",
    subCategory: "Washed River Sand / Banas Bajri (By Ton/Trolley)",
    unit: "Trolleys",
    rateEstimateRange: "₹ 9,500 – ₹ 12,500 / Tractor Trolley (Approx 120 - 140 Cft)",
    dimensionsUnit: "Standard Hydraulic Tractor Trolley (~3.5 to 4.0 Metric Tons)",
    shortDesc: "Double-washed natural silica river sand sourced legally from approved Banas riverbed zones. Zero organic clay silt, ready for concrete and brick masonry.",
    fullSpecs: {
      "Silt Content": "< 3% by volume (Complies strictly with IS: 383 Zone-II grading)",
      "Grading Zone": "Zone II (Well-graded particles between 150 microns to 4.75mm)",
      "Dispatch Measurement": "Measured in tractor trolley volume or computerized weighbridge metric tons",
      "Chloride / Organic": "Nil (No efflorescence or chemical corrosion to steel rebar)",
      "Unloading": "Hydraulic tipping directly at contractor site location"
    },
    finishes: [
      { name: "Golden Banas River Sand", colorCode: "#D2B48C", bg: "#D2B48C", border: "#A88D65" },
      { name: "Fine Washed Plaster Sand", colorCode: "#E2CFA6", bg: "#E2CFA6", border: "#B5A177" }
    ],
    applications: ["Slab Concrete", "Internal/External Plaster", "Brick & AAC Block Masonry"],
    popular: true,
    bestsellerBadge: "Essential Bulk Supply"
  },
  {
    id: "cem-4",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    name: "Crushed Blue Granite Aggregate (10mm & 20mm Gitti)",
    brand: "Ghodela Stone Crushers",
    sku: "SVB-AG-GRAN-20",
    category: "cement",
    subCategory: "10mm/20mm Stone Aggregate (Gitti)",
    unit: "Trolleys",
    rateEstimateRange: "₹ 7,800 – ₹ 9,200 / Hydraulic Trolley (~130 Cft)",
    dimensionsUnit: "Hydraulic Tractor Trolley (~3.8 Metric Tons)",
    shortDesc: "Machine crushed, washed cubical granite stone aggregate. Low flakiness index ensures dense interlock and zero air voids in RCC mixing.",
    fullSpecs: {
      "Particle Shape": "Angular Cubical Aggregate (Flakiness & Elongation < 15%)",
      "Crushing Strength": "Aggregate Crushing Value < 22% (High impact load resistance)",
      "Cleanliness": "Washed clean of dust coating for maximum paste bonding with cement",
      "Blend Options": "Available in 20mm Nominal, 10mm Chipping, or Ready 60:40 RCC blend"
    },
    finishes: [
      { name: "20mm Angular Grey Blue Stone", colorCode: "#707880", bg: "#707880", border: "#4A5056" },
      { name: "10mm Fine Concrete Chipping", colorCode: "#8C9298", bg: "#8C9298", border: "#63686D" }
    ],
    applications: ["RCC Column Casting", "Foundation Bedding", "Roof Slab Concrete"],
    popular: false
  },
  {
    id: "cem-5",
    imageUrl: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80",
    name: "Roff T02 Polymer-Modified Heavy Tile Adhesive (20kg Bag)",
    brand: "Pidilite Roff",
    sku: "SVB-AD-PID-ROFF",
    category: "cement",
    subCategory: "Tile Adhesives & Epoxy Grout",
    unit: "Bags",
    rateEstimateRange: "₹ 340 – ₹ 420 / 20kg Bag",
    dimensionsUnit: "20 Kg Poly-Lined Moisture Proof Bag",
    shortDesc: "High bonding polymer dry-mix adhesive specially engineered for laying 600x1200mm large vitrified tiles on floor and wall surfaces.",
    fullSpecs: {
      "Standard Compliance": "Meets IS 15477: 2019 Type 2 standard requirements",
      "Coverage": "Approx. 50 to 55 Sq.Ft per 20kg bag at 3mm notched trowel thickness",
      "Open Time": "30 minutes open time allows easy repositioning of large slabs",
      "Slip Resistance": "Zero vertical slip on wall tiles up to 1200mm height",
      "Pot Life": "Mixed mortar stays workable for 2.5 hours in bucket"
    },
    finishes: [
      { name: "Cementitious Grey", colorCode: "#8E8F91", bg: "#8E8F91", border: "#6B6C6D" },
      { name: "White Premium Polymer", colorCode: "#F0EEE9", bg: "#F0EEE9", border: "#C8C4BC" }
    ],
    applications: ["Large Format Tile Laying", "Granite Steps", "Bathroom Wall Slabs"],
    popular: true
  },
  {
    id: "cem-6",
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    name: "Dr. Fixit 101 LW+ Integral Waterproofing Compound (5 Liter Jerrycan)",
    brand: "Dr. Fixit Pidilite",
    sku: "SVB-CH-PID-LW101",
    category: "cement",
    subCategory: "Waterproofing Chemicals",
    unit: "Cans",
    rateEstimateRange: "₹ 620 – ₹ 750 / 5L Jerrycan",
    dimensionsUnit: "5 Liter High Density Plastic Jerrycan",
    shortDesc: "Liquid integral waterproofing compound used in plaster, mortar, and concrete. Reduces water-cement ratio and stops honeycomb dampness.",
    fullSpecs: {
      "Dosage": "200ml per 50kg bag of cement",
      "Permeability": "Reduces water penetration in concrete by over 50%",
      "Corrosion Inhibition": "Passivates embedded steel rebars against moisture rust",
      "Strength Impact": "Increases 28-day compressive strength by 8-10% through micro-plasticizing"
    },
    finishes: [
      { name: "Amber Gold Liquid Solution", colorCode: "#D9A54C", bg: "#D9A54C", border: "#B58434" }
    ],
    applications: ["Roof Slab Concreting", "Basement Plaster", "Water Tank Casting"],
    popular: false
  },
  {
    id: "cem-7",
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    name: "Starlike 3-Part Epoxy Tile Joint Grout (5kg Bucket with Glitter Additive)",
    brand: "Laticrete SpectraLOCK",
    sku: "SVB-GR-LAT-EPOX",
    category: "cement",
    subCategory: "Tile Adhesives & Epoxy Grout",
    unit: "Buckets",
    rateEstimateRange: "₹ 1,450 – ₹ 1,950 / 5kg Bucket",
    dimensionsUnit: "5 Kg Complete Unit (Resin + Hardener + Colored Quartz Filler)",
    shortDesc: "100% solid stain-proof epoxy grout for marble and tile joints. Never yellows, completely waterproof, immune to acid cleaners.",
    fullSpecs: {
      "Composition": "Bisphenol-A epoxy resin with aliphatic polyamine and micro-quartz",
      "Joint Width": "Suitable for joints from 1mm up to 12mm width",
      "Chemical Resistance": "Unaffected by dilute hydrochloric acid, phenyl, bleach, and chlorine",
      "Cleanup": "Water washable during initial 45-minute working window"
    },
    finishes: [
      { name: "Sparkling Metallic Gold", colorCode: "#C5A059", bg: "#C5A059", border: "#A4813D" },
      { name: "Architectural Pearl Grey", colorCode: "#B0B5B9", bg: "#B0B5B9", border: "#8C9298" },
      { name: "Diamond Pure White", colorCode: "#FBFBFC", bg: "#FBFBFC", border: "#CCC" }
    ],
    applications: ["Bathroom Tile Joints", "Swimming Pool Grouting", "Kitchen Counter Joint"],
    popular: true
  }
];

// Pre-Built Construction & Renovation Packages (View 1)
export const PACKAGES = [
  {
    id: "pkg-1",
    title: "Complete Master Bathroom Sanitary & Plumbing Suite",
    badge: "Most Popular Turnkey Combo",
    tagline: "Designed for 1 Complete Luxury Bathroom (Everything from Commode to Concealed Diverter)",
    savingsNotice: "Saves ~18% over piecemeal item purchase",
    leadTime: "Same-Day Dispatch Ready",
    itemsSummary: [
      "1x Jaquar Rimless Tornado One-Piece Western Commode (UF Seat)",
      "1x Jaquar Florentine Concealed Diverter (With Brass Internal Body)",
      "1x 300mm (12-inch) Ultra-Slim Stainless Rain Shower + Arm",
      "1x Handcrafted Ceramic Oval Countertop Designer Basin",
      "1x Kubix Prime Brass Health Faucet + 1.2m SS Hose Set",
      "1x SS-304 Invisible Tile-Insert Anti-Cockroach Floor Drain",
      "6x Astral PRO-CPVC 1\" Heavy Class Hot/Cold Pipe Lengths + Fittings"
    ],
    category: "sanitary",
    recommendedBHK: "Master Suite / Independent Villa",
    defaultItems: [
      { id: "san-1", qty: 1, unit: "Pieces", finish: "Alpine Brilliant White" },
      { id: "san-2", qty: 1, unit: "Pieces", finish: "Mirror Chrome Plating" },
      { id: "san-3", qty: 1, unit: "Pieces", finish: "Mirror Polished Chrome" },
      { id: "san-4", qty: 1, unit: "Pieces", finish: "Pristine Snow White" },
      { id: "san-5", qty: 1, unit: "Pieces", finish: "High Sheen Chrome" },
      { id: "san-7", qty: 1, unit: "Pieces", finish: "Satin Brushed Nickel" },
      { id: "san-6", qty: 6, unit: "Pieces", finish: "Off-White with Red Stripe (Hot/Cold)" }
    ]
  },
  {
    id: "pkg-2",
    title: "3BHK Complete Modular Switch & Safe Wiring Kit",
    badge: "Contractor Standard Specification",
    tagline: "Fully calculated modular switches, sockets, distribution board, and fire-retardant wiring for a standard 3BHK flat (1,400 - 1,800 Sq.Ft)",
    savingsNotice: "Includes Free MCB Sizing Guidance & Color-Coded Coils",
    leadTime: "Packed in 3 Organized Room Boxes",
    itemsSummary: [
      "22x Crystal Glass Modular Switch Plates (Assorted 2M, 4M, 6M, 8M sizes)",
      "65x Havells Fabio 16A/6A Soft Amber LED Rocker Switches",
      "18x Legrand 5-Pin Safety Shutter Universal Sockets",
      "4x Step-Type Hum-Free Fan Speed Regulators",
      "1x Havells 12-Way Double Door TPN Distribution Board (MCB Box)",
      "6x Polycab FR-LSH Copper Wire Coils (2x Red 2.5mm, 2x Black 1.5mm, 2x Green 1.0mm)",
      "16x Anti-Glare 12W Architectural COB LED Ceiling Downlights"
    ],
    category: "electricals",
    recommendedBHK: "3 BHK Apartment / Duplex Floor",
    defaultItems: [
      { id: "elec-1", qty: 12, unit: "Pieces", finish: "Smoked Obsidian Black" },
      { id: "elec-2", qty: 65, unit: "Pieces", finish: "Velvet Matte Charcoal" },
      { id: "elec-4", qty: 18, unit: "Pieces", finish: "Matte Anthracite" },
      { id: "elec-5", qty: 6, unit: "Coils", finish: "Safety Red (Phase)" },
      { id: "elec-6", qty: 1, unit: "Pieces", finish: "Architectural Off-White" },
      { id: "elec-7", qty: 16, unit: "Pieces", finish: "Matte White Rim / Dark Baffle" }
    ]
  },
  {
    id: "pkg-3",
    title: "Civil Foundation & Roof Slab Concreting Bulk Deal",
    badge: "Direct Factory Rake Dispatch",
    tagline: "Standard civil structural package for 1,000 Sq.Ft roof casting or heavy foundation footing batch",
    savingsNotice: "Direct Rake Wholesale Freight Rate Applied",
    leadTime: "Tractor & Truck Delivery Within 4 Hours",
    itemsSummary: [
      "150x UltraTech OPC 53 Grade High Strength Cement Bags (50kg each)",
      "2x Hydraulic Tractor Trolleys Double-Washed Banas River Sand (Silt < 3%)",
      "2x Hydraulic Tractor Trolleys 20mm/10mm Blue Granite Crushed Gitti",
      "4x Dr. Fixit 101 LW+ Integral Waterproofing Jerrycans (5L each)",
      "Includes Computerized Weighbridge Slip & Lab Test Certificate"
    ],
    category: "cement",
    recommendedBHK: "1,000 Sq.Ft Slab Casting / Foundation",
    defaultItems: [
      { id: "cem-1", qty: 150, unit: "50kg Bags", finish: "Standard 50kg Heavy Bag" },
      { id: "cem-3", qty: 2, unit: "Trolleys", finish: "Golden Banas River Sand" },
      { id: "cem-4", qty: 2, unit: "Trolleys", finish: "20mm Angular Grey Blue Stone" },
      { id: "cem-6", qty: 4, unit: "Cans", finish: "Amber Gold Liquid Solution" }
    ]
  },
  {
    id: "pkg-4",
    title: "Grand Living Room 600x1200 GVT Slab + High Polymer Adhesive Combo",
    badge: "Flawless Hairline Floor Package",
    tagline: "Curated for an expansive 600 Sq.Ft living and dining area with seamless 1.5mm jointing and zero tile pop-up risk",
    savingsNotice: "Bundled with Genuine Epoxy Grout & Roff T02",
    leadTime: "Godown Inspection & Batch-Matched Boxes Ready",
    itemsSummary: [
      "42x Boxes Kajaria Italian Statuario Royale 600x1200mm GVT Slabs (651 Sq.Ft with 8% wastage)",
      "12x Bags Pidilite Roff T02 Polymer-Modified Tile Adhesive (20kg bags)",
      "3x Buckets Starlike 3-Part Epoxy Stain-Proof Tile Grout (5kg units with gold shimmer)",
      "Free 200x Leveling Spacers & Wedges Kit included for site contractor"
    ],
    category: "tiles",
    recommendedBHK: "Living & Dining Space (400 - 650 Sq.Ft)",
    defaultItems: [
      { id: "tile-1", qty: 42, unit: "Boxes", finish: "Carving Satin Silk" },
      { id: "cem-5", qty: 12, unit: "Bags", finish: "White Premium Polymer" },
      { id: "cem-7", qty: 3, unit: "Buckets", finish: "Sparkling Metallic Gold" }
    ]
  }
];

// Interactive "Shop by Space" Hotspot Data (View 1)
export const SPACES_DATA = [
  {
    id: "bathroom",
    label: "Bathroom",
    title: "Luxury Master Bathroom",
    tagline: "Concealed Plumbing & Italian Ceramic Sanctuary",
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85",
    bgColor: "#23262A",
    hotspots: [
      {
        x: 74,
        y: 68,
        title: "Kubix Prime Matte Black Basin Mixer Tap",
        brand: "Jaquar Bath",
        finish: "Matte Black PVD",
        sku: "SVB-SN-JAQ-HF09",
        productId: "san-5",
        role: "Vanity Basin Faucet"
      },
      {
        x: 72,
        y: 82,
        title: "Handcrafted Ceramic Countertop Basin",
        brand: "Cera Signature",
        finish: "Pristine Snow White",
        sku: "SVB-SN-CER-BSN01",
        productId: "san-4",
        role: "Countertop Wash Basin"
      },
      {
        x: 20,
        y: 40,
        title: "Glazed Ceramic Subway Wall Tiles",
        brand: "Kajaria Studio",
        finish: "Pure Arctic White Subway",
        sku: "SVB-TL-KAJ-MOROC",
        productId: "tile-7",
        role: "Shower Wall Enclosure"
      },
      {
        x: 35,
        y: 62,
        title: "Matte Black SS-304 Shower Door Fittings",
        brand: "Ghodela Hardware",
        finish: "Matte Black SS-304",
        sku: "SVB-DR-SS304-150",
        productId: "san-7",
        role: "Shower Enclosure Hardware"
      }
    ]
  },
  {
    id: "living",
    label: "Living Room",
    title: "Modern Architectural Living Room",
    tagline: "High-Luster Vitrified Slabs & Crystal Switchboards",
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    bgColor: "#292724",
    hotspots: [
      {
        x: 24,
        y: 56,
        title: "Arteor Crystal Toughened Glass Switch Plate",
        brand: "Legrand France",
        finish: "Smoked Obsidian Black",
        sku: "SVB-SW-LEG-8M",
        productId: "elec-1",
        role: "Wall Lighting Hub"
      },
      {
        x: 68,
        y: 84,
        title: "Italian Statuario Royale 600x1200mm GVT Slab",
        brand: "Kajaria Eternity",
        finish: "Carving Satin Silk",
        sku: "SVB-TL-KAJ-1206",
        productId: "tile-1",
        role: "Seamless Living Flooring"
      },
      {
        x: 52,
        y: 12,
        title: "Architectural Deep Recessed 12W LED Downlight",
        brand: "Havells Pro",
        finish: "Matte White / Dark Baffle",
        sku: "SVB-LT-HAV-12W",
        productId: "elec-7",
        role: "Ceiling Ambient Illumination"
      }
    ]
  },
  {
    id: "kitchen",
    label: "Kitchen",
    title: "Chef's Modular Kitchen & Utility",
    tagline: "Scratch-Proof Natural Granite & Heavy 16A Sockets",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85",
    bgColor: "#252B28",
    hotspots: [
      {
        x: 50,
        y: 72,
        title: "Natural Black Galaxy Granite Countertop",
        brand: "Ghodela Natural Stone",
        finish: "Mirror Polish Gold Mica",
        sku: "SVB-GR-NAT-GALX",
        productId: "tile-6",
        role: "Kitchen Worktop"
      },
      {
        x: 24,
        y: 46,
        title: "Fabio 16A Heavy Appliance Rocker Switch + Socket",
        brand: "Havells Crabtree",
        finish: "Velvet Matte Charcoal",
        sku: "SVB-SW-HAV-16A",
        productId: "elec-2",
        role: "Chimney & Microwave Point"
      },
      {
        x: 74,
        y: 38,
        title: "Moroccan Artisan Ceramic Backsplash Tile",
        brand: "Kajaria Studio",
        finish: "Mediterranean Cobalt Blue",
        sku: "SVB-TL-KAJ-MOROC",
        productId: "tile-7",
        role: "Kitchen Dado Backsplash"
      }
    ]
  },
  {
    id: "structural",
    label: "Civil Site",
    title: "Structural Civil Construction Site",
    tagline: "Foundation Cement, Pure Banas Sand & Heavy Piping",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=85",
    bgColor: "#2E2A27",
    hotspots: [
      {
        x: 32,
        y: 48,
        title: "UltraTech OPC 53 Grade High Strength Cement",
        brand: "UltraTech",
        finish: "50kg Poly Bag",
        sku: "SVB-CM-ULT-53",
        productId: "cem-1",
        role: "Column & Slab Casting"
      },
      {
        x: 62,
        y: 78,
        title: "Natural Washed River Sand (Banas Bajri)",
        brand: "Ghodela Mining & Minerals",
        finish: "Fine Silt < 3%",
        sku: "SVB-SD-BANS-TR",
        productId: "cem-3",
        role: "Concrete Mixing Sand"
      },
      {
        x: 78,
        y: 36,
        title: "Astral PRO-CPVC SDR 11 Heavy Plumbing Riser",
        brand: "Astral Pipes",
        finish: "1-inch 25mm",
        sku: "SVB-PP-AST-CPVC1",
        productId: "san-6",
        role: "Shaft Water Lines"
      }
    ]
  }
];

// Digital Lookbooks (View 4 - Eliminates sending 50MB PDFs over WhatsApp)
export const DIGITAL_LOOKBOOKS = [
  {
    id: "lookbook-switches",
    title: "2026 Modular Switches & Smart Home Master Collection",
    brandSubtitle: "Havells Crabtree, Legrand Arteor & Schneider Wiser",
    pagesCount: 14,
    badge: "WhatsApp Instant Link",
    coverTag: "Architectural Edition",
    description: "Curated collection of toughened crystal glass plates, brushed metallic rockers, capacitive touch sensors, and heavy appliance sockets with dimensions and wiring schematics.",
    directShareMessage: "Namaste! Here is our 2026 Modular Switches & Automation Interactive Digital Lookbook from Shree Vishwakarma BuildMart. Click here to browse all plate finishes and test interactive switch toggles directly on your phone:",
    deepLinkFilter: "electricals",
    featuredProducts: ["elec-1", "elec-2", "elec-3", "elec-4", "elec-7"],
    slides: [
      {
        title: "Page 1: Crystal Glass Heritage Series",
        highlight: "4mm Toughened Beveled Glass with Brass Chassis",
        notes: "Matches dark and light veneer walls with equal majesty. Available in 2M, 4M, 6M, 8M, 12M and 18M configurations.",
        associatedItem: "elec-1"
      },
      {
        title: "Page 2: Stealth Matte Black & Soft Amber Indicators",
        highlight: "Micro-Travel 16A Switches for Heavy Loads",
        notes: "Whisper-quiet switching action tested for over 120,000 cycles without spark erosion.",
        associatedItem: "elec-2"
      },
      {
        title: "Page 3: Zigbee & WiFi Retrofit Smart Touch",
        highlight: "Control Lights via Voice & Mobile App Without Rewiring",
        notes: "Fits easily into existing concealed metal GI wall boxes. Dual voltage protection.",
        associatedItem: "elec-3"
      },
      {
        title: "Page 4: Universal Sockets & Safety Interlocks",
        highlight: "Child-Proof Safety Shutters & Heavy Brass Terminals",
        notes: "Prevents accidental pin insertion while ensuring snug fit for laptop and phone chargers.",
        associatedItem: "elec-4"
      }
    ]
  },
  {
    id: "lookbook-tiles",
    title: "GVT Slabs & Italian Statuario Marble Lookbook (600x1200 & Above)",
    brandSubtitle: "Kajaria Eternity, Somany Max & Natural Stone Depot",
    pagesCount: 18,
    badge: "Direct Slab Catalog",
    coverTag: "Slab & Vitrified",
    description: "High-definition catalog of bookmatch marble designs, carving glaze finishes, outdoor R11 punch pavers, and natural Rajasthan granite slabs.",
    directShareMessage: "Namaste! View our latest 600x1200mm Large Format GVT Slabs & Italian Marble Lookbook from Shree Vishwakarma BuildMart without downloading any heavy 50MB PDF. Click below to view finishes and calculate room boxes:",
    deepLinkFilter: "tiles",
    featuredProducts: ["tile-1", "tile-2", "tile-3", "tile-4", "tile-6"],
    slides: [
      {
        title: "Page 1: Statuario Royale 600x1200mm Carving Glaze",
        highlight: "Continuous Flowing Grey Calcite Veins",
        notes: "Laser-cut rectified edges allow sleek 1.5mm joints for a monolithic marble look at 1/5th the maintenance cost.",
        associatedItem: "tile-1"
      },
      {
        title: "Page 2: Armani Brown Double Charge Heavy Body",
        highlight: "3.5mm Deep Pigment Layer for Heavy Footfall",
        notes: "Perfect for living rooms, reception lobbies, and corporate headquarters. High scratch rating.",
        associatedItem: "tile-2"
      },
      {
        title: "Page 3: Imported Carrara & Statuario Natural Marble",
        highlight: "20mm Polished Gangsaw Blocks with Fiber Net Backing",
        notes: "Direct factory lot pricing. Customers are welcome to visit our VKI Depot for physical block dry laying.",
        associatedItem: "tile-3"
      },
      {
        title: "Page 4: Rustic Teak Wood Planks (200x1200mm)",
        highlight: "Tactile Timber Grain Relief with Zero Termite Risk",
        notes: "Can be laid in herringbone or subway staggered pattern for cozy bedroom warmth.",
        associatedItem: "tile-4"
      }
    ]
  },
  {
    id: "lookbook-bath",
    title: "Luxury Bath, Concealed Diverters & Sanitary Reference 2026",
    brandSubtitle: "Jaquar Artize, Cera Signature & Astral CPVC",
    pagesCount: 16,
    badge: "Sanitary Price Guide",
    coverTag: "Boutique Bath",
    description: "Detailed specification guide for rimless vortex commodes, rose gold & matte black concealed shower systems, thin-rim designer washbasins, and heavy CPVC plumbing lines.",
    directShareMessage: "Namaste! Explore our Complete Luxury Sanitary & Bath Fittings Digital Lookbook from Shree Vishwakarma BuildMart directly on your phone:",
    deepLinkFilter: "sanitary",
    featuredProducts: ["san-1", "san-2", "san-3", "san-4", "san-5"],
    slides: [
      {
        title: "Page 1: 360° Vortex Rimless Commodes",
        highlight: "Zero Odor, Nanoglaze Anti-Bacterial Ceramic Basin",
        notes: "Dual flush saves up to 40,000 liters of water annually while maintaining pristine white gloss.",
        associatedItem: "san-1"
      },
      {
        title: "Page 2: Concealed 3-Way Thermostatic Diverters",
        highlight: "Heavy Forged Brass Body with 10-Year On-Site Warranty",
        notes: "PVD rose gold and matte black coatings with 240-hour neutral salt spray corrosion immunity.",
        associatedItem: "san-2"
      },
      {
        title: "Page 3: 300mm Stainless Steel Rain Showers",
        highlight: "Oxygen-Infused Drenching Drops with Rub-Clean Nozzles",
        notes: "Laser-welded 2mm edge with 400mm heavy brass shower arm included.",
        associatedItem: "san-3"
      },
      {
        title: "Page 4: Countertop Artisan Basins",
        highlight: "Minimal 5mm Fine Edge with Non-Porous Vitreous China",
        notes: "Comes in Matte Black, Emerald Green, Terracotta, and Alpine Snow White.",
        associatedItem: "san-4"
      }
    ]
  },
  {
    id: "lookbook-civil",
    title: "Contractor Raw Civil Material & Bulk Supplies Spec Sheet",
    brandSubtitle: "UltraTech Cement, Washed Banas River Bajri & Pidilite",
    pagesCount: 8,
    badge: "Contractor Rate Card",
    coverTag: "Civil Bulk Spec",
    description: "Rake delivery specifications, batch test certificates, compressive strength graphs, and computerized weighbridge protocols for cement, bajri, aggregate, and structural waterproofing.",
    directShareMessage: "Namaste! Here is our Contractor Raw Civil Material Specification Sheet from Shree Vishwakarma BuildMart with live godown stock details for UltraTech Cement, Banas Bajri, and Gitti:",
    deepLinkFilter: "cement",
    featuredProducts: ["cem-1", "cem-2", "cem-3", "cem-4", "cem-5"],
    slides: [
      {
        title: "Page 1: UltraTech Super OPC 53 Grade Specifications",
        highlight: "28-Day Strength > 58 MPa with Tamper-Proof Poly Sacks",
        notes: "Batch test reports provided with every truck dispatch. Direct rake delivery to site.",
        associatedItem: "cem-1"
      },
      {
        title: "Page 2: Legal Banas Washed River Sand Protocol",
        highlight: "Silt Content < 3% with Computerized Weighbridge Slip",
        notes: "Fine particle grading suitable for both concrete slabs and high-finish internal plaster.",
        associatedItem: "cem-3"
      },
      {
        title: "Page 3: Polymer Modified Tile Adhesives (Type 2)",
        highlight: "High Shear Adhesion for 600x1200 Slabs",
        notes: "Replaces traditional cement-sand slurry for zero hollowness and anti-cracking floor bonding.",
        associatedItem: "cem-5"
      }
    ]
  }
];

// Trader Quick Share Presets (View 6)
export const TRADER_PRESETS = [
  {
    id: "preset-switches",
    title: "Customer Asking for Designer Switchboards",
    categoryFilter: "electricals",
    subCategoryFilter: "Modular Switch Plates",
    view: "catalogue",
    suggestedText: "Namaste! Aapke ghar/project ke liye hamari latest Modular Switches & Glass Plates ki range online dekh sakte hain. Is link me aap plate ke colors change karke live switchboard ON/OFF karke dekh sakte hain: "
  },
  {
    id: "preset-tiles",
    title: "Customer Asking for 600x1200 Slabs / Flooring Tiles",
    categoryFilter: "tiles",
    subCategoryFilter: "600x1200mm GVT Slabs",
    view: "catalogue",
    suggestedText: "Namaste! Hamare godown me ready 600x1200mm GVT Large Slabs aur Italian Statuario designs ki complete live range is link par available hai. PDF download karne ki zaroorat nahi, direct phone par open kijiye: "
  },
  {
    id: "preset-bath",
    title: "Architect Requesting Luxury Sanitary & Diverters",
    categoryFilter: "sanitary",
    subCategoryFilter: "Concealed Thermostatic Diverters",
    view: "catalogue",
    suggestedText: "Hello! Sharing Shree Vishwakarma BuildMart's digital sanitary catalog featuring Jaquar concealed diverters, rimless commodes, and rain showers. You can shortlist items directly into the estimate cart: "
  },
  {
    id: "preset-cement",
    title: "Contractor Asking for UltraTech Cement & Bajri Rates",
    categoryFilter: "cement",
    subCategoryFilter: "OPC 53 & PPC Grade Cement (50kg Bags)",
    view: "catalogue",
    suggestedText: "Namaste Contractor Sahab! UltraTech OPC 53 Grade Cement aur Banas Washed Bajri ki live godown dispatch details is link par available hai. Wholesale truck load rates ke liye estimate cart se quote request bhej dijiye: "
  },
  {
    id: "preset-studio",
    title: "Customer Wants to Test Switch Designs on Wall Paints",
    categoryFilter: "electricals",
    view: "visualizer",
    suggestedText: "Namaste! Hamare Interactive Switch & Tile Studio me jaakar aap apne room ki wall paint par switches aur tiles match karke dekh sakte hain. Click kijiye aur switch ON/OFF karke live check kijiye: "
  },
  {
    id: "preset-calculator",
    title: "Client Confused About Tile Box & Cement Quantity Calculation",
    categoryFilter: "all",
    view: "calculator",
    suggestedText: "Namaste! Apne plot ya kamre ke exact tile boxes, cement bags aur wire coils calculate karne ke liye hamara Site Material Calculator use kijiye. Room size daalte hi exact quantity cart me add ho jayegi: "
  }
];

// --- CINEMATIC PROMOTIONAL CAMPAIGNS & ADS ---
export const PROMO_CAMPAIGNS = [
  {
    id: "promo-1",
    tag: "Trade Season Highlight",
    title: "Legrand Arteor Crystal Edition",
    subtitle: "Diamond-Beveled French Toughened Glass",
    discountBadge: "Direct Wholesale Depot Pricing",
    desc: "Experience pure architectural transparency with electroplated champagne gold trims and anti-fingerprint oleophobic coating. Ready stock for immediate site dispatch.",
    imageUrl: "https://images.unsplash.com/photo-1585412727053-48a19eef546b?auto=format&fit=crop&w=1200&q=80",
    themeColor: "#C85A32",
    targetView: "visualizer",
    targetCategory: "electricals"
  },
  {
    id: "promo-2",
    tag: "Architectural Slabs",
    title: "Kajaria Eternity 800x1600mm Royale",
    subtitle: "Seamless Zero-Grout Italian Statuario",
    discountBadge: "Direct Factory Rake Rates",
    desc: "Carving satin silk finish with high-definition vein continuity across 4-slab book-matching. Over 24,000 sq.ft physical stock in our VKI Jaipur godown.",
    imageUrl: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80",
    themeColor: "#B08D57",
    targetView: "catalogue",
    targetCategory: "tiles"
  },
  {
    id: "promo-3",
    tag: "Luxury Bath Systems",
    title: "Jaquar Artize Concealed Thermostats",
    subtitle: "Architectural Rain Showers in Rose Gold & Matte Black",
    discountBadge: "Authorized Project Distribution",
    desc: "Precision scald-safe thermostatic diverters with multi-flow waterfall cascade bodies. Complete compatibility with CPVC concealed rough-ins.",
    imageUrl: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=1200&q=80",
    themeColor: "#2C4A52",
    targetView: "catalogue",
    targetCategory: "sanitary"
  },
  {
    id: "promo-4",
    tag: "Heavy Civil Supply",
    title: "UltraTech Weather Pro3 + Washed Banas Sand",
    subtitle: "Direct Factory Rake & Weighbridge Verified Fleet",
    discountBadge: "Wholesale Bulk Truckloads",
    desc: "Computerized weighbridge receipts with certified sieve-test reports (<3% silt content). Same-day site crane & tipper offloading across Jaipur.",
    imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80",
    themeColor: "#6E685F",
    targetView: "calculator",
    targetCategory: "cement"
  }
];

// --- COMPANY HERITAGE, INFRASTRUCTURE & LEADERSHIP ---
export const COMPANY_HERITAGE = {
  foundingYear: 1998,
  founder: "Shri Rameshwar Sharma",
  managingDirector: "Shri Rajesh Sharma",
  directorOps: "Er. Amit Sharma (B.Tech Civil, NICMAR)",
  headquarters: "VKI Industrial Area, Sikar Road, Jaipur, Rajasthan",
  annualDispatchedVolume: "1.4 Million Bags Cement • 3.2 Million Sq.Ft Slabs",
  milestones: [
    {
      year: "1998",
      title: "Founding Depot at VKI Jaipur",
      description: "Started by Shri Rameshwar Sharma as a dedicated structural cement and building steel depot supplying early industrial projects."
    },
    {
      year: "2004",
      title: "Authorized Havells & Kajaria Tie-Up",
      description: "Became Rajasthan's primary direct-depot partner for Havells Crabtree electricals and Kajaria vitrified ceramics."
    },
    {
      year: "2012",
      title: "Jaquar & Legrand Premium Experience Hub",
      description: "Inaugurated dedicated 12,000 sq.ft spatial simulation studios for interior architects and MEP consultants."
    },
    {
      year: "2019",
      title: "35,000 Sq.Ft Centralized Logistics Depot",
      description: "Commissioned computerized weighing and hydraulic crane fleet with 14 heavy tippers for zero-delay site supply."
    },
    {
      year: "2026",
      title: "Digital Showroom & WhatsApp Estimation Portal",
      description: "Launched Rajasthan's first full-stack interactive material visualizer, 3D switch configurator, and instant WhatsApp quotation system."
    }
  ],
  infrastructureStats: [
    { label: "Central Godown Area", value: "35,000+", unit: "Sq.Ft Ready Covered Storage" },
    { label: "Heavy Logistics Fleet", value: "14", unit: "Hydra Cranes & Dedicated Tippers" },
    { label: "Active Project Partners", value: "650+", unit: "Architects, Builders & MEP Contractors" },
    { label: "Direct Factory Brands", value: "12", unit: "Authorized Depo Partnerships" },
    { label: "Ready Slab Stock", value: "85,000+", unit: "Sq.Ft Ceramic & Natural Stone" },
    { label: "Daily Bulk Dispatch", value: "450+", unit: "Metric Tons Cement & Aggregate" }
  ]
};

// --- PRESTIGIOUS LANDMARK PROJECTS SUPPLIED ---
export const LANDMARK_PROJECTS = [
  {
    id: "proj-1",
    name: "The Rajvilas Courtyard Villa",
    location: "Civil Lines, Jaipur",
    type: "Luxury Private Residence (14,000 Sq.Ft)",
    year: "2025 – 2026",
    architect: "Studio Design Associates",
    materialsSupplied: "Kajaria Eternity 800x1600mm Statuario Slabs, Legrand Arteor Smoked Glass Plates, Jaquar Artize Showers",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    badge: "Residential Milestone"
  },
  {
    id: "proj-2",
    name: "Marriott Convention Wing Expansion",
    location: "Sitapura Industrial Area, Jaipur",
    type: "Commercial Hospitality (65,000 Sq.Ft)",
    year: "2024 – 2025",
    architect: "Apex MEP Consultants",
    materialsSupplied: "Double Charge Vitrified Heavy-Traffic Tiles, Astral CPVC Pro Fire-Shield Plumbing, Havells Distribution Panels",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    badge: "Commercial Infrastructure"
  },
  {
    id: "proj-3",
    name: "The Royal Heritage Haveli Resort",
    location: "Kukas, NH-48 Jaipur",
    type: "Heritage Boutique Resort (22 Keys)",
    year: "2023 – 2024",
    architect: "Virasat Architectural Practice",
    materialsSupplied: "2,800 Bags UltraTech OPC 53 Grade, Banas River Sand, Custom Anti-Skid Rustic Ceramic Courtyard Tiles",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    badge: "Heritage Project"
  },
  {
    id: "proj-4",
    name: "Anand Prime Tower Residencies",
    location: "Mansarovar Extension, Jaipur",
    type: "High-Rise Group Housing (96 Units)",
    year: "2024 – 2026",
    architect: "Skyline Infra Developers",
    materialsSupplied: "Complete Turnkey 3BHK Modular Switch Kits, Polycab FR-LSH 90m Coils, Cera Rimless Sanitaryware",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    badge: "Turnkey Turnout"
  }
];

// --- LIVE GODOWN DISPATCH TICKER (RUNNING AD / REAL-TIME UPDATES) ---
export const LIVE_GODOWN_TICKER = [
  "🔴 LIVE VKI GODOWN: UltraTech OPC 53 Rake Loading in Progress • 1,200 Bags Cleared for Sitapura Site",
  "⚡ LEGRAND ARTEOR: 480 Pcs Diamond-Cut Smoked Glass Plates Dispatched to Civil Lines Villa",
  "🏛️ KAJARIA ETERNITY: 18,500 Sq.Ft 600x1200mm Statuario Royale Slabs Inspected & Stage-1 Packed",
  "🚿 JAQUAR ARTIZE: Fresh Batch Concealed Thermostats in Brushed Rose Gold In-Stock",
  "🚚 FLEET DISPATCH: 3 Hydraulic Tippers Banas Washed Sand En-Route to Jagatpura Highway Project",
  "🛡️ QUALITY PROTOCOL: Computerized Sieve Silt Test < 2.8% Verified on Jaipur Weighbridge #4"
];

// --- ARCHITECT & BUILDER ENDORSEMENTS ---
export const TRADE_TESTIMONIALS = [
  {
    quote: "Vishwakarma BuildMart is our default partner for all luxury residential projects. Being able to test Legrand switch plates on wall textures and share quotation lists over WhatsApp has saved us dozens of client site meetings.",
    name: "Ar. Sanjay Kothari",
    role: "Principal Architect",
    firm: "Kothari & Associates, Jaipur",
    project: "Over 40 Luxury Residences Supplied"
  },
  {
    quote: "In high-rise construction, material delay means massive financial penalty. With Vishwakarma's VKI godown stock and their own hydraulic crane fleet, UltraTech cement and Banas sand reach our site before 7 AM every morning without fail.",
    name: "Er. Mahendra Choudhary",
    role: "Project Director",
    firm: "Apex Infrastructure Group",
    project: "Sitapura Commercial Complex"
  },
  {
    quote: "The digital estimate cart and instant WhatsApp quotation format is a masterclass. No messy PDF attachments or misread SKUs. Our site supervisors simply generate the BOQ and get factory-depot rates in minutes.",
    name: "Vikram Rathore",
    role: "Managing Partner",
    firm: "Rathore Build-Con Pvt. Ltd.",
    project: "Mansarovar Prime Towers"
  }
];

