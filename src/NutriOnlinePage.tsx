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
  ArrowDown,
  Leaf,
  Zap,
  RefreshCw,
  Utensils,
  Stethoscope,
  Bell
} from 'lucide-react';
import {
  Footer,
  FadeIn,
  FloatingWhatsApp,
  trackEvent,
  WhatsAppIcon
} from './components/Shared';
import { Navbar } from './components/Navbar';
import { WHATSAPP_LINK } from './components/Shared';
import TeamCarousel from './components/TeamCarousel';
import { nutricionistas } from './data/nutricionistas';

const NUTRI_WHATSAPP_LINK = `${WHATSAPP_LINK}?text=Olá!%20Tenho%20interesse%20na%20consulta%20nutricional%20online.%20Gostaria%20de%20falar%20com%20alguém%20da%20equipe.`;

const NutriOnlinePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Por que preciso pagar antes de ter a consulta confirmada?",
      a: "O pagamento antecipado é o que garante sua vaga na agenda do nutricionista escolhido — sem ele, o horário fica sujeito a disponibilidade até você concluir a reserva. É simples, seguro e feito por um link oficial, sem risco.",
      isSecurity: false
    },
    {
      q: "Vou realmente falar com uma pessoa no WhatsApp, ou é um robô?",
      a: "Uma pessoa de verdade da nossa equipe. Ela vai entender seu momento, tirar suas dúvidas e te ajudar a escolher o nutricionista e o horário mais adequados — nada de respostas automáticas genéricas.",
      isSecurity: false
    },
    {
      q: "Como recebo o link da minha consulta no dia marcado?",
      a: "Você não precisa fazer nada. Pouco antes do horário, nosso sistema envia automaticamente o link da videochamada pra você, direto no WhatsApp ou e-mail cadastrado.",
      isSecurity: false
    },
    {
      q: "E se eu precisar remarcar depois de já ter pago?",
      a: "Sem problema — é só falar com a nossa equipe pelo WhatsApp e a gente reorganiza seu horário com a maior flexibilidade possível.",
      isSecurity: false
    },
    {
      q: "Depois da consulta, eu fico sem suporte até a próxima?",
      a: "Não. Você continua com acompanhamento tanto do seu nutricionista quanto da nossa recepção sempre que precisar — dúvidas sobre o plano, ajustes ou orientações não esperam até a próxima consulta.",
      isSecurity: false
    },
    {
      q: "É seguro pagar antes de falar com o nutricionista diretamente?",
      a: "Sim. O pagamento é feito por um link seguro após a triagem com nossa equipe, que já confirma o profissional e o horário certos pra você — o valor só garante o que já foi combinado na conversa.",
      isSecurity: true
    }
  ];

  const SHOW_NUTRI_TEAM_SECTION = true;

  return (
    <div className="min-h-screen font-sans text-brand-900 bg-brand-50 selection:bg-brand-200 selection:text-brand-900 pt-16">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-[75%_center] md:bg-center" style={{ backgroundImage: 'url(/nutri1.jpeg)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/80 via-brand-800/60 to-brand-900/80" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl">
            <FadeIn>
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand-200 uppercase bg-white/20 rounded-full">
                Nutrição Online
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
                Nutrição real, com gente de verdade <br />
                <span className="text-brand-200">te acompanhando do primeiro "oi".</span>
              </h1>
              <p className="text-lg text-brand-100/90 mb-10 leading-relaxed font-light">
                Fale agora com nossa equipe pelo WhatsApp, conte um pouco do seu momento e a gente te ajuda a encontrar o nutricionista e o horário ideais. Sem formulário, sem robô, sem enrolação.
              </p>
              <div className="space-y-4">
                <a
                  href={NUTRI_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-10 py-5 text-lg font-bold text-center text-white bg-[#25D366] rounded-full hover:bg-[#128C7E] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                  onClick={() => trackEvent('whatsapp_click')}
                >
                  <WhatsAppIcon className="w-6 h-6" />
                  Falar com a gente no WhatsApp
                </a>
                <p className="text-sm text-brand-100/80 font-light text-center md:text-left">
                  Em poucos minutos alguém da nossa equipe te responde pessoalmente — sem letra miúda, sem venda forçada.
                </p>
                <div className="flex items-center gap-2 text-sm text-brand-100/70 font-light">
                  <CheckCircle2 className="w-4 h-4 text-brand-200 flex-shrink-0" />
                  Atendimento humano · Pagamento seguro · Nutricionistas com CRN ativo
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. COMO FUNCIONA */}
      <section className="py-24 px-4 bg-brand-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-800 mb-4">
                Do primeiro contato à sua consulta, <br className="hidden md:block" />
                você nunca fica sozinho(a).
              </h2>
              <p className="text-brand-900/60 max-w-2xl mx-auto leading-relaxed mt-4">
                A gente cuida da logística, da confirmação e dos lembretes — você só precisa focar em você.
              </p>
            </FadeIn>
          </div>

          {/* Desktop — 4 Steps Horizontal */}
          <div className="hidden md:grid md:grid-cols-4 gap-6 relative">
            <div className="absolute top-16 left-[12%] right-[12%] h-0.5 bg-brand-200 z-0" />

            {[
              {
                step: '01',
                icon: MessageCircle,
                title: 'Acolhimento',
                desc: 'Chama no WhatsApp e conta como você está e o que está buscando. Nossa equipe entende seu momento e já te indica o nutricionista com o perfil mais adequado pra você.',
                human: true
              },
              {
                step: '02',
                icon: CreditCard,
                title: 'Confirmação',
                desc: 'Depois de definido o melhor dia e horário com a equipe, você faz o pagamento antecipado direto pelo link seguro — isso garante sua vaga na agenda do nutricionista.',
                human: false
              },
              {
                step: '03',
                icon: Bell,
                title: 'Lembrete',
                desc: 'Pouco antes do horário marcado, você recebe automaticamente o link da videochamada — sem precisar caçar e-mail antigo ou perguntar de novo pra ninguém.',
                human: false
              },
              {
                step: '04',
                icon: Heart,
                title: 'Acompanhamento',
                desc: 'Seu cuidado não termina quando a chamada acaba. Você continua com suporte do seu nutricionista e da nossa recepção — pra tirar dúvidas, reagendar ou ajustar.',
                human: true
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15} className="relative z-10">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-brand-100 text-center h-full">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 relative ${
                    item.human ? 'bg-brand-600' : 'bg-[#c4764d]'
                  }`}>
                    <item.icon className="w-6 h-6 text-white" />
                    <span className={`absolute -top-2 -right-2 w-6 h-6 text-xs font-bold rounded-full flex items-center justify-center ${
                      item.human ? 'bg-brand-800 text-white' : 'bg-[#994c35] text-white'
                    }`}>
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif text-brand-800 mb-3">{item.title}</h3>
                  <p className="text-brand-900/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Mobile — 4 Stacked Steps */}
          <div className="md:hidden space-y-6 relative">
            <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-brand-200" />
            {[
              {
                step: '01',
                icon: MessageCircle,
                title: 'Acolhimento',
                desc: 'Chama no WhatsApp e conte o que está buscando. Nossa equipe indica o nutricionista ideal.',
                human: true
              },
              {
                step: '02',
                icon: CreditCard,
                title: 'Confirmação',
                desc: 'Faça o pagamento seguro para garantir sua vaga na agenda do nutricionista.',
                human: false
              },
              {
                step: '03',
                icon: Bell,
                title: 'Lembrete',
                desc: 'Receba o link da videochamada automaticamente antes do horário.',
                human: false
              },
              {
                step: '04',
                icon: Heart,
                title: 'Acompanhamento',
                desc: 'Continue com suporte do nutricionista e da recepção depois da consulta.',
                human: true
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="relative z-10 pl-20">
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-brand-100">
                  <div className={`absolute left-3 w-11 h-11 rounded-xl flex items-center justify-center ${
                    item.human ? 'bg-brand-600' : 'bg-[#c4764d]'
                  }`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-bold text-brand-400 uppercase tracking-widest">Etapa {item.step}</span>
                  <h3 className="text-lg font-serif text-brand-800 mt-1 mb-2">{item.title}</h3>
                  <p className="text-brand-900/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="mt-12 text-center">
              <a
                href={NUTRI_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white bg-[#25D366] rounded-full hover:bg-[#128C7E] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                onClick={() => trackEvent('whatsapp_click')}
              >
                <WhatsAppIcon className="w-5 h-5" />
                Quero começar agora pelo WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. PROVA SOCIAL E AUTORIDADE */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-800 mb-4">
                Profissionais de verdade. <br className="hidden md:block" />
                Cuidado de verdade.
              </h2>
              <p className="text-brand-900/60 max-w-2xl mx-auto leading-relaxed mt-4">
                Sabemos que colocar sua saúde nas mãos de alguém é coisa séria. Por isso, todo nutricionista da nossa plataforma passa por um processo de seleção rigoroso antes de atender qualquer paciente.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <FadeIn delay={0.1}>
              <div className="bg-brand-50 p-8 rounded-3xl h-full">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mb-6">
                  <BadgeCheck className="w-7 h-7 text-brand-600" />
                </div>
                <h3 className="text-xl font-serif text-brand-800 mb-4">Registro ativo no CRN</h3>
                <p className="text-brand-900/70 leading-relaxed">
                  Verificamos a formação e a regularidade de cada profissional antes da aprovação. Só quem tem tudo em dia entra na nossa plataforma.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-brand-50 p-8 rounded-3xl h-full">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mb-6">
                  <Stethoscope className="w-7 h-7 text-brand-600" />
                </div>
                <h3 className="text-xl font-serif text-brand-800 mb-4">Especialistas em atendimento online</h3>
                <p className="text-brand-900/70 leading-relaxed">
                  Não é uma consulta presencial adaptada às pressas. É gente treinada para gerar resultado de verdade à distância.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-brand-50 p-8 rounded-3xl h-full">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-brand-600" />
                </div>
                <h3 className="text-xl font-serif text-brand-800 mb-4">Abordagem humanizada</h3>
                <p className="text-brand-900/70 leading-relaxed">
                  Sem terrorismo nutricional, sem listas de proibições impossíveis de seguir. Aqui o foco é reeducação alimentar sustentável, que cabe na sua vida real.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-brand-50 p-8 rounded-3xl h-full">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mb-6">
                  <MessageCircle className="w-7 h-7 text-brand-600" />
                </div>
                <h3 className="text-xl font-serif text-brand-800 mb-4">Acompanhamento contínuo</h3>
                <p className="text-brand-900/70 leading-relaxed">
                  A consulta não termina quando a chamada acaba. Você continua com suporte pelo app, no seu tempo.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Depoimento */}
          <FadeIn delay={0.5}>
            <div className="bg-brand-50 p-8 md:p-12 rounded-3xl border border-brand-100 max-w-3xl mx-auto">
              <div className="text-center">
                <Sparkles className="w-8 h-8 text-brand-400 mx-auto mb-4" />
                <p className="text-lg md:text-xl font-serif text-brand-800 italic leading-relaxed mb-6">
                  "Depois de anos tentando dietas malucas, finalmente encontrei uma nutricionista que me ouviu e montou um plano que eu realmente consigo seguir."
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Trust Badges */}
          <FadeIn delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 py-8 border-y border-brand-200 mt-12">
              {[
                { icon: BadgeCheck, text: 'CRN ativo verificado' },
                { icon: Stethoscope, text: 'Especialistas em atendimento online' },
                { icon: Heart, text: 'Abordagem humanizada' },
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

      {/* 4. PARA QUEM É — 6 Cards */}
      <section className="py-24 px-4 bg-[#f0f5f1]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-800 mb-4">
                Feito para quem vive <br className="hidden md:block" />
                a vida real.
              </h2>
              <p className="text-brand-900/60 max-w-2xl mx-auto leading-relaxed mt-4">
                Não importa se sua rotina é corrida, se você já tentou de tudo ou se só quer se sentir melhor no dia a dia. Tem um nutricionista aqui pra te ajudar a chegar lá — sem regras impossíveis.
              </p>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: 'Se a sua rotina não para',
                desc: 'Consultas rápidas de agendar e sem deslocamento. Cabe entre uma reunião e outra.'
              },
              {
                icon: Utensils,
                title: 'Se você quer emagrecer sem passar fome',
                desc: 'Nada de dietas restritivas. Um plano alimentar equilibrado, gostoso e possível de seguir.'
              },
              {
                icon: RefreshCw,
                title: 'Se você já viveu o efeito sanfona',
                desc: 'Chega de perder peso rápido e recuperar tudo depois. Aqui o foco é resultado que se sustenta no tempo.'
              },
              {
                icon: Zap,
                title: 'Se você quer mais disposição',
                desc: 'Alimentação também é energia. Sinta a diferença fora da balança.'
              },
              {
                icon: Leaf,
                title: 'Se sua digestão pede ajuda',
                desc: 'Inchaço, desconforto, intestino preso — muita coisa começa (e se resolve) no prato.'
              },
              {
                icon: ShieldCheck,
                title: 'Se você já se cansou de ser julgado',
                desc: 'Sem culpa, sem cobrança, sem terrorismo nutricional. Aqui você é ouvido antes de ser orientado.'
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-100 h-full hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="text-lg font-serif text-brand-800 mb-3">{item.title}</h3>
                  <p className="text-brand-900/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <div className="mt-12 text-center">
              <a
                href={NUTRI_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white bg-[#25D366] rounded-full hover:bg-[#128C7E] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                onClick={() => trackEvent('whatsapp_click')}
              >
                <WhatsAppIcon className="w-5 h-5" />
                Falar com a gente no WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. TEAM SECTION */}
      {SHOW_NUTRI_TEAM_SECTION && (
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-brand-600 uppercase bg-brand-100 rounded-full">
                Nosso Time
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-800 mb-4">
                Nutricionistas de verdade, <br className="hidden md:block" />
                <span className="text-brand-400">prontos pra te guiar.</span>
              </h2>
              <p className="text-brand-900/60 max-w-2xl mx-auto leading-relaxed">
                Cada um dos nossos nutricionistas foi escolhido a dedo — não só pela qualificação técnica, mas pela forma humana de acolher. Você não precisa escolher sozinho: no WhatsApp, ajudamos a encontrar quem mais combina com o que você está buscando.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <p className="text-center text-sm text-brand-500 mb-10 italic">
              Alguns dos profissionais do nosso time 👇
            </p>
          </FadeIn>

          <TeamCarousel psychologists={nutricionistas as any} />

          <FadeIn delay={0.3}>
            <div className="mt-16 text-center">
              <p className="text-brand-900/60 mb-6 font-light italic max-w-xl mx-auto">
                Ainda não decidiu? A gente te ajuda a encontrar o match certo
              </p>
              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Oi! Vi o time de nutricionistas no site e gostaria de ajuda para encontrar quem combina comigo 😊')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click')}
                className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-[#c4764d] border-2 border-[#c4764d] rounded-full hover:bg-[#c4764d] hover:text-white transition-all shadow-lg"
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

      {/* 6. FAQ */}
      <section className="py-24 px-4 bg-brand-50">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-brand-800 mb-4">Ainda com dúvidas?</h2>
              <p className="text-brand-900/60 font-light italic">A gente responde.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-brand-100 rounded-2xl overflow-hidden transition-all">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-brand-50/50 transition-colors group"
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
                  Sua saúde merece gente de verdade cuidando de você.
                </h2>
                <p className="text-xl text-brand-200/80 mb-10 max-w-lg font-light leading-relaxed text-left">
                  Chega de adiar. Fale com nossa equipe agora e comece sua reeducação alimentar sem culpa, sem terrorismo nutricional e sem complicação.
                </p>
                <div className="flex flex-col sm:flex-row justify-start gap-4">
                  <a
                    href={NUTRI_WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white bg-[#25D366] rounded-full hover:bg-[#128C7E] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                    onClick={() => trackEvent('whatsapp_click')}
                  >
                    <WhatsAppIcon className="w-6 h-6" />
                    Falar com a gente no WhatsApp
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right: WhatsApp Mockup */}
            <div className="flex justify-center md:justify-end">
              <FadeIn delay={0.3}>
                <div className="bg-[#e5ddd5] rounded-3xl shadow-2xl overflow-hidden max-w-sm w-full">
                  <div className="bg-[#075e54] px-6 py-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-sm font-bold text-white">BA</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Bhruna Azevedo</p>
                      <p className="text-xs text-white/70">online agora</p>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex justify-start">
                      <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm">
                        <p className="text-sm text-brand-900">Oi! Vamos encontrar o nutricionista ideal pra você. Me conta: o que te trouxe aqui hoje? 😊</p>
                        <p className="text-[10px] text-brand-400 text-right mt-1">09:14</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-[#dcf8c6] px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm">
                        <p className="text-sm text-brand-900">Quero emagrecer de forma saudável e parar com o efeito sanfona...</p>
                        <p className="text-[10px] text-brand-400 text-right mt-1">09:15</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm">
                        <p className="text-sm text-brand-900">Entendo perfeitamente. Tenho uma nutricionista especializada em reeducação alimentar com horário amanhã às 14h. Topa?</p>
                        <p className="text-[10px] text-brand-400 text-right mt-1">09:16</p>
                      </div>
                    </div>
                  </div>
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

          {/* Trust Badges */}
          <FadeIn delay={0.5}>
            <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-bold text-brand-200/50 uppercase tracking-widest">
              <div className="flex flex-col items-center text-center gap-2">
                <BadgeCheck className="w-5 h-5" /> CRN Verificado
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Lock className="w-5 h-5" /> Criptografia Total
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Star className="w-5 h-5" /> Avaliado por Pacientes
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Users className="w-5 h-5" /> Equipe Humana
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp href={NUTRI_WHATSAPP_LINK} />
    </div>
  );
};

export default NutriOnlinePage;
