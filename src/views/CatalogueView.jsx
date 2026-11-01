import React, { useState, useMemo } from 'react';
import { 
  Layers, 
  Search, 
  Filter, 
  Share2, 
  Eye, 
  ShoppingBag, 
  Plus, 
  Minus, 
  Check, 
  SlidersHorizontal,
  Sparkles,
  ArrowRight,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/mockData';
import ProductVisual from '../components/ProductVisual';

export default function CatalogueView({ 
  initialCategory = "all", 
  initialSubCategory = "all",
  initialSearch = "",
  onOpenProductSpecs, 
  onAddToCart,
  onShowToast
}) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSubCategory, setSelectedSubCategory] = useState(initialSubCategory);
  const [selectedApplication, setSelectedApplication] = useState("all");
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortBy, setSortBy] = useState("popular");
  
  // Track selected finish per product card: { [productId]: finishObject }
  const [cardFinishes, setCardFinishes] = useState({});
  // Track quantity per product card: { [productId]: number }
  const [cardQuantities, setCardQuantities] = useState({});

  // Dynamic sub-categories based on selected category
  const availableSubCategories = useMemo(() => {
    if (selectedCategory === "all") return [];
    const cat = CATEGORIES.find(c => c.id === selectedCategory);
    return cat ? cat.subCategories : [];
  }, [selectedCategory]);

  // Filtered products logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      // Category filter
      if (selectedCategory !== "all" && product.category !== selectedCategory) {
        return false;
      }
      // Sub-category filter
      if (selectedSubCategory !== "all" && selectedSubCategory !== "All Sub-Categories" && product.subCategory !== selectedSubCategory) {
        return false;
      }
      // Application filter
      if (selectedApplication !== "all" && (!product.applications || !product.applications.includes(selectedApplication))) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesSku = product.sku.toLowerCase().includes(query);
        const matchesSub = product.subCategory.toLowerCase().includes(query);
        if (!matchesName && !matchesBrand && !matchesSku && !matchesSub) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "popular") {
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      }
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }, [selectedCategory, selectedSubCategory, selectedApplication, searchQuery, sortBy]);

  const handleFinishChange = (productId, finish) => {
    setCardFinishes(prev => ({ ...prev, [productId]: finish }));
  };

  const handleQuantityChange = (productId, qty) => {
    setCardQuantities(prev => ({ ...prev, [productId]: Math.max(1, qty) }));
  };

  const handleCardAddToCart = (product) => {
    const finish = cardFinishes[product.id] || (product.finishes && product.finishes[0]) || { name: 'Standard' };
    const quantity = cardQuantities[product.id] || 1;

    onAddToCart({
      product,
      quantity,
      finish: finish.name,
      unit: product.unit
    });

    if (onShowToast) {
      onShowToast({
        type: "success",
        title: "Added to Estimate",
        message: `${quantity} ${product.unit} of ${product.name} (${finish.name}) added to quotation cart.`
      });
    }
  };

  const handleShareProduct = (product) => {
    const finish = cardFinishes[product.id] || (product.finishes && product.finishes[0]) || { name: 'Standard' };
    const text = `Namaste! Check out this item from Ghodela:\n\n*${product.name}*\nBrand: ${product.brand}\nSKU: ${product.sku}\nFinish: ${finish.name}\nSpecs: ${product.dimensionsUnit}\n\nExplore interactive digital catalogue: ${window.location.origin}/?tab=catalogue&product=${product.id}`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      if (onShowToast) {
        onShowToast({
          type: "info",
          title: "WhatsApp Share Link Ready",
          message: `Quotation link for ${product.sku} copied to clipboard!`
        });
      }
    }
  };

  return (
    <div className="content-container py-8 space-y-8 pb-24">
      
      {/* Page Header */}
      <div className="flex items-center justify-between border-b border-stone-200 pb-4">
        <div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight">
            COLLECTIONS.
          </h1>
        </div>

        {/* Live Filter Counter */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-stone-500">
            <strong className="text-stone-900 font-bold">{filteredProducts.length}</strong> items
          </span>
        </div>
      </div>

      {/* Main Category Horizontal Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        <button
          onClick={() => {
            setSelectedCategory("all");
            setSelectedSubCategory("all");
          }}
          className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
            selectedCategory === "all"
              ? "bg-[#181816] text-white border-stone-900 shadow-md"
              : "bg-white text-stone-800 border-stone-200 hover:border-stone-400"
          }`}
        >
          <span className="text-[10px] font-mono block opacity-70">Complete Range</span>
          <span className="font-display font-bold text-xs sm:text-sm block mt-0.5">All Verticals</span>
        </button>

        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setSelectedSubCategory("all");
              }}
              className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                isActive
                  ? "bg-[#C85A32] text-white border-[#C85A32] shadow-md"
                  : "bg-white text-stone-800 border-stone-200 hover:border-stone-400"
              }`}
            >
              <span className="text-[10px] font-mono block opacity-80 uppercase">
                {cat.id}
              </span>
              <span className="font-display font-bold text-xs sm:text-sm block mt-0.5 truncate">
                {cat.shortTitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Sub-Category Pills & Filters */}
      <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs space-y-4">
        
        {/* Sub-Category Pills (If a category is selected) */}
        {availableSubCategories.length > 0 && (
          <div className="space-y-1.5 border-b border-stone-100 pb-3">
            <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
              Sub-Category Focus:
            </span>
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {availableSubCategories.map((sub, i) => {
                const isSubActive = selectedSubCategory === sub || (sub === "All Sub-Categories" && selectedSubCategory === "all");
                return (
                  <button
                    key={i}
                    onClick={() => setSelectedSubCategory(sub === "All Sub-Categories" ? "all" : sub)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer shrink-0 ${
                      isSubActive
                        ? "bg-[#181816] text-white font-semibold shadow-xs"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    {sub}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Search, Application & Sorting Filter Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          {/* Search Box */}
          <div className="flex-1 min-w-[240px] max-w-md">
            <div className="relative flex items-center bg-stone-50 border border-stone-300 rounded-xl px-3 py-2">
              <Search className="w-4 h-4 text-stone-400 mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Filter by SKU, brand (Legrand, Kajaria), size..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-xs text-stone-800 focus:outline-hidden"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="text-stone-400 hover:text-stone-600 text-xs font-mono">
                  Clear
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Application Filter */}
            <div className="flex items-center gap-1.5 bg-stone-50 border border-stone-300 rounded-xl px-2.5 py-1.5 text-xs text-stone-700">
              <span className="text-[10px] font-mono text-stone-500 uppercase">Application:</span>
              <select
                value={selectedApplication}
                onChange={(e) => setSelectedApplication(e.target.value)}
                className="bg-transparent font-medium text-stone-800 focus:outline-hidden text-xs cursor-pointer"
              >
                <option value="all">All Spaces</option>
                <option value="Master Bedroom">Master Bedroom</option>
                <option value="Luxury Living Room">Living Room</option>
                <option value="Modular Kitchen Counter">Kitchen</option>
                <option value="Master Bathroom">Bathroom</option>
                <option value="RCC Roof Slabs">Civil / Site</option>
              </select>
            </div>

            {/* Sorting */}
            <div className="flex items-center gap-1.5 bg-stone-50 border border-stone-300 rounded-xl px-2.5 py-1.5 text-xs text-stone-700">
              <span className="text-[10px] font-mono text-stone-500 uppercase">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent font-medium text-stone-800 focus:outline-hidden text-xs cursor-pointer"
              >
                <option value="popular">Bestsellers & Architects Choice</option>
                <option value="name">Product Title (A-Z)</option>
              </select>
            </div>
          </div>
        </div>

      </div>

      {/* Product Cards Grid (28 Realistic Items) */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-stone-200 p-8 space-y-3">
          <Layers className="w-12 h-12 text-stone-300 mx-auto" />
          <h3 className="font-display font-bold text-lg text-stone-800">
            No products match the selected criteria
          </h3>
          <p className="text-xs text-stone-500 max-w-sm mx-auto">
            Try resetting your search query or switching to "All Verticals" to view full warehouse inventory.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSelectedSubCategory("all");
              setSearchQuery("");
              setSelectedApplication("all");
            }}
            className="px-4 py-2 bg-[#C85A32] text-white text-xs font-semibold rounded-lg hover:bg-[#A44522]"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {filteredProducts.map((product) => {
            const activeFinish = cardFinishes[product.id] || (product.finishes && product.finishes[0]);
            const quantity = cardQuantities[product.id] || 1;

            return (
              <div
                key={product.id}
                className="luxury-card card-3d-tilt rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-[#C85A32] shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  {/* Top Product Visual Preview */}
                  <div className="relative">
                    <ProductVisual 
                      product={product} 
                      activeFinish={activeFinish} 
                      size="md" 
                    />

                    {/* Bestseller Badge */}
                    {product.bestsellerBadge && (
                      <span className="absolute top-2.5 left-2.5 text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#B08D57] text-white font-bold tracking-wider uppercase shadow-xs">
                        {product.bestsellerBadge}
                      </span>
                    )}

                    {/* Quick Specs Trigger */}
                    <button
                      onClick={() => onOpenProductSpecs(product)}
                      className="absolute top-2.5 right-2.5 p-1.5 bg-black/60 hover:bg-black text-white rounded-full backdrop-blur-xs transition-colors"
                      title="Inspect full technical specs"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Card Info Body - Minimal & Visual */}
                  <div className="p-4 space-y-2.5">
                    
                    {/* Brand */}
                    <div className="text-xs font-mono font-bold text-[#C85A32]">
                      {product.brand}
                    </div>

                    {/* Product Title */}
                    <h3 
                      onClick={() => onOpenProductSpecs(product)}
                      className="font-display font-extrabold text-sm text-stone-900 group-hover:text-[#C85A32] transition-colors leading-snug cursor-pointer line-clamp-1"
                    >
                      {product.name}
                    </h3>

                    {/* Interactive Finish Swatches */}
                    {product.finishes && product.finishes.length > 1 && (
                      <div className="flex items-center gap-1.5 pt-1">
                        {product.finishes.map((f, i) => (
                          <button
                            key={i}
                            onClick={() => handleFinishChange(product.id, f)}
                            className={`w-4 h-4 rounded-full border transition-all cursor-pointer ${
                              activeFinish && activeFinish.name === f.name
                                ? 'ring-2 ring-[#C85A32] scale-110 border-white'
                                : 'border-stone-400 opacity-75 hover:opacity-100'
                            }`}
                            style={{ backgroundColor: f.colorCode || '#888' }}
                            title={f.name}
                          />
                        ))}
                      </div>
                    )}

                    {/* Rate */}
                    <div className="pt-2 border-t border-stone-100 text-xs font-mono font-bold text-stone-900">
                      {product.rateEstimateRange}
                    </div>

                  </div>
                </div>

                {/* Card Bottom Actions */}
                <div className="p-4 pt-0 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-stone-300 rounded-lg overflow-hidden bg-white">
                      <button
                        onClick={() => handleQuantityChange(product.id, quantity - 1)}
                        className="p-1 text-stone-500 hover:bg-stone-100"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 font-mono text-xs font-bold text-stone-900 min-w-6 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(product.id, quantity + 1)}
                        className="p-1 text-stone-500 hover:bg-stone-100"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="text-[11px] font-mono text-stone-500 shrink-0">
                      {product.unit}
                    </span>

                    {/* Share Button */}
                    <button
                      onClick={() => handleShareProduct(product)}
                      className="p-1.5 text-stone-400 hover:text-emerald-700 rounded-md hover:bg-emerald-50 transition-colors ml-auto"
                      title="Copy WhatsApp share link for this item"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Add to Estimate List Button */}
                  <button
                    onClick={() => handleCardAddToCart(product)}
                    className="w-full py-2 px-3 bg-[#181816] hover:bg-[#C85A32] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Estimate List</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
