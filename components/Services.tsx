import React, { useState } from 'react';
import { Service } from '../types';
import { Rocket, Cpu, ShieldAlert, Check, Zap } from 'lucide-react';

const services: Service[] = [
  {
    id: '01',
    name: 'PROTOCOLO DE CAPTURA',
    subtitle: '(Antes: Escaly)',
    concept: 'Definición de decisiones entrantes.',
    humanTruth: 'El sistema filtra el ruido. Solo capturamos señales con intención de compra validada.',
    price: 'Acceso Nivel 1',
    description: 'Protocolo encargado de identificar y capturar decisiones en el mercado. No buscamos tráfico, buscamos transacciones esperando a ser asignadas. Este protocolo define qué tipo de leads tienen permiso para entrar en tu pipeline.',
    details: [
      'Filtrado de señales de baja calidad',
      'Captura de intención transaccional',
      'Validación de liquidez del prospecto'
    ],
    highlight: 'Solo entra lo que convierte'
  },
  {
    id: '02',
    name: 'PROTOCOLO DE ORQUESTACIÓN',
    subtitle: '(Antes: Suple)',
    concept: 'Validación y priorización lógica.',
    humanTruth: 'No todos los leads valen lo mismo. El sistema decide quién merece tu tiempo ahora mismo.',
    price: 'Acceso Nivel 2',
    description: 'El cerebro lógico que procesa las decisiones capturadas. Automatiza la cualificación, el enriquecimiento de datos y la priorización de oportunidades. El sistema decide si una oportunidad debe ser atendida por humanos o nutrida por la máquina.',
    details: [
      'Cualificación automática multicriterio',
      'Priorización por probabilidad de cierre',
      'Enrutamiento inteligente de decisiones'
    ],
    highlight: 'Orden absoluto en el caos'
  },
  {
    id: '03',
    name: 'PROTOCOLO DE INTERACCIÓN',
    subtitle: '(Antes: Conversia)',
    concept: 'Ejecución y cierre.',
    humanTruth: 'La interacción ocurre en el momento exacto. Sin latencia, sin fricción humana innecesaria.',
    price: 'Acceso Nivel 3',
    description: 'El brazo ejecutor. Agentes de IA que interactúan, resuelven dudas y cierran acuerdos preliminares o agendan reuniones definitivas para los operadores humanos. La interacción es instantánea, 24/7 y sin desviaciones del guion ganador.',
    details: [
      'Respuesta inmediata 24/7',
      'Ejecución de guiones de cierre',
      'Agendamiento directo en calendario'
    ],
    highlight: 'Ejecución perfecta, siempre.'
  }
];

const Services: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="servicios" className="w-full py-24 px-6 bg-brand-black relative scroll-mt-32">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-border to-transparent"></div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-brand-white mb-12 flex items-center gap-4 uppercase tracking-tighter hover-glow-brand cursor-default transition-all">
          <span className="text-brand-orange text-5xl">///</span> Protocolos Operativos
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={service.id} className={`group relative bg-brand-charcoal border border-brand-border p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,95,0,0.1)] ${expandedId === service.id ? 'border-brand-orange' : 'hover:border-brand-orange'}`}>

              {/* Header */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-4xl font-mono font-bold text-brand-border group-hover:text-brand-orange transition-colors duration-300 opacity-50">
                    {service.id}
                  </span>
                  {index === 0 && <Rocket className="text-brand-cyan" />}
                  {index === 1 && <Cpu className="text-brand-cyan" />}
                  {index === 2 && <ShieldAlert className="text-brand-cyan" />}
                </div>
                <h3 className="text-2xl font-bold text-brand-white">{service.name}</h3>
                <p className="text-brand-cyan font-mono text-sm mb-4">{service.subtitle}</p>
                <p className="text-brand-white/80 italic border-l-2 border-brand-cyan pl-3 py-1 mb-4">
                  "{service.concept}"
                </p>
              </div>

              {/* Human Truth */}
              <div className="bg-brand-black/50 p-4 border border-brand-border mb-6">
                <p className="text-xs text-brand-orange uppercase font-bold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></span>
                  La Verdad Humana:
                </p>
                <p className="text-sm text-brand-white/70">
                  {service.humanTruth}
                </p>
              </div>

              {/* EXPANDED CONTENT */}
              {expandedId === service.id && (service.description || service.details) && (
                <div className="mb-6 pt-4 border-t border-brand-border/50 animate-in slide-in-from-top-4 fade-in duration-300">
                  {service.description && (
                    <p className="text-sm text-brand-white/80 mb-4 leading-relaxed font-light">
                      {service.description}
                    </p>
                  )}

                  {service.details && (
                    <ul className="space-y-2 mb-4">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-brand-white/70">
                          <Check size={14} className="text-brand-orange mt-0.5 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {service.highlight && (
                    <div className="bg-brand-cyan/10 border border-brand-cyan/30 p-3 rounded flex items-center gap-3">
                      <Zap size={16} className="text-brand-cyan" />
                      <span className="text-xs font-bold text-brand-cyan uppercase tracking-wide">
                        {service.highlight}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Footer */}
              <div className="mt-auto pt-6 border-t border-brand-border group-hover:border-brand-orange/30 transition-colors">
                <div className="flex justify-between items-center">
                  <span className="text-brand-white font-mono font-bold">{service.price}</span>
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="text-brand-orange text-sm font-bold uppercase hover:underline flex items-center gap-1"
                  >
                    {expandedId === service.id ? 'Colapsar' : 'Desplegar'} {expandedId === service.id ? '↑' : '→'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;