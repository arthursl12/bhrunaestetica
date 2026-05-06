import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Home, 
  Plus, 
  User, 
  Droplets, 
  Zap, 
  Clock, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  Briefcase, 
  MessageSquare, 
  Stethoscope, 
  Heart, 
  Activity, 
  ClipboardCheck, 
  Package, 
  Users,
  ChevronRight,
  Star,
  Smartphone
} from 'lucide-react';
import { 
  Navbar, 
  Footer, 
  FadeIn, 
  FloatingWhatsApp, 
  trackEvent,
  WhatsAppIcon,
  WHATSAPP_LINK
} from './components/Shared';

const POS_OP_WHATSAPP_LINK = "https://wa.me/5531991422212?text=Olá!%20Tenho%20interesse%20no%20atendimento%20pós-operatório%20a%20domicílio.%20Pode%20me%20ajudar?";

const PosOperatorioPage = () => {
  return (
    <div className="min-h-screen font-sans text-brand-900 bg-white selection:bg-brand-200 selection:text-brand-900 pt-16">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col md:flex-row overflow-hidden bg-white">
        {/* Mobile: Image on top, Desktop: Image on left */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative order-1 md:order-1">
          <img 
            src="/domic_hero.jpeg" 
            alt="Atendimento Pós-Operatório" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-white z-10" />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex items-center p-8 md:p-16 z-20 order-2 md:order-2 bg-white">
          <FadeIn>
            <span className="text-brand-500 font-sans tracking-widest uppercase text-xs md:text-sm font-bold mb-4 block">
              Pós-operatório especializado a domicílio em Belo Horizonte
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-brand-800 mb-6 leading-tight">
              Você investiu na sua transformação. <br className="hidden md:block" />
              <span className="text-brand-400 font-light italic">A recuperação merece o mesmo cuidado.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-900/70 mb-10 leading-relaxed font-light max-w-xl">
              Drenagem linfática, Taping, Ventosaterapia e massagem terapêutica pós-cirúrgica com estrutura profissional completa. Sem deslocamento, sem desconforto, sem risco. A Bhruna Estética vai até você.
            </p>
            <div className="space-y-6">
              <a 
                href={POS_OP_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click_pos_hero')}
                className="inline-flex items-center justify-center w-full md:w-auto px-10 py-5 text-xl font-bold text-white bg-brand-800 rounded-full hover:bg-brand-900 transition-all shadow-2xl transform hover:-translate-y-1"
              >
                <WhatsAppIcon className="w-6 h-6 mr-3" />
                Quero Iniciar Minha Recuperação em Casa
              </a>
              <div className="flex flex-wrap gap-4 text-xs text-brand-900/50 font-medium uppercase tracking-wider">
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-brand-400" /> Materiais esterilizados</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-brand-400" /> Protocolo pós-cirúrgico</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-brand-400" /> Atendemos BH e RMBH</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Decorative Curve for Desktop */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-15 pointer-events-none">
          <svg width="100" height="800" viewBox="0 0 100 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 0C44.7715 0 0 44.7715 0 100V700C0 755.228 44.7715 800 100 800" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Anchor Bar */}
      <div className="hidden md:flex bg-brand-50 border-y border-brand-100 py-6 justify-center gap-16 text-brand-800">
        <div className="flex items-center gap-3">
          <Stethoscope className="w-6 h-6 text-brand-400" />
          <span className="font-serif font-medium">Protocolo Clínico</span>
        </div>
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-brand-400" />
          <span className="font-serif font-medium">Segurança Total</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Home className="w-6 h-6 text-brand-400" />
            <Plus className="w-3 h-3 text-brand-400 absolute -top-1 -right-1" />
          </div>
          <span className="font-serif font-medium">Home Care Especializado</span>
        </div>
      </div>

      {/* 2. BLOCO DE IDENTIFICAÇÃO — As Dores */}
      <section className="py-24 px-4 bg-brand-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-800 mb-6">Recém-saída da cirurgia, o último lugar onde você deveria estar é no trânsito de BH.</h2>
              <p className="text-lg text-brand-900/70 max-w-4xl mx-auto leading-relaxed font-light">
                Mas é exatamente isso que a maioria das clínicas pede: que você vista sua cinta compressora, sente no carro ainda com inchaço e dores, enfrente os buracos e as paradas do caminho — para chegar a um atendimento que poderia ter acontecido no conforto da sua cama.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "O aperto da cinta que não passa",
                desc: "Sensação de sufocamento constante que acompanha cada movimento do dia.",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 2c0 0-2 4-2 10s2 10 2 10M17 2c0 0 2 4 2 10s-2 10-2 10M5 10h14M5 14h14" />
                  </svg>
                )
              },
              {
                title: "O inchaço que parece não diminuir",
                desc: "A ansiedade de não ver o resultado que o cirurgião prometeu.",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" strokeDasharray="2 2" />
                    <circle cx="12" cy="12" r="3" strokeDasharray="1 1" />
                  </svg>
                )
              },
              {
                title: "O medo de uma fibrose aparecer",
                desc: "A dúvida sobre cada endurecimento que você toca e não sabe se é normal.",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                )
              },
              {
                title: "Sair de casa dói mais do que ficar",
                desc: "Cada solavanco no caminho para a clínica é um sofrimento desnecessário.",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                    <line x1="1" y1="10" x2="23" y2="10" strokeDasharray="4 4" />
                  </svg>
                )
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-2xl border border-brand-100 shadow-sm hover:shadow-md transition-all h-full group">
                  <div className="w-12 h-12 text-brand-300 mb-6 group-hover:text-brand-500 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-800 mb-3 leading-tight">{item.title}</h3>
                  <p className="text-brand-900/60 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <p className="text-center text-2xl text-brand-600 max-w-3xl mx-auto font-serif italic leading-relaxed">
              "Você não precisa escolher entre cuidado profissional e conforto. A Bhruna Estética resolve os dois — sem que você saia do lugar."
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3. A SOLUÇÃO — Recuperação VIP em Casa */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-800 mb-4">Apresentamos: Recuperação VIP a Domicílio.</h2>
              <h3 className="text-xl text-brand-500 font-sans font-medium mb-8">A estrutura técnica de uma clínica especializada — dentro do seu quarto.</h3>
              
              <div className="space-y-8 mb-10">
                {[
                  { 
                    t: "Maca profissional articulada", 
                    st: "Equipamento clínico de reabilitação, não doméstico", 
                    d: "Permite posicionamento seguro para tecido pós-cirúrgico" 
                  },
                  { 
                    t: "Materiais esterilizados e descartáveis", 
                    st: "Lençóis, luvas e insumos trocados a cada atendimento", 
                    d: "Zero risco de contaminação cruzada" 
                  },
                  { 
                    t: "EPIs de procedimento completos", 
                    st: "Máscara, avental e luvas de procedimento sempre presentes", 
                    d: "Protocolo de biossegurança em cada sessão" 
                  },
                  { 
                    t: "Óleos e cremes pós-cirúrgicos específicos", 
                    st: "Formulações compatíveis com tecido em cicatrização", 
                    d: "Não usamos produtos comuns de spa ou estética geral" 
                  },
                  { 
                    t: "Terapeuta com formação em reabilitação estética", 
                    st: "Protocolo adaptado ao tipo e fase de cada cirurgia", 
                    d: "Avaliação técnica antes de cada sessão" 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-brand-800">{item.t}</h4>
                      <p className="text-brand-500 text-sm font-medium">{item.st}</p>
                      <p className="text-brand-900/50 text-xs">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-sm text-brand-900/40 italic border-t border-brand-100 pt-6">
                "Cada sessão é preparada como se fosse a mais importante da sua recuperação — porque é."
              </p>
            </FadeIn>
          </div>
          
          <div className="order-1 lg:order-2">
            <FadeIn delay={0.2}>
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="/domic_spaemcasa.jpeg" 
                  alt="Estrutura de clínica em casa" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-brand-900/10" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. GRADE DE SERVIÇOS TÉCNICOS */}
      <section className="py-24 px-4 bg-brand-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-800 mb-6">Serviços Técnicos Especializados</h2>
              <p className="text-lg text-brand-900/70 max-w-2xl mx-auto font-light">
                Atendemos todas as fases do pós-operatório de lipo, abdominoplastia e mamoplastia com protocolos adaptados.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "DRENAGEM LINFÁTICA DE REABILITAÇÃO",
                desc: "Técnica manual que estimula o sistema linfático a eliminar o excesso de líquido cirúrgico.",
                benefit: "Reduz o edema, previne seromas e acelera a visibilidade do resultado.",
                phase: "A partir do 2º ao 4º dia pós-cirurgia, com liberação médica.",
                icon: <Droplets className="w-12 h-12" strokeWidth={1} />
              },
              {
                title: "TAPING PÓS-OPERATÓRIO",
                desc: "Aplicação de fitas funcionais sobre a região operada para suporte e drenagem localizada.",
                benefit: "Reduz tensão sobre a cicatriz, melhora a drenagem local e alivia dores imediatas.",
                phase: "Conforme protocolo do cirurgião — geralmente a partir da 1ª semana.",
                icon: <Activity className="w-12 h-12" strokeWidth={1} />
              },
              {
                title: "VENTOSATERAPIA PARA LIBERAÇÃO",
                desc: "Técnica de sucção controlada que mobiliza o tecido subcutâneo e quebra aderências iniciais.",
                benefit: "Previne e trata fibroses, melhora a textura da pele e libera o tecido endurecido.",
                phase: "Indicada a partir da 3ª semana, mediante avaliação da fase cicatricial.",
                icon: <Zap className="w-12 h-12" strokeWidth={1} />
              },
              {
                title: "MASSAGEM TERAPÊUTICA PÓS-CIRÚRGICA",
                desc: "Manipulação suave e direcionada do tecido para melhorar mobilidade e reduzir tensões.",
                benefit: "Alivia dores musculares compensatórias, melhora postura e acelera o conforto geral.",
                phase: "Adaptada a cada fase — da mais suave nas primeiras semanas à mais profunda.",
                icon: <Heart className="w-12 h-12" strokeWidth={1} />
              }
            ].map((service, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-3xl border border-brand-100 shadow-sm h-full flex flex-col hover:shadow-xl transition-shadow duration-500">
                  <div className="text-brand-400 mb-6">{service.icon}</div>
                  <h3 className="text-sm font-bold text-brand-900 tracking-widest uppercase mb-4">{service.title}</h3>
                  <p className="text-sm text-brand-900/80 mb-4 font-medium italic">"{service.desc}"</p>
                  <div className="w-full h-px bg-brand-100 mb-4" />
                  <div className="space-y-4 flex-grow">
                    <div>
                      <span className="text-[10px] font-bold text-brand-400 uppercase tracking-tighter block mb-1">Para que serve:</span>
                      <p className="text-xs text-brand-900/70 leading-relaxed">{service.benefit}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-brand-400 uppercase tracking-tighter block mb-1">Quando começa:</span>
                      <p className="text-xs text-brand-900/70 leading-relaxed">{service.phase}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <p className="text-center text-sm text-brand-900/50 max-w-2xl mx-auto italic">
              Todos os atendimentos são precedidos de uma avaliação técnica da fase pós-cirúrgica. Não aplicamos nenhuma técnica sem entender exatamente em qual momento da sua recuperação você está.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 5. DIFERENCIAL TÉCNICO */}
      <section className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-800 mb-8 leading-tight">
                Pós-operatório não é massagem comum. <br className="hidden md:block" />
                <span className="text-brand-500 italic">E o resultado da sua cirurgia depende dessa diferença.</span>
              </h2>
              <div className="space-y-6 text-lg text-brand-900/70 leading-relaxed">
                <p>
                  Uma cirurgia plástica é um investimento financeiro, físico e emocional significativo. O pós-operatório não é um detalhe — é a etapa que determina se o resultado que o cirurgião criou vai se consolidar do jeito que você imaginou.
                </p>
                <p>
                  A Bhruna Estética atua exclusivamente com protocolos técnicos desenvolvidos para tecido pós-cirúrgico: pressão adaptada, sequências de drenagem específicas para cada tipo de procedimento, e leitura constante de como o seu corpo está respondendo.
                </p>
                <p className="font-bold text-brand-800">
                  Não é sobre relaxar. É sobre proteger o que você conquistou — com a precisão que a situação exige e o cuidado que você merece.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} className="relative">
              <div className="absolute -inset-10 bg-brand-100/50 rounded-full blur-[100px] -z-10" />
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-2xl bg-brand-200 overflow-hidden">
                    <img src="/drenagem.jpeg" alt="Técnica de drenagem" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-2xl bg-brand-100 overflow-hidden">
                    <img src="/taping.jpeg" alt="Aplicação de taping" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="aspect-square rounded-2xl bg-brand-300 overflow-hidden">
                    <img src="/ventosa.png" alt="Ventosaterapia" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[3/4] rounded-2xl bg-brand-200 overflow-hidden">
                    <img src="/bhruna.jpg" alt="Bhruna Azevedo" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. PROVA SOCIAL E SEGURANÇA */}
      <section className="bg-brand-900 py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-4xl md:text-5xl font-serif text-white font-light">+300</span>
            <span className="text-xs font-bold text-brand-300 uppercase tracking-widest">sessões pós-cirúrgicas</span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-4xl md:text-5xl font-serif text-white font-light">BH e RMBH</span>
            <span className="text-xs font-bold text-brand-300 uppercase tracking-widest">atendimento ágil</span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex gap-1 mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-brand-300 text-brand-300" />)}
            </div>
            <span className="text-xs font-bold text-brand-300 uppercase tracking-widest">5★ no Google</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif text-brand-800">Depoimentos de quem confiou</h2>
              <p className="text-brand-900/50 mt-2">Privacidade respeitada e resultados reais.</p>
            </FadeIn>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                name: "M.S.",
                proc: "Pós-lipoaspiração",
                text: "A Bhruna foi meu anjo no pós-lipo. Não conseguia nem pensar em entrar no carro para ir à clínica. Ela trouxe tudo, a drenagem dela é super técnica, nada de dor. Vi meu corpo desinchar a cada sessão.",
                stars: 5,
                bairro: "Savassi"
              },
              {
                name: "L.C.",
                proc: "Abdominoplastia",
                text: "Fiquei com muito medo das fibroses, mas o protocolo que ela usou foi perfeito. O Taping deu um alívio imediato na tensão da cicatriz. Recomendo para todas as minhas amigas que vão operar.",
                stars: 5,
                bairro: "Buritis"
              }
            ].map((dep, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-brand-50 p-8 rounded-3xl border border-brand-100 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-brand-200 flex items-center justify-center text-brand-800 font-serif font-bold text-xl">
                      {dep.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-brand-800">{dep.name} — <span className="text-sm font-normal text-brand-500">{dep.proc}</span></div>
                      <div className="text-xs text-brand-900/40 uppercase tracking-widest">{dep.bairro}, BH</div>
                    </div>
                  </div>
                  <p className="text-brand-900/70 leading-relaxed italic mb-6 flex-grow">"{dep.text}"</p>
                  <div className="flex gap-1">
                    {[...Array(dep.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn>
            <div className="flex items-center justify-center gap-3 p-4 bg-brand-50/50 rounded-2xl text-xs text-brand-900/40 text-center">
              <ShieldCheck className="w-5 h-5 opacity-50 flex-shrink-0" />
              <span>Todos os procedimentos realizados com liberação médica e em acordo com as orientações do seu cirurgião.</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. PASSO A PASSO DO ATENDIMENTO */}
      <section className="py-24 px-4 bg-brand-50/50 border-y border-brand-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl font-serif text-brand-800 mb-6">Como funciona o atendimento</h2>
              <p className="text-brand-900/60 font-light italic">Do agendamento ao resultado — você não precisa se preocupar com nada além de descansar.</p>
            </FadeIn>
          </div>

          <div className="space-y-12 relative">
            {/* Vertical Line for Mobile/Desktop */}
            <div className="absolute left-[23px] top-6 bottom-6 w-px border-l border-dashed border-brand-300 -z-10" />
            
            {[
              {
                title: "Agendamento e Triagem",
                desc: "Você agenda pelo WhatsApp",
                info: "Informamos os serviços disponíveis para sua fase pós-cirúrgica e confirmamos o horário que melhor funciona para você.",
                icon: <Calendar className="w-5 h-5" />
              },
              {
                title: "Chegada e Montagem",
                desc: "A terapeuta chega com tudo",
                info: "Maca, materiais esterilizados, EPIs e insumos específicos para pós-operatório. Você não prepara absolutamente nada.",
                icon: <Package className="w-5 h-5" />
              },
              {
                title: "Avaliação Técnica Inicial",
                desc: "Avaliamos antes de começar",
                info: "Verificamos sua fase pós-cirúrgica, as orientações do cirurgião e o estado atual do tecido para definir exatamente qual protocolo aplicar naquele dia.",
                icon: <ClipboardCheck className="w-5 h-5" />
              },
              {
                title: "Atendimento Especializado",
                desc: "Cada técnica aplicada com precisão",
                info: "Drenagem, Taping, Ventosa ou Massagem Terapêutica — ou a combinação certa para o seu momento. Você fica deitada, confortável, no seu espaço.",
                icon: <HandIcon className="w-5 h-5" />
              },
              {
                title: "Orientações e Próxima Sessão",
                desc: "Você sai sabendo o que fazer",
                info: "Orientações para as próximas horas, cuidados com a cinta e agendamento da próxima sessão — tudo alinhado para que sua recuperação avance sem interrupções.",
                icon: <Clock className="w-5 h-5" />
              }
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 0.1} className="flex gap-8 items-start">
                <div className="w-12 h-12 rounded-full bg-white border border-brand-200 flex items-center justify-center text-brand-500 shadow-sm flex-shrink-0 relative z-10">
                  {step.icon}
                </div>
                <div className="pt-2">
                  <span className="text-[10px] font-bold text-brand-400 uppercase tracking-widest block mb-1">Etapa {i+1}</span>
                  <h3 className="text-xl font-bold text-brand-800 mb-1">{step.desc}</h3>
                  <p className="text-sm font-serif text-brand-500 mb-3">{step.title}</p>
                  <p className="text-brand-900/60 leading-relaxed text-sm max-w-xl">{step.info}</p>
                </div>
              </FadeIn>
            ))}
          </div>
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
            <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Sua recuperação começa agora. <br /> <span className="text-brand-300 italic font-light">E começa em casa.</span></h2>
            <p className="text-xl text-brand-200/70 mb-12 max-w-2xl mx-auto">
              Atendemos BH e RMBH com agilidade. Fale agora com a Bhruna Estética e garanta seu horário.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a 
                href={POS_OP_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click_pos_final')}
                className="inline-flex items-center justify-center w-full md:w-auto px-12 py-6 text-2xl font-bold text-white bg-[#25D366] rounded-full hover:bg-[#128C7E] transition-all shadow-2xl animate-pulse-slow"
              >
                <WhatsAppIcon className="w-8 h-8 mr-4" />
                Agendar Minha Primeira Sessão
              </a>
              <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-brand-300 uppercase tracking-widest opacity-60">
                <span className="flex items-center gap-2 underline decoration-brand-400/30 underline-offset-4">Resposta rápida</span>
                <span className="flex items-center gap-2 underline decoration-brand-400/30 underline-offset-4">Sem deslocamento</span>
                <span className="flex items-center gap-2 underline decoration-brand-400/30 underline-offset-4">Materiais inclusos</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp href={POS_OP_WHATSAPP_LINK} />
    </div>
  );
};

// Internal icon component for Hand to avoid missing lucide icon name issues
const HandIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
    <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
    <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
  </svg>
);

export default PosOperatorioPage;
