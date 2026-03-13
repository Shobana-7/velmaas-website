import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/industries', label: 'Industries' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-[72px] bg-white border-b border-gray-200 transition-shadow duration-300 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="mx-auto max-w-6xl h-full px-6 sm:px-8">
        <div className="flex h-full items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src="/logo.png" alt="Velmaas Digitech" className="h-10 w-10 object-contain" />
            <div className="leading-tight">
              <span className="text-[17px] font-bold text-gray-900">Velmaas</span>
              <span className="text-[17px] font-light text-accent"> Digitech</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex lg:items-center lg:gap-0.5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-150 ${
                  location.pathname === l.to
                    ? 'text-accent bg-blue-50'
                    : 'text-gray-600 hover:text-accent hover:bg-gray-50'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="rounded-xl gradient-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:scale-105"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setOpen(!open)} className="rounded-lg p-2 text-gray-700 lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden absolute top-[72px] left-0 right-0 bg-white border-b border-gray-200 shadow-xl animate-fade-in">
          <div className="mx-auto max-w-6xl px-6 py-5 space-y-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  location.pathname === l.to
                    ? 'bg-blue-50 text-accent'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link to="/contact" className="block rounded-xl gradient-accent px-4 py-3 text-center text-sm font-semibold text-white shadow-lg">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

