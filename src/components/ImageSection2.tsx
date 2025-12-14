import { useEffect, useRef } from 'react';
import image2 from '@/assets/image_2.jpg';

const ImageSection2 = () => {
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
        <div className="reveal overflow-hidden rounded-3xl">
          <img
            src={image2}
            alt="Nubo drinks and smoothies collection"
            className="w-full h-[300px] md:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageSection2;
