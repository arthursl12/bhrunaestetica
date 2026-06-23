import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Clock,
  Star,
  Scissors,
  Droplets,
  Footprints,
  Hand,
  Package,
  CalendarCheck,
  Lock,
  Heart
} from 'lucide-react';
import {
  Navbar,
  Footer,
  FadeIn,
  FloatingWhatsApp,
  WHATSAPP_LINK,
  trackEvent,
  WhatsAppIcon
} from './components/Shared';

const MANICURE_WHATSAPP_LINK = `${WHATSAPP_LINK}?text=Olá!%20Tenho%20interesse%20na%20Manicure%20e%20Pedicure%20Premium.%20Queria%20agendar%20meu%20horário.`;

const painPoints = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c-4-4-8-7-8-11a8 8 0 0 1 16 0c0 4-4 7-8 11z" />
        <path d="M12 6v4" />
      </svg>
    ),
    text: "O esmalte que descasca em dois dias"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 20h8" />
        <path d="M12 4v12" />
        <path d="M9 7l3-3 3 3" />
      </svg>
    ),
    text: "Unhas fracas que quebram à toa"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
    text: "O salão barulhento e lotado"
  },
  // {
  //   icon: (
  //     <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
  //       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  //       <path d="M9 12l2 2 4-4" />
  //     </svg>
  //   ),
  //   text: "O medo de ferramentas mal esterilizadas"
  // }
];

const safetySequence = [
  {
    image: "/manicure_pacote.jpeg",
    alt: "Pacote lacrado de esterilização",
    caption: "Pacote lacrado e individual"
  },
  {
    image: "/manicure_abertura.jpeg",
    alt: "Abertura do pacote na frente da cliente",
    caption: "Aberto na sua frente"
  },
  {
    image: "/manicure_instrumentos.jpeg",
    alt: "Instrumentos organizados sobre bandeja",
    caption: "Pronto para uso"
  }
];

const safetySeals = [
  {
    icon: ShieldCheck,
    title: "Esterilização cirúrgica",
    desc: "Autoclave de grau médico"
  },
  {
    icon: Package,
    title: "Aberto na sua frente",
    desc: "Kit individual lacrado"
  },
  {
    icon: Lock,
    title: "Kit uso individual",
    desc: "Descartáveis e descartáveis"
  },
  {
    icon: CalendarCheck,
    title: "Sem fila, sem espera",
    desc: "Atendimento com hora marcada"
  }
];

const serviceCards = [
  {
    title: "Manicure",
    desc: "Acabamento impecável, com durabilidade real",
    indication: "Beleza e delicadeza",
    image: "/nail_manicure.jpeg"
  },
  {
    title: "Pedicure",
    desc: "Resistência e naturalidade, com durabilidade prolongada",
    indication: "Cuidado essencial e manutenção",
    image: "/nail_pedicure.jpeg"
  },
  // {
  //   title: "Alongamento em Gel / Fibra de Vidro",
  //   desc: "Resistência e naturalidade, com durabilidade prolongada",
  //   indication: "Indicado para: quem busca alongamento duradouro",
  //   image: "/manicure_alongamento.jpeg"
  // },
  // {
  //   title: "Blindagem de Unhas Naturais",
  //   desc: "Fortalecimento real para unhas fracas ou quebradiças",
  //   indication: "Indicado para: unhas naturais fracas/quebradiças",
  //   image: "/manicure_blindagem.jpeg"
  // },
  {
    title: "Spa dos Pés",
    desc: "Relaxamento profundo e cuidado completo com a pele dos pés",
    indication: "Indicado para: relaxamento e renovação da pele",
    image: "/nail_spapes.jpeg"
  }
];

const portfolioImages = [
  { image: "/nail_acab1.jpeg", alt: "Manicure, acabamento brilhante" },
  { image: "/nail_acab2.jpeg", alt: "Spa dos pés finalizado, textura de pele cuidada" },
  { image: "/nail_acab3.jpeg", alt: "Pedicure, tom vermelho" }
];

const testimonials = [
  {
    name: "Camila",
    location: "Savassi, BH",
    text: "Pela primeira vez em anos, meu esmalte durou mais de 10 dias sem descascar. O ambiente é lindo e a profissional é incrível — super atenciosa e cuidadosa."
  },
  {
    name: "Fernanda",
    location: "Lourdes, BH",
    text: "O que mais me impressionou foi a abertura do pacote esterilizado na minha frente. Isso me deu uma confiança que nunca tive em outro salão."
  },
  {
    name: "Mariana",
    location: "Funcionários, BH",
    text: "Finalmente um lugar com hora marcada de verdade. Cheguei, fui atendida imediatamente e saí com as unhas perfeitas. Sem fila, sem pressa."
  }
];

const journeySteps = [
  {
    icon: CalendarCheck,
    title: "Você chega no horário marcado",
    desc: "Sem fila, sem espera."
  },
  {
    icon: Heart,
    title: "Recepção acolhedora",
    desc: "Um ambiente pensado para relaxar."
  },
  {
    icon: Hand,
    title: "Atendimento com foco total",
    desc: "Em você, sem pressa."
  }
];

const AccordionItem = ({ title, isOpen, onClick, children }: { title: string; isOpen: boolean; onClick: () => void; children: React.ReactNode }) => (
  <div className="border border-brand-100 rounded-2xl overflow-hidden transition-all">
    <button
      onClick={onClick}
      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-brand-50 transition-colors group"
    >
      <span className="font-bold text-brand-800 group-hover:text-brand-600 transition-colors">{title}</span>
      <ChevronDown className={`w-5 h-5 text-brand-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
      <div className="px-6 pb-6 pt-2 text-brand-900/70 leading-relaxed bg-brand-50/30">
        {children}
      </div>
    </div>
  </div>
);

const ManicurePage = () => {
  const [openService, setOpenService] = useState<number | null>(null);

  return (
    <div className="min-h-screen font-sans text-brand-900 bg-brand-50 selection:bg-brand-200 selection:text-brand-900 pt-16">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center bg-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/nail_hero.jpeg"
            alt="Ambiente Bhruna Estética — manicure premium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-20">
          <FadeIn>
            <span className="text-brand-500 font-sans tracking-widest uppercase text-xs md:text-sm font-bold mb-4 block">
              Manicure e Pedicure Premium · Belo Horizonte
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-800 mb-6 leading-tight max-w-xl">
              Unhas impecáveis. Duradouras. Sem pressa, sem fila, sem barulho.
            </h1>
            <p className="text-lg md:text-xl text-brand-900/70 mb-10 leading-relaxed font-light max-w-lg">
              Seu momento de cuidado, com hora marcada.
            </p>
            <a
              href={MANICURE_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click')}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[#25D366] rounded-full hover:bg-[#128C7E] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <WhatsAppIcon className="w-5 h-5 mr-3" />
              Agendar meu horário
            </a>
          </FadeIn>
        </div>
      </section>

      {/* 2. BLOCO DE IDENTIFICAÇÃO — As Dores */}
      <section className="py-24 px-4 bg-brand-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-800 mb-4">Você merece mais do que isso.</h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
            {painPoints.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className={i === 2 ? 'col-span-2 sm:col-span-1' : undefined}>
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full text-center flex flex-col items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 text-brand-400 mb-4">
                    {item.icon}
                  </div>
                  <p className="text-brand-900/70 text-sm md:text-base leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <p className="text-center text-lg md:text-xl text-brand-600 max-w-3xl mx-auto font-light leading-relaxed">
              Durabilidade e saúde das unhas não deveriam ser exceção. Aqui, são o padrão.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 4. GRADE DE SERVIÇOS */}
      <section className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-800 mb-4">Cada procedimento, pensado para a saúde e durabilidade.</h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCards.map((service, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm group hover:shadow-xl transition-all duration-500 border border-brand-100">
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-800 mb-2">{service.title}</h3>
                    <div className="w-12 h-px bg-brand-300 my-3" />
                    <p className="text-brand-900/70 leading-relaxed mb-4">{service.desc}</p>
                    <p className="text-brand-500 text-sm mb-4 flex items-center gap-2">
                      <span className="text-brand-400">▸</span> {service.indication}
                    </p>
                    {/* <button
                      onClick={() => setOpenService(openService === i ? null : i)}
                      className="text-sm font-bold text-brand-900/40 group-hover:text-brand-800 flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      Ver detalhes <ChevronRight className="w-3 h-3" />
                    </button>
                    {openService === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-4 pt-4 border-t border-brand-100 text-brand-900/60 text-sm leading-relaxed"
                      >
                        <p>Agende pelo WhatsApp para receber informações detalhadas sobre cada procedimento, incluindo valores, duração e disponibilidade de horários.</p>
                      </motion.div>
                    )} */}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROVA SOCIAL — Portfólio + Depoimentos */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-800 mb-4">O acabamento que fala por si.</h2>
            </FadeIn>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 mb-20">
            {portfolioImages.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className={i === 2 ? 'col-span-2 sm:col-span-1' : undefined}>
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] group">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Testimonials */}
          {/* <div className="border-t border-brand-100 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-brand-50 p-8 rounded-3xl border border-brand-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center text-brand-700 font-serif font-bold">
                        {t.name[0]}
                      </div>
                      <div>
                        <div className="font-bold text-brand-800 text-sm">{t.name}</div>
                        <div className="text-xs text-brand-900/50">{t.location}</div>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-brand-900/70 leading-relaxed italic text-sm">"{t.text}"</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      {/* 6. JORNADA NO ESPAÇO — Linha do Tempo */}
      <section className="py-24 px-4 bg-brand-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-800 mb-4">Sua jornada de cuidado, do início ao fim.</h2>
            </FadeIn>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-10 left-0 right-0 h-px bg-brand-200" />

              <div className="grid grid-cols-3 gap-8 relative">
                {journeySteps.map((step, i) => (
                  <FadeIn key={i} delay={i * 0.15}>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-brand-500 mb-6 border-2 border-brand-200 relative z-10 shadow-sm">
                        <step.icon className="w-8 h-8" strokeWidth={1.5} />
                      </div>
                      <div className="font-serif text-brand-800 font-bold text-lg mb-2">{step.title}</div>
                      <p className="text-brand-900/60 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden">
            <div className="relative pl-12">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-brand-200" />

              <div className="space-y-12">
                {journeySteps.map((step, i) => (
                  <FadeIn key={i} delay={i * 0.15}>
                    <div className="relative">
                      <div className="absolute -left-12 w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-500 border-2 border-brand-200 z-10 shadow-sm">
                        <step.icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <div className="font-serif text-brand-800 font-bold text-lg mb-1">{step.title}</div>
                      <p className="text-brand-900/60 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-4 bg-brand-900 text-brand-50">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Seu momento de cuidado está esperando por você.</h2>
            <p className="text-xl text-brand-200/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Manicure, pedicure ou spa dos pés — escolha o cuidado que faz sentido para você agora, e venha viver a experiência Bhruna Estética.
            </p>
            <div className="mt-8 mb-8">
              <div className="w-full md:w-1/2 mx-auto aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden shadow-xl border-8 border-white/10">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.583321484439!2d-43.91851172382405!3d-19.85764038151241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69ab7b579058b%3A0xe54e5884f228d447!2sR.%20L%C3%ADdia%2C%2038%20-%20Piraj%C3%A1%2C%20Belo%20Horizonte%20-%20MG%2C%2031910-650!5e0!3m2!1spt-BR!2sbr!4v1712332800000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy"
                  title="Localização Bhruna Estética - Pirajá"
                ></iframe>
              </div>
            </div>
            <p className="text-sm text-brand-300/60 mb-8">
              Atendimento com hora marcada, em nosso espaço em Belo Horizonte, bairro Pirajá/Eymard.
            </p>
            <a
              href={MANICURE_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click')}
              className="inline-flex items-center justify-center w-full md:w-auto px-10 py-5 text-xl font-bold text-white bg-[#25D366] rounded-full hover:bg-[#128C7E] transition-all shadow-2xl"
            >
              <WhatsAppIcon className="w-6 h-6 mr-3" />
              Quero Agendar Meu Horário
            </a>

            <p className="mt-12 text-brand-400 text-xs md:text-sm font-light italic">
              Manicure e Pedicure Premium em BH · Durabilidade real · O refúgio de autocuidado que você merece.
            </p>
          </FadeIn>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp href={MANICURE_WHATSAPP_LINK} />
    </div>
  );
};

export default ManicurePage;
