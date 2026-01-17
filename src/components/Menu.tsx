import { useState, useRef } from 'react';
import nuboFood1 from '@/assets/Nubo_Food_1.jpg';
import nuboFood2 from '@/assets/Nubo_Food_2.jpg';
import nuboBeverage from '@/assets/Nubo_Beverages.jpg';

// ====================================
// COMMENTED OUT - OLD IMPLEMENTATION
// ====================================
// import { useEffect, useRef, useState } from 'react';
// import nuboSticker from '@/assets/nubo_sticker.jpg';
//
// interface MenuItem {
//   name: string;
//   description: string;
//   price: string;
// }
//
// interface MenuCategory {
//   title: string;
//   items: MenuItem[];
// }
//
// // Color mapping for each category
// const getCategoryColor = (index: number) => {
//   const colors = [
//     'bg-lettuce', // Smoothies & Drinks
//     'bg-sunny',   // Healthy Treats
//     'bg-olive',   // Wraps & Sandwiches
//   ];
//   return colors[index] || 'bg-brand';
// };
//
// const getTextColor = (index: number) => {
//   // Sunny and lettuce are light, so use dark text. Olive is dark, so use light text
//   if (index === 1 || index === 0) return 'text-contrast';
//   return 'text-contrast-foreground';
// };
//
// const menuData: MenuCategory[] = [
//   {
//     title: 'Smoothies & Drinks',
//     items: [
//       { name: 'Green Glow', description: 'Spinach, apple, banana, chia', price: '250Rs.' },
//       { name: 'Berry Boost', description: 'Strawberries, yogurt, flax seeds', price: '250Rs.' },
//       { name: 'Coconut Calm', description: 'Coconut water, mint, lime', price: '250Rs.' },
//       { name: 'Detox Infusion', description: 'Lemon, cucumber, mint water', price: '300Rs.' },
//     ],
//   },
//   {
//     title: 'Healthy Treats',
//     items: [
//       { name: 'Oatmeal Bliss Balls', description: 'Dates, oats, peanut butter', price: '350Rs.' },
//       { name: 'Chia Pudding Jar', description: 'Almond milk, honey, seasonal fruits', price: '300Rs.' },
//       { name: 'Dark Chocolate Granola Bar', description: 'Guilt-free energy', price: '300Rs.' },
//     ],
//   },
//   {
//     title: 'Wraps & Sandwiches',
//     items: [
//       { name: 'Wholegrain Avocado Wrap', description: 'Multigrain tortilla, avocado mash, spinach, tomato, basil pesto', price: '450Rs.' },
//       { name: 'Smoky Paneer Pocket', description: 'Char-grilled paneer, bell peppers, mint yogurt sauce', price: '400Rs.' },
//       { name: 'Lean Chicken Sandwich', description: 'Grilled chicken breast, lettuce, mustard, sourdough', price: '600Rs.' },
//     ],
//   },
// ];
// ====================================
// END OF COMMENTED CODE
// ====================================

// ====================================
// COMMENTED OUT - PREVIOUS GRID IMPLEMENTATION
// ====================================
// interface MenuItem {
//   name: string;
//   description: string;
//   price: string;
//   image: string;
//   calories: string;
//   protein: string;
//   carbs: string;
//   fats: string;
// }
//
// interface MenuCategory {
//   title: string;
//   color: string;
//   items: MenuItem[];
// }
//
// const getCategoryColor = (index: number) => {
//   const colors = [
//     'bg-lettuce', // Smoothies & Drinks
//     'bg-sunny',   // Healthy Treats
//     'bg-olive',   // Wraps & Sandwiches
//   ];
//   return colors[index] || 'bg-brand';
// };
//
// const getTextColor = (index: number) => {
//   if (index === 1 || index === 0) return 'text-contrast';
//   return 'text-contrast-foreground';
// };
//
// const menuData: MenuCategory[] = [
//   {
//     title: 'Smoothies & Drinks',
//     color: 'bg-lettuce',
//     items: [
//       { name: 'Green Glow', description: 'Spinach, apple, banana, chia', price: '250Rs.', image: 'https://via.placeholder.com/300x200/90EE90/000000?text=Green+Glow', calories: 'NA', protein: 'NA', carbs: 'NA', fats: 'NA' },
//       { name: 'Berry Boost', description: 'Strawberries, yogurt, flax seeds', price: '250Rs.', image: 'https://via.placeholder.com/300x200/FFB6C1/000000?text=Berry+Boost', calories: 'NA', protein: 'NA', carbs: 'NA', fats: 'NA' },
//       { name: 'Coconut Calm', description: 'Coconut water, mint, lime', price: '250Rs.', image: 'https://via.placeholder.com/300x200/F5F5DC/000000?text=Coconut+Calm', calories: 'NA', protein: 'NA', carbs: 'NA', fats: 'NA' },
//       { name: 'Detox Infusion', description: 'Lemon, cucumber, mint water', price: '300Rs.', image: 'https://via.placeholder.com/300x200/FFFACD/000000?text=Detox+Infusion', calories: 'NA', protein: 'NA', carbs: 'NA', fats: 'NA' },
//     ],
//   },
//   {
//     title: 'Healthy Treats',
//     color: 'bg-sunny',
//     items: [
//       { name: 'Oatmeal Bliss Balls', description: 'Dates, oats, peanut butter', price: '350Rs.', image: 'https://via.placeholder.com/300x200/DEB887/000000?text=Oatmeal+Balls', calories: 'NA', protein: 'NA', carbs: 'NA', fats: 'NA' },
//       { name: 'Chia Pudding Jar', description: 'Almond milk, honey, seasonal fruits', price: '300Rs.', image: 'https://via.placeholder.com/300x200/E6E6FA/000000?text=Chia+Pudding', calories: 'NA', protein: 'NA', carbs: 'NA', fats: 'NA' },
//       { name: 'Dark Chocolate Granola Bar', description: 'Guilt-free energy', price: '300Rs.', image: 'https://via.placeholder.com/300x200/8B4513/FFFFFF?text=Granola+Bar', calories: 'NA', protein: 'NA', carbs: 'NA', fats: 'NA' },
//     ],
//   },
//   {
//     title: 'Wraps & Sandwiches',
//     color: 'bg-olive',
//     items: [
//       { name: 'Wholegrain Avocado Wrap', description: 'Multigrain tortilla, avocado mash, spinach, tomato, basil pesto', price: '450Rs.', image: 'https://via.placeholder.com/300x200/9ACD32/000000?text=Avocado+Wrap', calories: 'NA', protein: 'NA', carbs: 'NA', fats: 'NA' },
//       { name: 'Smoky Paneer Pocket', description: 'Char-grilled paneer, bell peppers, mint yogurt sauce', price: '400Rs.', image: 'https://via.placeholder.com/300x200/FFD700/000000?text=Paneer+Pocket', calories: 'NA', protein: 'NA', carbs: 'NA', fats: 'NA' },
//       { name: 'Lean Chicken Sandwich', description: 'Grilled chicken breast, lettuce, mustard, sourdough', price: '600Rs.', image: 'https://via.placeholder.com/300x200/F4A460/000000?text=Chicken+Sandwich', calories: 'NA', protein: 'NA', carbs: 'NA', fats: 'NA' },
//     ],
//   },
// ];
// ====================================
// END OF COMMENTED CODE
// ====================================

interface ZoomableImageProps {
  src: string;
  alt: string;
}

const ZoomableImage = ({ src, alt }: ZoomableImageProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [backgroundSize, setBackgroundSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !imgRef.current) return;

    const img = imgRef.current;
    const imgRect = img.getBoundingClientRect();
    
    // Calculate mouse position relative to displayed image
    const imgX = e.clientX - imgRect.left;
    const imgY = e.clientY - imgRect.top;
    
    // Ensure we're within image bounds
    if (imgX < 0 || imgX > imgRect.width || imgY < 0 || imgY > imgRect.height) {
      return;
    }
    
    // Calculate percentage position on the displayed image
    const xPercent = (imgX / imgRect.width) * 100;
    const yPercent = (imgY / imgRect.height) * 100;
    
    setMousePosition({ x: e.clientX, y: e.clientY });
    
    // Calculate zoom position for background
    const zoomLevel = 2.5;
    const magnifierSize = 250;
    const magnifierCoverage = 100 / zoomLevel; // % of zoomed image visible in magnifier
    
    // Calculate background size in pixels based on displayed image size
    const bgWidth = imgRect.width * zoomLevel;
    const bgHeight = imgRect.height * zoomLevel;
    setBackgroundSize({ width: bgWidth, height: bgHeight });
    
    // Position background so cursor is centered in magnifier
    // Convert pixel position to percentage for background-position
    const bgX = ((imgX * zoomLevel - magnifierSize / 2) / bgWidth) * 100;
    const bgY = ((imgY * zoomLevel - magnifierSize / 2) / bgHeight) * 100;
    
    setZoomPosition({ x: bgX, y: bgY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const magnifierSize = 250;
  const zoomLevel = 2.5;

  return (
    <div
      ref={containerRef}
      className="relative rounded-3xl overflow-hidden shadow-2xl cursor-zoom-in"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-auto object-contain"
      />
      {isHovering && backgroundSize.width > 0 && (
        <div
          className="fixed pointer-events-none z-50 rounded-lg overflow-hidden shadow-2xl border-4 border-white"
          style={{
            width: `${magnifierSize}px`,
            height: `${magnifierSize}px`,
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            backgroundImage: `url(${src})`,
            backgroundSize: `${backgroundSize.width}px ${backgroundSize.height}px`,
            backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
            backgroundRepeat: 'no-repeat',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
    </div>
  );
};

const Menu = () => {

  return (
    <section id="menu" className="bg-balanced overflow-hidden py-16 md:py-24">
      {/* Marquee Banner */}
      <div className="bg-brand py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="font-heading text-contrast text-2xl md:text-4xl mx-8">
              Wraps • Smoothies • Drinks • Healthy Treats •
            </span>
          ))}
        </div>
      </div>

      {/* Menu Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          {/* ====================================
              COMMENTED OUT - FOOD GRID SECTION
              ==================================== */}
          {/* <div className={`${bgColorClass} rounded-3xl p-8 md:p-12 shadow-2xl`}>
            <h3 className={`font-heading ${textColorClass} text-3xl md:text-4xl lg:text-5xl mb-8 pb-4 border-b-2 border-contrast/20`}>
              {currentCategory.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCategory.items.map((item) => (
                <div
                  key={item.name}
                  className={`${bgColorClass} rounded-2xl p-4 border-2 border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl`}
                >
                  <div className="w-full h-48 mb-4 rounded-xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex justify-between items-start mb-3">
                    <h4 className={`font-subheading ${textColorClass} text-lg md:text-xl font-bold`}>
                      {item.name}
                    </h4>
                    <span className={`font-subheading ${textColorClass} text-lg md:text-xl whitespace-nowrap ml-2`}>
                      {item.price}
                    </span>
                  </div>

                  <div className={`font-body ${textColorClass}/90 text-sm mb-3`}>
                    <span className="font-semibold">Calories:</span> {item.calories}
                  </div>

                  <div className={`font-body ${textColorClass}/80 text-xs grid grid-cols-3 gap-2`}>
                    <div>
                      <span className="font-semibold">Protein:</span><br />{item.protein}
                    </div>
                    <div>
                      <span className="font-semibold">Carbs:</span><br />{item.carbs}
                    </div>
                    <div>
                      <span className="font-semibold">Fats:</span><br />{item.fats}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-8 mt-12">
            <button
              onClick={handlePrevious}
              disabled={currentCard === 0}
              className={`flex items-center justify-center w-14 h-14 rounded-full ${
                currentCard === 0
                  ? 'bg-gray-300 cursor-not-allowed opacity-50'
                  : 'bg-brand hover:bg-brand/90 cursor-pointer'
              } transition-all duration-300 shadow-lg`}
              aria-label="Previous category"
            >
              <ChevronLeft className="w-8 h-8 text-contrast" />
            </button>

            <div className="flex gap-3">
              {menuData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCard(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentCard === index
                      ? 'bg-brand w-8'
                      : 'bg-gray-400 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to category ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentCard === menuData.length - 1}
              className={`flex items-center justify-center w-14 h-14 rounded-full ${
                currentCard === menuData.length - 1
                  ? 'bg-gray-300 cursor-not-allowed opacity-50'
                  : 'bg-brand hover:bg-brand/90 cursor-pointer'
              } transition-all duration-300 shadow-lg`}
              aria-label="Next category"
            >
              <ChevronRight className="w-8 h-8 text-contrast" />
            </button>
          </div> */}
          {/* ====================================
              END OF COMMENTED FOOD GRID SECTION
              ==================================== */}

          {/* Menu Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <ZoomableImage src={nuboFood1} alt="Nubo Food Menu 1" />
            <ZoomableImage src={nuboFood2} alt="Nubo Food Menu 2" />
            <ZoomableImage src={nuboBeverage} alt="Nubo Beverage Menu" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
