import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavItem {
  name: string;
  path: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    name: 'Serviços',
    path: '#',
    children: [
      { name: 'Drenagem Linfática', path: '/drenagem' },
      { name: 'Massoterapia', path: '/' },
      { name: 'Ventosaterapia', path: '/ventosa' },
      { name: 'Taping', path: '/' },
      { name: 'Atendimento a Domicílio', path: '/domicilio' },
      { name: 'Manicure/Pedicure', path: '/manicure' },
      { name: 'Design de Sobrancelhas', path: '/' },
      { name: 'Nutrição', path: '/' },
      { name: 'Psicologia', path: '/psicologia' },
      { name: 'Manta Detox', path: '/manta' },
    ]
  },
  {
    name: 'Atendimento Remoto',
    path: '#',
    children: [
      { name: 'Nutricionista', path: '/' },
      { name: 'Terapia', path: '/terapiaonline' },
    ]
  }
];

export const Navbar = ({ title = "Bhruna Azevedo" }: { title?: string }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  const isActive = useCallback((path: string) => {
    if (path === '#' || path === '/') return false;
    return location.pathname === path;
  }, [location.pathname]);

  const handleDropdownEnter = useCallback((name: string) => {
    setOpenDropdown(name);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    setOpenDropdown(null);
  }, []);

  const toggleAccordion = useCallback((name: string) => {
    setExpandedAccordion(prev => prev === name ? null : name);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileOpen(false);
    setExpandedAccordion(null);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname, closeMobileMenu]);

  const renderDropdown = (item: NavItem) => {
    const isOpen = openDropdown === item.name;
    return (
      <div
        key={item.name}
        className="relative"
        onMouseEnter={() => handleDropdownEnter(item.name)}
        onMouseLeave={handleDropdownLeave}
      >
        <button
          className="flex items-center gap-1.5 text-brand-800 hover:text-brand-500 font-medium transition-colors text-base"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {item.name}
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-brand-100 min-w-[240px] py-2 z-50"
            >
              {item.children?.map((child) => (
                <Link
                  key={child.path}
                  to={child.path}
                  onClick={() => setOpenDropdown(null)}
                  className={`block px-4 py-2.5 text-sm transition-colors ${
                    isActive(child.path)
                      ? 'text-brand-500 bg-brand-50 font-semibold'
                      : 'text-brand-700 hover:text-brand-500 hover:bg-brand-50'
                  }`}
                >
                  {child.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const renderAccordion = (item: NavItem) => {
    const isExpanded = expandedAccordion === item.name;
    return (
      <div key={item.name} className="border-b border-brand-100 last:border-b-0">
        <button
          onClick={() => toggleAccordion(item.name)}
          className="w-full flex items-center justify-between py-4 px-2 text-left text-brand-800 font-serif text-xl font-medium hover:text-brand-500 transition-colors"
          aria-expanded={isExpanded}
        >
          {item.name}
          <ChevronDown
            size={20}
            className={`transition-transform duration-300 text-brand-400 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </button>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pb-4 pl-4">
                {item.children?.map((child) => (
                  <Link
                    key={child.path}
                    to={child.path}
                    onClick={closeMobileMenu}
                    className={`block py-2.5 pl-4 text-base transition-colors border-l-2 ${
                      isActive(child.path)
                        ? 'text-brand-500 border-brand-500 font-semibold'
                        : 'text-brand-700 hover:text-brand-500 border-brand-100 hover:border-brand-300'
                    }`}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-100 px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Brand/Logo */}
        <Link to="/" className="flex items-center gap-3 group z-50 p-1">
          <div className="p-0.5 rounded-full border border-brand-200 bg-white shadow-sm transition-transform group-hover:scale-105">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover"
            />
          </div>
          <span className="font-serif text-brand-900 font-bold text-lg hidden sm:block">{title}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => renderDropdown(item))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden p-2 text-brand-900 z-50 hover:bg-brand-50 rounded-lg transition-colors"
          aria-label={isMobileOpen ? "Fechar Menu" : "Abrir Menu"}
        >
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-brand-100 lg:hidden overflow-hidden shadow-2xl z-40 rounded-b-2xl mt-1"
            >
              <div className="p-4">
                {navItems.map((item) => renderAccordion(item))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Background Overlay for Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-brand-900/10 backdrop-blur-sm -z-10 lg:hidden h-screen w-screen"
              style={{ top: '64px' }}
            />
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
