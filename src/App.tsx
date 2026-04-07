/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
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
  Calendar
} from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/553191422212";

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
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
    title: "Taping Estético",
    description: "Técnica com bandagens adesivas que modela o corpo, reduz medidas e atua no combate à celulite.",
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
    title: "Limpeza de Pele",
    description: "Tratamento essencial para desobstruir os poros, controlar a oleosidade e prevenir o envelhecimento precoce, deixando a pele revitalizada.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
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
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
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
        <a href={WHATSAPP_LINK} className="hover:text-white transition-colors">
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
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
    aria-label="Fale conosco no WhatsApp"
  >
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  </a>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans text-brand-900 bg-brand-50 selection:bg-brand-200 selection:text-brand-900">
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
}
