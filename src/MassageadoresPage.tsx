import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Hand, 
  Droplets, 
  Cpu, 
  PackageCheck,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { 
  WHATSAPP_LINK, 
  trackEvent,
  WhatsAppIcon,
  FloatingWhatsApp
} from './components/Shared';
import './MassageadoresPage.css';

const FadeIn = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, { threshold: 0.1 });
    
    const current = domRef.current;
    if (current) observer.observe(current);
    return () => { if (current) observer.unobserve(current); };
  }, []);

  return (
    <div
      className={`m-fade-in ${isVisible ? 'visible' : ''} ${className}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

const KitItem = ({ name, description, key }: { name: string, description: string, key?: React.Key }) => (
  <div className="m-item-cell" key={key}>
    <div className="m-item-image">
      {/* Placeholder icon representing the 3D tool */}
      <Cpu className="w-12 h-12 text-brand-200" strokeWidth={1} />
    </div>
    <div className="m-item-name">{name}</div>
    <div className="m-item-desc">{description}</div>
  </div>
);

const KitCard = ({ 
  label, 
  title, 
  context, 
  items, 
  forWhom 
}: { 
  label: string, 
  title: string, 
  context: string, 
  items: { name: string, description: string }[],
  forWhom: string
}) => (
  <FadeIn className="m-kit-card">
    <div className="m-kit-header">
      <span className="m-label">{label}</span>
      <h3 className="m-display text-4xl">{title}</h3>
      <p className="m-body opacity-80">{context}</p>
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={() => trackEvent(`kit_click_${title.toLowerCase().replace(' ', '_')}`)}
        className="m-btn m-btn-primary w-fit"
      >
        Escolher meu Kit
      </a>
    </div>

    <div className="m-kit-grid">
      {items.map((item, index) => (
        <KitItem key={index} name={item.name} description={item.description} />
      ))}
    </div>

    <div className="m-kit-footer">
      <span className="m-label text-[10px]">Para quem é:</span>
      <p className="m-italic text-sm opacity-70">{forWhom}</p>
    </div>
  </FadeIn>
);

const MassageadoresPage = () => {
  return (
    <div className="massageadores-page">
      {/* SECTION 1 - NAVIGATION */}
      <nav className="m-nav">
        <div className="m-container m-nav-content">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Logo" className="h-10 w-10 rounded-full" />
            <span className="font-serif font-bold text-lg hidden sm:block">Bhruna Azevedo</span>
          </Link>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="m-btn m-btn-primary py-3 px-6 text-[10px]"
          >
            Falar no WhatsApp
          </a>
        </div>
      </nav>

      {/* SECTION 2 - HERO */}
      <section className="m-hero">
        <div className="m-container">
          <div className="m-hero-content">
            <FadeIn>
              <h1 className="m-display">
                Ferramentas para massagem que trabalham por você — não contra as suas mãos.
              </h1>
              <p className="m-body-large mb-10 max-w-2xl">
                Kits de massageadores anatômicos feitos em impressão 3D. Projetados para aplicar pressão no lugar certo, com menos esforço e mais resultado.
              </p>
              <button 
                onClick={() => document.getElementById('kits')?.scrollIntoView({ behavior: 'smooth' })}
                className="m-btn m-btn-primary"
              >
                Escolher meu Kit
              </button>
            </FadeIn>

            <FadeIn className="m-hero-features">
              <div className="m-hero-feature">
                <span className="m-hero-feature-label">Tecnologia</span>
                <span className="m-body text-sm">Impressão 3D Industrial</span>
              </div>
              <div className="m-hero-feature">
                <span className="m-hero-feature-label">Público</span>
                <span className="m-body text-sm">Profissionais e Uso Pessoal</span>
              </div>
              <div className="m-hero-feature">
                <span className="m-hero-feature-label">Solução</span>
                <span className="m-body text-sm">Kit Completo com Suporte</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 3 - PROPOSTA DE VALOR */}
      <section className="m-section">
        <div className="m-container">
          <FadeIn className="m-value-prop">
            <div className="space-y-6">
              <p className="m-body-large">
                São massageadores manuais com design geométrico desenvolvido para encaixar firme na mão e direcionar pressão nos pontos certos — seja você um massoterapeuta que faz dez atendimentos por dia ou alguém que quer aliviar a tensão das costas depois do trabalho.
              </p>
              <p className="m-body-large">
                Fabricados em impressão 3D industrial, as peças têm acabamento robusto, textura natural que ajuda na aderência e resistência para uso intenso. Nada de promessas exageradas: são ferramentas bem pensadas para uma função específica, e fazem esse trabalho com consistência.
              </p>
              <p className="m-body-large">
                Vendemos apenas em kits fechados porque cada peça foi escolhida para complementar a outra. Você recebe uma solução completa, não um produto avulso sem contexto.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 4 - OS KITS */}
      <section id="kits" className="m-section m-section-alt">
        <div className="m-container">
          <FadeIn className="mb-16">
            <span className="m-label">O Catálogo</span>
            <h2 className="m-display text-5xl">Os Kits</h2>
          </FadeIn>

          <div className="space-y-12">
            <KitCard 
              label="Para profissionais"
              title="Kit Profissional"
              context="Quem trabalha com massagem sabe o quanto os dedos e o punho acumulam esforço ao longo do dia. Este kit foi pensado para distribuir esse esforço — você aplica a mesma pressão com menos desgaste nas articulações."
              items={[
                { 
                  name: "Ferramenta Multifuncional", 
                  description: "Borda e ponteira para raspagem, deslizamento e ativação de pontos de gatilho." 
                },
                { 
                  name: "Rolo Texturizado", 
                  description: "Trabalho em grandes grupos musculares sem sobrecarga dos polegares." 
                },
                { 
                  name: "Suporte Organizador", 
                  description: "Mantém as peças acessíveis e higienizadas entre os atendimentos." 
                }
              ]}
              forWhom="Massoterapeutas, fisioterapeutas, terapeutas holísticos e profissionais que atendem com frequência diária e sentem o cansaço acumulando nas mãos."
            />

            <KitCard 
              label="Para uso pessoal"
              title="Kit Bem-Estar"
              context="Feito para quem quer resolver a tensão sem depender de ninguém e sem precisar aprender técnica complicada. As peças têm geometria intuitiva — você encosta, aplica pressão e sente onde está o nó."
              items={[
                { 
                  name: "Ferramenta de Ponteira", 
                  description: "Pressão localizada no pescoço, ombros e pontos específicos das costas." 
                },
                { 
                  name: "Rolo Compacto", 
                  description: "Para panturrilha, planta do pé e região lombar." 
                },
                { 
                  name: "Estojo Prático", 
                  description: "Para guardar e carregar as peças com segurança." 
                }
              ]}
              forWhom="Pessoas com rotina de home office, quem sente tensão cervical com frequência, praticantes de atividade física que querem recuperação muscular simples no dia a dia."
            />
          </div>
        </div>
      </section>

      {/* SECTION 5 - CARACTERÍSTICAS DO PRODUTO */}
      <section className="m-section">
        <div className="m-container">
          <FadeIn>
            <span className="m-label">Detalhes Técnicos</span>
            <h2 className="m-display text-5xl">Características do Produto</h2>
          </FadeIn>

          <FadeIn className="m-features-list">
            {[
              { 
                icon: ShieldCheck, 
                title: "Material leve e resistente", 
                desc: "Suporta pressão contínua sem deformar, dura muito mais do que parece pelo peso." 
              },
              { 
                icon: Hand, 
                title: "Encaixe firme na mão", 
                desc: "O design geométrico impede que a peça escorregue mesmo com óleo ou creme." 
              },
              { 
                icon: Droplets, 
                title: "Fácil de higienizar", 
                desc: "Lava com água e sabão, sem segredo — importante para quem usa entre atendimentos." 
              },
              { 
                icon: Cpu, 
                title: "Textura da impressão 3D", 
                desc: "O acabamento natural cria aderência real na pele, sem ser abrasivo." 
              },
              { 
                icon: PackageCheck, 
                title: "Fabricado sob encomenda", 
                desc: "Produção em lotes controlados: cada peça passa por inspeção antes de sair." 
              }
            ].map((feature, index) => (
              <div key={index} className="m-feature-item">
                <feature.icon className="m-feature-icon w-6 h-6" strokeWidth={1.5} />
                <div>
                  <h4 className="font-bold mb-1">{feature.title}</h4>
                  <p className="m-body text-sm text-muted">{feature.desc}</p>
                </div>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* SECTION 6 - CTA FINAL */}
      <section className="m-section m-final-cta">
        <div className="m-container">
          <FadeIn>
            <h2 className="m-display">Escolha o seu kit.</h2>
            <p className="m-body mb-10 opacity-70">
              Pronta entrega disponível para os dois modelos. Produção em lote — o estoque é limitado ao ciclo atual.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="m-btn m-btn-primary px-10"
              >
                Falar no WhatsApp e Escolher meu Kit
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="m-btn m-btn-outline border-white text-white hover:bg-white hover:text-brand-900 px-10"
              >
                Ver Disponibilidade e Prazo
              </a>
            </div>
            <p className="text-xs opacity-50">
              Dúvida sobre qual kit faz mais sentido para o seu caso? É só perguntar — respondemos rápido.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 7 - RODAPÉ */}
      <footer className="m-footer">
        <div className="m-container m-footer-content">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Logo" className="h-8 w-8 rounded-full grayscale opacity-50" />
            <span className="font-serif font-bold">Bhruna Azevedo</span>
          </div>
          <p className="text-[10px] opacity-60">
            Peças exclusivas AnatomyForm. Política de troca: 7 dias para defeitos de fabricação.
          </p>
          <div className="flex gap-4">
            <span className="text-[10px]">&copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
};

export default MassageadoresPage;
