import heroVideo from '@/assets/nubo_hero_video.mp4';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background video */}
      <video
        autoPlay
        loop
        playsInline
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay for better button visibility */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* CTA Buttons */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-4">
        <a
          href="#menu"
          className="inline-block bg-contrast text-contrast-foreground font-subheading px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          Explore Menu
        </a>
        <a
          href="#one-percent-club"
          className="inline-block bg-olive text-contrast-foreground font-subheading px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          1% Club
        </a>
      </div>
    </section>
  );
};

export default Hero;
