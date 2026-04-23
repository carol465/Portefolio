import React from 'react';

const ButtonGradient = ({ children, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="relative group min-w-[203px] h-[72px] flex items-center justify-center transition-all active:scale-95 cursor-pointer"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 203 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Fundo do botão com cor suave e desfoque */}
        <rect
          x="1"
          y="1"
          width="201"
          height="70"
          rx="19"
          className="fill-[#A192FF]/20 backdrop-blur-md group-hover:fill-[#A192FF]/30 transition-colors"
        />
        
        {/* A Borda com o Gradiente Colorido */}
        <rect
          x="1"
          y="1"
          width="201"
          height="70"
          rx="19"
          stroke="url(#paint_gradient)"
          strokeWidth="2"
          fill="none"
        />

        <defs>
          <linearGradient id="paint_gradient" x1="0" y1="0" x2="203" y2="72" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFAC92" />
            <stop offset="0.5" stopColor="#A192FF" />
            <stop offset="0.75" stopColor="#6FEEFF" />
            <stop offset="0.87" stopColor="#92FFB0" />
            <stop offset="1" stopColor="#FF929F" />
          </linearGradient>
        </defs>
      </svg>

      {/* Texto do botão */}
      <span className="font-bebas relative z-10 text-white uppercase text-3xl tracking-wider">
        {children}
      </span>
    </button>
  );
};

export default ButtonGradient;