import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  MapPin, 
  ChevronRight, 
  Heart, 
  Clock, 
  Box, 
  ShieldCheck, 
  Star,
  Baby,
  Award
} from 'lucide-react';
import { 
  Navbar, 
  Footer, 
  FadeIn, 
  FloatingWhatsApp, 
  trackEvent,
  WhatsAppIcon
} from './components/Shared';

const DOMICILIO_WHATSAPP_LINK = "https://wa.me/5531992980110?text=Olá!%20Tenho%20interesse%20no%20atendimento%20a%20domicílio.%20Queria%20mais%20informações";

const services = [
  {
    title: "Drenagem Linfática",
    benefit: "Corpo mais leve e sem inchaço",
    image: "/drenagem.jpeg"
  },
  {
    title: "Massagem Relaxante",
    benefit: "Alívio imediato de tensões",
    image: "/mass_relax.jpeg"
  },
  {
    title: "Ventosaterapia",
    benefit: "Recuperação muscular profunda",
    image: "/ventosa.png"
  },
  {
    title: "Taping",
    benefit: "Suporte e conforto contínuo",
    image: "/taping.jpeg"
  }
];

/*
const testimonials = [
  {
    name: "Ana",
    location: "Savassi",
    text: "A melhor experiência! Poder relaxar na minha própria casa sem enfrentar o trânsito da Savassi não tem preço. A Bhruna é impecável.",
    rating: 5
  },
  {
    name: "Juliana",
    location: "Buritis",
    text: "Fiz a drenagem gestacional e foi o meu alívio nas últimas semanas. Sentir minhas pernas leves de novo foi maravilhoso.",
    rating: 5
  },
  {
    name: "Camila",
    location: "Castelo",
    text: "Extremamente profissional. Ela traz tudo, a maca é super confortável e o atendimento é de clínica de luxo.",
    rating: 5
  }
];
*/

const DomicilioPage = () => {
  return (
    <div className="min-h-screen font-sans text-brand-900 bg-brand-50 selection:bg-brand-200 selection:text-brand-900 pt-16">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="w-full md:w-[45%] p-6 md:p-12 z-20">
            <FadeIn>
              <span className="text-brand-500 font-sans tracking-widest uppercase text-xs md:text-sm font-bold mb-4 block">
                Atendimento a domicílio em BH e região
              </span>
              <h1 className="text-4xl md:text-6xl font-serif text-brand-800 mb-6 leading-tight">
                Seu corpo merece cuidado. <br />
                <span className="text-brand-400 font-light">Sua casa é o melhor lugar para isso.</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-900/70 mb-10 leading-relaxed font-light">
                Drenagem linfática, massagem relaxante e muito mais — com maca profissional, material completo e uma terapeuta especializada que vai até você, em BH e região.
              </p>
              <div className="space-y-4">
                <a 
                  href={DOMICILIO_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click_domicilio_hero')}
                  className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 text-lg font-bold text-white bg-[#25D366] rounded-full hover:bg-[#128C7E] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <WhatsAppIcon className="w-5 h-5 mr-3" />
                  Quero Agendar Meu Atendimento em Casa
                </a>
                <p className="text-xs text-brand-900/50 flex items-center justify-center md:justify-start gap-3 italic">
                  <span>Maca e material inclusos</span>
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Hero Image */}
          <div className="w-full md:w-[55%] h-[50vh] md:h-[90vh] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 hidden md:block" />
            <img 
              src="/domic_hero.jpeg" 
              alt="Massagem a domicílio" 
              className="w-full h-full object-cover md:rounded-l-[4rem]"
            />
            {/* Glassmorphism card for mobile */}
            <div className="absolute bottom-6 left-6 right-6 md:hidden z-20 bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl">
              <p className="text-brand-900 font-medium text-center">Toda a estrutura de um spa, no conforto do seu lar.</p>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-brand-300"
          >
            <ChevronRight className="w-6 h-6 rotate-90" />
          </motion.div>
        </div>
      </section>

      {/* 2. BLOCO DE IDENTIFICAÇÃO — As Dores */}
      <section className="py-24 px-4 bg-brand-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-800 mb-4">Você reconhece alguma dessas situações?</h2>
              <p className="text-brand-900/60 font-light">Seu corpo está falando, e ele merece ser ouvido.</p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "O corpo pesado",
                desc: "Acordar já cansada, com aquela sensação de corpo pesado que não passa.",
                icon: Heart
              },
              {
                title: "Inchaço no fim do dia",
                desc: "Perceber que os sapatos apertaram — suas pernas e pés estão inchados.",
                icon: Clock
              },
              {
                title: "Falta de tempo",
                desc: "Querer cuidar de você, mas não ter energia para enfrentar o trânsito de BH.",
                icon: MapPin
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-2xl border-l-4 border-brand-400 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="w-12 h-12 text-brand-400 mb-6">
                    <item.icon className="w-full h-full" strokeWidth={1} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-800 mb-3">{item.title}</h3>
                  <p className="text-brand-900/70 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <p className="text-center text-xl text-brand-600 max-w-3xl mx-auto font-light leading-relaxed">
              Se você se viu em alguma dessas situações, saiba: você não está exagerando. Seu corpo merece ser ouvido — do jeito mais confortável possível.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3. DIFERENCIAL "SPA EM CASA" */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-800 mb-6">Apresentamos: o cuidado que vai até você.</h2>
              <p className="text-lg text-brand-900/70 max-w-3xl mx-auto leading-relaxed">
                Não precisa sair de casa. Não precisa pegar trânsito. Não precisa se arrumar para nada. Levamos uma experiência completa de bem-estar até você.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {[
              {
                title: "Maca Profissional",
                desc: "Levamos nossa maca profissional. Você não precisa preparar nada.",
                icon: Box
              },
              {
                title: "Material Completo",
                desc: "Lençóis higienizados, óleos e cremes específicos inclusos.",
                icon: ShieldCheck
              },
              {
                title: "Terapeuta Certificada",
                desc: "Terapeuta especializada, pontual e dedicada exclusivamente a você.",
                icon: Award
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-center flex flex-col items-center">
                  <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center text-brand-400 mb-6">
                    <item.icon className="w-10 h-10" strokeWidth={1} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-800 mb-3">{item.title}</h3>
                  <p className="text-brand-900/70 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-video md:aspect-[21/9]">
              <img 
                src="/domic_spaemcasa.jpeg" 
                alt="Maca de massagem montada em casa" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-900/20" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. GRADE DE SERVIÇOS */}
      <section className="py-24 px-4 bg-brand-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <FadeIn>
              <h2 className="text-4xl font-serif text-brand-800">Serviços Disponíveis</h2>
              <p className="text-brand-900/60 mt-2">Escolha o cuidado ideal para o seu momento.</p>
            </FadeIn>
          </div>

          {/* Desktop Grid / Mobile Carousel */}
          <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide">
            {services.map((service, i) => (
              <FadeIn key={i} delay={i * 0.1} className="min-w-[85%] md:min-w-0 snap-center">
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm group hover:shadow-xl transition-all duration-500 h-full border border-brand-100">
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-brand-800 mb-1">{service.title}</h3>
                    <p className="text-brand-500 text-sm font-medium mb-4">{service.benefit}</p>
                    <a 
                      href={DOMICILIO_WHATSAPP_LINK} 
                      className="text-xs font-bold text-brand-900/40 group-hover:text-brand-800 flex items-center gap-1 transition-colors"
                    >
                      Ver detalhes <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-800 mb-16 text-center">O que você vai sentir — e ver — depois do atendimento:</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              {
                title: "Corpo mais leve, menos inchado",
                desc: "A drenagem linfática estimula a circulação e reduz o acúmulo de líquido, aliviando aquela sensação de peso e inchaço que acompanha o fim do dia."
              },
              {
                title: "Alívio real de dores e tensões",
                desc: "Das costas sobrecarregadas à tensão nos ombros acumulada no trabalho: a massoterapia age nos pontos de maior desconforto, devolvendo mobilidade."
              },
              {
                title: "Conveniência total — zero deslocamento",
                desc: "Atendemos no horário que funciona para você, na sua casa. Você não perde tempo, não enfrenta trânsito e aproveita o relaxamento máximo."
              },
              {
                title: "Autoestima e disposição de volta",
                desc: "Cuidar do corpo é também cuidar da mente. Cada sessão é um momento só seu: para respirar, desacelerar e se reconectar com você mesma."
              }
            ].map((benefit, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex gap-4">
                  <div className="mt-1">
                    <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-500">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-800 mb-2">{benefit.title}</h3>
                    <p className="text-brand-900/70 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROVA SOCIAL E RESULTADOS - Comentado pois o negócio está começando */}
      {/* 
      <section className="py-24 px-4 bg-brand-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-4 mb-20">
            {[
              { label: "atendimentos", value: "+200" },
              { label: "estrelas no Google", value: "5" },
              { label: "anos em BH", value: "4" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-5xl font-serif text-brand-500 font-light mb-1">{item.value}</div>
                <div className="text-[10px] md:text-xs font-bold text-brand-900/40 uppercase tracking-widest">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide">
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-[85%] md:min-w-[400px] bg-white p-8 rounded-3xl shadow-sm snap-center border border-brand-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-800 font-serif font-bold text-xl">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-brand-800">{t.name}</div>
                    <div className="text-xs text-brand-900/50">{t.location}, BH</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-brand-900/70 leading-relaxed italic">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* 6. SEÇÃO ESPECIAL — Para Gestantes e Puérperas */}
      <section className="py-24 px-4 bg-[#fcf5f3]">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] overflow-hidden shadow-xl border border-brand-100/50">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text Content */}
            <div className="w-full md:w-1/2 p-8 md:p-16">
              <FadeIn>
                <div className="flex items-center gap-3 text-brand-400 font-bold tracking-widest text-xs uppercase mb-6">
                  <Baby className="w-5 h-5" /> PARA FUTURAS MAMÃES
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-brand-800 mb-8 leading-tight">
                  Mamãe, este cuidado também é para você.
                </h2>
                <div className="space-y-6 text-brand-900/70 leading-relaxed mb-10">
                  <p>
                    Sabemos que a gravidez é linda — e também muito exigente para o corpo. O inchaço nas pernas, as dores lombares e o cansaço são reais, e você merece alívio com segurança e carinho.
                  </p>
                  <p>
                    Oferecemos atendimento especializado para gestantes e puérperas, com técnicas adaptadas para cada fase. Trabalhamos com drenagem gestacional e massagem de conforto — promovendo paz e relaxamento sem que você precise sair de casa.
                  </p>
                </div>
                <a 
                  href={DOMICILIO_WHATSAPP_LINK} 
                  className="inline-flex items-center gap-2 text-brand-500 font-bold border-b-2 border-brand-200 hover:border-brand-500 transition-all pb-1 group"
                >
                  Saiba mais sobre o atendimento para gestantes 
                  <Heart className="w-4 h-4 group-hover:fill-brand-500 transition-all" />
                </a>
              </FadeIn>
            </div>
            
            {/* Image */}
            <div className="w-full md:w-1/2 h-[400px] md:h-[600px]">
              <img 
                src="/domic_gravida.jpeg" 
                alt="Gestante recebendo massagem" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA FINAL */}
      <section className="py-24 px-4 bg-brand-900 text-brand-50">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Pronta para se cuidar de verdade?</h2>
            <p className="text-xl text-brand-200/70 mb-12 max-w-2xl mx-auto">
              Agendar é simples: fale com a gente pelo WhatsApp, escolha o serviço e o horário — e a gente cuida de todo o resto.
            </p>
            <a 
              href={DOMICILIO_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click_domicilio_final')}
              className="inline-flex items-center justify-center w-full md:w-auto px-10 py-5 text-xl font-bold text-white bg-[#25D366] rounded-full hover:bg-[#128C7E] transition-all shadow-2xl animate-pulse-slow"
            >
              <WhatsAppIcon className="w-6 h-6 mr-3" />
              Agendar Meu Horário no WhatsApp
            </a>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-[10px] md:text-xs font-bold text-brand-300 uppercase tracking-widest">
              <div className="flex flex-col items-center gap-2">
                <ShieldCheck className="w-5 h-5 opacity-50" /> Terapeuta Certificada
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="w-5 h-5 opacity-50" /> Material Higienizado
              </div>
              <div className="flex flex-col items-center gap-2">
                <Box className="w-5 h-5 opacity-50" /> Maca Profissional
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock className="w-5 h-5 opacity-50" /> Pontualidade BH e região
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp href={DOMICILIO_WHATSAPP_LINK} />
    </div>
  );
};

export default DomicilioPage;
