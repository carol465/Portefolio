import React from 'react';
import ButtonGradient from './ButtonGradient'; 

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-x-hidden px-4 py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero_fundo.webp')" }}
    >
      <h3 className="w-full max-w-xs md:max-w-none opacity-80 font-bebas text-2xl md:text-6xl text-center text-white uppercase mb-2 drop-shadow-[0px_4px_0px_#9747ff]">
        HI, I AM
      </h3>

      <h1 className="w-full max-w-[95vw] md:max-w-4xl font-bebas text-4xl md:text-7xl lg:text-8xl text-center text-white leading-tight mb-4 uppercase drop-shadow-[0px_4px_0px_#9747ff] break-words px-2">
        Carolina Pereira
      </h1>

    <img 
      src="/images/developer.svg" 
      alt="developer_level_4" 
      className="mx-auto h-auto w-full max-w-[90%] md:max-w-[300px] -mt-3 md:-mt-5 mb-8"    
    />

      <p className="font-gentium max-w-4xl opacity-80 text-lg text-[22px] text-center text-[#fffbfb] leading-relaxed mb-12">
        Aspiring Data Analyst & Frontend Developer transitioning from Textile Engineering. Skilled
        in Python and Front-end technologies, transforming complex data into accessible, user-friendly
        digital experiences.
      </p>


      <div className="flex flex-wrap justify-center gap-8 mb-16 mt-[-20px]">
        <ButtonGradient onClick={() => console.log("Quest clicado")}>
          view quest
        </ButtonGradient>
        
        <ButtonGradient onClick={() => console.log("Journey clicado")}>
          view Journey
        </ButtonGradient>
      </div>

      <div className="w-32 h-32 md:w-[150px] md:h-[150px] text-[#A192FF] animate-pulse mt-[-40px] animate-roll-down cursor-pointer">
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