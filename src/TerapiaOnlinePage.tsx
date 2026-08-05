import React, { useState } from 'react';
import {
  ChevronDown,
  Clock,
  CalendarCheck,
  CreditCard,
  Video,
  ShieldCheck,
  Star,
  CheckCircle2,
  Leaf,
  Heart,
  Timer,
  Search,
  MessageCircle,
  Lock,
  HelpCircle,
  Sparkles,
  ArrowRight,
  BadgeCheck,
  MonitorPlay,
  Activity
} from 'lucide-react';
import {
  Navbar,
  Footer,
  FadeIn,
  FloatingWhatsApp,
  trackEvent,
  WhatsAppIcon
} from './components/Shared';
import { WHATSAPP_LINK } from './components/Shared';

const TERAPIA_WHATSAPP_LINK = `${WHATSAPP_LINK}?text=Olá!%20Tenho%20interesse%20na%20terapia%20online.%20Gostaria%20de%20saber%20mais%20informações.`;

const TerapiaOnlinePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "E se eu tiver um imprevisto e precisar remarcar?",
      a: "Sem problema. Você pode reagendar diretamente pelo sistema, com até 24h de antecedência, sem precisar justificar ou falar com ninguém."
    },
    {
      q: "Como funciona o pagamento?",
      a: "Você paga com Pix ou cartão, em ambiente 100% seguro, no momento do agendamento. Simples e rápido."
    },
    {
      q: "Preciso baixar algum aplicativo?",
      a: "Não. Basta clicar no link que você recebe por e-mail ou WhatsApp — a sessão abre direto no navegador do computador ou celular."
    },
    {
      q: "E se eu não me identificar com o profissional escolhido?",
      a: "Você pode trocar de psicólogo a qualquer momento pela plataforma, sem burocracia e sem constrangimento."
    }
  ];

  return (
    <div className="min-h-screen font-sans text-brand-900 bg-brand-50 selection:bg-brand-200 selection:text-brand-900 pt-16">
      <Navbar />

      {/* 1. HERO SECTION — Split Screen */}
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center">
          {/* Left — Emotional Layer */}
          <div className="w-full md:w-[55%] p-6 md:p-12 lg:p-16 z-20">
            <FadeIn>
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand-600 uppercase bg-brand-100 rounded-full">
                Terapia Online
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-800 mb-6 leading-tight">
                Cuidar da sua mente pode ser <br />
                <span className="text-brand-400">simples assim.</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-900/70 mb-10 leading-relaxed font-light max-w-xl">
                Escolha seu psicólogo, veja os horários disponíveis em tempo real e agende sua primeira sessão em menos de 2 minutos. Sem espera, sem WhatsApp, sem complicação.
              </p>
              <div className="space-y-4">
                <a
                  href="#horarios"
                  className="inline-flex items-center justify-center w-full md:w-auto px-10 py-5 text-lg font-bold text-white bg-brand-600 rounded-full hover:bg-brand-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                  onClick={() => trackEvent('cta_hero_ver_horarios')}
                >
                  <CalendarCheck className="w-5 h-5 mr-3" />
                  Ver Horários Disponíveis
                </a>
                <p className="text-sm text-brand-900/50 font-light text-center md:text-left">
                  Sem cadastro complicado. Sem compromisso até você decidir.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right — Mockup de Prova */}
          <div className="w-full md:w-[45%] relative h-[400px] md:h-[90vh] flex items-center justify-center p-6">
            <FadeIn delay={0.3} className="w-full max-w-sm">
              <div className="bg-white rounded-3xl shadow-2xl border border-brand-100 overflow-hidden">
                {/* Mock Header */}
                <div className="bg-brand-50 px-6 py-4 border-b border-brand-100">
                  <p className="text-xs font-bold text-brand-500 uppercase tracking-widest">Escolha seu horário</p>
                </div>
                {/* Mock Profile */}
                <div className="p-6 flex items-center gap-4 border-b border-brand-50">
                  <div className="w-14 h-14 rounded-full bg-brand-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-serif font-bold text-brand-700">RP</span>
                  </div>
                  <div>
                    <p className="font-bold text-brand-800">Dra. Renata Pereira</p>
                    <p className="text-sm text-brand-500">Psicóloga · CRP 04/12345</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3 h-3 fill-brand-400 text-brand-400" />
                      ))}
                      <span className="text-xs text-brand-400 ml-1">5.0</span>
                    </div>
                  </div>
                </div>
                {/* Mock Time Slots */}
                <div className="p-6 space-y-3">
                  <p className="text-sm font-medium text-brand-900/60 mb-3">Horários disponíveis — Hoje</p>
                  {['09:00', '11:30', '14:00'].map((time, i) => (
                    <div
                      key={time}
                      className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                        i === 1
                          ? 'border-brand-500 bg-brand-50 shadow-md'
                          : 'border-brand-100 hover:border-brand-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-brand-400" />
                        <span className="font-bold text-brand-800">{time}</span>
                      </div>
                      {i === 1 && (
                        <span className="flex items-center gap-1 text-xs font-bold text-brand-600 bg-brand-100 px-3 py-1 rounded-full">
                          <CheckCircle2 className="w-3 h-3" /> Confirmado
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="px-6 pb-6">
                  <button className="w-full py-3 bg-brand-600 text-white font-bold rounded-2xl hover:bg-brand-700 transition-colors text-sm">
                    Agendar Sessão
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. COMO FUNCIONA — 3 Passos */}
      <section className="py-24 px-4 bg-brand-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-800 mb-4">
                Simples assim: em 3 passos, <br className="hidden md:block" />
                você já está com sua sessão marcada.
              </h2>
            </FadeIn>
          </div>

          {/* Desktop — Horizontal Steps */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="absolute top-16 left-[20%] right-[20%] h-0.5 bg-brand-200 z-0" />

            {[
              {
                step: '01',
                icon: Search,
                title: 'Encontre quem combina com você',
                desc: 'Navegue pelos perfis dos nossos especialistas, veja abordagens, especialidades e experiência. Você escolhe com quem quer conversar — no seu tempo, sem pressa.'
              },
              {
                step: '02',
                icon: CalendarCheck,
                title: 'Veja a agenda real, na hora',
                desc: 'Chega de trocar mensagens para achar um horário em comum. Veja os horários realmente disponíveis e escolha o que encaixa na sua rotina.'
              },
              {
                step: '03',
                icon: Video,
                title: 'Pagamento seguro e link automático',
                desc: 'Finalize o pagamento com segurança e receba o link da sua sessão por e-mail e WhatsApp. Na hora marcada, é só clicar e entrar.'
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.2} className="relative z-10">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-100 text-center h-full">
                  <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-6 relative">
                    <item.icon className="w-7 h-7 text-brand-600" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-brand-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif text-brand-800 mb-4">{item.title}</h3>
                  <p className="text-brand-900/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Mobile — Stacked Steps */}
          <div className="md:hidden space-y-6 relative">
            <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-brand-200" />
            {[
              {
                step: '01',
                icon: Search,
                title: 'Encontre quem combina com você',
                desc: 'Navegue pelos perfis, veja abordagens e especialidades. Você escolhe no seu tempo.'
              },
              {
                step: '02',
                icon: CalendarCheck,
                title: 'Veja a agenda real, na hora',
                desc: 'Veja horários realmente disponíveis e escolha o que encaixa na sua rotina.'
              },
              {
                step: '03',
                icon: Video,
                title: 'Pagamento seguro e link automático',
                desc: 'Receba o link por e-mail e WhatsApp. Na hora marcada, é só clicar e entrar.'
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15} className="relative z-10 pl-20">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-100">
                  <div className="absolute left-3 w-11 h-11 bg-brand-100 rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <span className="text-xs font-bold text-brand-400 uppercase tracking-widest">Passo {item.step}</span>
                  <h3 className="text-lg font-serif text-brand-800 mt-1 mb-2">{item.title}</h3>
                  <p className="text-brand-900/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROVA SOCIAL E SEGURANÇA — Trust Bar */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-800 mb-4">
                Profissionais de verdade, <br className="hidden md:block" />
                com quem você pode confiar.
              </h2>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <FadeIn delay={0.1}>
              <div className="bg-brand-50 p-8 rounded-3xl h-full">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mb-6">
                  <BadgeCheck className="w-7 h-7 text-brand-600" />
                </div>
                <h3 className="text-xl font-serif text-brand-800 mb-4">Psicólogos verificados</h3>
                <p className="text-brand-900/70 leading-relaxed">
                  Todos os nossos psicólogos são formados, com registro ativo no CRP e experiência comprovada em atendimento online. Verificamos cada credencial antes de qualquer profissional entrar na nossa plataforma.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-brand-50 p-8 rounded-3xl h-full">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mb-6">
                  <Lock className="w-7 h-7 text-brand-600" />
                </div>
                <h3 className="text-xl font-serif text-brand-800 mb-4">Ambiente seguro</h3>
                <p className="text-brand-900/70 leading-relaxed">
                  Sua privacidade é sagrada para nós. As videochamadas são criptografadas de ponta a ponta — o que é dito na sessão fica só entre você e seu terapeuta.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Trust Badges */}
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 py-8 border-y border-brand-100">
              {[
                { icon: BadgeCheck, text: 'Psicólogos verificados (CRP ativo)' },
                { icon: Lock, text: 'Criptografia ponta a ponta' },
                { icon: Star, text: 'Avaliados por outros pacientes' }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-3 text-brand-700">
                  <badge.icon className="w-5 h-5 text-brand-500" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. PARA QUEM É — Conexão com Dores */}
      <section className="py-24 px-4 bg-[#f0f5f1]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-800 mb-4">
                Talvez você se identifique com isso:
              </h2>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Activity,
                title: 'Ansiedade na rotina',
                desc: 'Sente que a ansiedade está travando o seu dia a dia.'
              },
              {
                icon: Sparkles,
                title: 'Autoconhecimento',
                desc: 'Busca mais clareza para tomar decisões e se entender melhor.'
              },
              {
                icon: Heart,
                title: 'Apoio em transições',
                desc: 'Precisa de suporte para lidar com relacionamentos, luto ou mudanças.'
              },
              {
                icon: Timer,
                title: 'Agenda cheia',
                desc: 'Precisa da liberdade de fazer terapia de onde estiver, no seu tempo.'
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-100 text-center h-full hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="text-lg font-serif text-brand-800 mb-3">{item.title}</h3>
                  <p className="text-brand-900/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <p className="text-center mt-12 text-lg text-brand-900/70 font-light italic max-w-2xl mx-auto">
              Se algo aqui soou familiar, esse pode ser o momento certo para começar.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 5. JORNADA DETALHADA — Storytelling Visual */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-800 mb-4">
                Sua jornada até a sessão
              </h2>
              <p className="text-brand-900/60 max-w-xl mx-auto">
                Do primeiro clique ao alívio de estar conversando com quem entende — tudo em poucos minutos.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                icon: Search,
                title: 'Navegue',
                desc: 'Explore perfis de psicólogos especializados e encontre quem faz sentido para você.',
                color: 'bg-brand-50'
              },
              {
                step: '02',
                icon: CalendarCheck,
                title: 'Agende',
                desc: 'Veja horários reais em tempo real e escolha o melhor para a sua rotina.',
                color: 'bg-brand-100'
              },
              {
                step: '03',
                icon: CreditCard,
                title: 'Confirme',
                desc: 'Pague com Pix ou cartão em ambiente seguro e receba seu link de acesso.',
                color: 'bg-brand-50'
              },
              {
                step: '04',
                icon: MonitorPlay,
                title: 'Conecte-se',
                desc: 'No dia e horário marcados, é só clicar no link e entrar na sessão. Simples assim.',
                color: 'bg-brand-100'
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className={`${item.color} p-8 rounded-3xl h-full relative overflow-hidden`}>
                  <span className="absolute top-4 right-4 text-5xl font-serif font-bold text-brand-200/40">
                    {item.step}
                  </span>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                      <item.icon className="w-6 h-6 text-brand-600" />
                    </div>
                    <h3 className="text-xl font-serif text-brand-800 mb-3">{item.title}</h3>
                    <p className="text-brand-900/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-24 px-4 bg-brand-50">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-brand-800 mb-4">Perguntas frequentes</h2>
              <p className="text-brand-900/60 font-light italic">Respondemos de forma simples o que todo mundo quer saber.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-brand-100 rounded-2xl overflow-hidden transition-all">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-brand-50/50 transition-colors group"
                  >
                    <span className="font-bold text-brand-900 group-hover:text-brand-800 flex items-center gap-4">
                      <HelpCircle className="w-5 h-5 text-brand-400 flex-shrink-0" /> {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-brand-300 transition-transform duration-300 flex-shrink-0 ml-4 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${openFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                    <p className="px-8 pb-8 pt-2 text-brand-900/70 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. CTA FINAL */}
      <section className="py-24 px-4 bg-brand-800 text-brand-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-700 rounded-full blur-3xl opacity-30 -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-600 rounded-full blur-3xl opacity-20 -ml-32 -mb-32" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Sua mente merece esse cuidado.
            </h2>
            <p className="text-xl text-brand-200/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Encontre o psicólogo certo para você e agende sua primeira sessão em menos de 2 minutos. Sem burocracia, sem espera.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#horarios"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-brand-900 bg-white rounded-full hover:bg-brand-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                onClick={() => trackEvent('cta_final_ver_horarios')}
              >
                <CalendarCheck className="w-5 h-5 mr-3" />
                Ver Horários Disponíveis
              </a>
              <a
                href={TERAPIA_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-[#25D366] rounded-full hover:bg-[#128C7E] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                onClick={() => trackEvent('whatsapp_click_terapia')}
              >
                <WhatsAppIcon className="w-5 h-5 mr-3" />
                Falar no WhatsApp
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-bold text-brand-200/50 uppercase tracking-widest">
              <div className="flex flex-col items-center gap-2">
                <BadgeCheck className="w-5 h-5" /> CRP Verificado
              </div>
              <div className="flex flex-col items-center gap-2">
                <Lock className="w-5 h-5" /> Criptografia Total
              </div>
              <div className="flex flex-col items-center gap-2">
                <Star className="w-5 h-5" /> Avaliado por Pacientes
              </div>
              <div className="flex flex-col items-center gap-2">
                <Video className="w-5 h-5" /> Sem App para Baixar
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp href={TERAPIA_WHATSAPP_LINK} />
    </div>
  );
};

export default TerapiaOnlinePage;
