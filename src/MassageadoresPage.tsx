import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Hand, 
  Droplets, 
  Cpu, 
  PackageCheck,
} from 'lucide-react';
import { 
  WHATSAPP_LINK, 
  trackEvent,
  FadeIn,
  FloatingWhatsApp 
} from './components/Shared';
import './MassageadoresPage.css';

const KitItem = ({ name, description, image, key }: { name: string, description: string, image?: string, key?: React.Key }) => (
  <div className="m-item-cell" key={key}>
    <div className="m-item-image">
      {image ? (
        <img src={image} alt={name} className="w-full h-full object-contain transition-transform hover:scale-110 duration-500" />
      ) : (
        <Cpu className="w-12 h-12 text-brand-300/30" strokeWidth={1} />
      )}
    </div>
    <div className="m-item-name font-serif text-brand-800">{name}</div>
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
  items: { name: string, description: string, image?: string }[],
  forWhom: string
}) => (
  <FadeIn className="m-kit-card">
    <div className="m-kit-header">
      <span className="m-label">{label}</span>
      <h3 className="m-display text-4xl md:text-5xl font-serif text-brand-800">{title}</h3>
      <p className="m-body-large text-brand-900/70">{context}</p>
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={() => trackEvent(`kit_click_${title.toLowerCase().replace(' ', '_')}`)}
        className="m-btn m-btn-primary w-fit mt-4"
      >
        Escolher meu Kit
      </a>
    </div>

    <div className="m-kit-grid">
      {items.map((item, index) => (
        <KitItem key={index} name={item.name} description={item.description} image={item.image} />
      ))}
    </div>

    <div className="m-kit-footer">
      <span className="m-label">Para quem é:</span>
      <p className="m-italic text-lg text-brand-900/60">{forWhom}</p>
    </div>
  </FadeIn>
);

const MassageadoresPage = () => {
  return (
    <div className="massageadores-page selection:bg-brand-200 selection:text-brand-900">
      {/* SECTION 1 - NAVIGATION */}
      <nav className="m-nav px-4">
        <div className="m-container flex justify-between items-center w-full">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-0.5 rounded-full border border-brand-200 bg-white transition-transform group-hover:scale-105">
              <img src="/logo.jpg" alt="Logo" className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover" />
            </div>
            <span className="font-serif font-bold text-lg text-brand-900 hidden sm:block">Bhruna Azevedo</span>
          </Link>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="m-btn m-btn-primary py-3 px-6 text-sm"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      {/* SECTION 2 - HERO */}
      <section className="m-hero px-4">
        <div className="m-container text-center lg:text-left">
          <FadeIn>
            <h1 className="m-display text-5xl md:text-7xl lg:text-8xl font-serif text-brand-900 mb-8 tracking-tight">
              Ferramentas que trabalham <span className="m-italic text-brand-600">por você</span>.
            </h1>
            <p className="m-body-large text-brand-900/60 mb-12 max-w-2xl mx-auto lg:mx-0">
              Kits de massageadores anatômicos feitos em impressão 3D. Projetados para aplicar pressão no lugar certo, com menos esforço e mais resultado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById('kits')?.scrollIntoView({ behavior: 'smooth' })}
                className="m-btn m-btn-primary shadow-xl"
              >
                Ver Catálogo
              </button>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="m-btn m-btn-outline"
              >
                Tire suas dúvidas
              </a>
            </div>
          </FadeIn>

          <FadeIn className="m-hero-features">
            <div className="m-hero-feature">
              <span className="m-hero-feature-label">Tecnologia</span>
              <span className="m-body font-medium text-brand-900/80">Impressão 3D Industrial</span>
            </div>
            <div className="m-hero-feature">
              <span className="m-hero-feature-label">Ergonomia</span>
              <span className="m-body font-medium text-brand-900/80">Proteção das Articulações</span>
            </div>
            <div className="m-hero-feature">
              <span className="m-hero-feature-label">Praticidade</span>
              <span className="m-body font-medium text-brand-900/80">Kits Prontos para Uso</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3 - PROPOSTA DE VALOR */}
      <section className="m-section px-4">
        <div className="m-container">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <div className="space-y-8">
              <p className="m-body-large text-brand-900/80 text-xl md:text-2xl italic font-serif">
                "São instrumentos de precisão desenvolvidos para encaixar na mão e direcionar pressão onde o corpo realmente precisa."
              </p>
              <p className="m-body text-brand-900/60 text-lg leading-relaxed">
                Fabricados em impressão 3D, as peças têm acabamento robusto e resistente, textura natural que ajuda na aderência e resistência para uso intenso. São ferramentas bem pensadas para uma função específica e fazem esse trabalho com consistência.
              </p>
              <p className="m-body text-brand-900/60 text-lg leading-relaxed">
                Vendemos kits fechados custo-benefício e também peças avulsas. A ideia é você receber uma solução completa nos kits pensados para funcionar em conjunto.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 4 - OS KITS */}
      <section id="kits" className="m-section m-section-alt px-4">
        <div className="m-container">
          <FadeIn className="mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-serif text-brand-800">Conheça Nossos Kits</h2>
          </FadeIn>

          <div className="space-y-12">
            <KitCard 
              label="Alta Performance"
              title="Kit Profissional"
              context="Para massoterapeutas que buscam elevar o nível de sua técnica. Este kit foi pensado para distribuir o esforço e promover mais relaxamento nos seus clientes."
              items={[
                { 
                  name: "Gua Sha", 
                  description: "Borda e ponteira para raspagem e ativação de pontos de gatilho.",
                  image: "/m4_guacha.jpeg"
                },
                { 
                  name: "Dual Roller", 
                  description: "Pressão bilateral para alívio rápido de tensões musculares.",
                  image: "/m5_roller.jpeg"
                },
                { 
                  name: "Trigger Point Pro", 
                  description: "Liberação miofascial profunda em pontos de difícil acesso.",
                  image: "/m7_trigger.jpeg"
                },
                { 
                  name: "Ativador Lâmina", 
                  description: "Promove liberação de forma facilitada.",
                  image: "/m3.jpeg"
                }
              ]}
              forWhom="Massoterapeutas, fisioterapeutas e profissionais que atendem diariamente."
            />

            <KitCard 
              label="Bem-Estar em Casa"
              title="Kit Bem-Estar"
              context="Feito para quem quer resolver a tensão sem depender de ninguém. As peças têm geometria intuitiva: você encosta, aplica pressão e sente o alívio."
              items={[
                { 
                  name: "Ponteira Cervical", 
                  description: "Pressão localizada no pescoço e pontos específicos das costas.",
                  image: "/m1.jpeg"
                },
                { 
                  name: "Ponteira Perfurada", 
                  description: "Facilidade de pegada para diversidade de ativações.",
                  image: "/m2.jpeg"
                },
                
                { 
                  name: "Rolo Texturizado", 
                  description: "Trabalho em grandes grupos musculares sem sobrecarga.",
                  image: "/m6_roller2.jpeg"
                },
              ]}
              forWhom="Pessoas em home office e praticantes de atividade física."
            />
          </div>
        </div>
      </section>

      {/* SECTION 5 - CARACTERÍSTICAS DO PRODUTO */}
      <section className="m-section px-4 bg-white">
        <div className="m-container">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-800">Diferenciais Técnicos</h2>
          </FadeIn>

          <FadeIn className="m-features-list">
            {[
              { 
                icon: ShieldCheck, 
                title: "Material leve e resistente", 
                desc: "Suporta pressão contínua sem deformar, durabilidade garantida." 
              },
              { 
                icon: Hand, 
                title: "Encaixe firme na mão", 
                desc: "Design geométrico que impede que a peça escorregue com óleo." 
              },
              { 
                icon: Droplets, 
                title: "Fácil de higienizar", 
                desc: "Pode ser lavado com água e sabão neutro entre os atendimentos." 
              },
              { 
                icon: ShieldCheck, 
                title: "Resistente a Álcool 70%", 
                desc: "Material suporta higienização constante sem degradar ou ressecar." 
              },
              { 
                icon: Cpu, 
                title: "Textura de Aderência", 
                desc: "Acabamento que cria aderência real na pele, sem ser abrasivo." 
              },
              { 
                icon: PackageCheck, 
                title: "Sob Encomenda", 
                desc: "Lotes controlados com inspeção individual de cada peça." 
              }
            ].map((feature, index) => (
              <div key={index} className="m-feature-item">
                <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="text-brand-600 w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-brand-800 mb-2">{feature.title}</h4>
                  <p className="m-body text-brand-900/60">{feature.desc}</p>
                </div>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* SECTION 6 - CTA FINAL */}
      <section className="m-final-cta">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-serif mb-8">Escolha o seu kit.</h2>
          <p className="m-body-large mb-12 opacity-80 max-w-2xl mx-auto">
            Atendemos encomendas personalizadas e temos kits a pronta entrega para início imediato.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="m-btn m-btn-primary bg-brand-200 text-brand-900 hover:bg-white"
            >
              Falar no WhatsApp
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="m-btn m-btn-outline border-white text-white hover:bg-white hover:text-brand-900"
            >
              Ver Disponibilidade
            </a>
          </div>
        </FadeIn>
      </section>

      {/* SECTION 7 - RODAPÉ */}
      <footer className="m-footer px-4">
        <div className="m-container m-footer-content">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Logo" className="h-8 w-8 rounded-full opacity-70" />
            <span className="font-serif font-bold text-brand-900/70">Bhruna Azevedo</span>
          </div>
          <p className="text-xs opacity-60">
            Política de troca: 7 dias para defeitos de fabricação.
          </p>
          <div className="text-xs opacity-60">
            &copy; {new Date().getFullYear()}
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
};

export default MassageadoresPage;