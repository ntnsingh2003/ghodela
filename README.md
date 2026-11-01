# GHODELA — Architectural Surfaces & Living

[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, high-performance digital showroom web application prototype designed for architects, interior designers, MEP consultants, and builders. Replaces heavy 50MB PDF catalogues and fragmented WhatsApp photo threads with an instant, interactive, mobile-responsive material visualizer.

---

## 🏛️ Key Features

- **Luxury Brand Reveal**: Minimalist, cinematic intro splash screen featuring the signature monogram emblem and refined typography.
- **4 Core Architectural Verticals**:
  - **Modular Switches & Automation**: Toughened crystal glass plates, 16A rockers, smart WiFi/Zigbee modules, and architectural downlights.
  - **Surfaces & Vitrified Slabs**: Italian Statuario Royale, large format GVT slabs (600x1200mm & 800x1600mm), natural teak wood planks, and Rajasthan black galaxy granite.
  - **Bath Concepts & Sanitaryware**: Rimless tornado western commodes, concealed single-lever thermostatic diverters, stainless rain showers, and countertop designer basins.
  - **Structural & Civil Supplies**: UltraTech OPC 53 Grade cement, legal Banas river washed sand, crushed granite aggregates, and heavy CPVC plumbing lines.
- **Pinpoint Interactive Spaces**: Interactive room visualizers (Bathroom, Living Room, Kitchen, Civil Site) with hotspot markers mapped accurately to real architectural fixtures.
- **Cinematic Video Motion Reels**: Looping architectural video showcases for villa living, marble surfaces, waterfall showers, and chef kitchens with a modal player.
- **Before / After Transformation Slider**: Interactive draggable slider comparing bare civil structure to completed architectural luxury.
- **Authorized Brand Partners**: Official vector SVG logos for direct depot partners including Legrand, Kajaria, Jaquar, Kohler, Schneider Electric, Havells, UltraTech Cement, Somany, Cera, Astral Pipes, Polycab, and Ambuja.
- **3D Visualizer Studio**: Live switch plate configurator against customizable wall finishes and tile laying pattern simulator (Straight Grid, Brick Bond, 45° Herringbone).
- **BOQ Estimator**: Accurate quantity calculators for floor tiles & adhesive, full-house electrical wiring (1BHK to 4BHK), and structural concrete/plaster.
- **Quotation Cart & WhatsApp Desk**: Real-time quotation shortlisting with direct WhatsApp export and printable estimate slips.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Visuals**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Typography**: Plus Jakarta Sans, Playfair Display, JetBrains Mono

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm`, `pnpm`, or `yarn`

### Installation

```bash
# Clone the repository
git clone https://github.com/ntnsingh2003/ghodela.git

# Navigate into project directory
cd ghodela

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build & Preview

```bash
# Compile optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
├── public/                 # Static assets & favicon
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── GhodelaIntroSplash.jsx     # Luxury brand splash screen
│   │   ├── BrandLogosSection.jsx      # Official partner SVG logos
│   │   ├── ArchitecturalVideoReel.jsx # Cinematic motion reels
│   │   ├── BeforeAfterSlider.jsx      # Interactive comparison slider
│   │   ├── PromotionalAdShowcase.jsx  # Carousel showcase
│   │   ├── LandmarkProjectsSection.jsx# Portfolio cards
│   │   ├── ProductVisual.jsx          # Realistic product photo & switch physics
│   │   ├── EstimateCartDrawer.jsx     # Quotation drawer
│   │   ├── Navbar.jsx                 # Header & search
│   │   └── MobileBottomNav.jsx        # Mobile dock
│   ├── data/
│   │   ├── mockData.js        # Products, spaces, brands & specifications
│   │   └── calculatorLogic.js # CPWD & trade estimation formulas
│   ├── views/
│   │   ├── ShowroomHomeView.jsx       # Digital showroom landing page
│   │   ├── CatalogueView.jsx          # Filterable collections grid
│   │   ├── VisualizerStudioView.jsx   # 3D switch & tile visualizer
│   │   ├── LookbooksView.jsx          # Curated architectural collections
│   │   ├── CalculatorView.jsx         # Site material quantity estimator
│   │   └── TraderQuickShareView.jsx   # Instant WhatsApp quotation share
│   ├── App.jsx             # Main application container
│   ├── index.css           # Global typography & smooth scroll styles
│   └── main.jsx            # Application entry point
├── package.json
└── vite.config.js
```

---

## 📄 License

Private & Proprietary — Developed for GHODELA Architectural Surfaces & Living.
