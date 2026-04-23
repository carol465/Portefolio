// SkillPill.jsx
import React from 'react';

const SkillPill = ({ text }) => { // 1. Adicionamos a prop 'text'
  return (
    <div className="relative w-[70px] h-[45px] flex items-center justify-center">
      <svg
        width="70"
        height="45"
        viewBox="0 0 70 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <foreignObject x="0" y="0" width="70" height="45">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              backdropFilter: 'blur(10px)',
              width: '100%',
              height: '100%',
              borderRadius: '21.8px',
              backgroundColor: 'rgba(161, 146, 255, 0.1)'
            }}
          ></div>
        </foreignObject>

        <rect x="0.7" y="0.7" width="68.6" height="43.6" rx="21.8" fill="url(#pill_bg_gradient)" fillOpacity="0.6" />
        <rect x="0.7" y="0.7" width="68.6" height="43.6" rx="21.8" stroke="url(#pill_border_gradient)" strokeWidth="1.4" />

        <defs>
          <linearGradient id="pill_bg_gradient" x1="-3.96716" y1="-7.70777e-07" x2="49.0174" y2="73.3872" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A192FF" />
            <stop offset="0.985577" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="pill_border_gradient" x1="-3.09836" y1="2.59944e-07" x2="24.8873" y2="36.137" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFAC92" /><stop offset="0.5" stopColor="#A192FF" /><stop offset="0.75" stopColor="#6FEEFF" /><stop offset="1" stopColor="#FF929F" />
          </linearGradient>
        </defs>
      </svg>

      {/* 2. Texto que aparecerá dentro da oval */}
      <span className="relative z-10 text-[30px] text-white uppercase tracking-tighter font-bebas">
        {text}
      </span>
    </div>
  );
};

export default SkillPill;