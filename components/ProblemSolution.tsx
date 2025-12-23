
import React from 'react';
import { XCircle, CheckCircle, Eye, Cpu, BrainCircuit, Rocket } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const features = [
    {
      icon: <Eye size={20} />,
      label: 'Enfoque',
      old: 'Visibilidad y Likes (Vanidad)',
      new: 'Margen Neto y Cashflow'
    },
    {
      icon: <Cpu size={20} />,
      label: 'Ejecución',
      old: 'Manual, lenta y con errores',
      new: 'Automatización + Supervisión Humana'
    },
    {
      icon: <BrainCircuit size={20} />,
      label: 'Decisiones',
      old: 'Intuición y Excel mensual',
      new: 'Data Real-Time Unificada'
    },
    {
      icon: <Rocket size={20} />,
      label: 'Escalado',
      old: 'Lineal (Más personal = Más coste)',
      new: 'Exponencial (Sistemas 3.0)'
    }
  ];

  return (
    <section className="w-full py-24 px-6 bg-brand-black relative overflow-hidden border-b border-brand-border/30">
      {/* Background Grids - Softer */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header - Narrative Link */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block px-3 py-1 rounded bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-mono text-xs tracking-widest uppercase mb-2">
            Metrica.one: Definición
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-white uppercase tracking-tighter hover-glow-brand cursor-default transition-all">
            Un sistema.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500">
              No una herramienta.
            </span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-brand-white/80 text-lg leading-relaxed">
              Métrica.one detecta señales reales de decisión: <br />
              <span className="text-brand-cyan font-mono font-bold">intención · urgencia · presupuesto · comportamiento</span>
            </p>
            <div className="bg-brand-charcoal/50 p-6 rounded border border-brand-orange/30 relative overflow-hidden group">
              <div className="relative z-10 text-brand-white/70 italic text-sm md:text-base">
                Cuando una decisión emerge, no se publica, no se subasta, no se comparte. <br />
                <span className="text-brand-orange font-bold text-2xl mt-2 block not-italic">Se asigna.</span>
              </div>
              <div className="absolute inset-0 bg-brand-orange/5 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            </div>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 relative">

          {/* VS Badge (Absolute Center) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center">
            <div className="w-16 h-16 bg-brand-black border-2 border-brand-orange rounded-full flex items-center justify-center shadow-soft-glow z-30">
              <span className="font-black text-brand-orange italic text-xl">VS</span>
            </div>
          </div>

          {/* LEFT: THE OLD WAY (Error/Legacy Aesthetic) */}
          <div className="relative group">
            <div className="absolute inset-0 bg-red-500/5 rounded-xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="bg-brand-charcoal border border-brand-border p-8 rounded-xl relative h-full shadow-card hover:border-red-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-8 opacity-70">
                <XCircle className="text-red-400" size={24} />
                <h3 className="text-lg font-bold text-brand-white tracking-widest uppercase">Agencia Tradicional</h3>
              </div>

              <div className="space-y-8">
                {features.map((item, idx) => (
                  <div key={idx} className="relative pl-4 border-l-2 border-brand-border group-hover:border-red-500/20 transition-colors">
                    <div className="flex items-center gap-2 text-xs text-brand-white/40 font-mono uppercase mb-1">
                      {item.icon} {item.label}
                    </div>
                    <p className="text-brand-white/50 line-through decoration-red-400/50 decoration-2 font-medium">
                      {item.old}
                    </p>
                  </div>
                ))}
              </div>

              {/* Error overlay effect */}
              <div className="absolute top-4 right-4 text-[10px] font-mono text-red-400 border border-red-400/30 px-2 py-1 rounded opacity-50">
                STATUS: ERROR
              </div>
            </div>
          </div>

          {/* RIGHT: THE METRICA WAY (Cyberpunk/Neon Aesthetic) */}
          <div className="relative group">
            <div className="absolute inset-0 bg-brand-cyan/5 rounded-xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="bg-brand-charcoal border border-brand-cyan/30 p-8 rounded-xl relative h-full shadow-soft-glow hover:border-brand-cyan transition-colors duration-500">
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle className="text-brand-cyan animate-pulse" size={24} />
                <h3 className="text-lg font-bold text-brand-white tracking-widest uppercase">
                  Ecosistema <span className="text-brand-cyan">Métrica.One</span>
                </h3>
              </div>

              <div className="space-y-8">
                {features.map((item, idx) => (
                  <div key={idx} className="relative pl-4 border-l-2 border-brand-cyan">
                    <div className="flex items-center gap-2 text-brand-cyan font-mono uppercase mb-1 text-xs">
                      {item.icon} {item.label}
                    </div>
                    <p className="text-brand-white font-bold text-lg">
                      {item.new}
                    </p>
                  </div>
                ))}
              </div>

              {/* Success overlay effect */}
              <div className="absolute top-4 right-4 text-[10px] font-mono text-brand-cyan border border-brand-cyan/50 px-2 py-1 rounded bg-brand-cyan/5">
                STATUS: OPTIMIZED
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
