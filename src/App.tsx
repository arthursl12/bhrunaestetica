/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Routes, Route, Link } from 'react-router-dom';
import { 
  Droplets, 
  Activity, 
  Wind, 
  Flame, 
  Heart, 
  Thermometer,
  UserCheck,
  Award,
  MapPin,
  Coffee,
  Instagram,
  Sparkles,
  Calendar,
  Building2,
  Users,
  Clock,
  Briefcase,
  CheckCircle2,
  HelpCircle,
  FileText,
  Truck,
  ShieldCheck,
  MessageSquare,
  AlertCircle,
  TrendingUp,
  Smile,
  Zap,
  ChevronDown
} from 'lucide-react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const trackEvent = (action: string, category: string, label: string) => {
  if (typeof window.gtag === 'function') {
    // window.gtag('event', action, {
    //   'event_category': category,
    //   'event_label': label
    // });
    window.gtag('event', action);
  }
};

const WHATSAPP_LINK = "https://wa.me/553191422212";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-100 px-4 py-3">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2 group">
        <img src="/logo.jpg" alt="Logo" className="h-10 w-10 rounded-full border border-brand-200 transition-transform group-hover:scale-110" />
        <span className="font-serif text-brand-900 font-bold text-lg hidden md:block">Bhruna Azevedo</span>
      </Link>
      <div className="flex gap-4 md:gap-8">
        <Link to="/" className="text-brand-800 hover:text-brand-500 font-medium transition-colors text-sm md:text-base">Home</Link>
        <Link to="/massagemcorporativa" className="text-brand-800 hover:text-brand-500 font-medium transition-colors text-sm md:text-base">Massagem Corporativa</Link>
      </div>
    </div>
  </nav>
);

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-brand-50/60 backdrop-blur-[1px] z-10" />
      <img 
        src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop" 
        alt="Spa background" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>

    <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
      <FadeIn>
        <div className="mb-8 p-1 rounded-full border border-brand-200/50 shadow-sm bg-white/50 backdrop-blur-sm">
          <img 
            src="/logo.jpg" 
            alt="BA Logo" 
            className="h-28 md:h-36 w-28 md:w-36 rounded-full logo-glow object-cover drop-shadow-lg"
          />
        </div>
      </FadeIn>
      
      <FadeIn delay={0.2}>
        <span className="text-brand-300 font-sans tracking-[0.3em] uppercase text-xs md:text-sm font-medium mb-4 block">
          Estética & Bem Estar
        </span>
      </FadeIn>

      <FadeIn delay={0.3}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair text-metallic-bronze mb-6 tracking-tight">
          Bhruna Azevedo
        </h1>
      </FadeIn>

      <FadeIn delay={0.4}>
        <p className="text-lg md:text-xl text-brand-900/60 font-light mb-12 max-w-2xl mx-auto tracking-wide">
          Cuide do seu corpo. Desperte o melhor de você.
        </p>
      </FadeIn>

      <FadeIn delay={0.5}>
        <button 
          onClick={() => document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-brand-50 bg-brand-900 rounded-full hover:bg-brand-800 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer"
        >
          <Calendar className="w-5 h-5 mr-3 text-brand-200" />
          Agende seu horário
        </button>
      </FadeIn>
    </div>
  </section>
);

const About = () => (
  <section className="py-24 px-4 bg-white relative overflow-hidden">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-20">
      <FadeIn>
        <div className="aspect-[4/5] rounded-t-full overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 bg-brand-200/20 mix-blend-multiply z-10" />
          <img 
            src="/bhruna.jpg" 
            alt="Bhruna Azevedo" 
            className="w-full h-full object-cover"
          />
        </div>
      </FadeIn>
      <div className="space-y-6">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-800">Sobre Mim</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg text-brand-900/80 leading-relaxed">
            Sou Bhruna Azevedo, especialista em estética e bem-estar. Minha missão é proporcionar momentos de cuidado profundo, unindo técnicas avançadas a um toque acolhedor e humanizado.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="text-lg text-brand-900/80 leading-relaxed">
            Acredito que a estética vai muito além da aparência; trata-se de resgatar a autoestima, aliviar as tensões do dia a dia e promover saúde de dentro para fora.
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="p-6 bg-brand-50 border-l-4 border-brand-400 rounded-r-lg mt-6 shadow-sm">
            <h3 className="font-serif text-xl text-brand-800 mb-2">Atendimento Exclusivo em BH</h3>
            <p className="text-brand-900/70">
              Localizada na <strong>Rua Lídia, 38 (Entrada lateral), bairro Pirajá</strong>. Próximo à Estação São Gabriel.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const services = [
  {
    title: "Drenagem Linfática",
    description: "Reduz o inchaço, melhora a circulação e elimina toxinas do corpo, promovendo leveza imediata.",
    icon: Droplets,
    image: "/drenagem.jpeg"
  },
  {
    title: "Taping",
    description: "Aplicação estratégica de bandagens terapêuticas para diversas necessidades. No estético, auxilia na modelagem e celulite; no pós-operatório, reduz edemas e acelera a cicatrização; e no gestacional, oferece suporte muscular e alívio de dores, garantindo conforto e segurança.",
    icon: Activity,
    image: "/taping.jpeg"
  },
  {
    title: "Ventosaterapia",
    description: "Estimula a circulação sanguínea e alivia tensões musculares profundas através da sucção com ventosas.",
    icon: Wind,
    image: "/ventosa.png"
  },
  {
    title: "Massagem Relaxante",
    description: "Técnicas que aliviam a tensão muscular, reduzem o estresse e promovem uma profunda sensação de paz e relaxamento total.",
    icon: Heart,
    image: "/mass_relax.jpeg"
  },
  {
    title: "Manta Detox",
    description: "Uso de manta térmica para potencializar tratamentos, ativar o metabolismo e promover relaxamento profundo.",
    icon: Thermometer,
    image: "/manta.jpeg"
  },
  {
    title: "Spa dos Pés",
    description: "Uma experiência de relaxamento profundo que vai além da estética. Inclui hidratação intensiva e massagem relaxante nos pontos de tensão, devolvendo a maciez e promovendo um alívio imediato para pés cansados.",
    icon: Sparkles,
    image: "/spapes.jpeg"
  },
];

const Services = () => (
  <section className="py-24 bg-brand-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-serif text-brand-800 mb-4">Meus Serviços</h2>
        <p className="text-lg text-brand-900/70 max-w-2xl mx-auto">
          Tratamentos personalizados para atender às suas necessidades únicas de estética e relaxamento.
        </p>
      </FadeIn>
    </div>

    <div className="flex flex-col md:flex-row w-full h-[600px] md:h-[700px] gap-0">
      {services.map((service, index) => (
        <div 
          key={index}
          className="group relative flex-1 hover:md:flex-[4] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden cursor-pointer border-b md:border-b-0 md:border-r border-white/10"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end text-white">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="w-12 h-12 bg-brand-200/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 text-brand-200 group-hover:bg-brand-200 group-hover:text-brand-900 transition-colors duration-500">
                <service.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-serif font-medium mb-3 text-brand-50 whitespace-nowrap">
                {service.title}
              </h3>
              
              <div className="max-h-0 group-hover:max-h-32 opacity-0 group-hover:opacity-100 transition-all duration-700 overflow-hidden">
                <p className="text-brand-100 leading-relaxed text-sm md:text-base max-w-md">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Booking = () => {
  useEffect(() => {
    // Calendly script injection
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Event listener for Calendly
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event && e.data.event === 'calendly.event_scheduled') {
        trackEvent('schedule_appointment', 'Calendly', 'Success');
      }
    };

    window.addEventListener('message', handleCalendlyEvent);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, []);

  return (
    <section id="agendamento" className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-800 mb-6">Agende sua Sessão</h2>
          <p className="text-lg text-brand-900/70 max-w-2xl mx-auto">
            Selecione o tratamento desejado e escolha o melhor horário para o seu atendimento exclusivo.
          </p>
        </FadeIn>
      </div>
      
      <FadeIn delay={0.2}>
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-brand-100 bg-brand-50/30 backdrop-blur-sm">
          {/* Calendly Inline Widget */}
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/bhrunaestetica?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=d09471" 
            style={{ minWidth: '320px', height: '900px' }}
          ></div>
        </div>
      </FadeIn>

      <FadeIn delay={0.4}>
        <div className="mt-12 text-center">
          <p className="text-brand-900/60 mb-6 font-light italic">
            Prefere agendar diretamente ou tem alguma dúvida?
          </p>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_click', 'WhatsApp', 'Contact')}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-brand-800 rounded-full hover:bg-brand-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <WhatsAppIcon className="w-5 h-5 mr-3" />
            Fale comigo
          </a>
        </div>
      </FadeIn>
    </section>
  );
};

const differentials = [
  {
    title: "Atendimento Personalizado",
    description: "Cada protocolo é único, adaptado ao seu corpo e aos seus objetivos.",
    icon: UserCheck
  },
  {
    title: "Técnicas Especializadas",
    description: "Procedimentos atualizados e focados em resultados reais e duradouros.",
    icon: Award
  },
  {
    title: "Localização Conveniente",
    description: "Atendimento no Pirajá em BH.",
    icon: MapPin
  },
  {
    title: "Ambiente Acolhedor",
    description: "Um espaço preparado para o seu relaxamento e desconexão total.",
    icon: Coffee
  }
];

const Differentials = () => (
  <section className="py-24 px-4 bg-brand-800 text-brand-50">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {differentials.map((diff, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border border-brand-400/30 rounded-full flex items-center justify-center mb-6 text-brand-300">
                <diff.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-brand-100">{diff.title}</h3>
              <p className="text-brand-200/80 text-sm leading-relaxed">
                {diff.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const Location = () => (
  <section className="py-24 px-4 bg-white">
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-800">Onde me encontrar</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg text-brand-900/80 leading-relaxed">
            Meu espaço foi pensado para oferecer conforto e tranquilidade desde o momento em que você chega.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <ul className="space-y-4">
            <li className="flex items-start">
              <MapPin className="w-6 h-6 text-brand-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <strong className="block text-brand-800">Endereço</strong>
                <span className="text-brand-900/70">R. Lídia, 38 - Entrada lateral<br/>Pirajá, Belo Horizonte - MG, 31910-650</span>
              </div>
            </li>
            <li className="flex items-start">
              <MapPin className="w-6 h-6 text-brand-500 mr-4 flex-shrink-0 mt-1 opacity-0" />
              <div>
                <strong className="block text-brand-800">Referências</strong>
                <span className="text-brand-900/70">Próximo à Estação São Gabriel<br/>Ao lado do Minas Shopping <br/>Perto da PUC São Gabriel</span>
              </div>
            </li>
          </ul>
        </FadeIn>
      </div>
      <FadeIn delay={0.4}>
        <div className="aspect-square md:aspect-video lg:aspect-square bg-brand-100 rounded-2xl overflow-hidden shadow-inner relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.583321484439!2d-43.91851172382405!3d-19.85764038151241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69ab7b579058b%3A0xe54e5884f228d447!2sR.%20L%C3%ADdia%2C%2038%20-%20Piraj%C3%A1%2C%20Belo%20Horizonte%20-%20MG%2C%2031910-650!5e0!3m2!1spt-BR!2sbr!4v1712332800000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1) opacity(0.9)' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="relative z-10"
            title="Mapa de Localização"
          ></iframe>
        </div>
      </FadeIn>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-24 px-4 bg-brand-200 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-900 to-transparent" />
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-serif text-brand-900 mb-6">
          Pronta para o seu momento de autocuidado?
        </h2>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="text-xl text-brand-900/80 mb-10">
          Escolha o melhor horário para você e inicie sua jornada de bem-estar.
        </p>
      </FadeIn>
      <FadeIn delay={0.4}>
        <button 
          onClick={() => document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center justify-center px-10 py-5 text-xl font-medium text-white bg-brand-800 rounded-full hover:bg-brand-900 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer"
        >
          <Calendar className="w-6 h-6 mr-3" />
          Ver horários disponíveis
        </button>
      </FadeIn>
    </div>
  </section>
);

const Footer = () => (
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
          onClick={() => trackEvent('whatsapp_click', 'WhatsApp', 'Contact')}
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

const FloatingWhatsApp = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => trackEvent('whatsapp_click', 'WhatsApp', 'Contact')}
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
    aria-label="Fale conosco no WhatsApp"
  >
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  </a>
);

const CorporateMassagePage = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const faqs = [
    {
      q: "Quanto tempo leva cada sessão?",
      a: "Cada atendimento individual dura entre 15 e 20 minutos. Em um período de 4 horas, um profissional consegue atender entre 10 e 14 colaboradores com conforto e qualidade. Para equipes maiores, enviamos mais profissionais — tudo combinado previamente no seu orçamento personalizado."
    },
    {
      q: "Precisa de um espaço específico na empresa?",
      a: "Não. A cadeira de Quick Massage foi projetada para ambientes corporativos. Uma sala de reunião pequena, um espaço na copa ou um canto da recepção já são suficientes. Se tiver dúvida sobre o espaço disponível, nos mande uma foto e avaliamos juntos — sem compromisso."
    },
    {
      q: "O serviço emite nota fiscal?",
      a: "Sim, sempre. Emitimos NF para pessoa jurídica em todos os contratos e pacotes. Seu departamento financeiro e de compliance não terão nenhuma pendência."
    },
    {
      q: "Como funciona o contrato mensal? Há fidelidade?",
      a: "Trabalhamos com pacotes mensais e também com atendimentos pontuais para eventos. Os contratos mensais têm condições especiais de preço e prioridade de agenda. Apresentamos as opções no orçamento e você escolhe o que faz mais sentido para o momento da empresa."
    },
    {
      q: "A terapeuta é qualificada? O serviço é seguro?",
      a: "Sim. Todas as profissionais têm formação técnica em massoterapia, com foco em Quick Massage corporativa. Utilizamos exclusivamente materiais descartáveis por atendimento. A higiene e a segurança são inegociáveis para nós."
    },
    {
      q: "Quanto custa?",
      a: "O valor depende do número de colaboradores, frequência e região. Exatamente por isso, fazemos um orçamento 100% personalizado — sem pacotes engessados que não servem para ninguém. Clique abaixo e receba uma proposta em até 24 horas úteis."
    }
  ];

  return (
    <div className="min-h-screen font-sans text-brand-900 bg-brand-50 selection:bg-brand-200 selection:text-brand-900 pt-16">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section className="relative py-24 px-4 overflow-hidden bg-white border-b border-brand-100">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand-700 uppercase bg-brand-100 rounded-full">
              Quick Massage Corporativa em BH
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-brand-800 mb-8 leading-tight max-w-5xl mx-auto">
              Sua Equipe Produz Mais Quando Está Bem. <br className="hidden md:block" />
              <span className="text-brand-500">Nós Cuidamos Disso — Dentro da Sua Empresa.</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-900/70 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
              O benefício que reduz o estresse, aumenta o foco e transforma o clima organizacional — sem tirar ninguém do trabalho por mais de 20 minutos.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-brand-800 rounded-full hover:bg-brand-900 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <Briefcase className="w-5 h-5 mr-3" />
                → Solicitar Orçamento Gratuito para Minha Empresa
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. THE PROBLEM (PAS) */}
      <section className="py-24 px-4 bg-brand-900 text-brand-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif mb-12 leading-tight">
              Dor de cabeça, tensão no pescoço e aquela sensação de que a equipe "está no limite". <span className="text-brand-300">Você reconhece esse cenário?</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-brand-100/80 font-light leading-relaxed">
              <p>Todo gestor sabe que uma equipe desgastada custa caro — muito mais caro do que parece à primeira vista.</p>
              <p>Absenteísmo por dores musculares e estresse. Presenteísmo: o colaborador está lá, mas a cabeça foi embora. Turnover silencioso de talentos que se sentem invisíveis. Sinistralidade crescendo no plano de saúde da empresa. Clima pesado que contamina reuniões, prazos e resultados.</p>
              <p>E o pior: enquanto o problema cresce, a solução parece sempre cara, complicada ou "para depois".</p>
              <p className="text-brand-200 font-medium">A verdade é que o custo de não cuidar das pessoas já está aparecendo no seu resultado. Nas metas não batidas. No cliente mal atendido. Na inovação que não acontece porque ninguém tem energia criativa sobrando.</p>
              <p className="pt-6 text-2xl md:text-3xl font-serif text-white">Existe uma forma simples, acessível e comprovada de virar esse jogo — e ela cabe dentro do seu escritório.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. THE SOLUTION */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-800 mb-8 leading-tight">
              Quick Massage Corporativa: <span className="text-brand-400">15 minutos que valem por um dia de motivação.</span>
            </h2>
            <div className="space-y-6 text-lg text-brand-900/70 leading-relaxed">
              <p>A Quick Massage Corporativa da Bhruna Azevedo Estética e Bem-Estar leva até a sua empresa uma experiência completa de bem-estar — sem burocracia, sem reforma no espaço físico e sem interromper a operação.</p>
              <p>Nossa terapeuta especializada chega com tudo: a cadeira ergonômica própria para ambiente corporativo, todos os materiais descartáveis e higienizados, uniformes profissionais e uma técnica focada em aliviar os pontos de maior tensão do trabalho de escritório — nuca, ombros, coluna e braços.</p>
              <p className="font-bold text-brand-800 italic">Você não precisa fazer nada além de nos chamar.</p>
              <p>Em sessões de 15 a 20 minutos por colaborador, sua equipe sai renovada, focada e com a mensagem poderosa de que a empresa se importa de verdade com quem faz tudo acontecer.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-100 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/quick.jpeg" 
                  alt="Quick Massage Corporativa BH" 
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. BENEFITS */}
      <section className="py-24 px-4 bg-brand-50 border-y border-brand-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* For Company */}
            <FadeIn>
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-brand-100 h-full">
                <div className="w-16 h-16 bg-brand-800 text-white rounded-2xl flex items-center justify-center mb-8">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-serif text-brand-800 mb-8">Para a Empresa:<br/><span className="text-lg font-sans text-brand-500 font-medium">Um investimento com retorno visível</span></h3>
                <ul className="space-y-6">
                  {[
                    { t: "Retenção de talentos", d: "Colaboradores que se sentem cuidados ficam. E indicam. Seu Employer Branding agradece." },
                    { t: "Redução do absenteísmo", d: "Menos dores musculares = menos atestados = menos gargalos na operação." },
                    { t: "Queda na sinistralidade", d: "Prevenção custa muito menos do que tratamento no plano de saúde." },
                    { t: "Clima organizacional positivo", d: "O dia em que a massagem passa é o dia que todo mundo lembra e comenta bem." },
                    { t: "Nota fiscal garantida", d: "Emitimos NF para pessoa jurídica. Zero dor de cabeça extra." },
                    { t: "Gestão zero", d: "Serviço plug & play. Chegamos, montamos e atendemos sem impactar sua operação." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <CheckCircle2 className="w-6 h-6 text-brand-400 flex-shrink-0" />
                      <div>
                        <strong className="block text-brand-900">{item.t}</strong>
                        <span className="text-brand-900/60 text-sm leading-relaxed">{item.d}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* For Employee */}
            <FadeIn delay={0.2}>
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-brand-100 h-full">
                <div className="w-16 h-16 bg-brand-400 text-white rounded-2xl flex items-center justify-center mb-8">
                  <Smile className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-serif text-brand-800 mb-8">Para o Colaborador:<br/><span className="text-lg font-sans text-brand-500 font-medium">O que cada pessoa da sua equipe vai sentir</span></h3>
                <ul className="space-y-6">
                  {[
                    { t: "Alívio imediato", d: "Tensão cervical e dores nos ombros causadas por horas na cadeira resolvidas em minutos." },
                    { t: "Redução do estresse", d: "Diminuição real da ansiedade em menos de 20 minutos de atendimento." },
                    { t: "Mais foco e alerta", d: "Melhora da circulação e disposição renovada para as próximas horas de trabalho." },
                    { t: "Reconhecimento real", d: "Sensação de pertencimento e de que a empresa se importa com seu bem-estar." },
                    { t: "Conforto total", d: "Sem precisar sair do trabalho ou gastar do próprio bolso." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <CheckCircle2 className="w-6 h-6 text-brand-400 flex-shrink-0" />
                      <div>
                        <strong className="block text-brand-900">{item.t}</strong>
                        <span className="text-brand-900/60 text-sm leading-relaxed">{item.d}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-12 p-6 bg-brand-50 rounded-2xl border-l-4 border-brand-800">
                  <p className="text-xl font-serif italic text-brand-900/80">
                    "Não é só uma massagem. É a mensagem de que a empresa enxerga você como gente — e isso muda tudo."
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. SIPAT SECTION */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto bg-brand-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Zap className="w-48 h-48 text-white" />
          </div>
          <div className="p-12 md:p-20 relative z-10">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">
                SIPAT chegando? <span className="text-brand-300">Transforme a obrigação em um momento inesquecível.</span>
              </h2>
              <div className="space-y-6 text-brand-100/80 text-lg mb-12 max-w-2xl">
                <p>A Bhruna Azevedo transforma a SIPAT da sua empresa em um evento que as pessoas realmente querem participar.</p>
                <p>Montamos uma estação de Quick Massage completa no espaço que você tiver disponível. O resultado? Engajamento real com o tema de saúde e participação ativa — não forçada.</p>
              </div>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-brand-900 bg-brand-200 rounded-full hover:bg-white transition-all shadow-xl"
              >
                <Zap className="w-5 h-5 mr-3" />
                Peça um orçamento exclusivo para SIPAT
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. LOCAL DIFFERENTIAL */}
      <section className="py-24 px-4 bg-brand-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-200 text-brand-800 rounded-full text-sm font-bold mb-6">
              <MapPin className="w-4 h-4" /> BH e Região Metropolitana
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-800 mb-8">
              Nós chegamos onde você está — <span className="text-brand-500 text-3xl block mt-2">no horário combinado.</span>
            </h2>
            <div className="space-y-6 text-brand-900/70 text-lg">
              <p>Sediados estrategicamente na região norte de BH, garantimos pontualidade e agilidade para empresas em toda a capital e grande região metropolitana.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm font-medium text-brand-800/60">
                {["Savassi", "Lourdes", "Pampulha", "Centro", "Contagem", "Betim", "Barreiro", "Funcionários", "Vet. Norte"].map((place, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-400 rounded-full" /> {place}
                  </div>
                ))}
              </div>
              <p className="pt-4 italic border-t border-brand-200">
                Sabemos que o gestor de RH não tem tempo a perder. Nossa operação é desenhada para ser invisível para você — e inesquecível para a sua equipe.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.583321484439!2d-43.91851172382405!3d-19.85764038151241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69ab7b579058b%3A0xe54e5884f228d447!2sR.%20L%C3%ADdia%2C%2038%20-%20Piraj%C3%A1%2C%20Belo%20Horizonte%20-%20MG%2C%2031910-650!5e0!3m2!1spt-BR!2sbr!4v1712332800000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="Cobertura BH"
              ></iframe>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-24 px-4 bg-white border-b border-brand-100">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-brand-800 mb-4">Perguntas Frequentes</h2>
              <p className="text-brand-900/60 font-light italic">Respondemos de forma direta o que todo gestor quer saber.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-brand-100 rounded-2xl overflow-hidden transition-all">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-brand-50 transition-colors group"
                  >
                    <span className="font-bold text-brand-900 group-hover:text-brand-800 flex items-center gap-4">
                      <HelpCircle className="w-5 h-5 text-brand-400" /> {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-brand-300 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${openFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                    <p className="px-8 pb-8 pt-2 text-brand-900/70 leading-relaxed bg-brand-50/30">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-24 px-4 bg-brand-100 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-serif text-brand-900 mb-6">Sua equipe merece isso.<br/><span className="text-brand-600">Sua empresa também.</span></h2>
            <p className="text-xl text-brand-900/70 mb-12 max-w-2xl mx-auto">
              Solicite agora um orçamento personalizado e receba uma proposta completa em até 24 horas úteis. Sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-brand-800 rounded-full hover:bg-brand-900 transition-all shadow-xl hover:shadow-2xl"
              >
                <MessageSquare className="w-6 h-6 mr-3" /> Quero Solicitar Meu Orçamento Agora
              </a>
            </div>
            
            {/* TRUST BADGES */}
            <div className="mt-16 pt-12 border-t border-brand-200 grid grid-cols-2 md:grid-cols-5 gap-6 text-[10px] md:text-xs font-bold text-brand-800/50 uppercase tracking-widest">
              <div className="flex flex-col items-center gap-2">
                <FileText className="w-5 h-5" /> Nota Fiscal Garantida
              </div>
              <div className="flex flex-col items-center gap-2">
                <Zap className="w-5 h-5" /> Materiais Descartáveis
              </div>
              <div className="flex flex-col items-center gap-2">
                <Award className="w-5 h-5" /> Profissionais Certificadas
              </div>
              <div className="flex flex-col items-center gap-2">
                <Truck className="w-5 h-5" /> Atendimento em Toda BH
              </div>
              <div className="flex flex-col items-center gap-2">
                <ShieldCheck className="w-5 h-5" /> Sem Espaço Especial
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

const HomePage = () => (
  <div className="min-h-screen font-sans text-brand-900 bg-brand-50 selection:bg-brand-200 selection:text-brand-900 pt-16">
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Booking />
    <Differentials />
    <Location />
    <FinalCTA />
    <Footer />
    <FloatingWhatsApp />
  </div>
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/manta" element={<HomePage />} />
      <Route path="/drenagem" element={<HomePage />} />
      <Route path="/ventosa" element={<HomePage />} />
      <Route path="/massagemcorporativa" element={<CorporateMassagePage />} />
    </Routes>
  );
}
