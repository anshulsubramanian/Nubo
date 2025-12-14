import { useEffect, useRef } from 'react';
import menuBanner from '@/assets/menu_banner.jpg';
import nuboSticker from '@/assets/nubo_sticker.jpg';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: 'Smoothies & Drinks',
    items: [
      { name: 'Green Glow', description: 'Spinach, apple, banana, chia', price: '250Rs.' },
      { name: 'Berry Boost', description: 'Strawberries, yogurt, flax seeds', price: '250Rs.' },
      { name: 'Coconut Calm', description: 'Coconut water, mint, lime', price: '250Rs.' },
      { name: 'Detox Infusion', description: 'Lemon, cucumber, mint water', price: '300Rs.' },
    ],
  },
  {
    title: 'Healthy Treats',
    items: [
      { name: 'Oatmeal Bliss Balls', description: 'Dates, oats, peanut butter', price: '350Rs.' },
      { name: 'Chia Pudding Jar', description: 'Almond milk, honey, seasonal fruits', price: '300Rs.' },
      { name: 'Dark Chocolate Granola Bar', description: 'Guilt-free energy', price: '300Rs.' },
    ],
  },
  {
    title: 'Wraps & Sandwiches',
    items: [
      { name: 'Wholegrain Avocado Wrap', description: 'Multigrain tortilla, avocado mash, spinach, tomato, basil pesto', price: '450Rs.' },
      { name: 'Smoky Paneer Pocket', description: 'Char-grilled paneer, bell peppers, mint yogurt sauce', price: '400Rs.' },
      { name: 'Lean Chicken Sandwich', description: 'Grilled chicken breast, lettuce, mustard, sourdough', price: '600Rs.' },
    ],
  },
];

const Menu = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="menu" ref={sectionRef} className="bg-balanced overflow-hidden">
      {/* Marquee Banner */}
      <div className="bg-brand py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="font-heading text-contrast text-2xl md:text-4xl mx-8">
              MENU • MENU • MENU • MENU •
            </span>
          ))}
        </div>
      </div>

      {/* Menu Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Menu Items - Left 2 columns */}
          <div className="lg:col-span-2 space-y-12">
            {menuData.map((category, catIndex) => (
              <div key={category.title} className="reveal" style={{ transitionDelay: `${catIndex * 0.2}s` }}>
                {/* Category Title */}
                <h3 className="font-heading text-contrast text-2xl md:text-3xl mb-6 pb-2 border-b-2 border-brand">
                  {category.title}
                </h3>

                {/* Items */}
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="menu-item bg-brand/30 rounded-xl p-4 md:p-5 flex justify-between items-start gap-4"
                    >
                      <div className="flex-1">
                        <h4 className="font-subheading text-contrast text-lg md:text-xl">
                          {item.name}
                        </h4>
                        <p className="font-body text-contrast/70 text-sm md:text-base mt-1">
                          {item.description}
                        </p>
                      </div>
                      <span className="font-subheading text-contrast text-lg md:text-xl whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sticker Image - Right column */}
          <div className="reveal hidden lg:block" style={{ transitionDelay: '0.4s' }}>
            <div className="sticky top-32">
              <img
                src={nuboSticker}
                alt="Nubo Fresh To Go stickers"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
