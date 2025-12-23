
import React from 'react';
import { Check, ShieldCheck, Ticket, ArrowRight, Zap, Lock } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="cta-final" className="w-full py-24 px-6 bg-brand-black relative overflow-hidden scroll-mt-32">
      
      {/* Background Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 rounded text-brand-orange text-xs font-mono uppercase tracking-widest mb-4">
             <Ticket size={14} /> Access Level 1
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-white uppercase tracking-tighter hover-glow-brand cursor-default transition-all mb-4">
            Inicia el <span className="text-brand-orange">Protocolo</span>
          </h2>
          <p className="text-brand-white/60 max-w-xl mx-auto">
            No contrates una agencia a ciegas. Compra primero el mapa, luego decide si quieres que conduzcamos nosotros.
          </p>
        </div>

        {/* THE TICKET CONTAINER */}
        <div className="flex flex-col lg:flex-row bg-brand-charcoal border border-brand-border rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] relative group">
          
          {/* Scanning Line Animation */}
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange/50 shadow-[0_0_15px_#F97316] animate-[scan_4s_linear_infinite] opacity-0 group-hover:opacity-100 z-30 pointer-events-none"></div>

          {/* LEFT: THE VALUE STACK (Visual) */}
          <div className="lg:w-3/5 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-brand-border relative">
             <div className="absolute top-0 left-0 bg-brand-orange text-brand-black font-bold text-[10px] px-3 py-1 uppercase tracking-widest rounded-br">
               High Value / Low Risk
             </div>

             <h3 className="text-2xl font-bold text-brand-white mb-6 flex items-center gap-3">
               <span className="w-8 h-8 bg-brand-charcoal border border-brand-orange rounded flex items-center justify-center text-brand-orange">1</span>
               Sesión de Arquitectura
             </h3>

             <ul className="space-y-4 mb-8">
               <li className="flex items-start gap-3">
                 <div className="mt-1 bg-brand-cyan/10 p-1 rounded">
                   <Check size={14} className="text-brand-cyan" />
                 </div>
                 <div>
                   <p className="text-brand-white font-bold text-sm">Auditoría en vivo (90 min)</p>
                   <p className="text-brand-white/50 text-xs">Analizamos tus métricas reales y fugas de margen.</p>
                 </div>
               </li>
               <li className="flex items-start gap-3">
                 <div className="mt-1 bg-brand-cyan/10 p-1 rounded">
                   <Check size={14} className="text-brand-cyan" />
                 </div>
                 <div>
                   <p className="text-brand-white font-bold text-sm">Plan de Acción "Ingeniería de Margen"</p>
                   <p className="text-brand-white/50 text-xs">Te llevas el PDF con la estrategia exacta, nos contrates o no.</p>
                 </div>
               </li>
               <li className="flex items-start gap-3">
                 <div className="mt-1 bg-brand-orange/10 p-1 rounded">
                   <Zap size={14} className="text-brand-orange" />
                 </div>
                 <div>
                   <p className="text-brand-orange font-bold text-sm">BONUS: Grimorios de Poder</p>
                   <p className="text-brand-white/50 text-xs">Acceso vitalicio a nuestras plantillas internas de cálculo de LTV.</p>
                 </div>
               </li>
             </ul>

             <div className="flex items-center gap-2 text-brand-white/30 text-xs font-mono">
               <ShieldCheck size={14} />
               <span>Garantía de Calidad: Si no aportamos valor, te devolvemos el 100%.</span>
             </div>
          </div>

          {/* RIGHT: THE CHECKOUT (Action) */}
          <div className="lg:w-2/5 p-8 md:p-12 bg-brand-black/50 flex flex-col justify-center relative">
             {/* Decorative circles */}
             <div className="absolute top-4 right-4 flex gap-1">
               <div className="w-2 h-2 rounded-full bg-brand-border"></div>
               <div className="w-2 h-2 rounded-full bg-brand-border"></div>
             </div>

             <div className="text-center mb-6">
               <p className="text-brand-white/40 text-sm line-through decoration-brand-orange/50 mb-1">Valor Real: 1.200€</p>
               <div className="flex items-center justify-center gap-2">
                 <span className="text-5xl font-black text-brand-white tracking-tighter">350€</span>
                 <span className="text-xs text-brand-white/40 font-mono text-left leading-none">+ IVA<br/>PAGO ÚNICO</span>
               </div>
             </div>

             <button className="w-full group relative overflow-hidden rounded bg-brand-orange text-brand-black font-bold text-lg uppercase tracking-widest py-4 hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] active:scale-95">
               <span className="relative z-10 flex items-center justify-center gap-2">
                 Reservar Slot <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </span>
               {/* Shine effect */}
               <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:animate-[shine_0.75s_ease-in-out]"></div>
             </button>

             <div className="mt-6 flex justify-between items-center text-[10px] text-brand-white/30 font-mono uppercase">
               <div className="flex items-center gap-1">
                 <Lock size={10} /> Pago Seguro Stripe
               </div>
               <div className="flex items-center gap-1 text-brand-orange/70 animate-pulse">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>
                 3 Slots disponibles esta semana
               </div>
             </div>
          </div>

        </div>
        
        <p className="mt-8 text-center text-xs text-brand-white/30 font-mono max-w-2xl mx-auto">
          // SYSTEM_NOTE: Al hacer clic, serás redirigido a nuestro calendario. Métrica analizará tu perfil. Si no eres apto (ej. Dropshipping sin marca), cancelaremos la cita y reembolsaremos el dinero.
        </p>

      </div>
    </section>
  );
};

export default CTA;
