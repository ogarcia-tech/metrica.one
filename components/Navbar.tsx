
import React, { useState } from 'react';
import { Menu, X, ChevronRight, Hexagon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'LA CONSULTORA', href: '#inicio' },
    { name: 'ARQUITECTURA 3.0', href: '#versiones' },
    { name: 'LOS VASALLOS', href: '#equipo' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-9 z-40 w-full bg-brand-black/90 backdrop-blur-lg border-b border-brand-border h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="flex items-center gap-3 group"
        >
          <img src="/logo-metrica.png" alt="Metrica.one Logo" className="h-12 md:h-16 w-auto object-contain" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[11px] font-mono font-bold text-brand-white/60 hover:text-brand-cyan transition-colors tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href="#cta-final"
            onClick={(e) => handleNavClick(e, '#cta-final')}
            className="flex items-center gap-2 bg-brand-white/5 border border-brand-orange/50 text-brand-orange px-5 py-2 font-mono text-xs font-bold uppercase hover:bg-brand-orange hover:text-brand-black transition-all clip-path-tech"
          >
            Reserva sesión
            <ChevronRight size={14} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-brand-white hover:text-brand-orange transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-brand-charcoal border-b border-brand-border absolute w-full left-0 top-20 p-6 space-y-4 shadow-2xl animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-brand-white font-mono hover:text-brand-cyan py-3 border-b border-brand-white/5"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#cta-final"
            onClick={(e) => handleNavClick(e, '#cta-final')}
            className="block w-full mt-6 bg-brand-orange text-brand-black py-4 font-bold uppercase text-center font-mono text-sm clip-path-tech"
          >
            Reserva sesión
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
