
import React, { useState } from 'react';
import { TeamMember } from '../types';
import { ShieldAlert } from 'lucide-react';

const teamMembers: TeamMember[] = [
  // HUMANOS (4)
  {
    id: 1,
    kind: "human",
    role: "Supervisor Estratégico",
    title: "El Gran Estratega",
    name: "Vasallo Consultor",
    mount: "Búho Mecánico Gigante",
    power: "Visión de Retorno",
    imageStr: 'https://image.pollinations.ai/prompt/giant%20mechanical%20owl%20cyberpunk%20armor%20glowing%20orange%20eyes?nologo=true'
  },
  {
    id: 2,
    kind: "human",
    role: "Auditor de Campañas",
    title: "El Centinela de Proyectos",
    name: "Vasallo PM",
    mount: "Rinoceronte Acorazado",
    power: "Escudo Anti-Caos",
    imageStr: 'https://image.pollinations.ai/prompt/heavy%20armored%20cyberpunk%20rhinoceros%20mecha%20tank%20neon%20defense?nologo=true'
  },
  {
    id: 3,
    kind: "human",
    role: "Analista de Señales",
    title: "El Señor del SEO",
    name: "Vasallo SEO",
    mount: "Topo Gigante con gafas",
    power: "Dominio del CTR",
    imageStr: 'https://image.pollinations.ai/prompt/cyberpunk%20giant%20mole%20with%20tech%20goggles%20underground%20neon?nologo=true'
  },
  {
    id: 4,
    kind: "human",
    role: "Arquitecto de Protocolos",
    title: "El Inquisidor de Procesos",
    name: "Vasallo Auto",
    mount: "Guepardo Cibernético",
    power: "Precisión Operativa",
    imageStr: 'https://image.pollinations.ai/prompt/mechanical%20cheetah%20robot%20running%20neon%20cyberpunk?nologo=true'
  },
  // UNIDADES DEL SISTEMA (6)
  {
    id: 5,
    kind: "unit",
    role: "Unidad de Datos",
    title: "La Oráculo de los Datos",
    name: "UNIT-ORCL",
    mount: "Esfinge Digital",
    power: "Visión Predictiva",
    imageStr: 'https://image.pollinations.ai/prompt/mystical%20cyberpunk%20sphinx%20holographic%20data%20glowing%20blue%20neon?nologo=true'
  },
  {
    id: 6,
    kind: "unit",
    role: "Unidad de Infraestructura",
    title: "Arquitecto de la Torre",
    name: "UNIT-ARCH",
    mount: "Entidad de Núcleo",
    power: "Nada se rompe",
    imageStr: 'https://image.pollinations.ai/prompt/cyberpunk%20golem%20monster%20made%20of%20server%20racks%20and%20wires?nologo=true'
  },
  {
    id: 7,
    kind: "unit",
    role: "Unidad Narrativa",
    title: "El Bardo del Copywriting",
    name: "UNIT-NARR",
    mount: "Entidad Sonora",
    power: "Storytelling Persistente",
    imageStr: 'https://image.pollinations.ai/prompt/aggressive%20cyberpunk%20war%20boar%20playing%20a%20futuristic%20electric%20lute%20guitar%20neon%20dark?nologo=true&seed=42'
  },
  {
    id: 8,
    kind: "unit",
    role: "Unidad de Experiencia",
    title: "Hechicera de Visibilidad",
    name: "UNIT-VIS",
    mount: "Entidad Visual",
    power: "Atención Controlada",
    imageStr: 'https://image.pollinations.ai/prompt/three%20headed%20hydra%20cyberpunk%20neon%20dragon?nologo=true'
  },
  {
    id: 9,
    kind: "unit",
    role: "Unidad de Seguridad",
    title: "El Centinela",
    name: "UNIT-SNTL",
    mount: "Guardia de Núcleo",
    power: "Anomalías Detectadas",
    imageStr: "file:///Users/metricaweb/.gemini/antigravity/brain/c40f6596-12d0-4c8a-bad5-10b1937b7360/unit_sentinel_sentinela_1766168911060.png"
  },
  {
    id: 10,
    kind: "unit",
    role: "Unidad Cognitiva",
    title: "El Intérprete",
    name: "UNIT-INTP",
    mount: "Entidad Neural",
    power: "Decisiones sin Ruido",
    imageStr: "file:///Users/metricaweb/.gemini/antigravity/brain/c40f6596-12d0-4c8a-bad5-10b1937b7360/unit_interpreter_interprete_1766168928178.png"
  }
];

const MemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group relative h-[400px] overflow-hidden border border-brand-border bg-brand-charcoal rounded-lg shadow-card">
      {/* Type Label */}
      <div className={`absolute top-4 left-4 z-20 px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-widest uppercase border ${member.kind === 'human'
        ? 'bg-brand-orange/20 border-brand-orange text-brand-orange'
        : 'bg-brand-cyan/20 border-brand-cyan text-brand-cyan'
        }`}>
        {member.kind === 'human' ? 'HUMANO' : 'UNIDAD'}
      </div>

      {/* Image with Error Handling */}
      <div className="absolute inset-0 z-0 transition-all duration-500 group-hover:scale-105 bg-brand-charcoal">
        {!imgError ? (
          <img
            src={member.imageStr}
            alt={member.mount}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-brand-white/20 p-4 text-center">
            <ShieldAlert size={48} className="mb-2 opacity-50" />
            <span className="font-mono text-xs uppercase tracking-widest">Imagen Encriptada</span>
            <span className="text-[10px] text-brand-orange/50 mt-1">Error de Visualización</span>
          </div>
        )}

        {/* Overlays - Soft Dark Mode Friendly */}
        <div className="absolute inset-0 bg-brand-orange/10 mix-blend-multiply opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>
        {/* Slate gradient at bottom for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/80 to-transparent opacity-90 pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-brand-orange font-mono text-xs uppercase tracking-wider mb-1">{member.role}</p>
        <h3 className="text-2xl font-bold text-brand-white mb-2">{member.title}</h3>

        <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out border-t border-brand-orange/30 pt-4 mt-2">
          <p className="text-sm text-brand-white/80 mb-1"><span className="text-brand-cyan font-bold">Identidad:</span> {member.name}</p>
          <p className="text-sm text-brand-white/80 mb-1"><span className="text-brand-cyan font-bold">Montura:</span> {member.mount}</p>
          <p className="text-sm text-brand-white/80"><span className="text-brand-orange font-bold">Poder:</span> {member.power}</p>
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <section id="equipo" className="w-full py-20 px-6 bg-brand-charcoal border-t border-brand-border scroll-mt-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-brand-white uppercase tracking-widest mb-2 hover-glow-brand cursor-default transition-all">
            El Gremio
          </h2>
          <p className="text-brand-orange font-mono">
            // SUPERVISIÓN HUMANA OBLIGATORIA: Los humanos no deciden. Verifican, auditan y corrigen anomalías.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
