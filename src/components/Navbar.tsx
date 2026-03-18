import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { useQuote } from '../context/QuoteContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { totalItems, togglePanel } = useQuote();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['categorias', 'ofertas', 'catalogo', 'nosotros', 'contacto'];
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Inicio', href: '#', id: '' },
    { label: 'Categorías', href: '#categorias', id: 'categorias' },
    { label: 'Ofertas', href: '#ofertas', id: 'ofertas' },
    { label: 'Catálogo', href: '#catalogo', id: 'catalogo' },
    { label: 'Contacto', href: '#contacto', id: 'contacto' },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-m">M</span>
          <span className="navbar__logo-text">entol</span>
          <span className="navbar__logo-sub">ELECTRO MUEBLES DELUXE</span>
        </a>

        {/* Desktop links */}
        <div className="navbar__links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="navbar__actions">
          <button
            className="navbar__cart-btn"
            onClick={togglePanel}
            aria-label={`Cotización: ${totalItems} productos`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {totalItems > 0 && (
              <motion.span
                className="navbar__cart-badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                key={totalItems}
              >
                {totalItems}
              </motion.span>
            )}
          </button>
          <MagneticButton
            href="https://wa.me/18494731483"
            className="btn-primary navbar__cta"
          >
            Cotizar
          </MagneticButton>
        </div>

        {/* Mobile hamburger */}
        <div className="navbar__mobile-actions">
          <button
            className="navbar__cart-btn"
            onClick={togglePanel}
            aria-label={`Cotización: ${totalItems} productos`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {totalItems > 0 && (
              <span className="navbar__cart-badge">{totalItems}</span>
            )}
          </button>
          <button
            className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          className="navbar__mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/18494731483"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary navbar__mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Pedir Cotización
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
