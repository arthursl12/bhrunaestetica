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
  Heart,
  Timer,
  MessageCircle,
  Lock,
  HelpCircle,
  Sparkles,
  BadgeCheck,
  Activity,
  Users,
  ArrowRight,
  ArrowDown
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
import TeamCarousel from './components/TeamCarousel';
import { psychologists } from './data/psychologists';

const TERAPIA_WHATSAPP_LINK = `${WHATSAPP_LINK}?text=Olá!%20Tenho%20interesse%20na%20terapia%20online.%20Gostaria%20de%20saber%20mais%20informações.`;

const TerapiaOnlinePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Como escolho meu horário?",
      a: "Você não precisa escolher sozinho. Nossa equipe conversa com você pelo WhatsApp, entende sua rotina e cruza com a agenda do profissional ideal — encontrando juntos o melhor horário possível.",
      isSecurity: false
    },
    {
      q: "Como vou receber o link da consulta?",
      a: "De forma automática e segura. Assim que seu horário é confirmado, nosso sistema cuida de tudo: o link chega no seu celular próximo ao horário da sessão, sem que você precise pedir ou lembrar.",
      isSecurity: false
    },
    {
      q: "Quando é feito o pagamento?",
      a: "O pagamento é feito no momento do agendamento, durante a conversa com nossa equipe, para garantir e reservar seu horário com o profissional escolhido.",
      isSecurity: false
    },
    {
      q: "É seguro conversar pelo WhatsApp?",
      a: "Sim. Nossa equipe segue o mesmo compromisso de sigilo profissional em toda a conversa, e nenhuma informação sensível sobre sua sessão é compartilhada fora do ambiente seguro da videochamada.",
      isSecurity: true
    },
    {
      q: "E se eu precisar remarcar?",
      a: "É só avisar nossa equipe pelo WhatsApp, com a maior antecedência possível — vamos te ajudar a encontrar um novo horário sem burocracia.",
      isSecurity: false
    }
  ];

  const SHOW_TEAM_SECTION = true; // Toggle to false to hide, true to show

  return (
    <div className="min-h-screen font-sans text-brand-900 bg-brand-50 selection:bg-brand-200 selection:text-brand-900 pt-16">
      <Navbar />

      {/* 1. HERO SECTION — Acolhimento + WhatsApp */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Imagem full-screen */}
        <div className="absolute inset-0 bg-cover bg-[75%_center] md:bg-center" style={{ backgroundImage: 'url(/terapia1.jpeg)' }} />
        {/* Overlay escuro para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/80 via-brand-800/60 to-brand-900/80" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl">
            <FadeIn>
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand-200 uppercase bg-white/20 rounded-full">
                Terapia Online
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
                Você não precisa procurar <br />
                <span className="text-brand-200">sozinho.</span>
              </h1>
              <p className="text-xl md:text-2xl font-serif text-brand-100 mb-6 leading-relaxed">
                A gente encontra o psicólogo certo para você.
              </p>
              <p className="text-lg text-brand-100/90 mb-10 leading-relaxed font-light">
                Fale com nossa equipe pelo WhatsApp e, em poucos minutos, encontramos o terapeuta ideal e o melhor horário para a sua rotina. Sem plataforma, sem formulário, sem decisão difícil.
              </p>
              <div className="space-y-4">
                <a
                  href={TERAPIA_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                   className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-10 py-5 text-lg font-bold text-center text-white bg-[#25D366] rounded-full hover:bg-[#128C7E] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                  onClick={() => trackEvent('whatsapp_click_terapia_hero')}
                >
                  <WhatsAppIcon className="w-6 h-6" />
                  Falar com Nossa Equipe no WhatsApp
                </a>
                <div className="flex items-center gap-2 text-sm text-brand-100/80 font-light">
                  <Lock className="w-4 h-4 text-brand-200" />
                  Atendimento humano, acolhedor e 100% confidencial.
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. COMO FUNCIONA — Jornada em 3 Passos */}
      <section className="py-24 px-4 bg-brand-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-800 mb-4">
                Simples assim: você fala com a gente, <br className="hidden md:block" />
                a gente cuida do resto.
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
                icon: MessageCircle,
                title: 'O Acolhimento',
                desc: 'Fale com uma pessoa de verdade. Clique e converse com nossa equipe no WhatsApp. Vamos entender sua rotina e o que você está buscando, para encontrar o terapeuta e o horário ideais — sem pressa e sem julgamento.',
                highlight: true
              },
              {
                step: '02',
                icon: CreditCard,
                title: 'A Confirmação',
                desc: 'Garanta sua vaga. Com tudo definido, você realiza o pagamento de forma segura para confirmar seu horário na agenda do especialista escolhido.',
                highlight: false
              },
              {
                step: '03',
                icon: Clock,
                title: 'A Sessão Descomplicada',
                desc: 'É só clicar e entrar. No dia da sua sessão, o link seguro da videochamada chega automaticamente no seu celular. Você não precisa lembrar de nada — a gente avisa.',
                highlight: false
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.2} className="relative z-10">
                <div className={`p-8 rounded-3xl text-center h-full ${
                  item.highlight
                    ? 'bg-white shadow-lg border-2 border-brand-300'
                    : 'bg-white shadow-sm border border-brand-100'
                }`}>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 relative ${
                    item.highlight ? 'bg-brand-600' : 'bg-brand-100'
                  }`}>
                    <item.icon className={`w-7 h-7 ${item.highlight ? 'text-white' : 'text-brand-600'}`} />
                    <span className={`absolute -top-2 -right-2 w-7 h-7 text-xs font-bold rounded-full flex items-center justify-center ${
                      item.highlight ? 'bg-brand-800 text-white' : 'bg-brand-600 text-white'
                    }`}>
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
                icon: MessageCircle,
                title: 'O Acolhimento',
                desc: 'Fale com uma pessoa de verdade pelo WhatsApp. Vamos entender sua rotina e encontrar o terapeuta ideal.',
                highlight: true
              },
              {
                step: '02',
                icon: CreditCard,
                title: 'A Confirmação',
                desc: 'Com tudo definido, confirme seu horário com pagamento seguro.',
                highlight: false
              },
              {
                step: '03',
                icon: Clock,
                title: 'A Sessão Descomplicada',
                desc: 'O link chega no seu celular. É só clicar e entrar.',
                highlight: false
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15} className="relative z-10 pl-20">
                <div className={`p-6 rounded-2xl ${
                  item.highlight
                    ? 'bg-white shadow-lg border-2 border-brand-300'
                    : 'bg-white shadow-sm border border-brand-100'
                }`}>
                  <div className={`absolute left-3 w-11 h-11 rounded-xl flex items-center justify-center ${
                    item.highlight ? 'bg-brand-600' : 'bg-brand-100'
                  }`}>
                    <item.icon className={`w-5 h-5 ${item.highlight ? 'text-white' : 'text-brand-600'}`} />
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

      {/* 3. VOCÊ NUNCA ESTÁ SOZINHO */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif text-brand-800 mb-8 leading-tight">
                Do primeiro "Oi" até depois da sua sessão, <span className="text-brand-400">você não está sozinho.</span>
              </h2>
              <div className="space-y-5 text-brand-900/70 leading-relaxed">
                <p>
                  Sabemos que dar o primeiro passo já exige coragem — por isso, você não vai lidar com telas, formulários ou robôs sozinho.
                </p>
                <p>
                  Desde a nossa primeira conversa no WhatsApp, alguém da nossa equipe está com você: para tirar dúvidas, ajustar horários se algo mudar, e te acompanhar mesmo depois que a sessão começar com seu terapeuta.
                </p>
                <p className="font-medium text-brand-800">
                  Aqui, cuidar de você é o trabalho de uma equipe inteira — não só de um sistema.
                </p>
              </div>
            </FadeIn>

            {/* Mapa visual da jornada */}
            <FadeIn delay={0.2}>
              <div className="bg-brand-50 p-5 md:p-8 rounded-3xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-4">
                  {/* Recepção */}
                  <div className="text-center flex-1">
                    <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <MessageCircle className="w-7 h-7 text-brand-600" />
                    </div>
                    <p className="text-sm font-bold text-brand-800">Recepção</p>
                    <p className="text-xs text-brand-500 mt-1">Equipe de acolhimento</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-brand-300 flex-shrink-0 hidden md:block" />
                  <ArrowDown className="w-5 h-5 text-brand-300 flex-shrink-0 self-center md:hidden" />
                  {/* Terapeuta */}
                  <div className="text-center flex-1">
                    <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Video className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-sm font-bold text-brand-800">Terapeuta</p>
                    <p className="text-xs text-brand-500 mt-1">Sua sessão</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-brand-300 flex-shrink-0 hidden md:block" />
                  <ArrowDown className="w-5 h-5 text-brand-300 flex-shrink-0 self-center md:hidden" />
                  {/* Recepção novamente */}
                  <div className="text-center flex-1">
                    <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-7 h-7 text-brand-600" />
                    </div>
                    <p className="text-sm font-bold text-brand-800">Acompanhamento</p>
                    <p className="text-xs text-brand-500 mt-1">Continuidade do cuidado</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-brand-200 text-center">
                  <p className="text-sm text-brand-900/60 italic">
                    Um ciclo de cuidado completo — do início ao depois.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. PROVA SOCIAL E SEGURANÇA — Trust Bar */}
      <section className="py-24 px-4 bg-brand-50">
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
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-100 h-full">
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
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-100 h-full">
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 py-8 border-y border-brand-200">
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

      {/* 5. PARA QUEM É — Conexão com Dores */}
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

      {SHOW_TEAM_SECTION && (
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <FadeIn>
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-brand-600 uppercase bg-brand-100 rounded-full">
                Nosso Time
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-800 mb-4">
                Um time de verdade, <br className="hidden md:block" />
                <span className="text-brand-400">pronto para te acolher.</span>
              </h2>
              <p className="text-brand-900/60 max-w-2xl mx-auto leading-relaxed">
                Cada um dos nossos psicólogos foi escolhido a dedo — não só pela qualificação técnica, mas pela forma humana de acolher. Você não precisa escolher sozinho: no WhatsApp, ajudamos a encontrar quem mais combina com o que você está vivendo agora.
              </p>
            </FadeIn>
          </div>

          {/* Microtexto contextual */}
          <FadeIn delay={0.1}>
            <p className="text-center text-sm text-brand-500 mb-10 italic">
              Alguns dos profissionais do nosso time 👇
            </p>
          </FadeIn>

          {/* Carousel */}
          <TeamCarousel psychologists={psychologists} />

          {/* Fallback CTA */}
          <FadeIn delay={0.3}>
            <div className="mt-16 text-center">
              <p className="text-brand-900/60 mb-6 font-light italic max-w-xl mx-auto">
                Ainda não decidiu? A gente te ajuda a encontrar o match certo
              </p>
              <a 
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Oi! Vi o time de psicólogos no site e gostaria de ajuda para encontrar quem combina comigo 😊')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click_team_fallback')}
                className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-[#25D366] border-2 border-[#25D366] rounded-full hover:bg-[#25D366] hover:text-white transition-all shadow-lg"
              >
                <WhatsAppIcon className="w-5 h-5 mr-3" />
                Falar com a equipe para me ajudar a escolher
              </a>
              <p className="mt-4 text-sm text-brand-900/50 font-light">
                Conte um pouco do que você está buscando e encontramos quem combina.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
      )}

      {/* 7. FAQ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-brand-800 mb-4">Perguntas frequentes</h2>
              <p className="text-brand-900/60 font-light italic">Respondemos de forma simples o que todo mundo quer saber.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-brand-50 border border-brand-100 rounded-2xl overflow-hidden transition-all">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-brand-100/50 transition-colors group"
                  >
                    <span className="font-bold text-brand-900 group-hover:text-brand-800 flex items-center gap-4">
                      {faq.isSecurity ? (
                        <Lock className="w-5 h-5 text-brand-600 flex-shrink-0" />
                      ) : (
                        <HelpCircle className="w-5 h-5 text-brand-400 flex-shrink-0" />
                      )}
                      {faq.q}
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

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6 items-center">
            {/* Left: CTA Content */}
            <div className="md:pr-4">
              <FadeIn>
                <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight text-left">
                  Sua mente merece esse cuidado.
                </h2>
                <p className="text-xl text-brand-200/80 mb-10 max-w-lg font-light leading-relaxed text-left">
                  Fale com nossa equipe e encontre o psicólogo certo para você — sem burocracia, sem espera.
                </p>
                <div className="flex flex-col sm:flex-row justify-start gap-4">
                  <a
                    href={TERAPIA_WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-[#25D366] rounded-full hover:bg-[#128C7E] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                    onClick={() => trackEvent('whatsapp_click_terapia_final')}
                  >
<WhatsAppIcon className="w-6 h-6 mr-3 self-center" />
                    Falar com Nossa Equipe no WhatsApp
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right: WhatsApp Mockup */}
            <div className="flex justify-center md:justify-end">
              <FadeIn delay={0.3}>
                <div className="bg-[#e5ddd5] rounded-3xl shadow-2xl overflow-hidden max-w-sm w-full">
                  {/* WhatsApp-style header */}
                  <div className="bg-[#075e54] px-6 py-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-sm font-bold text-white">BA</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Bhruna Azevedo</p>
                      <p className="text-xs text-white/70">online agora</p>
                    </div>
                  </div>
                  {/* Chat bubbles */}
                  <div className="p-4 space-y-3">
                    {/* Received message */}
                    <div className="flex justify-start">
                      <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm">
                        <p className="text-sm text-brand-900">Oi! Vamos encontrar o profissional ideal para você. Para começar, me conta: o que te trouxe aqui hoje? 😊</p>
                        <p className="text-[10px] text-brand-400 text-right mt-1">09:14</p>
                      </div>
                    </div>
                    {/* Sent message */}
                    <div className="flex justify-end">
                      <div className="bg-[#dcf8c6] px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm">
                        <p className="text-sm text-brand-900">Estou me sentindo muito ansiosa ultimamente...</p>
                        <p className="text-[10px] text-brand-400 text-right mt-1">09:15</p>
                      </div>
                    </div>
                    {/* Received message */}
                    <div className="flex justify-start">
                      <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm">
                        <p className="text-sm text-brand-900">Entendo. Vou te ajudar com isso. Tenho uma psicóloga especializada em ansiedade com horário amanhã às 10h. Topa?</p>
                        <p className="text-[10px] text-brand-400 text-right mt-1">09:16</p>
                      </div>
                    </div>
                  </div>
                  {/* Input bar */}
                  <div className="bg-[#f0f0f0] px-4 py-3 flex items-center gap-3">
                    <div className="flex-1 bg-white rounded-full px-4 py-2">
                      <p className="text-sm text-brand-300">Digite sua mensagem...</p>
                    </div>
                    <div className="w-10 h-10 bg-[#075e54] rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Trust Badges — Full width below grid */}
          <FadeIn delay={0.5}>
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
                <Users className="w-5 h-5" /> Equipe Humana
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
