import React, { useState } from 'react';

const Hero = () => {
  const [number, setNumber] = useState(null);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true);
    setTimeout(() => {
      setNumber(Math.floor(Math.random() * 20) + 1);
      setIsRolling(false);
    }, 800);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Luz roxa de fundo do Figma */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#9747ff15_0%,_transparent_60%)] pointer-events-none" />

      <div className="z-10">
        <h2 className="text-purple-400 tracking-[0.4em] uppercase text-sm mb-2">Hi, I am</h2>
        <h1 className="text-6xl md:text-8xl font-black text-white mb-4">CAROLINA PEREIRA</h1>
        <p className="text-gray-400 text-xl mb-10">
          Data Analyst & Developer | <span className="text-purple-500 font-bold">Level 4</span>
        </p>

        {/* Botões do Figma */}
        <div className="flex gap-4 justify-center mb-20">
          <button className="bg-[#9747ff] px-8 py-3 rounded-lg font-bold shadow-[0_0_20px_rgba(151,71,255,0.4)] hover:scale-105 transition-all">
            VIEW INVENTORY
          </button>
          <button className="border border-gray-600 px-8 py-3 rounded-lg font-bold hover:bg-white/5 transition-all text-gray-300">
            QUEST LOG
          </button>
        </div>

        {/* D20 Interativo */}
        <div onClick={rollDice} className="relative cursor-pointer group inline-block">
          <div className={`w-32 h-32 text-purple-500/60 transition-all 
            ${isRolling ? 'animate-bounce' : 'animate-[spin_20s_linear_infinite] group-hover:text-purple-400'}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z" />
              <path d="M12 22V12M12 12L22 8.5M12 12L2 8.5M12 12L12 2" />
            </svg>
          </div>
          {number && !isRolling && (
            <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white animate-pulse">
              {number}
            </div>
          )}
          <p className="mt-4 text-[10px] text-purple-500/40 uppercase tracking-widest font-mono">
            {isRolling ? "Rolling..." : "Click to roll initiative"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;