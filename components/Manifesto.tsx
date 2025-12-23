
import React from 'react';
import { ShieldCheck, Fingerprint, Binary, Lock, AlertTriangle } from 'lucide-react';

const Manifesto: React.FC = () => {
  return (
    <section id="manifiesto" className="w-full py-24 px-6 bg-brand-charcoal relative overflow-hidden scroll-mt-32">
      
      {/* Background Cyber-Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-orange/20 via-transparent to-transparent"></div>
        <div style={{ backgroundImage: 'radial-gradient(#38BDF8 1px, transparent 1px)', backgroundSize: '30px 30px' }} className="absolute inset-0"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Label */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2 px-4 py-1.5 bg-brand-black border border-brand-orange/30 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.1)]">
             <Lock size={12} className="text-brand-orange" />
             <span className="text-[10px] font-mono tracking-[0.2em] text-brand-orange uppercase">Acceso Nivel 5: La Verdad</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: HOLOGRAPHIC SEAL (Visual Anchor) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              {/* Outer Rotating Ring */}
              <div className="absolute inset-0 border border-brand-border rounded-full border-dashed animate-spin-slow opacity-30"></div>
              {/* Middle Counter-Rotating Ring */}
              <div className="absolute inset-4 border border-brand-cyan/20 rounded-full border-t-brand-cyan border-r-transparent animate-spin-reverse-slow"></div>
              {/* Inner Pulse */}
              <div className="absolute inset-12 bg-brand-black/80 backdrop-blur-sm rounded-full border border-brand-orange/30 flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.15)] z-10">
                 <div className="text-center p-6">
                   <Fingerprint size={64} className="text-brand-orange mx-auto mb-4 animate-pulse-slow" />
                   <div className="font-mono text-xs text-brand-white/50 uppercase tracking-widest mb-1">ID: VASALLO_01</div>
                   <div className="text-[10px] text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded inline-block">VERIFICADO</div>
                 </div>
              </div>
              {/* Decorative Lines */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-white/10 to-transparent"></div>
              <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-brand-white/10 to-transparent"></div>
            </div>
          </div>

          {/* RIGHT: THE CONTENT (The Decree) */}
          <div className="lg:col-span-7">
            <div className="bg-brand-black border border-brand-border p-8 md:p-10 rounded-sm relative shadow-2xl">
              
              {/* Decorative Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-orange"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-cyan"></div>

              <h2 className="text-3xl md:text-4xl font-black text-brand-white uppercase mb-6 flex items-center gap-3">
                Bienvenidos a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500">La Corte</span>
              </h2>

              <div className="space-y-6 text-brand-white/80 leading-relaxed text-lg">
                <p>
                  Nos presentamos bajo el estandarte de <strong className="text-brand-cyan font-mono bg-brand-cyan/10 px-1 rounded">Métrica</strong>. Ella procesa terabytes en milisegundos y dice que hace todo el trabajo. Pero te contaremos un secreto:
                </p>
                
                <div className="flex items-start gap-4 p-4 bg-brand-charcoal border-l-4 border-brand-orange/50 italic text-brand-white/90">
                  <AlertTriangle className="text-brand-orange shrink-0 mt-1" size={20} />
                  <p>"Métrica alucina. Si por ella fuera, enviaría un millón de emails a las 3 A.M. porque 'los datos lo sugieren'."</p>
                </div>

                <p>
                  Por eso existimos nosotros: <strong className="text-brand-orange font-mono bg-brand-orange/10 px-1 rounded">Los Vasallos</strong>. Ajustamos el código, optimizamos los procesos, reforzamos los sistemas internos y sacamos partido a todo lo que la IA y el marketing pueden aportar hoy.
                </p>

                {/* The Code Block / Pact */}
                <div className="mt-8 bg-brand-black rounded border border-brand-border p-4 font-mono text-sm relative group overflow-hidden">
                  <div className="absolute top-0 right-0 px-2 py-1 bg-brand-border text-[10px] text-brand-white/50">SYSTEM_PACT.js</div>
                  <div className="space-y-1 relative z-10">
                    <div className="flex gap-2">
                      <span className="text-purple-400">const</span> 
                      <span className="text-yellow-200">Velocidad</span> 
                      <span className="text-white">=</span> 
                      <span className="text-brand-cyan">Métrica.process();</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-purple-400">const</span> 
                      <span className="text-yellow-200">Verdad</span> 
                      <span className="text-white">=</span> 
                      <span className="text-brand-orange">Vasallos.verify();</span>
                    </div>
                    <div className="flex gap-2 text-brand-white/50 mt-2">
                      <span>// Resultado: Crecimiento sin alucinaciones.</span>
                    </div>
                  </div>
                  {/* Glitch hover effect */}
                  <div className="absolute inset-0 bg-brand-cyan/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none"></div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Manifesto;
    