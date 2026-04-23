import React from 'react';

const SkillSquare = ({ icon }) => {
  return (
    <div className="relative w-[120px] h-[120px] flex items-center justify-center">
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 z-0 pointer-events-none" 
      >

        <foreignObject x="0" y="0" width="120" height="120">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              backdropFilter: 'blur(10px)',
              width: '100%',
              height: '100%',
              borderRadius: '19.3px',
              backgroundColor: 'rgba(161, 146, 255, 0.1)' 
            }}
          ></div>
        </foreignObject>

        <rect
          x="0.7"
          y="0.7"
          width="118.6"
          height="118.6"
          rx="19.3"
          fill="url(#square_bg_gradient)"
          fillOpacity="0.6"
        />

        <rect
          x="0.7"
          y="0.7"
          width="118.6"
          height="118.6"
          rx="19.3"
          stroke="url(#square_border_gradient)"
          strokeWidth="1.4"
        />

        <defs>
          <linearGradient
            id="square_bg_gradient"
            x1="-6.80085"
            y1="-2.05541e-06"
            x2="141.057"
            y2="131.653"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A192FF" />
            <stop offset="0.985577" stopColor="white" stopOpacity="0" />
          </linearGradient>

          <linearGradient
            id="square_border_gradient"
            x1="-5.31148"
            y1="6.93185e-07"
            x2="70.4512"
            y2="62.8908"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFAC92" />
            <stop offset="0.5" stopColor="#A192FF" />
            <stop offset="0.75" stopColor="#6FEEFF" />
            <stop offset="0.875" stopColor="#92FFB0" />
            <stop offset="1" stopColor="#FF929F" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 flex items-center justify-center w-full h-full p-6 text-white overflow-hidden -mt-3">
        {icon}
      </div>
    </div>
  );
};

export default SkillSquare;