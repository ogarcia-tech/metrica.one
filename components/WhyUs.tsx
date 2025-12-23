import React from 'react';
import { Target, Bot, BarChart4, PieChart } from 'lucide-react';

const reasons = [
  {
    icon: <Target className="text-brand-cyan" size={32} />,
    title: "Ingeniería de Margen",
    desc: "No solo hacemos marketing, creamos sistemas. Dejamos de lado la vanidad para centrarnos en la arquitectura financiera de tu crecimiento."
  },
  {
    icon: <Bot className="text-brand-orange" size={32} />,
    title: "IA + Automatización",
    desc: "Usamos tecnología para que el LTV crezca y el CAC se estabilice. Escalabilidad sin aumentar la plantilla humana innecesariamente."
  },
  {
    icon: <BarChart4 className="text-brand-white" size={32} />,
    title: "Datos Reales",
    desc: "Optimizamos cada acción con datos de rentabilidad neta, no con suposiciones. Si no se puede medir en euros, no nos interesa."
  },
  {
    icon: <PieChart className="text-brand-cyan" size={32} />,
    title: "Foco en el Margen",
    desc: "Nos enfocamos en lo que te queda en el bolsillo, no en lo que facturas brutamente. Tu salud financiera es nuestra prioridad."
  }
];

const WhyUs: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-brand-black border-y border-brand-border">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left: Headline & Manifesto */}
        <div className="w-full lg:w-1/3 space-y-8">
          <div className="inline-block border border-brand-orange/30 bg-brand-orange/5 px-3 py-1 rounded text-brand-orange text-xs font-mono tracking-widest uppercase mb-2">
            Ventaja Táctica
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-white leading-tight hover-glow-brand cursor-default transition-all">
            ¿Por qué elegir <br/>
            <span className="text-brand-cyan">el camino difícil?</span>
          </h2>
          <p className="text-brand-white/60 text-lg">
            Porque el camino fácil (quemar dinero en ads sin sistema) ya no funciona. Elegirnos es elegir la <span className="text-brand-orange font-bold">verdad dolorosa</span> sobre la <span className="text-brand-cyan font-bold">mentira cómoda</span>.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-orange to-brand-cyan"></div>
        </div>

        {/* Right: Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, idx) => (
            <div key={idx} className="group bg-brand-charcoal border border-brand-border p-8 hover:border-brand-orange transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_0_20px_rgba(255,95,0,0.1)]">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-brand-black rounded border border-brand-border group-hover:border-brand-white/20 transition-colors">
                  {reason.icon}
                </div>
                <span className="text-brand-white/10 font-black text-4xl font-mono select-none">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold text-brand-white mb-3 group-hover:text-brand-orange transition-colors">
                {reason.title}
              </h3>
              <p className="text-brand-white/60 text-sm leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;