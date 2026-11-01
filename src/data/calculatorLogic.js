// Smart Site Material Calculator Logic & Formulas for Indian Construction Practices

export const TILE_SIZES = [
  { id: "600x1200", label: "600 x 1200 mm (2x4 ft) - Grand GVT Slab", sqftPerBox: 15.5, pcsPerBox: 2, tileAreaSqft: 7.75 },
  { id: "600x600", label: "600 x 600 mm (2x2 ft) - Standard Vitrified", sqftPerBox: 15.5, pcsPerBox: 4, tileAreaSqft: 3.875 },
  { id: "800x1600", label: "800 x 1600 mm (2.6x5.2 ft) - Large Format", sqftPerBox: 27.56, pcsPerBox: 2, tileAreaSqft: 13.78 },
  { id: "800x800", label: "800 x 800 mm (2.6x2.6 ft) - Double Charge", sqftPerBox: 13.78, pcsPerBox: 2, tileAreaSqft: 6.89 },
  { id: "200x1200", label: "200 x 1200 mm (8x48 inch) - Wooden Plank", sqftPerBox: 14.4, pcsPerBox: 6, tileAreaSqft: 2.4 },
  { id: "300x600", label: "300 x 600 mm (1x2 ft) - Bathroom & Kitchen Wall", sqftPerBox: 9.68, pcsPerBox: 5, tileAreaSqft: 1.936 }
];

export function calculateTiles({ lengthFt, widthFt, tileTypeId, includeSkirting, wastagePercent }) {
  const l = parseFloat(lengthFt) || 0;
  const w = parseFloat(widthFt) || 0;
  const baseArea = l * w;

  if (baseArea <= 0) {
    return {
      baseArea: 0,
      totalAreaWithWastage: 0,
      boxesRequired: 0,
      totalPcs: 0,
      adhesiveBags: 0,
      epoxyGroutBuckets: 0,
      spacerPackets: 0
    };
  }

  // Skirting adds approx 8% to total requirement (4 inches height along perimeter)
  const skirtingAddition = includeSkirting ? baseArea * 0.08 : 0;
  const areaWithSkirting = baseArea + skirtingAddition;

  // Wastage (e.g. 10%)
  const wastageRatio = (parseFloat(wastagePercent) || 10) / 100;
  const totalAreaWithWastage = areaWithSkirting * (1 + wastageRatio);

  const tileType = TILE_SIZES.find(t => t.id === tileTypeId) || TILE_SIZES[0];
  const boxesRequired = Math.ceil(totalAreaWithWastage / tileType.sqftPerBox);
  const totalPcs = boxesRequired * tileType.pcsPerBox;

  // Adhesive: 1 bag of 20kg covers ~50-55 sq.ft with 3mm notched trowel
  const adhesiveBags = Math.ceil(totalAreaWithWastage / 50);

  // Epoxy Grout: 1 unit of 5kg covers ~180-200 sq.ft for large format tiles with 2mm spacer
  const epoxyGroutBuckets = Math.max(1, Math.ceil(totalAreaWithWastage / 180));

  // Tile Spacers (pack of 100 pcs): 4 spacers per tile
  const spacerPackets = Math.max(1, Math.ceil((totalPcs * 4) / 100));

  return {
    baseArea: Math.round(baseArea * 10) / 10,
    skirtingArea: Math.round(skirtingAddition * 10) / 10,
    totalAreaWithWastage: Math.round(totalAreaWithWastage * 10) / 10,
    boxesRequired,
    totalPcs,
    adhesiveBags,
    epoxyGroutBuckets,
    spacerPackets,
    tileType
  };
}

export const BHK_PRESETS = {
  "1bhk": {
    label: "1 BHK Compact Flat (550 - 700 Sq.Ft)",
    plates2M: 4,
    plates4M: 4,
    plates6M: 3,
    plates8M: 3,
    switches16A: 8,
    switches6A: 26,
    sockets: 12,
    regulators: 2,
    mcbBox: "1x 8-Way SPN Double Door Enclosure",
    mcbCount: 6,
    wires: {
      "1.0mm": 2, // Lighting
      "1.5mm": 2, // General sockets
      "2.5mm": 2  // AC / Geyser / Power
    }
  },
  "2bhk": {
    label: "2 BHK Standard Flat (900 - 1200 Sq.Ft)",
    plates2M: 8,
    plates4M: 6,
    plates6M: 6,
    plates8M: 5,
    switches16A: 14,
    switches6A: 48,
    sockets: 18,
    regulators: 3,
    mcbBox: "1x 10-Way Double Door Distribution Board",
    mcbCount: 9,
    wires: {
      "1.0mm": 3,
      "1.5mm": 3,
      "2.5mm": 4
    }
  },
  "3bhk": {
    label: "3 BHK Premium Residence (1400 - 1900 Sq.Ft)",
    plates2M: 12,
    plates4M: 8,
    plates6M: 8,
    plates8M: 8,
    switches16A: 22,
    switches6A: 68,
    sockets: 26,
    regulators: 4,
    mcbBox: "1x 12-Way TPN Double Door Distribution Board",
    mcbCount: 14,
    wires: {
      "1.0mm": 4,
      "1.5mm": 5,
      "2.5mm": 6
    }
  },
  "villa": {
    label: "4 BHK / Luxury Duplex Villa (2400+ Sq.Ft)",
    plates2M: 18,
    plates4M: 14,
    plates6M: 12,
    plates8M: 12,
    switches16A: 36,
    switches6A: 110,
    sockets: 42,
    regulators: 6,
    mcbBox: "2x 12-Way TPN Double Door Master Panels",
    mcbCount: 22,
    wires: {
      "1.0mm": 6,
      "1.5mm": 8,
      "2.5mm": 10
    }
  }
};

export const CIVIL_WORKS = [
  {
    id: "plaster_internal",
    label: "Internal Wall Plaster (12mm Thick - 1:4 Mix)",
    cementPer100Sqft: 2.2, // 50kg bags
    sandTonsPer100Sqft: 0.38,
    waterproofingLitersPer100Sqft: 0.44
  },
  {
    id: "plaster_external",
    label: "External Weather Plaster (20mm Double Coat - 1:4 Mix)",
    cementPer100Sqft: 3.5,
    sandTonsPer100Sqft: 0.58,
    waterproofingLitersPer100Sqft: 0.70
  },
  {
    id: "flooring_pcc",
    label: "Flooring Bedding PCC (75mm / 3-inch Base - 1:3:6 Mix)",
    cementPer100Sqft: 5.8,
    sandTonsPer100Sqft: 1.15,
    gittiTonsPer100Sqft: 2.30,
    waterproofingLitersPer100Sqft: 0
  },
  {
    id: "roof_rcc",
    label: "Roof Slab RCC Casting (125mm / 5-inch M20 Grade - 1:1.5:3)",
    cementPer100Sqft: 11.2,
    sandTonsPer100Sqft: 1.85,
    gittiTonsPer100Sqft: 3.60,
    waterproofingLitersPer100Sqft: 2.24
  }
];

export function calculateCivilMaterials({ areaSqft, workTypeId }) {
  const area = parseFloat(areaSqft) || 0;
  if (area <= 0) {
    return {
      area: 0,
      cementBags: 0,
      sandTons: 0,
      sandTrolleys: 0,
      gittiTons: 0,
      gittiTrolleys: 0,
      waterproofingLiters: 0
    };
  }

  const work = CIVIL_WORKS.find(w => w.id === workTypeId) || CIVIL_WORKS[0];
  const factor = area / 100;

  const cementBags = Math.ceil(work.cementPer100Sqft * factor);
  const sandTons = Math.round(work.sandTonsPer100Sqft * factor * 10) / 10;
  // 1 Tractor trolley is approximately 3.6 Metric Tons
  const sandTrolleys = Math.max(1, Math.ceil(sandTons / 3.6));

  const gittiTons = work.gittiTonsPer100Sqft ? Math.round(work.gittiTonsPer100Sqft * factor * 10) / 10 : 0;
  const gittiTrolleys = gittiTons > 0 ? Math.max(1, Math.ceil(gittiTons / 3.8)) : 0;

  const waterproofingLiters = work.waterproofingLitersPer100Sqft 
    ? Math.round(work.waterproofingLitersPer100Sqft * factor * 10) / 10 
    : 0;

  return {
    area,
    work,
    cementBags,
    sandTons,
    sandTrolleys,
    gittiTons,
    gittiTrolleys,
    waterproofingLiters
  };
}
