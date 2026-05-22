import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Instagram, Menu, X } from 'lucide-react';

export const WHATSAPP_LINK = "https://wa.me/553191422212";

export const trackEvent = (action: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action);
  }
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Atendimento Domicílio', path: '/domicilio' },
    { name: 'Massagem Corporativa', path: '/massagemcorporativa' },
    { name: 'Massageadores', path: '/massageadores' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-100 px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Brand/Logo Area with protection padding */}
        <Link to="/" className="flex items-center gap-3 group z-50 p-1">
          <div className="p-0.5 rounded-full border border-brand-200 bg-white shadow-sm transition-transform group-hover:scale-105">
            <img 
              src="/logo.jpg" 
              alt="Logo" 
              className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover" 
            />
          </div>
          <span className="font-serif text-brand-900 font-bold text-lg hidden sm:block">Bhruna Azevedo</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="text-brand-800 hover:text-brand-500 font-medium transition-colors text-base"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-brand-900 z-50 hover:bg-brand-50 rounded-lg transition-colors"
          aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-brand-100 lg:hidden overflow-hidden shadow-2xl z-40 rounded-b-2xl mt-1"
            >
              <div className="flex flex-col p-6 gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="text-brand-800 hover:text-brand-500 font-serif text-xl font-medium flex items-center justify-between border-b border-brand-50 pb-3 transition-colors group"
                    >
                      {link.name}
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="text-brand-300 group-hover:text-brand-500"
                      >
                        <X size={16} className="rotate-45" />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Background Overlay for Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-brand-900/10 backdrop-blur-sm -z-10 lg:hidden h-screen w-screen"
              style={{ top: '64px' }}
            />
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export const FadeIn = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export const Footer = () => (
  <footer className="bg-brand-900 text-brand-200 py-12 px-4 text-center md:text-left">
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-center">
      <div className="flex flex-col items-center md:items-start">
        <img 
          src="/logo.jpg" 
          alt="Bhruna Azevedo Logo" 
          className="h-16 w-16 rounded-full mb-4 border border-brand-400"
        />
        <h3 className="font-serif text-2xl text-white mb-2">Bhruna Azevedo</h3>
        <p className="text-brand-300">Estética e Bem Estar</p>
      </div>
      
      <div className="flex justify-center md:justify-center space-x-6">
        <a 
          href="https://www.instagram.com/bhrunaazevedoestetica/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-white transition-colors"
        >
          <span className="sr-only">Instagram</span>
          <Instagram className="w-6 h-6" />
        </a>
        <a 
          href={WHATSAPP_LINK} 
          onClick={() => trackEvent('whatsapp_click')}
          className="hover:text-white transition-colors"
        >
          <span className="sr-only">WhatsApp</span>
          <WhatsAppIcon className="w-6 h-6" />
        </a>
      </div>
      
      <div className="md:text-right text-sm text-brand-400">
        <p>R. Lídia, 38 - Entrada lateral - Pirajá<br/>Belo Horizonte, MG</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} Bhruna Azevedo. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

export const FloatingWhatsApp = ({ href = WHATSAPP_LINK }: { href?: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => trackEvent('whatsapp_click')}
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
    aria-label="Fale conosco no WhatsApp"
  >
    <WhatsAppIcon className="w-8 h-8" />
  </a>
);
