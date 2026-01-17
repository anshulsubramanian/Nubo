import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav shadow-lg rounded-full px-6 py-3'
          : 'bg-transparent px-6 py-4'
      }`}
    >
      <div className="flex items-center gap-8">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#hero')}
          className="font-heading text-xl text-contrast font-bold tracking-tight"
        >
          nubo
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNavClick(item.href)}
                className="nav-link font-subheading text-sm text-contrast hover:text-brand-foreground transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
          {/* 1% Club Button */}
          <li>
            <button
              onClick={() => handleNavClick('#one-percent-club')}
              className="bg-olive text-contrast-foreground font-subheading text-sm px-4 py-2 rounded-full hover:bg-olive/90 transition-colors shadow-md"
            >
              1% Club
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-contrast p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 glass-nav rounded-2xl p-4 shadow-lg">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left font-subheading text-contrast py-2 px-4 hover:bg-brand/20 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
            {/* 1% Club Button - Mobile */}
            <li>
              <button
                onClick={() => handleNavClick('#one-percent-club')}
                className="block w-full text-center bg-olive text-contrast-foreground font-subheading py-2 px-4 rounded-lg hover:bg-olive/90 transition-colors shadow-md"
              >
                1% Club
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
