import { useEffect, useRef } from 'react';
import saladBowl from '@/assets/salad_bowl.jpg';
import menuImage from '@/assets/menu_image.jpg';

const ImageSection1 = () => {
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
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-8 md:py-16 bg-balanced">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Left Image */}
          <div className="reveal overflow-hidden rounded-3xl">
            <img
              src={saladBowl}
              alt="Fresh Nubo salad bowl with colorful ingredients"
              className="w-full h-[300px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right Image */}
          <div className="reveal overflow-hidden rounded-3xl" style={{ transitionDelay: '0.2s' }}>
            <img
              src={menuImage}
              alt="Matcha drink with fresh ingredients"
              className="w-full h-[300px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection1;
