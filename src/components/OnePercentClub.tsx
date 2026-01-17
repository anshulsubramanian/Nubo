import { useEffect, useRef } from 'react';

const OnePercentClub = () => {
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

  const principles = [
    {
      title: 'Soft Fitness',
      description: 'Movement that feels good, not like punishment. A morning stretch counts.',
      icon: '🌱',
    },
    {
      title: 'Aesthetic Wellness',
      description: 'Looking good and feeling good aren\'t separate goals. They\'re the same thing.',
      icon: '✨',
    },
    {
      title: 'Micro-Routines',
      description: 'Tiny habits, massive results. One bowl at a time. One day at a time.',
      icon: '💚',
    },
  ];

  return (
    <section id="one-percent-club" ref={sectionRef} className="py-20 md:py-32 bg-balanced relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-60 h-60 bg-brand/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-olive/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="reveal text-center mb-16">
            <span className="inline-block bg-brand text-contrast font-subheading text-sm px-4 py-2 rounded-full mb-6 tracking-wider">
              1% CLUB
            </span>
            <h2 className="font-heading text-contrast text-4xl md:text-5xl lg:text-6xl mb-6">
              The 1% Club Manifesto
            </h2>
            <p className="font-body text-contrast/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto italic">
              Not a diet. Not a gym cult. Just a movement of people doing 1% better, every single day.
            </p>
          </div>

          {/* Principles Grid */}
          <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="group relative bg-gradient-to-br from-white/90 to-balanced/70 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-olive/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="text-5xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-300">{principle.icon}</div>
                  <h3 className="font-heading text-contrast text-2xl md:text-3xl mb-4 text-center">
                    {principle.title}
                  </h3>
                  <p className="font-body text-contrast/70 text-base md:text-lg leading-relaxed text-center">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="reveal text-center">
            <div className="relative bg-gradient-to-br from-brand/25 via-brand/20 to-brand/15 backdrop-blur-md rounded-3xl p-12 md:p-16 border border-brand/40 shadow-2xl max-w-4xl mx-auto overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-brand/20 rounded-full blur-3xl -ml-20 -mt-20"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-olive/20 rounded-full blur-3xl -mr-20 -mb-20"></div>
              <div className="relative">
                <p className="font-heading text-contrast text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
                  1% is enough.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand to-transparent mx-auto mb-6 rounded-full"></div>
                <p className="font-subheading text-contrast text-xl md:text-2xl lg:text-3xl mb-4">
                  One bowl = 1% better.
                </p>
                <p className="font-body text-contrast/80 text-lg md:text-xl italic">
                  That's all it takes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnePercentClub;

