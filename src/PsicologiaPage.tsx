import React, { useEffect } from 'react';
import { 
  CheckCircle2, 
  ChevronRight, 
  Heart, 
  Clock, 
  ShieldCheck, 
  Star,
  Brain,
  Award,
  Users,
  MessageSquare,
  Activity,
  Smile,
  Zap,
  Layout,
  Calendar
} from 'lucide-react';
import { 
  Footer, 
  FadeIn, 
  FloatingWhatsApp, 
  trackEvent,
  WhatsAppIcon
} from './components/Shared';
import { Navbar } from './components/Navbar';

const PSICO_WHATSAPP_LINK = "https://wa.me/5531991422212?text=Olá!%20Tenho%20interesse%20no%20atendimento%20psicológico%20e%20neuropsicológico.%20Queria%20mais%20informações";

const PsicologiaPage = () => {
  useEffect(() => {
    // Calendly script injection
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Event listener for Calendly
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event && e.data.event === 'calendly.event_scheduled') {
        trackEvent('schedule_appointment');
      }
    };

    window.addEventListener('message', handleCalendlyEvent);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, []);

  return (
    <div className="min-h-screen font-sans text-brand-900 bg-brand-50 selection:bg-brand-200 selection:text-brand-900 pt-16">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="w-full md:w-[50%] p-6 md:p-12 z-20">
            <FadeIn>
              <span className="text-brand-500 font-sans tracking-widest uppercase text-xs md:text-sm font-bold mb-4 block">
                Saúde Emocional, Cognição e Qualidade de Vida
              </span>
              <h1 className="text-4xl md:text-6xl font-serif text-brand-800 mb-6 leading-tight">
                Cuidado integrado para <br />
                <span className="text-brand-400 font-light">adultos e idosos.</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-900/70 mb-10 leading-relaxed font-light">
                Atendimento humanizado, técnico e acolhedor focado em avaliação neuropsicológica e saúde emocional para promover autonomia e bem-estar no seu cotidiano.
              </p>
              <div className="space-y-4">
                <a 
                  href={PSICO_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click')}
                  className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 text-lg font-bold text-white bg-[#25D366] rounded-full hover:bg-[#128C7E] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <WhatsAppIcon className="w-6 h-6 mr-3" />
                  Agendar Consulta
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[50%] relative h-[400px] md:h-[90vh]">
            <FadeIn delay={0.3} className="h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 md:block hidden" />
              <img 
                src="/psy.jpeg" 
                alt="Atendimento Psicológico" 
                className="w-full h-full object-cover"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-24 px-4 bg-brand-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-800 mb-4">Especialidades e Serviços</h2>
              <p className="text-brand-900/60 max-w-2xl mx-auto italic">
                Um olhar integrado entre cognição e saúde emocional para compreender suas necessidades.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Avaliação Neuropsicológica */}
            <FadeIn delay={0.2} className="bg-white p-8 rounded-3xl shadow-sm border border-brand-100">
              <div className="w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-2xl font-serif text-brand-800 mb-4">Avaliação Neuropsicológica</h3>
              <p className="text-brand-900/70 mb-6 leading-relaxed">
                Investigação técnica do funcionamento cognitivo, emocional e comportamental. Indicada para dificuldades de memória, atenção, suspeita de TDAH e alterações cognitivas em idosos.
              </p>
              <ul className="space-y-3">
                {[
                  "Anamnese clínica detalhada",
                  "Aplicação de testes validados",
                  "Análise técnica profunda",
                  "Entrega de laudo/relatório",
                  "Sessão de devolutiva"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brand-900/80">
                    <CheckCircle2 className="w-5 h-5 text-brand-400 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Atendimento Emocional Breve */}
            <FadeIn delay={0.4} className="bg-white p-8 rounded-3xl shadow-sm border border-brand-100">
              <div className="w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-2xl font-serif text-brand-800 mb-4">Atendimento Emocional Breve</h3>
              <p className="text-brand-900/70 mb-6 leading-relaxed">
                Focado em acolhimento e suporte para demandas pontuais. Ideal para manejo de estresse, ansiedade e fortalecimento do bem-estar psicológico em momentos de mudança.
              </p>
              <ul className="space-y-3">
                {[
                  "Acolhimento humanizado",
                  "Escuta clínica qualificada",
                  "Foco em demandas específicas",
                  "Fortalecimento emocional",
                  "Promoção de autocuidado"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brand-900/80">
                    <CheckCircle2 className="w-5 h-5 text-brand-400 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. PARTNER SECTION */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative">
                <div className="aspect-[4/5] rounded-t-full overflow-hidden shadow-2xl">
                  <img src="/roseli.jpeg" alt="Roseli Santos" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-brand-50 p-6 rounded-2xl shadow-xl border border-brand-100 hidden md:block">
                  <Award className="w-12 h-12 text-brand-600 mb-2" />
                  <p className="text-brand-800 font-serif font-bold">Roseli Santos</p>
                  <p className="text-xs text-brand-500 uppercase tracking-widest">Psicóloga & Neuropsicóloga</p>
                </div>
              </div>
            </FadeIn>
            <div className="space-y-6">
              <FadeIn delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-serif text-brand-800">Atendimento Humanizado e Individualizado</h2>
                <p className="text-brand-900/70 leading-relaxed">
                  Profissional com atuação na área de saúde emocional e qualidade de vida. O trabalho integra escuta qualificada, avaliação clínica e orientação para compreender dificuldades cognitivas e emocionais que impactam a funcionalidade e o bem-estar.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    { icon: Heart, text: "Acolhimento" },
                    { icon: ShieldCheck, text: "Ética Técnica" },
                    { icon: Users, text: "Adultos e Idosos" },
                    { icon: Activity, text: "Foco em Bem-estar" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-brand-50 rounded-xl">
                      <item.icon className="w-5 h-5 text-brand-600" />
                      <span className="text-sm font-medium text-brand-800">{item.text}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MODALITIES & PACKAGES */}
      <section className="py-24 px-4 bg-brand-900 text-brand-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-800 rounded-full blur-3xl opacity-20 -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-700 rounded-full blur-3xl opacity-20 -ml-32 -mb-32" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif mb-4">Modalidades de Cuidado</h2>
              <p className="text-brand-200/70 max-w-2xl mx-auto">
                Opções flexíveis para garantir que você receba o suporte necessário.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.2} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <Layout className="w-8 h-8 text-brand-200 mb-6" />
              <h3 className="text-xl font-serif mb-4">Presencial & Online</h3>
              <p className="text-brand-200/70 text-sm leading-relaxed">
                Atendimentos presenciais em ambiente acolhedor ou consultas online, conforme a modalidade do serviço e sua necessidade.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <Clock className="w-8 h-8 text-brand-200 mb-6" />
              <h3 className="text-xl font-serif mb-4">Pacotes Breves</h3>
              <p className="text-brand-200/70 text-sm leading-relaxed">
                Acompanhamento focal (ex: 4 encontros) voltado para organização emocional, manejo de estresse e suporte em demandas pontuais.
              </p>
            </FadeIn>

            <FadeIn delay={0.6} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <Smile className="w-8 h-8 text-brand-200 mb-6" />
              <h3 className="text-xl font-serif mb-4">Qualidade de Vida</h3>
              <p className="text-brand-200/70 text-sm leading-relaxed">
                Trabalho focado no envelhecimento saudável e na manutenção da autonomia através do monitoramento cognitivo e suporte emocional.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. BOOKING SECTION */}
      <section id="agendamento" className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <FadeIn>
            <div className="inline-block p-3 bg-brand-50 rounded-full mb-6">
              <Calendar className="w-6 h-6 text-brand-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-800 mb-6">Agende sua Sessão</h2>
            <p className="text-lg text-brand-900/70 max-w-2xl mx-auto">
              Selecione o serviço desejado e escolha o melhor horário para o seu atendimento exclusivo com Roseli Santos.
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
              href={PSICO_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click')}
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-white bg-brand-800 rounded-full hover:bg-brand-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <WhatsAppIcon className="w-5 h-5 mr-3" />
              Falar com Roseli Santos via WhatsApp
            </a>
          </div>
        </FadeIn>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default PsicologiaPage;
