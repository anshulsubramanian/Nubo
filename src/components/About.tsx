import { useEffect, useRef } from 'react';

const About = () => {
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
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-balanced"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section label */}
          <div className="reveal">
            <span className="inline-block bg-olive text-contrast-foreground font-subheading text-sm px-4 py-2 rounded-full mb-6">
              Our Story
            </span>
          </div>

          {/* Main heading */}
          <h2 className="reveal font-heading text-contrast text-3xl md:text-5xl lg:text-6xl mb-8">
            Bowled Over by Flavour
          </h2>

          {/* Description */}
          <div className="reveal space-y-6 text-contrast/80 font-body text-lg md:text-xl leading-relaxed">
            <p>
              At <span className="text-brand font-subheading">Nubo</span>, we believe that eating healthy shouldn't mean compromising on taste. 
              Every bowl, wrap, and smoothie is a celebration of fresh, vibrant ingredients 
              sourced from local farms.
            </p>
            <p>
              Our mission is simple: bring you food that looks as good as it tastes, 
              nourishes your body, and leaves you feeling energized for whatever life throws your way.
            </p>
          </div>

          {/* Values */}
          <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: '🌱', title: 'Fresh First', desc: 'Ingredients sourced daily from local farms' },
              { icon: '💚', title: 'Made Simple', desc: 'Clean recipes, no artificial additives' },
              { icon: '✨', title: 'Good On You', desc: 'Sustainable packaging & practices' },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="font-subheading text-contrast text-xl mb-2">{value.title}</h3>
                <p className="font-body text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
