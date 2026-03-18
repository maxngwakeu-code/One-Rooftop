import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expérience', href: '#experience' },
    { name: 'Menu', href: '#menu' },
    { name: 'Galerie', href: '#galerie' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold text-white tracking-wider">
          ONE <span className="text-[var(--color-gold-400)]">ROOFTOP</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-[var(--color-gold-400)] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/237600000000?text=Bonjour,%20je%20souhaite%20réserver%20une%20table%20chez%20One%20Rooftop"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-[var(--color-gold-400)] text-[var(--color-gold-400)] hover:bg-[var(--color-gold-400)] hover:text-black transition-all uppercase text-sm tracking-widest font-medium"
          >
            Réserver
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg py-6 flex flex-col items-center space-y-6 md:hidden border-t border-white/10"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg uppercase tracking-widest text-gray-300 hover:text-[var(--color-gold-400)] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/237600000000?text=Bonjour,%20je%20souhaite%20réserver%20une%20table%20chez%20One%20Rooftop"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-8 py-3 bg-[var(--color-gold-400)] text-black uppercase text-sm tracking-widest font-bold w-3/4 text-center"
          >
            Réserver maintenant
          </a>
        </motion.div>
      )}
    </nav>
  );
}
