import { useState, useEffect } from 'react';
import mainLogo from '@/assets/main_logo.jpg';

const ingredients = [
  { id: 1, emoji: '🥬', name: 'Lettuce', delay: '0s' },
  { id: 2, emoji: '🥦', name: 'Broccoli', delay: '0.3s' },
  { id: 3, emoji: '🌽', name: 'Corn', delay: '0.6s' },
  { id: 4, emoji: '🍗', name: 'Chicken', delay: '0.9s' },
  { id: 5, emoji: '🧅', name: 'Onion', delay: '1.2s' },
  { id: 6, emoji: '🍅', name: 'Tomato', delay: '1.5s' },
];

const HeroAnimation = () => {
  const [animationPhase, setAnimationPhase] = useState<'falling' | 'complete'>('falling');

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationPhase('complete');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Hexagonal Bowl Container */}
      <div className="relative">
        {/* Bowl SVG */}
        <svg
          viewBox="0 0 300 260"
          className="w-64 h-56 md:w-80 md:h-72"
        >
          {/* Bowl shape - hexagonal */}
          <polygon
            points="150,10 280,75 280,185 150,250 20,185 20,75"
            fill="white"
            stroke="hsl(0, 0%, 90%)"
            strokeWidth="3"
          />
          {/* Inner shadow */}
          <polygon
            points="150,30 260,85 260,175 150,230 40,175 40,85"
            fill="hsl(0, 0%, 98%)"
          />
        </svg>

        {/* Falling Ingredients */}
        {animationPhase === 'falling' && (
          <div className="absolute inset-0 pointer-events-none">
            {ingredients.map((ingredient) => (
              <div
                key={ingredient.id}
                className="absolute animate-fall text-4xl md:text-5xl"
                style={{
                  left: `${20 + (ingredient.id * 10)}%`,
                  animationDelay: ingredient.delay,
                  animationFillMode: 'forwards',
                }}
              >
                {ingredient.emoji}
              </div>
            ))}
          </div>
        )}

        {/* Ingredients in bowl (after animation) */}
        {animationPhase === 'complete' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-wrap justify-center gap-1 p-8 max-w-[200px]">
              {ingredients.map((ingredient, index) => (
                <span
                  key={ingredient.id}
                  className="text-2xl md:text-3xl animate-bounce-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {ingredient.emoji}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Logo reveal after animation */}
      {animationPhase === 'complete' && (
        <div
          className="absolute bottom-8 animate-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          <img
            src={mainLogo}
            alt="Nubo - Fresh Made Simple"
            className="h-16 md:h-24 object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default HeroAnimation;
