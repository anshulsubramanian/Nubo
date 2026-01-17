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

          {/* Philosophy Motto */}
          <div className="reveal mt-16 mb-16">
            <div className="relative max-w-3xl mx-auto">
              <div className="relative bg-gradient-to-br from-brand/15 via-brand/10 to-balanced/20 backdrop-blur-sm border-l-4 border-brand p-8 md:p-12 rounded-3xl shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="relative">
                  <p className="font-subheading text-brand text-sm md:text-base uppercase tracking-wider mb-4">
                    Our Philosophy
                  </p>
                  <blockquote className="space-y-4">
                    <p className="font-heading text-contrast text-2xl md:text-3xl lg:text-4xl leading-tight">
                      <span className="text-brand">Nubo</span> is built on this truth:
                    </p>
                    <p className="font-body text-contrast/90 text-xl md:text-2xl lg:text-3xl leading-relaxed italic">
                      Better doesn't have to be big.
                    </p>
                    <p className="font-body text-contrast/80 text-lg md:text-xl lg:text-2xl leading-relaxed">
                      Better can be small, simple, delicious, and
                    </p>
                    <p className="font-body text-contrast/80 text-lg md:text-xl lg:text-2xl leading-relaxed">
                      aesthetic.
                    </p>
                  </blockquote>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-olive/20 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-sunny/20 rounded-full blur-2xl -z-10" />
            </div>
          </div>

          {/* Values */}
          <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: '🌱', title: 'Fresh First', desc: 'Ingredients sourced daily from local farms', hoverColor: 'bg-lettuce/5' },
              { icon: '💚', title: 'Made Simple', desc: 'Clean recipes, no artificial additives', hoverColor: 'bg-olive/5' },
              { icon: '✨', title: 'Good On You', desc: 'Sustainable packaging & practices', hoverColor: 'bg-sunny/5' },
            ].map((value) => (
              <div
                key={value.title}
                className="group relative bg-gradient-to-br from-white/90 to-balanced/60 backdrop-blur-sm p-6 rounded-2xl border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.hoverColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative">
                  <span className="text-4xl mb-4 block">{value.icon}</span>
                  <h3 className="font-subheading text-contrast text-xl mb-2">{value.title}</h3>
                  <p className="font-body text-contrast/70">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
