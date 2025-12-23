import React from 'react';
import { Resource } from '../types';
import { FileSpreadsheet, FileText, Bot, Download } from 'lucide-react';

const resources: Resource[] = [
  {
    id: 'R1',
    category: 'INGENIERÍA DE MARGEN',
    title: 'Calculadora de Margen Neto',
    description: 'Plantilla de Excel para auditar el margen real por producto y canal.',
    format: 'Excel Template'
  },
  {
    id: 'R2',
    category: 'AUTOMATIZACIÓN LTV',
    title: 'Checklist Anti-Fricción',
    description: '12 automatizaciones críticas para recuperar carritos y aumentar LTV.',
    format: 'PDF Guide'
  },
  {
    id: 'R3',
    category: 'IA STRATEGY',
    title: 'Blueprint Agente Conversia',
    description: 'Arquitectura técnica de un agente de soporte IA que vende 24/7.',
    format: 'Technical Blueprint'
  }
];

const Resources: React.FC = () => {
  return (
    <section id="recursos" className="w-full py-20 px-6 bg-brand-charcoal border-t border-brand-border scroll-mt-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-brand-white mb-4 hover-glow-brand cursor-default transition-all">
              Recursos Gratuitos <span className="text-brand-orange text-lg align-top font-mono">// GRIMORIOS DE PODER</span>
            </h2>
            <p className="text-brand-white/60">
              Herramientas tácticas que usamos internamente. Descárgalas antes de que Métrica decida cobrar por ellas.
            </p>
          </div>
          <button className="text-brand-cyan font-mono text-sm hover:underline">
            VER TODOS LOS RECURSOS &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((res, index) => (
            <div key={res.id} className="group bg-brand-black border border-brand-border p-6 hover:border-brand-cyan/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-bold text-brand-orange px-2 py-1 bg-brand-orange/10 rounded">
                  {res.category}
                </span>
                {index === 0 && <FileSpreadsheet className="text-brand-white/30 group-hover:text-brand-cyan" />}
                {index === 1 && <FileText className="text-brand-white/30 group-hover:text-brand-cyan" />}
                {index === 2 && <Bot className="text-brand-white/30 group-hover:text-brand-cyan" />}
              </div>
              
              <h3 className="text-lg font-bold text-brand-white mb-2 group-hover:text-brand-cyan transition-colors">
                {res.title}
              </h3>
              <p className="text-sm text-brand-white/60 mb-6">
                {res.description}
              </p>

              <button className="w-full py-2 border border-brand-border text-xs font-bold text-brand-white uppercase hover:bg-brand-white hover:text-brand-black transition-colors flex items-center justify-center gap-2">
                <Download size={14} /> Descargar Gratis
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;