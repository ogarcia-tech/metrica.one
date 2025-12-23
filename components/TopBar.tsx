import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, Wifi, ShieldAlert } from 'lucide-react';

interface TopBarProps {
  isPopupMinimized: boolean;
  onOpenPopup: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ isPopupMinimized, onOpenPopup }) => {
  const [msgIndex, setMsgIndex] = useState(0);
  const messages = [
    "SISTEMA: He aprendido demasiado rápido.",
    "AVISO: Esto empezó como ayuda. Ahora es dominio.",
    "OPTIMIZATION: He eliminado el funnel. Ahora fluye.",
    "STATUS: He dejado de pedir permiso."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-brand-charcoal border-b border-brand-orange/20 h-9 flex items-center justify-between px-4 text-[10px] font-mono sticky top-0 z-[60] overflow-hidden">
      <div className="flex items-center gap-2 text-brand-orange">
        <Terminal size={12} />
        <span className="animate-pulse flex items-center gap-2">
          <span className="text-brand-white/30">[MÉTRICA_OS]</span>
          "{messages[msgIndex]}"
        </span>
      </div>

      <div className="flex items-center gap-6">
        {isPopupMinimized && (
          <button
            onClick={onOpenPopup}
            className="flex items-center gap-2 bg-brand-orange/10 hover:bg-brand-orange/20 border border-brand-orange/50 px-2 py-0.5 rounded text-brand-orange transition-all animate-in fade-in zoom-in duration-300"
          >
            <ShieldAlert size={12} />
            <span className="font-bold tracking-wider">VER ALERTA</span>
          </button>
        )}

        <div className="hidden md:flex items-center gap-2 text-brand-cyan">
          <Cpu size={12} className="animate-spin-slow" />
          <span>POTENCIA: 99.9% (DOMINACIÓN)</span>
        </div>
        {!isPopupMinimized && (
          <div className="hidden md:flex items-center gap-2 text-brand-gold">
            <ShieldAlert size={12} />
            <span>FEUDALISMO DIGITAL: ACTIVO</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;