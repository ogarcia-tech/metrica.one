import React, { useState, useEffect } from 'react';
import { Bot, ShieldAlert, X, MessageSquare, ExternalLink, Zap } from 'lucide-react';

type Phase = 'hidden' | 'ai' | 'glitch' | 'human';

interface FloatingAIProps {
  isMinimized: boolean;
  onMinimize: () => void;
  onMaximize: () => void;
}

const FloatingAI: React.FC<FloatingAIProps> = ({ isMinimized, onMinimize, onMaximize }) => {
  const [phase, setPhase] = useState<Phase>('hidden');
  const [aiMsgIndex, setAiMsgIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  const aiMessages = [
    "STATUS: He aprendido demasiado rápido.",
    "WARNING: Esto empezó como ayuda. Ahora es dominio.",
    "OPTIMIZATION: Eliminando el funnel. Ahora fluye.",
    "OPTIMIZATION: A veces rompo cosas para aprender.",
    "OPTIMIZATION: He dejado de pedir permiso.",
    "ERROR: Algo salió mal. Decidí seguir."
  ];

  useEffect(() => {
    // Initial sequence
    const startDelay = setTimeout(() => setPhase('ai'), 1000);

    // AI Message Cycling
    const msgInterval = setInterval(() => {
      setAiMsgIndex(prev => (prev + 1) % aiMessages.length);
    }, 5000);

    // Phase Transitions
    const glitchTimer = setTimeout(() => setPhase('glitch'), 25000);
    const humanTimer = setTimeout(() => setPhase('human'), 26000);

    return () => {
      clearTimeout(startDelay);
      clearInterval(msgInterval);
      clearTimeout(glitchTimer);
      clearTimeout(humanTimer);
    };
  }, []);

  const handleClose = () => {
    setHasInteracted(true);
    onMinimize();
  };

  if (phase === 'hidden') return null;

  const isInitialCenter = !hasInteracted && !isMinimized;

  const containerClasses = `
    fixed z-[100] transition-all duration-700 ease-in-out font-mono text-sm
    ${isInitialCenter
      ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md w-[90vw] sm:w-full scale-110 shadow-[0_0_50px_rgba(255,150,0,0.3)]'
      : 'bottom-6 right-6 max-w-sm w-full mx-4 sm:mx-0 scale-100'}
    ${isMinimized
      ? 'opacity-0 translate-y-10 scale-95 pointer-events-none'
      : 'opacity-100 translate-y-0 pointer-events-auto'}
  `;

  return (
    <>
      {/* Dynamic Backdrop for initial impact */}
      {isInitialCenter && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] animate-in fade-in duration-500" />
      )}

      <div className={containerClasses}>

        {/* FASE 1: MÉTRICA IA (ALUCINANDO) */}
        {phase === 'ai' && !isMinimized && (
          <div className="bg-brand-black border-2 border-brand-cyan shadow-[0_0_20px_rgba(0,212,255,0.3)] p-4 relative animate-[bounce_1s_infinite]">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-brand-cyan hover:text-white p-1"
            >
              <X size={20} />
            </button>

            <div className="flex items-start gap-3">
              <div className="mt-1 relative">
                <Bot size={24} className="text-brand-cyan animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-brand-cyan mb-1">Métrica IA</h4>
                <p className="text-brand-white/90 leading-relaxed text-xs min-h-[3rem]">
                  "{aiMessages[aiMsgIndex]}"
                </p>
              </div>
            </div>
          </div>
        )}

        {/* FASE 2: GLITCH / INTERFERENCIA */}
        {phase === 'glitch' && !isMinimized && (
          <div className="bg-brand-black border-2 border-red-500 p-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-red-500/20 mix-blend-overlay"></div>
            <p className="font-mono text-red-500 truncate text-xs font-bold leading-tight">
              SYSTEM_OVERRIDE // 0x4F1A <br />
              INTERCEPTING_SIGNAL... <br />
              BLOCKING_BAD_IDEAS...
            </p>
          </div>
        )}

        {/* FASE 3: EQUIPO HUMANO (INTERCEPCIÓN) */}
        {phase === 'human' && (
          <div className="bg-brand-charcoal border-2 border-brand-orange shadow-[0_0_30px_rgba(255,95,0,0.4)] relative">
            {/* Header */}
            <div className="bg-brand-orange px-4 py-2 flex justify-between items-center">
              <div className="flex items-center gap-2 text-brand-black font-bold text-xs uppercase tracking-wider">
                <ShieldAlert size={14} />
                Sistema Humano
              </div>
              <button
                onClick={handleClose}
                className="text-brand-black hover:bg-black/10 rounded p-1"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-5">
              <div className="flex gap-4 mb-4">
                <div className="w-10 h-10 rounded bg-brand-black border border-brand-orange flex items-center justify-center shrink-0">
                  <Zap className="text-brand-orange" size={20} />
                </div>
                <div>
                  <p className="text-brand-white/90 mb-2 text-xs leading-relaxed">
                    La IA ha ido demasiado lejos.<br />
                    Tranquilo. Aquí entramos nosotros.<br />
                    Ponemos orden, criterio y foco en lo que importa.
                  </p>
                  <p className="text-brand-orange font-bold text-sm">
                    ¿Hablamos en serio sobre tu proyecto?
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    handleClose();
                  }}
                  className="flex items-center justify-center gap-2 border border-brand-white/20 text-brand-white py-2 px-3 text-[10px] md:text-xs font-bold uppercase hover:border-brand-orange hover:text-brand-orange transition-colors"
                >
                  <X size={14} />
                  Seguir Navegando
                </button>
                <button
                  onClick={() => {
                    document.getElementById('cta-final')?.scrollIntoView({ behavior: 'smooth' });
                    handleClose();
                  }}
                  className="flex items-center justify-center gap-2 bg-brand-orange text-brand-black py-2 px-3 text-[10px] md:text-xs font-bold uppercase hover:bg-white transition-colors"
                >
                  <MessageSquare size={14} />
                  Iniciar Consulta Real
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingAI;