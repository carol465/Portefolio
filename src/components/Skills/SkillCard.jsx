import React from 'react';
import SkillSquare from './SkillSquare';
import SkillPill from './SkillPill';

const SkillCard = ({ icon, level }) => {
  return (
    <div className="relative w-[419px] h-[317px] group">
      
      {/* 1. Moldura SVG de Fundo (A estrutura grande do Card) */}
      <svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        viewBox="0 0 419 317"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 1H399C409.493 1 418 9.50659 418 20V297C418 307.493 409.493 316 399 316H20C9.50659 316 1 307.493 1 297V20C1 9.50659 9.50659 1 20 1Z"
          stroke="url(#paint0_linear_skill_card)"
          strokeOpacity="0.58"
          strokeWidth="2"
        />
        <defs>
          <linearGradient 
            id="paint0_linear_skill_card" 
            x1="8.99" y1="0" x2="419" y2="317" 
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A192FF" />
            <stop offset="0.25" stopColor="#FFD392" />
            <stop offset="0.53" stopColor="#6FEEFF" />
            <stop offset="0.78" stopColor="#92FFB0" />
            <stop offset="1" stopColor="#FF929F" />
          </linearGradient>
        </defs>
      </svg>

      {/* 2. Container dos Ícones (Quadrado + Pílula Oval) */}
      <div className="absolute top-[30px] left-[30px] z-20 flex flex-col items-center">
        {/* O Quadrado de vidro com o ícone */}
        <SkillSquare icon={icon} />
        
        {/* A Pílula (Pill) com o texto do nível/experiência */}
        {/* mt-[-22px] faz com que ela suba e sobreponha a borda inferior do quadrado */}
        <div className="mt-[-22px] z-30">
          <SkillPill text={level} />
        </div>
      </div>

    </div>
  );
};

export default SkillCard;