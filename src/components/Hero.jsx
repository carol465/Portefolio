import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#121212] overflow-hidden px-6 py-20"
    style={{ backgroundImage: "url('/images/hero_fundo.webp')" }}
    >

      {/* 1. Texto: "hi, i am" */}
      <p className="opacity-80 text-xl md:text-3xl tracking-[0.3em] text-center text-white uppercase mb-2">
        hi, i am
      </p>

      {/* 2. Nome: "Carolina Pereira" */}
      <h1 className="w-full max-w-4xl text-5xl md:text-8xl lg:text-9xl text-center text-white font-bold leading-tight mb-4 uppercase">
        Carolina Pereira
      </h1>

      {/* 3. Subtítulo: "Developer | Level 4" */}
      <p className="text-2xl md:text-[50px] text-center text-white mb-8 font-light">
        Developer | <span className="text-[#A192FF] font-medium">Level 4</span>
      </p>

      {/* 4. Descrição: O texto longo */}
      <p className="max-w-4xl opacity-80 text-lg md:text-2xl text-center text-[#fffbfb] leading-relaxed mb-12">
        Aspiring Data Analyst & Frontend Developer transitioning from Textile Engineering. Skilled
        in Python and Front-end technologies, transforming complex data into accessible, user-friendly
        digital experiences.
      </p>

      {/* 5. Botões: Substituímos as imagens por botões reais em código */}
      <div className="flex flex-wrap justify-center gap-8 mb-16">
        <button className="min-w-[203px] h-[72px] bg-white/5 border-2 border-[#A192FF]/30 rounded-[20px] text-2xl text-white uppercase hover:bg-[#A192FF]/20 transition-all cursor-pointer backdrop-blur-sm">
          view quest
        </button>
        <button className="min-w-[203px] h-[72px] bg-white/5 border-2 border-[#A192FF]/30 rounded-[20px] text-2xl text-white uppercase hover:bg-[#A192FF]/20 transition-all cursor-pointer backdrop-blur-sm">
          view Journey
        </button>
      </div>

      {/* 6. O D20 (SVG): Centralizado e animado */}
      <div className="w-32 h-32 md:w-[164px] md:h-[164px] text-[#A192FF] animate-pulse">
        <svg
          viewBox="0 0 164 164"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M145.721 118.729V45.2709L82 8.54169L18.2792 45.2709V118.729L82 155.458L145.721 118.729Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M124.059 110.871L145.721 45.2708L82 36.1825L18.2792 45.2708L39.9408 110.871L82 155.458L124.059 110.871Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M124.059 110.871H39.9408M124.059 110.871L82 36.1825M124.059 110.871L145.721 118.729M39.9408 110.871L82 36.1825M39.9408 110.871L18.2792 118.729M82 36.1825V8.54169"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;