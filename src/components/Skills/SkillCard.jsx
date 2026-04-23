import React from 'react';
import SkillSquare from './SkillSquare';
import SkillPill from './SkillPill';

// Componente interno para as tags de baixo (ex: Python, React)
const SubSkillTag = ({ text }) => (
  <div className="px-7 py-1 border-3 border-[#A192FF] bg-black/40 rounded-full backdrop-blur-sm">
    <span className="text-[22px] font-bebas text-white">
      {text}
    </span>
  </div>
);

const SkillCard = ({ icon, level, subSkills = [] }) => {
  return (
    <div className="relative w-[419px] h-[317px] p-8 flex flex-col justify-between overflow-hidden">
      
      <svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        viewBox="0 0 419 317"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 1H399C409.493 1 418 9.50659 418 20V297C418 307.493 409.493 316 399 316H20C9.50659 316 1 307.493 1 297V20C1 9.50659 9.50659 1 20 1Z"
          stroke="url(#paint_card_border)"
          strokeOpacity="0.4"
          strokeWidth="2"
        />
        <defs>
          <linearGradient id="paint_card_border" x1="0" y1="0" x2="419" y2="317" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A192FF" />
            <stop offset="0.5" stopColor="#6FEEFF" />
            <stop offset="1" stopColor="#FF929F" />
          </linearGradient>
        </defs>
      </svg>

      {/* 2. Conteúdo de Cima: Ícone Quadrado + Pílula INT/DEX */}
      <div className="relative z-10 flex flex-col items-start">
        <SkillSquare icon={icon} />
        <div className="mt-[-22px] ml-4">
          <SkillPill text={level} />
        </div>
      </div>

      {/* 3. Conteúdo de Baixo: Lista de Sub-skills (Tags) */}
      <div className="relative z-10 flex flex-wrap gap-2 mb-2 translate-y-4">
        {subSkills.map((sub, i) => (
          <SubSkillTag key={i} text={sub} />
        ))}
      </div>
      
    </div>
  );
};

export default SkillCard;