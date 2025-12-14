import HeroAnimation from './HeroAnimation';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-brand relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-sunny/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-10 w-60 h-60 bg-lettuce/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-olive/20 rounded-full blur-2xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <HeroAnimation />
        
        {/* Tagline */}
        <div className="text-center mt-8 space-y-4">
          <p className="font-subheading text-contrast text-lg md:text-xl tracking-widest">
            FRESH — MADE — SIMPLE.
          </p>
          <h1 className="font-heading text-contrast text-4xl md:text-6xl lg:text-7xl">
            Nourish Your Day
          </h1>
          <p className="font-body text-contrast/80 text-base md:text-lg max-w-md mx-auto">
            Wholesome bowls, wraps & smoothies crafted with love and the freshest ingredients.
          </p>
          
          {/* CTA Button */}
          <div className="pt-6">
            <a
              href="#menu"
              className="inline-block bg-contrast text-contrast-foreground font-subheading px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Explore Menu
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-contrast/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-contrast/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
