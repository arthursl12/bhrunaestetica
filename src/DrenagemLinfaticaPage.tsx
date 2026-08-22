import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  ChevronDown,
  CheckCircle2,
  Droplets,
  Heart,
  Activity,
  Zap,
  Star,
  ShieldCheck,
  Award,
  Box,
  Package,
  Sparkles,
  Baby,
  ChevronRight,
  House,
  Map
} from 'lucide-react';
import {
  Footer,
  FadeIn,
  FloatingWhatsApp,
  WHATSAPP_LINK,
  trackEvent,
  WhatsAppIcon
} from './components/Shared';
import { Navbar } from './components/Navbar';

const DRENAGEM_WHATSAPP_LINK = `${WHATSAPP_LINK}?text=Olá!%20Tenho%20interesse%20na%20Drenagem%20Linfática.%20Queria%20agendar%20minha%20sessão.`;

const painPoints = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="18" r="3" />
        <path d="M12 15V6" />
        <path d="M9 9c0-1.5 1-3 3-3s3 1.5 3 3" />
      </svg>
    ),
    text: "A marca da meia no tornozelo"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 4h12M8 4v4M16 4v4M6 12h12M8 12v4M16 12v4M6 20h12" />
      </svg>
    ),
    text: "A calça que não fecha à tarde"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17c0 0 1-4 1-8C8 5 10 4 12 4s4 1 4 5c0 4 1 8 1 8" />
        <path d="M7 17h10" />
        <path d="M5 21h14" />
      </svg>
    ),
    text: "Pernas pesadas no fim do dia"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" strokeDasharray="2 2" />
        <circle cx="12" cy="12" r="2" strokeDasharray="1 1" />
      </svg>
    ),
    text: "O inchaço que some de manhã e volta à noite"
  }
];

const techniques = [
  {
    title: "Drenagem Linfática",
    benefit: "Alivia o inchaço e devolve a leveza",
    description: "Manobras suaves e rítmicas que reativam o fluxo linfático e eliminam o excesso de líquido retido nos tecidos.",
    image: "/drenagem_3.jpeg"
  },
  {
    title: "Massagem Modeladora",
    benefit: "Redefine contornos com técnica",
    description: "Movimentos profundos que trabalham a circulação, o tecido adiposo e o tônus muscular para remodelar o corpo.",
    image: "/mass_relax.jpeg"
  },
  {
    title: "Taping Estético",
    benefit: "Suporte contínuo entre sessões",
    description: "Bandagem funcional que mantém a drenagem ativa por dias após o atendimento, prolongando os resultados.",
    image: "/taping.jpeg"
  },
  {
    title: "Ventosaterapia",
    benefit: "Libera tensão e ativa a circulação",
    description: "Técnica de sucção suave que estimula tecidos profundos e elimina toxinas acumuladas.",
    image: "/ventosa.png"
  }
];

const testimonials = [
  {
    image: "/feedback1.jpeg"
  },
  {
    image: "/feedback2.jpeg"
  },
  {
    image: "/feedback3.jpeg"
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

const DrenagemLinfaticaPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openTechnique, setOpenTechnique] = useState<number | null>(null);

  const faqs = [
    {
      q: "Drenagem linfática emagrece?",
      a: "A drenagem não é um procedimento de emagrecimento — e qualquer profissional sério vai te dizer isso. O que ela faz é eliminar o excesso de líquido retido nos tecidos, o que pode resultar em redução de medidas e sensação de corpo mais definido. O processo é real, mas gradual e saudável. Sem promessas impossíveis."
    },
    {
      q: "No atendimento em casa, vocês levam tudo?",
      a: "Sim, tudo. Maca profissional, lençóis, óleos e todos os materiais necessários. Você não precisa preparar nada além de um espaço confortável no seu quarto. A gente cuida do resto."
    },
    {
      q: "Gestante pode fazer drenagem? A partir de qual semana?",
      a: "Em geral, a drenagem linfática para gestantes é liberada a partir do segundo trimestre (após a 13ª semana), mas sempre recomendamos que você consulte seu obstetra antes de iniciar. Na Bhruna Estética, trabalhamos com técnicas adaptadas e seguras para cada fase da gestação."
    },
    {
      q: "Quantas sessões são necessárias para sentir resultado?",
      a: "Muitas clientes relatam alívio já na primeira sessão. Para resultados mais duradouros e progressivos — especialmente em casos de retenção crônica — recomendamos um protocolo de sessões regulares, que definimos juntas na sua avaliação. Cada corpo é único, e o seu atendimento também vai ser."
    }
  ];

  return (
    <div className="min-h-screen font-sans text-brand-900 bg-brand-50 selection:bg-brand-200 selection:text-brand-900 pt-16 overflow-x-hidden">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/drenagem.jpeg"
            alt="Drenagem Linfática"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/80 via-brand-900/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-20 md:py-0">
          <div className="max-w-2xl">
            <FadeIn>
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand-200 uppercase bg-brand-800/30 backdrop-blur-sm rounded-full border border-brand-200/20">
                Drenagem Linfática em BH
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
                Seu corpo não está pesado à toa.
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-brand-100/80 mb-8 leading-relaxed font-light">
                Ele só precisa de alguém que entenda o que ele está pedindo.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg text-brand-200/70 mb-10 leading-relaxed max-w-xl">
                Drenagem Linfática de verdade: alivia o inchaço, elimina o cansaço das pernas e devolve a sensação de leveza que você já não sente faz tempo.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={DRENAGEM_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click')}
                  className="inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-white bg-[#25D366] rounded-full hover:bg-[#128C7E] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <WhatsAppIcon className="w-6 h-6 mr-3" />
                  Agendar pelo WhatsApp
                </a>
              </div>
              <p className="text-sm text-brand-200/60 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Clínica em BH / Spa em Casa
                <House className="w-4 h-4" />
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block z-10">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-brand-200/60"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </div>
      </section>

      {/* Sticky Location Bar */}
      <div className="bg-brand-800 border-b border-brand-700 py-4 px-4 hidden md:block">
        <div className="max-w-6xl mx-auto flex justify-center gap-12 text-sm text-brand-200">
          <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Vitoria</span>
          <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Jardim Vitória</span>
        </div>
      </div>

      {/* 2. BLOCO DE IDENTIFICAÇÃO — As Dores da Persona */}
      <section id="dores" className="py-24 px-4 bg-brand-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-800 mb-4">Você se identifica com alguma dessas situações?</h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {painPoints.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-4 md:p-6 rounded-2xl border border-brand-100 shadow-sm hover:shadow-md transition-shadow h-full text-center flex flex-col items-center">
                  <div className="w-10 h-10 md:w-16 md:h-16 text-brand-400 mb-4 md:mb-6">
                    {item.icon}
                  </div>
                  <p className="text-sm md:base font-medium text-brand-800 leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <p className="text-center text-xl text-brand-600 max-w-3xl mx-auto font-light leading-relaxed mt-12">
              Se você marcou pelo menos um desses, seu sistema linfático está pedindo atenção. E a gente sabe exatamente como ajudar.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3. SEÇÃO DE SOLUÇÃO — O Método Bhruna Estética */}
      <section id="metodo" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* 3A — Como Funciona */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-800 mb-8 leading-tight">
                Drenagem Linfática: ciência que seu corpo já conhece.
              </h2>
              <div className="space-y-6 text-brand-900/70 leading-relaxed mb-10 break-words overflow-wrap-break-word">
                <p>
                  O sistema linfático é uma rede silenciosa que percorre todo o seu corpo. Ele é responsável por recolher o excesso de líquidos, filtrar toxinas e manter o equilíbrio dos tecidos.
                </p>
                <p>
                  Quando ele fica lento — por sedentarismo, estresse, má circulação ou sobrecarga do dia a dia — o resultado aparece exatamente onde você mais sente: no inchaço, no cansaço, na sensação de corpo pesado.
                </p>
                <p>
                  A Drenagem Linfática Manual que praticamos na Bhruna Estética utiliza manobras suaves, rítmicas e precisas, aplicadas na direção certa do fluxo linfático. Sem pressão excessiva, sem desconforto desnecessário.
                </p>
              </div>

              {/* Timeline */}
              <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-6">
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                    <Activity className="w-5 h-5 text-brand-500" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-brand-400 uppercase tracking-widest block">Etapa 1</span>
                    <span className="text-sm font-medium text-brand-800">Estímulo</span>
                  </div>
                </div>
                
                <ChevronRight className="w-4 h-4 text-brand-300 hidden md:block md:rotate-90" />
                
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-5 h-5 text-brand-500" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-brand-400 uppercase tracking-widest block">Etapa 2</span>
                    <span className="text-sm font-medium text-brand-800">Fluxo</span>
                  </div>
                </div>
                
                <ChevronRight className="w-4 h-4 text-brand-300 hidden md:block md:rotate-90" />
                
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-brand-500" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-brand-400 uppercase tracking-widest block">Etapa 3</span>
                    <span className="text-sm font-medium text-brand-800">Leveza</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="/drenagem_close.jpeg"
                  alt="Drenagem Linfática - Técnica"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-brand-900/10" />
              </div>
            </FadeIn>
          </div>

          {/* 3B — Checklist Visual de Biossegurança (Home Care) */}
          <FadeIn>
            <div className="bg-brand-50 rounded-[3rem] p-8 md:p-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-serif text-brand-800 mb-4">Levamos um spa completo até você.</h3>
                <p className="text-brand-900/60 max-w-2xl mx-auto">
                  Tudo o que você veria em uma clínica especializada chega na sua porta. Organizado. Esterilizado. Pronto.
                </p>
              </div>

               <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { icon: <Box className="w-6 h-6" />, text: "Maca portátil profissional" },
                      { icon: <Package className="w-6 h-6" />, text: "Lençóis descartáveis ou higienizados" },
                      { icon: <Sparkles className="w-6 h-6" />, text: "Óleos e cremes de uso profissional" },
                      { icon: <ShieldCheck className="w-6 h-6" />, text: "Kit de descartáveis selados" },
                      { icon: <Sparkles className="w-6 h-6" />, text: "Ambiente com aromaterapia" },
                      { icon: <CheckCircle2 className="w-6 h-6" />, text: "Protocolo de biossegurança" }
                    ].map((item, i) => (
                      <div key={i} className="bg-white p-4 rounded-xl text-center flex flex-col items-center">
                        <div className="w-10 h-10 text-brand-400 mb-3">{item.icon}</div>
                        <span className="text-sm text-brand-800 font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/domic_spaemcasa.jpeg"
                    alt="Kit Home Care"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-900/10" />
                </div>
              </div>

              {/* Divider */}
              <div className="my-12 border-t border-brand-200" />

              <div className="text-center">
                <p className="text-xl text-brand-800 font-serif italic mb-6">
                  Ou, se preferir, venha até a gente.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-brand-900/70">
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-400" /> Vitoria/Jardim Vitória</span>
                  <span className="flex items-center gap-2"><Map className="w-4 h-4 text-brand-400" /> Fácil acesso pelo Anel Rodoviário e BR-381</span>
                </div>

                <div className="mt-8">
                  <div className="w-full md:w-1/2 mx-auto aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden shadow-xl border-8 border-white">
                    <iframe 
                      src="https://maps.google.com/maps?q=Av.+Magenta,+554+-+Vitoria,+Belo+Horizonte+-+MG,+31970-745&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={false} 
                      loading="lazy"
                      title="Localização Bhruna Estética - Vitoria"
                    ></iframe>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <a 
                      href={DRENAGEM_WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent('whatsapp_click')}
                      className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[#25D366] rounded-full hover:bg-[#128C7E] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                    >
                      <WhatsAppIcon className="w-6 h-6 mr-3" />
                      Agendar pelo WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. GRADE DE VARIAÇÕES E TÉCNICAS COMPLEMENTARES */}
      <section id="tecnicas" className="py-24 px-4 bg-brand-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-800 mb-4">Cada corpo é único. Cada protocolo também.</h2>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {techniques.map((tech, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-brand-100 hover:shadow-xl transition-shadow duration-500 h-full flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-brand-800 mb-2">{tech.title}</h3>
                    <p className="text-brand-500 text-sm font-medium mb-4">{tech.benefit}</p>

                    <AccordionItem
                      title="Saiba mais"
                      isOpen={openTechnique === i}
                      onClick={() => setOpenTechnique(openTechnique === i ? null : i)}
                    >
                      <p>{tech.description}</p>
                    </AccordionItem>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO ESPECIAL — Gestantes e Pós-Parto */}
      <section id="gestantes" className="py-24 px-4 bg-[#fcf5f3]">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] overflow-hidden shadow-xl border border-brand-100/50">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 p-8 md:p-16">
              <FadeIn>
                <div className="flex items-center gap-3 text-brand-400 font-bold tracking-widest text-xs uppercase mb-6">
                  <Baby className="w-5 h-5" /> PARA FUTURAS MAMÃES
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-brand-800 mb-8 leading-tight">
                  Para você que está gerando uma vida — ou acabou de gerar.
                </h2>
                <div className="space-y-6 text-brand-900/70 leading-relaxed mb-10">
                  <p>
                    Grávida, o seu corpo trabalha em dobro. O inchaço nas pernas, nos pés e nas mãos, as dores lombares que não dão trégua, a sensação de que o corpo não é mais seu — tudo isso é real e merece cuidado especializado.
                  </p>
                  <p>
                    A Drenagem Linfática para gestantes é um procedimento seguro, suave e profundamente eficaz quando realizado por profissional capacitado. Na Bhruna Estética, utilizamos técnicas específicas para cada fase da gestação, respeitando o seu momento, o seu corpo e a vida que você carrega.
                  </p>
                  <p>
                    Para o pós-parto, a drenagem é uma aliada poderosa na recuperação do organismo: ajuda a reduzir o inchaço pós-cesárea ou pós-normal, colabora com a reabsorção de líquidos e ainda oferece aquele momento de cuidado que toda mãe merece — e raramente se permite ter.
                  </p>
                </div>

                {/* Safety Badges */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: <ShieldCheck className="w-5 h-5" />, text: "Técnica adaptada para gestantes" },
                    { icon: <ShieldCheck className="w-5 h-5" />, text: "Segura a partir do 2º trimestre" },
                    { icon: <Award className="w-5 h-5" />, text: "Profissional capacitada" },
                    { icon: <ShieldCheck className="w-5 h-5" />, text: "Indicada para pós-operatório" }
                  ].map((badge, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-brand-700 bg-brand-50 px-4 py-3 rounded-xl">
                      <span className="text-brand-400">{badge.icon}</span>
                      <span className="font-medium">{badge.text}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={DRENAGEM_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click')}
                  className="inline-flex items-center gap-2 text-brand-500 font-bold border-b-2 border-brand-200 hover:border-brand-500 transition-all pb-1 group"
                >
                  Quero saber mais sobre o atendimento para gestantes
                  <Heart className="w-4 h-4 group-hover:fill-brand-500 transition-all" />
                </a>
              </FadeIn>
            </div>

            <div className="w-full md:w-1/2 h-[400px] md:h-[600px]">
              <img
                src="/domic_gravida.jpeg"
                alt="Gestante recebendo drenagem linfática"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROVA SOCIAL E RESULTADOS */}
      <section id="depoimentos" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-800 mb-4">O que elas sentiram depois da primeira sessão.</h2>
              <p className="text-brand-900/60 font-light">Depoimentos reais de quem já experimentou.</p>
            </FadeIn>
          </div>

          {/* Desktop: 3 columns / Mobile: horizontal scroll */}
          <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide px-4 -mx-4">
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-[85%] md:min-w-0 snap-start">
                <div className="bg-brand-50 rounded-3xl overflow-hidden border border-brand-100 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="aspect-[9/16] overflow-hidden bg-brand-100">
                    <img
                      src={t.image}
                      alt={`Depoimento ${i + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ — QUEBRA DE OBJEÇÕES */}
      <section id="faq" className="py-24 px-4 bg-brand-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl font-serif text-brand-800 mb-4">Perguntas Frequentes</h2>
              <p className="text-brand-900/60 font-light italic">Respondemos de forma direta o que todo mundo quer saber.</p>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-brand-100 rounded-2xl overflow-hidden transition-all bg-white">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-brand-50 transition-colors group"
                  >
                    <span className="font-bold text-brand-900 group-hover:text-brand-800 flex items-center gap-4">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-brand-300 transition-transform duration-300 flex-shrink-0 ml-4 ${openFaq === i ? 'rotate-180' : ''}`} />
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

      {/* 8. CTA FINAL */}
      <section className="py-24 px-4 bg-brand-900 text-brand-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-400 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-300 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
              Seu corpo já está pedindo isso há um tempo.
            </h2>
            <p className="text-xl text-brand-200/70 mb-12 max-w-2xl mx-auto">
              Clínica em BH ou atendimento a domicilio — você escolhe.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a
                href={DRENAGEM_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click')}
                className="inline-flex items-center justify-center w-full md:w-auto px-12 py-6 text-2xl font-bold text-white bg-[#25D366] rounded-full hover:bg-[#128C7E] transition-all shadow-2xl animate-pulse-slow"
              >
                <WhatsAppIcon className="w-8 h-8 mr-4" />
                Quero Agendar Minha Sessão
              </a>
              <p className="text-sm text-brand-300/60">
                Atendimento em Vitoria/Jardim Vitória · Fácil acesso pelo Anel Rodoviário e BR-381 · e em toda BH via Home Care
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp href={DRENAGEM_WHATSAPP_LINK} />
    </div>
  );
};

export default DrenagemLinfaticaPage;