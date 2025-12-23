import React from 'react';
import { Compass, Cpu, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Activación de Protocolo',
    icon: <Compass size={32} className="text-brand-orange" />,
    desc: 'No todo operador accede al sistema.',
    points: [
      'Condiciones de acceso.',
      'Tipo de decisiones asignadas.',
      'Nivel de exclusividad y método económico.'
    ]
  },
  {
    id: '02',
    title: 'Validación y Cálculo',
    icon: <Cpu size={32} className="text-brand-cyan" />,
    desc: 'La intención se valida y el valor de cada decisión se calcula con precisión.',
    points: [
      'Validación de presupuesto.',
      'Cálculo de probabilidad.',
      'Score de ejecución.'
    ]
  },
  {
    id: '03',
    title: 'Asignación y Ejecución',
    icon: <TrendingUp size={32} className="text-brand-white" />,
    desc: 'La decisión se asigna y el resultado se ejecuta sin fricción.',
    points: [
      'Asignación exclusiva.',
      'Ejecución automática.',
      'Garantía de resultado.'
    ]
  }
];

const Workflow: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-brand-charcoal relative overflow-hidden border-t border-brand-border">
      {/* Background Tech Lines - Softer opacity */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, #F97316 25%, #F97316 26%, transparent 27%, transparent 74%, #38BDF8 75%, #38BDF8 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #F97316 25%, #F97316 26%, transparent 27%, transparent 74%, #38BDF8 75%, #38BDF8 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-brand-white mb-4 hover-glow-brand cursor-default transition-all">
            PROTOCOLOS DE CONTROL
          </h2>
          <p className="text-brand-orange font-mono text-sm tracking-widest uppercase bg-brand-orange/5 inline-block px-3 py-1 rounded">
            Sin competencia. Sin ruido. Sin exposición pública.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-brand-orange via-brand-cyan to-brand-white opacity-20 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">

              {/* Icon Node */}
              <div className="w-24 h-24 bg-brand-black border-2 border-brand-border rounded-full flex items-center justify-center mb-8 shadow-lg group-hover:border-brand-orange group-hover:shadow-soft-glow transition-all duration-300 z-10">
                {step.icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-charcoal border border-brand-border rounded-full flex items-center justify-center text-xs font-mono font-bold text-brand-white">
                  {step.id}
                </div>
              </div>

              {/* Content Card */}
              <div className="bg-brand-black border border-brand-border p-8 rounded-xl w-full hover:shadow-card hover:border-brand-orange/50 transition-all duration-300 min-h-[320px] flex flex-col">
                <h3 className="text-xl font-bold text-brand-white mb-4 group-hover:text-brand-orange transition-colors">
                  {step.title}
                </h3>
                <p className="text-brand-white/70 mb-6 text-sm leading-relaxed">
                  {step.desc}
                </p>
                <ul className="mt-auto space-y-3 text-left pl-4 border-l border-brand-border">
                  {step.points.map((point, i) => (
                    <li key={i} className="text-xs text-brand-white/60 font-mono flex items-start gap-2">
                      <ArrowRight size={12} className="mt-0.5 text-brand-cyan shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;